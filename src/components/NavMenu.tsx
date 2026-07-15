"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "./navConfig";

export default function NavMenu() {
  const [open, setOpen] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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
                <Link
                  key={child.label}
                  href={child.href}
                  role="menuitem"
                  onClick={close}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            key={item.label}
            href={item.href ?? "#"}
            className={`nav-link-direct${
              item.href &&
              (pathname === item.href ||
                pathname.startsWith(`${item.href}/`))
                ? " active"
                : ""
            }`}
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
}
