"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  answerToPlainText,
  type AnswerBlock,
  type FaqCategory,
  type FaqItem,
} from "./faqData";

function Chevron() {
  return (
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
  );
}

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 9.5a2.5 2.5 0 003.5 0l2-2a2.5 2.5 0 00-3.5-3.5l-1 1" />
      <path d="M9.5 6.5a2.5 2.5 0 00-3.5 0l-2 2a2.5 2.5 0 003.5 3.5l1-1" />
    </svg>
  );
}

function AnswerBlocks({ blocks }: { blocks: AnswerBlock[] }) {
  return (
    <div className="faq-a">
      {blocks.map((block, i) => {
        if (block.type === "p") return <p key={i}>{block.text}</p>;
        if (block.type === "ul")
          return (
            <ul key={i} className="faq-list">
              {block.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        if (block.type === "ol")
          return (
            <ol key={i} className="faq-list faq-list-ol">
              {block.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ol>
          );
        // inline internal link: split the text around the label
        const idx = block.text.indexOf(block.label);
        if (idx === -1) return <p key={i}>{block.text}</p>;
        return (
          <p key={i}>
            {block.text.slice(0, idx)}
            <Link href={block.href} className="faq-link">
              {block.label}
            </Link>
            {block.text.slice(idx + block.label.length)}
          </p>
        );
      })}
    </div>
  );
}

type ItemRowProps = {
  item: FaqItem;
  isOpen: boolean;
  copied: boolean;
  onToggle: (id: string) => void;
  onCopy: (id: string) => void;
  onTriggerKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

function ItemRow({
  item,
  isOpen,
  copied,
  onToggle,
  onCopy,
  onTriggerKeyDown,
}: ItemRowProps) {
  return (
    <div className={`faq-item${isOpen ? " open" : ""}`} id={item.id}>
      <div className="faq-q-row">
        <button
          type="button"
          className="faq-q"
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${item.id}`}
          id={`faq-trigger-${item.id}`}
          data-faq-trigger
          onClick={() => onToggle(item.id)}
          onKeyDown={onTriggerKeyDown}
        >
          <span>{item.question}</span>
          <Chevron />
        </button>
        <button
          type="button"
          className="faq-copy"
          onClick={() => onCopy(item.id)}
          aria-label={`Copy link to "${item.question}"`}
        >
          {copied ? (
            <span className="faq-copied">Copied</span>
          ) : (
            <LinkIcon />
          )}
        </button>
      </div>
      <div
        className="faq-a-wrap"
        id={`faq-panel-${item.id}`}
        role="region"
        aria-labelledby={`faq-trigger-${item.id}`}
      >
        <div className="faq-a-inner">
          <AnswerBlocks blocks={item.answer} />
        </div>
      </div>
    </div>
  );
}

export default function FaqExplorer({
  featured,
  categories,
}: {
  featured: FaqItem[];
  categories: FaqCategory[];
}) {
  const [open, setOpen] = useState<Set<string>>(
    () => new Set(featured[0] ? [featured[0].id] : [])
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const allItems = useMemo(
    () => [...featured, ...categories.flatMap((c) => c.items)],
    [featured, categories]
  );

  const setHash = useCallback((id: string | null) => {
    if (typeof window === "undefined") return;
    const url = id
      ? `${window.location.pathname}#${id}`
      : window.location.pathname;
    window.history.replaceState(null, "", url);
  }, []);

  const toggle = useCallback(
    (id: string) => {
      setOpen((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
          setHash(null);
        } else {
          next.add(id);
          setHash(id);
        }
        return next;
      });
    },
    [setHash]
  );

  // Deep link: on mount, expand + scroll to the hash target if it exists.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    if (!allItems.some((it) => it.id === hash)) return;
    // Defer to a frame: expand the target, then scroll it clear of the nav.
    const raf = requestAnimationFrame(() => {
      setOpen((prev) => new Set(prev).add(hash));
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "auto", block: "start" });
    });
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const copy = useCallback((id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    const done = () => {
      setCopiedId(id);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopiedId(null), 1600);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url).then(done, done);
    } else {
      done();
    }
  }, []);

  useEffect(
    () => () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    []
  );

  // Arrow keys move focus between question triggers within the same group.
  const onTriggerKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      const group = e.currentTarget.closest(".faq-group");
      if (!group) return;
      const triggers = Array.from(
        group.querySelectorAll<HTMLButtonElement>("[data-faq-trigger]")
      );
      const i = triggers.indexOf(e.currentTarget);
      if (i === -1) return;
      e.preventDefault();
      const nextIndex =
        e.key === "ArrowDown"
          ? Math.min(i + 1, triggers.length - 1)
          : Math.max(i - 1, 0);
      triggers[nextIndex]?.focus();
    },
    []
  );

  const q = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!q) return [];
    return allItems
      .map((item) => {
        const question = item.question.toLowerCase();
        const inQuestion = question.includes(q);
        const inAnswer = answerToPlainText(item.answer)
          .toLowerCase()
          .includes(q);
        const score =
          (question.startsWith(q) ? 3 : 0) +
          (inQuestion ? 2 : 0) +
          (inAnswer ? 1 : 0);
        return { item, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.item);
  }, [q, allItems]);

  const rowProps = (item: FaqItem, forceOpen: boolean) => ({
    item,
    isOpen: forceOpen || open.has(item.id),
    copied: copiedId === item.id,
    onToggle: toggle,
    onCopy: copy,
    onTriggerKeyDown,
  });

  const visibleCategories = categories.filter((c) => c.items.length > 0);

  return (
    <div className="faq-explorer">
      {/* FILTER */}
      <div className="faq-filter">
        <svg
          className="faq-filter-icon"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="7" cy="7" r="4.5" />
          <path d="M10.5 10.5L14 14" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          className="faq-filter-input"
          placeholder="Search questions…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search FAQ questions"
        />
      </div>

      {q ? (
        /* FILTERED: single flat, expanded result list */
        <div className="faq-results faq-group" role="list">
          {results.length > 0 ? (
            <>
              <p className="faq-results-count">
                {results.length}{" "}
                {results.length === 1 ? "result" : "results"}
              </p>
              {results.map((item) => (
                <ItemRow key={item.id} {...rowProps(item, true)} />
              ))}
            </>
          ) : (
            <div className="faq-noresults">
              <p>No questions match &ldquo;{query.trim()}&rdquo;.</p>
              <p>
                Still stuck?{" "}
                <Link href="/contact-us" className="faq-link">
                  Reach out to the team
                </Link>{" "}
                and we&rsquo;ll answer directly.
              </p>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* PRIMARY: Most asked */}
          <section className="faq-featured" aria-labelledby="faq-most-asked">
            <h2 id="faq-most-asked" className="faq-block-label">
              Most asked
            </h2>
            <div className="faq-group">
              {featured.map((item) => (
                <ItemRow key={item.id} {...rowProps(item, false)} />
              ))}
            </div>
          </section>

          {/* SECONDARY: More questions */}
          {visibleCategories.length > 0 && (
            <section
              className="faq-more"
              aria-labelledby="faq-more-questions"
            >
              <h2 id="faq-more-questions" className="faq-more-title">
                More questions
              </h2>

              <nav className="faq-jumpnav" aria-label="FAQ categories">
                {visibleCategories.map((c) => (
                  <a key={c.id} href={`#${c.id}`} className="faq-jump-chip">
                    {c.title}
                  </a>
                ))}
              </nav>

              {visibleCategories.map((c) => (
                <section
                  key={c.id}
                  id={c.id}
                  className="faq-cat"
                  aria-labelledby={`cat-${c.id}`}
                >
                  <h3 id={`cat-${c.id}`} className="faq-cat-title">
                    {c.title}
                  </h3>
                  <div className="faq-group">
                    {c.items.map((item) => (
                      <ItemRow key={item.id} {...rowProps(item, false)} />
                    ))}
                  </div>
                </section>
              ))}
            </section>
          )}
        </>
      )}
    </div>
  );
}
