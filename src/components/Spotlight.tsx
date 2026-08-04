"use client";

import { useState, useEffect, useCallback } from "react";

function ArrowSvg() {
  return (
    <svg
      className="arrow-svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function Spotlight() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
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
      <div className="spotlight">
        <div className="spotlight-img">
          <span className="spotlight-img-tag">Case study</span>
          <img
            src="/pemberton-hero.jpg"
            alt="Pemberton Holmes Real Estate"
            className="spotlight-photo"
          />
          <span className="spotlight-img-caption">
            — Vancouver Island, British Columbia
          </span>
        </div>
        <div className="spotlight-body">
          <span className="eyebrow">Company spotlight</span>
          <h2>Pemberton Holmes</h2>
          <p className="sub">A business thriving with PekoPay.</p>
          <p className="body">
            One of British Columbia&apos;s oldest and most trusted real estate
            firms, established in 1887, Pemberton Holmes relies on PekoPay to
            manage payments simply and efficiently across its operations.
          </p>
          {/* Swap to <Link href="/blog/case-studies/pemberton-holmes"> once Strapi case studies category is live. */}
          <button
            className="spotlight-link"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
          >
            Learn more
            <ArrowSvg />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="modal-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Pemberton Holmes spotlight"
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={close}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <span className="eyebrow">Company spotlight</span>
            <h2 className="modal-title">Pemberton Holmes</h2>
            <p className="modal-sub">A business thriving with PekoPay.</p>
            <img
              src="/logo-pemberton.jpg"
              alt="Pemberton Holmes"
              className="modal-logo"
            />
            <div className="modal-body">
              <p>
                Established in 1887, Pemberton Holmes is one of British
                Columbia&apos;s oldest and most respected real estate
                companies, with deep roots across Vancouver Island and the
                Lower Mainland.
              </p>
              <p>
                With PekoPay, Pemberton Holmes processes payments seamlessly
                across its offices — earning cashback on every transaction
                while giving clients a smooth, secure way to pay. The team
                values the simplicity of managing everything in one platform,
                backed by responsive, hands-on support.
              </p>
            </div>
            <div className="modal-actions">
              <a className="btn btn-gold btn-lg" href="#contact">
                Talk to Sales
                <ArrowSvg />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
