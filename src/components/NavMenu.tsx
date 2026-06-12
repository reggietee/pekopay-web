"use client";

import { useState, useRef, useEffect, useCallback } from "react";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  {
    label: "Solutions",
    children: [
      { label: "Batch Processing", href: "#" },
      { label: "Invoice", href: "#solution" },
      { label: "Payment Links", href: "#" },
      { label: "Quotes", href: "#" },
      { label: "Subscription / Recurring", href: "#" },
    ],
  },
  {
    label: "Features",
    children: [
      { label: "Custom Reports", href: "#" },
      { label: "Fraud Prevention", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Refunds", href: "#" },
    ],
  },
  {
    label: "Developer",
    children: [
      { label: "API Reference", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Podcast", href: "#" },
      { label: "Product Tutorials", href: "#" },
    ],
  },
  { label: "Pricing", href: "#pricing" },
];

export default function NavMenu() {
  const [open, setOpen] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [close]);

  return (
    <div className="nav-links" ref={ref}>
      {NAV.map((item) =>
        item.children ? (
          <div
            key={item.label}
            className={`nav-dd${open === item.label ? " open" : ""}`}
            onMouseEnter={() => setOpen(item.label)}
            onMouseLeave={close}
          >
            <button
              className="nav-dd-trigger"
              aria-expanded={open === item.label}
              aria-haspopup="true"
              onClick={() =>
                setOpen(open === item.label ? null : item.label)
              }
            >
              {item.label}
              <svg
                className="nav-dd-caret"
                viewBox="0 0 12 12"
                width="10"
                height="10"
                aria-hidden="true"
              >
                <path
                  d="M2.5 4.5L6 8l3.5-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="nav-dd-menu" role="menu">
              {item.children.map((child) => (
                <a
                  key={child.label}
                  href={child.href}
                  role="menuitem"
                  onClick={close}
                >
                  {child.label}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <a key={item.label} href={item.href} className="nav-link-direct">
            {item.label}
          </a>
        )
      )}
    </div>
  );
}
