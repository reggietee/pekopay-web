"use client";

import { useState, useEffect, useCallback } from "react";

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
          <a href="#solution" onClick={close}>
            Solutions
          </a>
          <a href="#cashback" onClick={close}>
            Cashback
          </a>
          <a href="#partner" onClick={close}>
            Partnerships
          </a>
        </div>
        <div className="mobile-drawer-ctas">
          <a className="btn btn-ghost" href="#signin" onClick={close}>
            Sign In
          </a>
          <a className="btn btn-dark" href="#signup" onClick={close}>
            Get Started
          </a>
        </div>
      </nav>
    </>
  );
}
