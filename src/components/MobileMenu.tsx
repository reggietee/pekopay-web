"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { NAV, PRIMARY_CTA } from "./navConfig";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span className={`hamburger${open ? " open" : ""}`}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {open && (
        <div className="mobile-overlay" onClick={close} aria-hidden="true" />
      )}

      <nav
        id="mobile-nav"
        className={`mobile-drawer${open ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer-links">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="mobile-drawer-group">
                <span className="mobile-drawer-group-label">{item.label}</span>
                {item.children.map((child) => (
                  <Link key={child.label} href={child.href} onClick={close}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.label} href={item.href ?? "#"} onClick={close}>
                {item.label}
              </Link>
            )
          )}
        </div>
        <div className="mobile-drawer-ctas">
          <Link
            className="btn btn-dark"
            href={PRIMARY_CTA.href}
            onClick={close}
          >
            {PRIMARY_CTA.label}
          </Link>
        </div>
      </nav>
    </>
  );
}
