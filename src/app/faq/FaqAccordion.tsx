"use client";

import { useState } from "react";
import type { FaqItem } from "./faqData";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  // First item open by default; toggling is independent (no auto-close).
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });

  return (
    <div className="faq-accordion">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div key={item.question} className={`faq-item${isOpen ? " open" : ""}`}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              id={`faq-trigger-${i}`}
              onClick={() => toggle(i)}
            >
              <span>{item.question}</span>
              <svg
                className="faq-chevron"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>
            <div
              className="faq-a-wrap"
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
            >
              <div className="faq-a-inner">
                <div className="faq-a">
                  {item.answer.map((block, bi) =>
                    block.type === "p" ? (
                      <p key={bi}>{block.text}</p>
                    ) : (
                      <ul key={bi} className="faq-list">
                        {block.items.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
