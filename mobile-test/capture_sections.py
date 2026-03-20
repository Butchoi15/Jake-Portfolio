from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = r"D:\AG Workspace\Portfolio Builder\mobile-test"

def capture_sections():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        for vp_name, width, height in [("375", 375, 812), ("768", 768, 1024)]:
            context = browser.new_context(viewport={"width": width, "height": height}, device_scale_factor=2)
            page = context.new_page()
            page.goto("http://localhost:3000/", wait_until="networkidle", timeout=15000)
            page.wait_for_timeout(1500)

            # Get total page height
            total_height = page.evaluate("() => document.documentElement.scrollHeight")
            print(f"\n=== {vp_name}px viewport, total page height: {total_height}px ===")

            # Capture footer area
            page.evaluate(f"window.scrollTo(0, {total_height - height})")
            page.wait_for_timeout(500)
            page.screenshot(path=os.path.join(OUTPUT_DIR, f"home_footer_{vp_name}.png"), full_page=False)
            print(f"Captured footer at {vp_name}px")

            # Capture mid-page content (gallery/features area)
            mid = total_height // 2
            page.evaluate(f"window.scrollTo(0, {mid - height // 2})")
            page.wait_for_timeout(500)
            page.screenshot(path=os.path.join(OUTPUT_DIR, f"home_middle_{vp_name}.png"), full_page=False)
            print(f"Captured middle at {vp_name}px")

            # Capture area after hero (second section)
            page.evaluate(f"window.scrollTo(0, {height})")
            page.wait_for_timeout(500)
            page.screenshot(path=os.path.join(OUTPUT_DIR, f"home_second-section_{vp_name}.png"), full_page=False)
            print(f"Captured second section at {vp_name}px")

            # Check all sections for clipping
            sections_info = page.evaluate("""() => {
                const vpWidth = window.innerWidth;
                const allSections = document.querySelectorAll('section, footer, header, .section, [class*="section"]');
                const results = [];
                allSections.forEach((s, i) => {
                    const rect = s.getBoundingClientRect();
                    const style = window.getComputedStyle(s);
                    results.push({
                        index: i,
                        tag: s.tagName,
                        class: s.className?.toString()?.substring(0, 80) || '',
                        width: Math.round(rect.width),
                        height: Math.round(rect.height),
                        overflowX: style.overflowX,
                        exceedsViewport: rect.width > vpWidth,
                    });
                });
                return results;
            }""")
            for s in sections_info:
                flag = " ** OVERFLOW **" if s["exceedsViewport"] else ""
                print(f"  Section {s['index']}: <{s['tag']}> .{s['class'][:50]} - {s['width']}x{s['height']}px overflow-x:{s['overflowX']}{flag}")

            # Check images
            img_issues = page.evaluate("""() => {
                const vpWidth = window.innerWidth;
                const issues = [];
                document.querySelectorAll('img').forEach(img => {
                    const rect = img.getBoundingClientRect();
                    if (rect.width > vpWidth) {
                        issues.push({
                            src: img.src.substring(img.src.lastIndexOf('/') + 1),
                            naturalWidth: img.naturalWidth,
                            renderedWidth: Math.round(rect.width),
                            vpWidth: vpWidth,
                        });
                    }
                });
                return issues;
            }""")
            if img_issues:
                print(f"  IMAGE OVERFLOW ISSUES:")
                for img in img_issues:
                    print(f"    -> {img['src']} rendered at {img['renderedWidth']}px (viewport: {img['vpWidth']}px)")

            context.close()

        browser.close()

if __name__ == "__main__":
    capture_sections()
