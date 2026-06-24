#!/usr/bin/env python3
"""Grab the login left-panel feature rows (icon + label) and the Google icon.
Icons on the live page may be inline <svg> or <img>; capture either."""
import json
import pathlib
from playwright.sync_api import sync_playwright

OUT = pathlib.Path(__file__).parent / "live_capture" / "login"
OUT.mkdir(parents=True, exist_ok=True)

JS = r"""
() => {
  const out = [];
  // find text nodes for the known feature labels, walk to their row, grab the icon
  const labels = ["Global Payment Gateway","Mobile Payments","Unlimited Cashback Potential","E-commerce Integrations","Recurring Billing"];
  const all = [...document.querySelectorAll('*')];
  labels.forEach(lbl => {
    const el = all.find(e => e.children.length === 0 && e.textContent.trim() === lbl);
    if (!el) { out.push({label: lbl, icon: null}); return; }
    let row = el.parentElement;
    // climb up to a row that contains an svg or img
    let icon = null;
    for (let i=0; i<4 && row; i++) {
      const svg = row.querySelector('svg');
      const img = row.querySelector('img');
      if (svg) { icon = {type:'svg', html: svg.outerHTML}; break; }
      if (img) { icon = {type:'img', src: img.currentSrc || img.src}; break; }
      row = row.parentElement;
    }
    out.push({label: lbl, icon});
  });
  // google + any other small icons in the form card
  const g = document.querySelector('img[src*="google"]');
  return {features: out, google: g ? (g.currentSrc||g.src) : null};
}
"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1440, "height": 1000})
    pg.goto("https://pekopay.com/login", wait_until="networkidle", timeout=45000)
    pg.wait_for_timeout(1500)
    data = pg.evaluate(JS)
    (OUT / "icons.json").write_text(json.dumps(data, indent=2))
    print(json.dumps(data, indent=2)[:3000])
    b.close()
