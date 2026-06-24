#!/usr/bin/env python3
"""Render the live pekopay.com subpages headlessly and capture, for each:
  - the full rendered text (for exact copy/titles)
  - every image/background-image asset URL (for self-hosting)
  - a full-page screenshot (for visual reference while reskinning)
Outputs go to scripts/live_capture/<slug>/.
"""
import json
import pathlib
import re
from playwright.sync_api import sync_playwright

PAGES = {
    "login": "https://pekopay.com/login",
    "solution-invoicing": "https://pekopay.com/solution/invoicing",
    "solution-payment": "https://pekopay.com/solution/payment",
    "cashback-how-it-works": "https://pekopay.com/earn-cashback/how-cashback-works",
    "pricing": "https://pekopay.com/pricing",
    "referral-program": "https://pekopay.com/partnerships/referral-program",
    "contact-us": "https://pekopay.com/contact-us",
    "perks": "https://pekopay.com/perks",
}

OUT = pathlib.Path(__file__).parent / "live_capture"
OUT.mkdir(exist_ok=True)

JS_ASSETS = """
() => {
  const urls = new Set();
  document.querySelectorAll('img').forEach(el => {
    if (el.currentSrc) urls.add(el.currentSrc);
    else if (el.src) urls.add(el.src);
    if (el.srcset) el.srcset.split(',').forEach(s => urls.add(s.trim().split(' ')[0]));
  });
  document.querySelectorAll('*').forEach(el => {
    const bg = getComputedStyle(el).backgroundImage;
    if (bg && bg !== 'none') {
      const m = [...bg.matchAll(/url\\(["']?(.*?)["']?\\)/g)];
      m.forEach(x => urls.add(x[1]));
    }
  });
  return [...urls];
}
"""

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1440, "height": 1000})
    index = {}
    for slug, url in PAGES.items():
        d = OUT / slug
        d.mkdir(exist_ok=True)
        print(f"→ {slug}: {url}")
        try:
            page.goto(url, wait_until="networkidle", timeout=45000)
        except Exception as e:
            print(f"  ! goto warning: {e}")
            page.wait_for_timeout(3000)
        page.wait_for_timeout(1500)
        title = page.title()
        text = page.evaluate("() => document.body.innerText")
        assets = page.evaluate(JS_ASSETS)
        # keep only same-origin / real asset urls (drop data: blobs)
        assets = [a for a in assets if a and not a.startswith("data:")]
        (d / "text.txt").write_text(f"TITLE: {title}\nURL: {url}\n\n{text}")
        (d / "assets.json").write_text(json.dumps(assets, indent=2))
        page.screenshot(path=str(d / "full.png"), full_page=True)
        index[slug] = {"url": url, "title": title, "asset_count": len(assets)}
        print(f"  text {len(text)} chars · {len(assets)} assets")
    (OUT / "index.json").write_text(json.dumps(index, indent=2))
    browser.close()
print("done")
