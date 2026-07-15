import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Blog — PekoPay",
  description:
    "Payments, cashback strategy, and growth tactics for Canadian businesses — insights from the PekoPay team.",
};

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

const CATEGORIES = [
  "All",
  "Payments",
  "Cashback",
  "Business Growth",
  "Product Updates",
  "Case Studies",
];

type FeedPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  grad: string;
};

const POSTS: FeedPost[] = [
  {
    slug: "cashback-at-scale",
    category: "Cashback",
    title:
      "What 0.8% Cashback Actually Looks Like at $1.2M in Annual Processing",
    excerpt:
      "A clear breakdown of the math for mid-size businesses billing on a monthly cycle — and why volume compounds the return.",
    date: "May 30, 2026",
    readTime: "4 min read",
    grad: "blog-grad-a",
  },
  {
    slug: "card-vault-pci",
    category: "Product Updates",
    title:
      "Card Vault: Why Storing Client Cards in Spreadsheets Is a PCI Violation",
    excerpt:
      "Most businesses don't realize how exposed they are. Here's the risk — and the straightforward fix that's already built into PekoPay.",
    date: "May 14, 2026",
    readTime: "5 min read",
    grad: "blog-grad-b",
  },
  {
    slug: "payment-links-vs-invoices",
    category: "Business Growth",
    title: "Payment Links vs. Invoices: Which One Should You Be Using?",
    excerpt:
      "They sound interchangeable but they solve different problems. Here's how to tell which one fits your current stage.",
    date: "April 28, 2026",
    readTime: "3 min read",
    grad: "blog-grad-c",
  },
  {
    slug: "stratapress-subscription-billing",
    category: "Case Studies",
    title:
      "How StrataPress Integrated Subscription Billing into Their 7-Year-Old Platform",
    excerpt:
      "They didn't want to rebuild. They wanted a processor that could plug in. Here's what that looked like from day one.",
    date: "April 10, 2026",
    readTime: "7 min read",
    grad: "blog-grad-d",
  },
  {
    slug: "quote-to-invoice-workflow",
    category: "Payments",
    title:
      "Quote to Invoice in One Workflow: Why the Gap Costs Trades Businesses Real Money",
    excerpt:
      "ServiceTitan and Jobber handle them separately. That disconnect creates friction — and missed deposits. Here's a better path.",
    date: "March 22, 2026",
    readTime: "5 min read",
    grad: "blog-grad-e",
  },
  {
    slug: "canadian-by-design",
    category: "Cashback",
    title:
      "Canadian by Design: Why We Built PekoPay for Businesses That Process in CAD",
    excerpt:
      "A look at what it means to build a payment processor with Canadian operators in mind from the ground up.",
    date: "March 5, 2026",
    readTime: "4 min read",
    grad: "blog-grad-f",
  },
];

export default function BlogFeedPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <div className="wrap">
          {/* HEADER */}
          <div className="blog-header">
            <span className="eyebrow">PekoPay Blog</span>
            <h1>
              Insights for <span className="accent-italic">businesses</span>{" "}
              that mean business.
            </h1>
            <p className="blog-desc">
              Payments, cashback strategy, and growth tactics for Canadian
              businesses.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="blog-filter-bar">
            <div className="blog-filter-tabs">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`calc-preset${cat === "All" ? " active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* FEATURED POST */}
          <div className="blog-featured">
            <div className="blog-featured-img blog-grad-primary">
              <span className="blog-featured-badge">Featured</span>
            </div>
            <div className="blog-featured-copy">
              <span className="eyebrow">Case Studies</span>
              <h2>
                How Batch Processing Saves Real Estate Firms{" "}
                <span className="accent-italic">Hours</span> Every Month
              </h2>
              <p>
                Pemberton Holmes processes monthly office fees for dozens of
                agents across Vancouver Island. Here&rsquo;s how switching from
                a spreadsheet-and-portal workflow to PekoPay changed their
                billing cycle entirely.
              </p>
              <div className="blog-meta">
                <span>Francois Lafortune</span>
                <span className="blog-meta-dot" />
                <span>June 18, 2026</span>
                <span className="blog-meta-dot" />
                <span>6 min read</span>
              </div>
              <Link
                href="/blog/batch-processing-real-estate"
                className="blog-read-link"
              >
                Read the story
                <ArrowSvg />
              </Link>
            </div>
          </div>

          {/* RECENT POSTS FEED */}
          <div className="blog-feed">
            <div className="blog-feed-label">
              <span className="eyebrow">Recent posts</span>
              <Link href="/blog" className="blog-feed-see-all">
                See all →
              </Link>
            </div>
            <div className="blog-feed-list">
              {POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-feed-card"
                >
                  <div className="blog-feed-thumb">
                    <span className={post.grad} />
                  </div>
                  <div className="blog-feed-copy">
                    <span className="eyebrow">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                  <div className="blog-feed-meta">
                    <span className="blog-feed-date">{post.date}</span>
                    <span className="blog-feed-read">{post.readTime}</span>
                    <span className="blog-feed-arrow">
                      <ArrowSvg />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA BAND */}
        <section className="block partner-sec">
          <div className="wrap">
            <div className="blog-cta-band">
              <div>
                <h3>Ready to earn cashback on every transaction?</h3>
                <p>
                  Join businesses across Canada that are saving money on every
                  transaction with PekoPay.
                </p>
              </div>
              <div className="blog-cta-band-actions">
                <Link className="btn btn-gold btn-lg" href="/login">
                  Open an Account
                </Link>
                <Link className="btn btn-cta-light btn-lg" href="/contact-us">
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
