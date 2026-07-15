import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title:
    "How Batch Processing Saves Real Estate Firms Hours Every Month — PekoPay Blog",
  description:
    "Pemberton Holmes moved monthly agent billing from a spreadsheet to PekoPay. Here's what changed — and what their accounting team noticed first.",
};

// Static example post for now; the template is the deliverable.
export function generateStaticParams() {
  return [{ slug: "batch-processing-real-estate" }];
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const RELATED = [
  {
    slug: "card-vault-pci",
    category: "Product Updates",
    title:
      "Card Vault: Why Storing Client Cards in Spreadsheets Is a PCI Violation",
    meta: "May 14, 2026 · 5 min read",
    grad: "blog-grad-b",
  },
  {
    slug: "cashback-at-scale",
    category: "Cashback",
    title:
      "What 0.8% Cashback Actually Looks Like at $1.2M in Annual Processing",
    meta: "May 30, 2026 · 4 min read",
    grad: "blog-grad-c",
  },
  {
    slug: "stratapress-subscription-billing",
    category: "Case Studies",
    title:
      "How StrataPress Integrated Subscription Billing into Their 7-Year-Old Platform",
    meta: "April 10, 2026 · 7 min read",
    grad: "blog-grad-d",
  },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // slug resolved for routing; the template content is static placeholder.
  await params;

  const title = "How Batch Processing Saves Real Estate Firms Hours Every Month";

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* BREADCRUMB */}
        <div className="blog-breadcrumb">
          <Link href="/blog">Blog</Link>
          <span className="blog-breadcrumb-sep">›</span>
          <Link href="/blog">Case Studies</Link>
          <span className="blog-breadcrumb-sep">›</span>
          <span className="blog-breadcrumb-current">{title}</span>
        </div>

        {/* ARTICLE HEADER */}
        <div className="blog-article-header">
          <div className="blog-article-cat">
            <span className="eyebrow">Case Studies</span>
            <span className="blog-meta-dot" />
            <span className="blog-article-read">6 min read</span>
          </div>
          <h1>
            How Batch Processing Saves Real Estate Firms{" "}
            <span className="accent-italic">Hours</span> Every Month
          </h1>
          <p className="blog-deck">
            Pemberton Holmes processes monthly office fees for dozens of agents
            across Vancouver Island. Here&rsquo;s exactly what changed when they
            moved from a spreadsheet to PekoPay — and what their accounting team
            noticed first.
          </p>

          {/* SHARE BAR (TOP) */}
          <div className="blog-sharebar">
            <div className="blog-author-mini">
              <span className="blog-avatar">FL</span>
              <span>
                <span className="blog-author-mini-name">
                  Francois Lafortune
                </span>
                <span className="blog-author-mini-date">June 18, 2026</span>
              </span>
            </div>
            <div className="blog-share-actions">
              <span className="eyebrow">Share</span>
              <a
                href="#"
                className="blog-share-btn"
                aria-label="Share on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a href="#" className="blog-share-btn" aria-label="Share on X">
                <XIcon />
              </a>
              <a
                href="#"
                className="blog-share-btn blog-share-btn-text"
                aria-label="Copy link"
              >
                Copy link
              </a>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="blog-hero-img">
          <div className="blog-hero-img-inner blog-grad-primary" />
          <p className="blog-img-caption">
            Pemberton Holmes offices, Victoria, BC — established 1887.
          </p>
        </div>

        {/* ARTICLE BODY */}
        <div className="blog-article-body">
          <p>
            When Pemberton Holmes first started using PekoPay, their accounting
            team was doing something most people would find alarming: storing
            full client credit card numbers in a Google Sheet.
          </p>
          <p>
            It wasn&rsquo;t recklessness. It was just the way things had always
            worked. Every month, one person would open the file, manually key
            each card number into their payment portal, process the charge, and
            move to the next row. For a brokerage with dozens of active agents,
            that process could eat an entire afternoon.
          </p>

          <div className="blog-pullquote">
            <p>
              &ldquo;We didn&rsquo;t realize how much time we were losing until
              we looked back at our first month with PekoPay. What used to take
              a full afternoon took about twenty minutes.&rdquo;
            </p>
            <cite>— Harry, Office Manager, Pemberton Holmes</cite>
          </div>

          <h2>The Problem with Manual Batch Billing</h2>
          <p>
            The Lone Wolf property management system — used by the majority of
            real estate brokerages in North America — has a built-in line of
            credit system for managing agent office fees. But the payment side
            of that workflow has always been the weak link.
          </p>
          <p>
            Moneris, the processor most brokerages defaulted to, had structured
            their batch processing in a way that required businesses to manage
            card storage themselves. That meant either paying for a third-party
            PCI compliance tool, or handling card data in whatever system was
            available — usually, a spreadsheet.
          </p>

          <div className="blog-stat-block">
            <div className="blog-stat-item">
              <div className="num">
                4<span>hrs</span>
              </div>
              <div className="blog-stat-label">
                Average time Pemberton spent on monthly billing before PekoPay
              </div>
            </div>
            <div className="blog-stat-item">
              <div className="num">
                20<span>min</span>
              </div>
              <div className="blog-stat-label">
                Time the same billing run takes today
              </div>
            </div>
            <div className="blog-stat-item">
              <div className="num">
                0<span>$</span>
              </div>
              <div className="blog-stat-label">
                Additional PCI compliance software cost with PekoPay
              </div>
            </div>
          </div>

          <h2>What Switching Actually Looked Like</h2>
          <p>
            The transition happened in two parts. First, each agent submitted
            their card details through PekoPay&rsquo;s secure onboarding flow —
            once. The cards were vaulted immediately, with the accounting team
            only ever seeing the last four digits. No spreadsheet. No exposed
            data.
          </p>
          <p>
            Second, the monthly billing run itself. Instead of logging into a
            portal and manually entering each charge, the accounting team now
            opens PekoPay, uploads a CSV with agent names and amounts, and
            clicks submit. Every card is charged simultaneously.
          </p>

          <h3>What the accounting team noticed first</h3>
          <ul className="checklist">
            <li>
              No more manual card entry — zero re-keying errors on the monthly
              run
            </li>
            <li>
              Automatic expiry notifications — PekoPay alerts both the agent and
              the office when a stored card is approaching expiry
            </li>
            <li>
              Cashback on every batch charge — the monthly run now generates a
              small but consistent return
            </li>
            <li>
              Full transaction history available immediately — no waiting on
              end-of-month statements
            </li>
          </ul>

          <hr className="blog-divider" />

          <h2>The PCI Compliance Piece Nobody Talks About</h2>
          <p>
            One thing that surprised Pemberton Holmes during onboarding was
            learning how close they&rsquo;d been to a compliance issue. Storing
            full card numbers in a shared Google Sheet — even internally — is a
            PCI violation. The fines are substantial, and the exposure
            isn&rsquo;t theoretical.
          </p>
          <p>
            PekoPay&rsquo;s card vault eliminated that risk entirely. Card data
            is encrypted and stored to PCI-DSS standards, with the brokerage
            never holding raw card information at any point in the workflow.
            That&rsquo;s not a feature they had to pay extra for. It came with
            the account.
          </p>

          <div className="blog-pullquote">
            <p>
              &ldquo;Nobody ever told us our old process was a compliance risk.
              We just assumed we were fine because nothing had gone wrong.
              PekoPay was the first processor that actually explained what we
              were exposed to.&rdquo;
            </p>
            <cite>— Harry, Office Manager, Pemberton Holmes</cite>
          </div>

          <p>
            For any real estate brokerage currently using Lone Wolf with a
            manual card management process, the path to PekoPay is
            straightforward. The integration supports the same batch file
            format, the onboarding takes a single afternoon, and the first
            billing run typically runs without issues.
          </p>
          <p>
            The cashback is what closes the deal for most of them. But the
            compliance piece is what makes switching feel overdue.
          </p>

          {/* TAGS */}
          <div className="blog-tags">
            <Link href="/blog" className="blog-tag">
              Batch Processing
            </Link>
            <Link href="/blog" className="blog-tag">
              Real Estate
            </Link>
            <Link href="/blog" className="blog-tag">
              PCI Compliance
            </Link>
            <Link href="/blog" className="blog-tag">
              Case Studies
            </Link>
            <Link href="/blog" className="blog-tag">
              Card Vault
            </Link>
          </div>

          {/* SHARE BAR (BOTTOM) */}
          <div className="blog-sharebar-bottom">
            <span className="eyebrow">Share this post</span>
            <a
              href="#"
              className="blog-share-btn blog-share-btn-text"
              aria-label="Share on LinkedIn"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="#"
              className="blog-share-btn blog-share-btn-text"
              aria-label="Share on X"
            >
              <XIcon />X
            </a>
            <a
              href="#"
              className="blog-share-btn blog-share-btn-text"
              aria-label="Copy link"
            >
              Copy link
            </a>
          </div>

          {/* AUTHOR BIO */}
          <div className="blog-author-bio">
            <span className="blog-author-bio-avatar">FL</span>
            <div>
              <span className="eyebrow">Written by</span>
              <div className="blog-author-bio-name">Francois Lafortune</div>
              <div className="blog-author-bio-role">
                Co-founder &amp; CEO, PekoPay
              </div>
              <p className="blog-author-bio-text">
                Francois leads PekoPay&rsquo;s growth and client relationships.
                He&rsquo;s spent the last several years working directly with
                Canadian businesses on their payment infrastructure — and still
                takes most onboarding calls himself.
              </p>
            </div>
          </div>

          {/* CTA BLOCK */}
          <div className="blog-post-cta">
            <span className="eyebrow">Ready to get started?</span>
            <h3>
              Process your monthly billing in{" "}
              <span className="accent-italic">minutes,</span> not hours.
            </h3>
            <p>
              Join businesses across Canada using PekoPay&rsquo;s batch
              processing — and earn cashback on every charge they process.
            </p>
            <div className="cta-actions">
              <Link className="btn btn-gold btn-lg" href="/login">
                Open An Account Now
              </Link>
              <Link className="btn btn-cta-light btn-lg" href="/contact-us">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>

        {/* RELATED POSTS */}
        <div className="blog-related-wrap">
          <div className="blog-related">
            <div className="blog-related-label">
              <span className="eyebrow">More to read</span>
            </div>
            <div className="blog-related-grid">
              {RELATED.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-related-card"
                >
                  <div className="blog-related-thumb">
                    <span className={post.grad} />
                  </div>
                  <span className="eyebrow">{post.category}</span>
                  <h4>{post.title}</h4>
                  <div className="blog-related-meta">{post.meta}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
