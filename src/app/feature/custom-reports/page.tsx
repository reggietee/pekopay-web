import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Custom Reports — PekoPay",
  description:
    "Get the clarity your business needs. Track payouts, outstanding invoices, and cashback earned — all from your PekoPay dashboard.",
};

export default function CustomReportsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                The Clarity Your Business Needs,{" "}
                <span className="italic">When You Need It.</span>
              </h1>
              <p className="hero-sub">
                Real-Time Reporting Across Every Transaction You Process.
              </p>
              <p className="hero-body">
                Stop guessing where your money is. PekoPay custom reports give
                you a full view of your payout history, outstanding invoices, and
                cashback earned — all in one dashboard, filterable to exactly
                what you need to see.
              </p>
              <div className="hero-ctas">
                <Link className="btn btn-gold btn-lg btn-wrap" href="/login">
                  Start Tracking Your Business – Open An Account Now!
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="/assets/solutions/phone.svg"
                alt="PekoPay custom reports dashboard"
                className="solution-phone"
              />
            </div>
          </div>
        </section>

        {/* CASHBACK */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>See Every Dollar of Cashback You&rsquo;ve Earned</h2>
              <p className="cta-sub">
                Your Reports Include Every Cent PekoPay Puts Back in Your Pocket
              </p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                PekoPay reporting isn&rsquo;t just about what you&rsquo;ve
                collected — it shows what you&rsquo;ve earned back. Every cashback
                amount is tracked and visible in your dashboard, so you always
                know exactly how much your payment processing is saving you.
              </p>
            </div>
            <ul className="checklist checklist-row">
              <li>Cashback amounts tracked and visible in real time</li>
              <li>See lifetime earnings alongside transaction history</li>
              <li>Filter cashback by date range, product, or transaction type</li>
            </ul>
          </div>
        </section>

        {/* WHERE EVERY DOLLAR STANDS — copy LEFT / image RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="invoice-copy solution-copy">
              <h2>Know Exactly Where Every Dollar Stands</h2>
              <p className="cta-sub">
                Payout History. Outstanding Invoices. All in One View.
              </p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                PekoPay reports give you a clear picture of your business at any
                point in time. See which invoices are paid, which are
                outstanding, and when your next payout is landing — without
                digging through transaction logs or waiting on your accountant.
              </p>
              <ul className="checklist">
                <li>Payout transactions tracked and filterable by date and amount</li>
                <li>Outstanding invoice balances visible at a glance</li>
                <li>Full transaction history available on demand</li>
              </ul>
            </div>
            <div className="solution-figure">
              <img
                src="/assets/solutions/invoice.svg"
                alt="PekoPay reports dashboard overview"
              />
            </div>
          </div>
        </section>

        {/* EFFICIENCY — image LEFT / copy RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="solution-figure">
              <img
                src="/assets/solutions/reminders.svg"
                alt="Filtering custom reports in PekoPay"
              />
            </div>
            <div className="invoice-copy solution-copy">
              <h2>Reports Built Around Efficiency, Not Just Data</h2>
              <p className="cta-sub">
                Optimize How Your Business Runs — Not Just How It Looks on Paper
              </p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                Custom reports aren&rsquo;t just a record of what happened —
                they&rsquo;re a tool for running your business better. Filter by
                client, product, date range, or transaction type to surface
                exactly what you need, and use that clarity to make faster
                decisions.
              </p>
              <ul className="checklist">
                <li>Filter reports by client, date range, and transaction type</li>
                <li>Export data for accountants, bookkeepers, or internal review</li>
                <li>Built to surface insights, not just raw numbers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WHAT YOU CAN TRACK (light) */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>What You Can Track in PekoPay Reports</h2>
              <p className="cta-sub">
                Three Data Points Every Business Should Have Instant Access To
              </p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                No setup required. Every report is available from your dashboard
                the moment you log in.
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <span className="num">01</span>
                <h3>
                  Payout transactions — see every settlement, when it landed, and
                  what it included
                </h3>
              </div>
              <div className="security-card">
                <span className="num">02</span>
                <h3>
                  Outstanding invoices — know what&rsquo;s been sent, what&rsquo;s
                  unpaid, and what&rsquo;s overdue
                </h3>
              </div>
              <div className="security-card">
                <span className="num">03</span>
                <h3>
                  Cashback earned — track exactly how much PekoPay has put back
                  into your business
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* ACCOUNTANT-READY (dark) */}
        <section className="block partner-sec">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>
                Advanced Enough for Your Accountant. Simple Enough for Anyone on
                Your Team.
              </h2>
              <p className="partner-sub">
                No Training Required. No Extra Software Needed.
              </p>
              <p className="partner-body" style={{ margin: "20px auto 0" }}>
                PekoPay reporting is built for business owners and their teams —
                not just finance departments. Every report is accessible directly
                from your dashboard, exportable in formats your accountant can
                work with, and clear enough that anyone can read it.
              </p>
            </div>
            <div className="dark-cards">
              <div className="dark-card">
                <span className="num">01</span>
                <h3>
                  Dashboard reporting available to every team member with account
                  access
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">02</span>
                <h3>
                  Export-ready formats compatible with QuickBooks and standard
                  bookkeeping workflows
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">03</span>
                <h3>
                  Real-time data — no delays, no manual syncing, no waiting on
                  end-of-month statements
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="block cta-sec">
          <div className="wrap">
            <div className="cta-inner">
              <h2>Open an Account and Start Running Your Business with Clarity</h2>
              <p className="cta-sub">Payouts. Invoices. Cashback. All in One Place.</p>
              <p className="cta-body">
                PekoPay custom reports give every business — from a solo operator
                to a multi-account enterprise — the visibility they need to make
                better decisions faster. Get set up today and see your full
                picture from day one.
              </p>
              <div className="cta-actions">
                <Link className="btn btn-gold btn-lg" href="/login">
                  Open An Account Now
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
