from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = r"D:\AG Workspace\Portfolio Builder\mobile-test"

def check_nav():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        for vp_name, width, height in [("375", 375, 812), ("768", 768, 1024)]:
            context = browser.new_context(viewport={"width": width, "height": height}, device_scale_factor=2)
            page = context.new_page()
            page.goto("http://localhost:3000/", wait_until="networkidle", timeout=15000)
            page.wait_for_timeout(1000)

            # Detailed nav inspection
            nav_detail = page.evaluate("""() => {
                const nav = document.querySelector('nav');
                if (!nav) return { error: 'No nav element found' };

                const navRect = nav.getBoundingClientRect();
                const allElements = nav.querySelectorAll('*');
                const navChildren = [];

                // Direct children info
                for (const child of nav.children) {
                    const r = child.getBoundingClientRect();
                    const style = window.getComputedStyle(child);
                    navChildren.push({
                        tag: child.tagName,
                        class: child.className?.toString()?.substring(0, 60) || '',
                        display: style.display,
                        visibility: style.visibility,
                        width: Math.round(r.width),
                        height: Math.round(r.height),
                        left: Math.round(r.left),
                        top: Math.round(r.top),
                    });
                }

                // All links in nav
                const links = nav.querySelectorAll('a');
                const linkDetails = [];
                links.forEach(a => {
                    const r = a.getBoundingClientRect();
                    const style = window.getComputedStyle(a);
                    linkDetails.push({
                        text: a.textContent.trim(),
                        href: a.href,
                        display: style.display,
                        visibility: style.visibility,
                        width: Math.round(r.width),
                        height: Math.round(r.height),
                        left: Math.round(r.left),
                        top: Math.round(r.top),
                        fontSize: style.fontSize,
                        isVisible: r.width > 0 && r.height > 0 && style.display !== 'none' && style.visibility !== 'hidden',
                    });
                });

                // Buttons in nav
                const buttons = nav.querySelectorAll('button');
                const buttonDetails = [];
                buttons.forEach(b => {
                    const r = b.getBoundingClientRect();
                    buttonDetails.push({
                        text: b.textContent.trim(),
                        class: b.className?.toString()?.substring(0, 60) || '',
                        ariaLabel: b.getAttribute('aria-label'),
                        width: Math.round(r.width),
                        height: Math.round(r.height),
                        html: b.outerHTML.substring(0, 200),
                    });
                });

                return {
                    navRect: { width: Math.round(navRect.width), height: Math.round(navRect.height) },
                    navStyle: {
                        display: window.getComputedStyle(nav).display,
                        position: window.getComputedStyle(nav).position,
                        overflow: window.getComputedStyle(nav).overflow,
                    },
                    childCount: navChildren.length,
                    children: navChildren,
                    links: linkDetails,
                    buttons: buttonDetails,
                };
            }""")

            print(f"\n=== NAV INSPECTION at {width}px ===")
            print(f"Nav rect: {nav_detail.get('navRect')}")
            print(f"Nav style: {nav_detail.get('navStyle')}")
            print(f"Children ({nav_detail.get('childCount')}):")
            for c in nav_detail.get('children', []):
                print(f"  <{c['tag']}> .{c['class']} display:{c['display']} {c['width']}x{c['height']} at ({c['left']},{c['top']})")
            print(f"Links:")
            for l in nav_detail.get('links', []):
                vis = "VISIBLE" if l['isVisible'] else "HIDDEN"
                print(f"  [{vis}] '{l['text']}' {l['width']}x{l['height']} at ({l['left']},{l['top']}) font:{l['fontSize']}")
            print(f"Buttons:")
            for b in nav_detail.get('buttons', []):
                print(f"  '{b['text']}' .{b['class']} {b['width']}x{b['height']} html: {b['html'][:100]}")

            # Take a close-up of just the nav area
            nav_clip = nav_detail.get('navRect', {})
            page.screenshot(
                path=os.path.join(OUTPUT_DIR, f"home_nav-closeup_{vp_name}.png"),
                clip={"x": 0, "y": 0, "width": width, "height": max(nav_clip.get('height', 80), 80)}
            )
            print(f"Captured nav closeup at {vp_name}px")

            context.close()
        browser.close()

if __name__ == "__main__":
    check_nav()
