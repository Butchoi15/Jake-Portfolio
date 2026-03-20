from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = r"D:\AG Workspace\Portfolio Builder\mobile-test"

PAGES = [
    ("home", "http://localhost:3000/"),
    ("about", "http://localhost:3000/about"),
    ("skills", "http://localhost:3000/skills"),
    ("case-studies", "http://localhost:3000/case-studies"),
    ("testimonials", "http://localhost:3000/testimonials"),
    ("contact", "http://localhost:3000/contact"),
]

VIEWPORTS = [
    ("iphone-se-375", 375, 812),
    ("iphone14-390", 390, 844),
    ("ipad-768", 768, 1024),
]

def capture_all():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        for vp_name, width, height in VIEWPORTS:
            for page_name, url in PAGES:
                context = browser.new_context(
                    viewport={"width": width, "height": height},
                    device_scale_factor=2,
                )
                page = context.new_page()

                try:
                    page.goto(url, wait_until="networkidle", timeout=15000)
                    page.wait_for_timeout(1000)
                except Exception as e:
                    print(f"WARN: {url} load issue: {e}")

                # Above-the-fold screenshot
                filename = f"{page_name}_{vp_name}_above-fold.png"
                filepath = os.path.join(OUTPUT_DIR, filename)
                page.screenshot(path=filepath, full_page=False)
                print(f"Captured: {filename}")

                # Full page screenshot
                filename_full = f"{page_name}_{vp_name}_full.png"
                filepath_full = os.path.join(OUTPUT_DIR, filename_full)
                page.screenshot(path=filepath_full, full_page=True)
                print(f"Captured: {filename_full}")

                # Check for horizontal overflow
                overflow_info = page.evaluate("""() => {
                    const docWidth = document.documentElement.scrollWidth;
                    const vpWidth = window.innerWidth;
                    const overflow = docWidth > vpWidth;

                    // Find elements causing overflow
                    const overflowElements = [];
                    document.querySelectorAll('*').forEach(el => {
                        const rect = el.getBoundingClientRect();
                        if (rect.right > vpWidth + 5 || rect.left < -5) {
                            overflowElements.push({
                                tag: el.tagName,
                                class: el.className?.toString()?.substring(0, 80) || '',
                                right: Math.round(rect.right),
                                left: Math.round(rect.left),
                                width: Math.round(rect.width),
                            });
                        }
                    });

                    return {
                        docWidth,
                        vpWidth,
                        overflow,
                        overflowElements: overflowElements.slice(0, 10),
                    };
                }""")

                if overflow_info["overflow"]:
                    print(f"  OVERFLOW on {page_name} at {width}px: doc={overflow_info['docWidth']}px vs vp={overflow_info['vpWidth']}px")
                    for el in overflow_info["overflowElements"]:
                        print(f"    -> <{el['tag']}> class='{el['class']}' right={el['right']} left={el['left']} w={el['width']}")

                # Check touch target sizes
                small_targets = page.evaluate("""() => {
                    const MIN_SIZE = 44;
                    const issues = [];
                    const interactive = document.querySelectorAll('a, button, input, select, textarea, [role="button"], [tabindex]');
                    interactive.forEach(el => {
                        const rect = el.getBoundingClientRect();
                        if (rect.width > 0 && rect.height > 0) {
                            if (rect.width < MIN_SIZE || rect.height < MIN_SIZE) {
                                issues.push({
                                    tag: el.tagName,
                                    text: (el.textContent || '').trim().substring(0, 40),
                                    width: Math.round(rect.width),
                                    height: Math.round(rect.height),
                                    class: el.className?.toString()?.substring(0, 60) || '',
                                });
                            }
                        }
                    });
                    return issues.slice(0, 15);
                }""")

                if small_targets:
                    print(f"  SMALL TOUCH TARGETS on {page_name} at {width}px:")
                    for t in small_targets:
                        print(f"    -> <{t['tag']}> '{t['text']}' {t['width']}x{t['height']}px class='{t['class']}'")

                # Check font sizes
                small_text = page.evaluate("""() => {
                    const issues = [];
                    const textElements = document.querySelectorAll('p, span, li, a, td, th, label, div');
                    textElements.forEach(el => {
                        const style = window.getComputedStyle(el);
                        const fontSize = parseFloat(style.fontSize);
                        const text = (el.textContent || '').trim();
                        if (fontSize < 14 && text.length > 0 && el.children.length === 0) {
                            issues.push({
                                tag: el.tagName,
                                text: text.substring(0, 40),
                                fontSize: fontSize,
                                class: el.className?.toString()?.substring(0, 60) || '',
                            });
                        }
                    });
                    return issues.slice(0, 10);
                }""")

                if small_text:
                    print(f"  SMALL TEXT on {page_name} at {width}px:")
                    for t in small_text:
                        print(f"    -> <{t['tag']}> '{t['text']}' {t['fontSize']}px class='{t['class']}'")

                # Check navbar / mobile menu
                nav_info = page.evaluate("""() => {
                    const nav = document.querySelector('nav, header, [role="navigation"]');
                    if (!nav) return { found: false };

                    const hamburger = document.querySelector('[class*="hamburger"], [class*="menu-toggle"], [class*="mobile-menu"], [aria-label*="menu"], [class*="Menu"], button svg, nav button, header button');
                    const navLinks = nav.querySelectorAll('a');
                    const visibleLinks = Array.from(navLinks).filter(a => {
                        const style = window.getComputedStyle(a);
                        return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
                    });

                    return {
                        found: true,
                        hasHamburger: !!hamburger,
                        hamburgerTag: hamburger?.tagName || null,
                        hamburgerClass: hamburger?.className?.toString()?.substring(0, 60) || null,
                        visibleLinkCount: visibleLinks.length,
                        navHeight: Math.round(nav.getBoundingClientRect().height),
                    };
                }""")

                print(f"  NAV on {page_name} at {width}px: {nav_info}")

                context.close()

        # Test hamburger menu interaction on home page at mobile width
        print("\n=== HAMBURGER MENU INTERACTION TEST ===")
        context = browser.new_context(viewport={"width": 375, "height": 812}, device_scale_factor=2)
        page = context.new_page()
        page.goto("http://localhost:3000/", wait_until="networkidle", timeout=15000)
        page.wait_for_timeout(1000)

        # Try clicking hamburger
        hamburger = page.query_selector('nav button, header button, [class*="hamburger"], [class*="menu-toggle"], [aria-label*="menu"]')
        if hamburger:
            print(f"Found hamburger button: {hamburger.evaluate('el => el.outerHTML.substring(0, 200)')}")
            hamburger.click()
            page.wait_for_timeout(500)
            page.screenshot(path=os.path.join(OUTPUT_DIR, "home_menu-open_375.png"), full_page=False)
            print("Captured: home_menu-open_375.png")

            # Check if menu items are now visible
            menu_state = page.evaluate("""() => {
                const nav = document.querySelector('nav, header');
                const links = nav ? nav.querySelectorAll('a') : [];
                const visible = Array.from(links).filter(a => {
                    const rect = a.getBoundingClientRect();
                    const style = window.getComputedStyle(a);
                    return rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
                });
                return { totalLinks: links.length, visibleLinks: visible.length, visibleTexts: visible.map(a => a.textContent.trim()).slice(0, 10) };
            }""")
            print(f"Menu state after click: {menu_state}")
        else:
            print("No hamburger button found!")

        context.close()
        browser.close()

if __name__ == "__main__":
    capture_all()
