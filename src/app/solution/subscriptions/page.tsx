import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Subscriptions & Recurring Payments — PekoPay",
  description:
    "Set up recurring billing once and let PekoPay handle the rest. Earn cashback on every cycle and connect to your existing systems via open API.",
};

export default function SubscriptionsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                Set It Up Once. Get Paid{" "}
                <span className="italic">Every Time.</span>
              </h1>
              <p className="hero-sub">
                Recurring Billing That Runs Itself — With Cashback on Every
                Cycle.
              </p>
              <p className="hero-body">
                Whether you&rsquo;re billing monthly retainers, membership fees,
                or service contracts, PekoPay handles the recurring charge so you
                don&rsquo;t have to. Connect via our open API or manage it
                directly from your dashboard — and earn cashback on every
                transaction that comes through.
              </p>
              <div className="hero-ctas">
                <Link className="btn btn-gold btn-lg btn-wrap" href="/login">
                  Start Recurring Billing – Open An Account Now!
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="/assets/solutions/phone.svg"
                alt="PekoPay recurring billing dashboard"
                className="solution-phone"
              />
            </div>
          </div>
        </section>

        {/* CASHBACK */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Earn Cashback on Every Billing Cycle</h2>
              <p className="cta-sub">Recurring Revenue That Keeps Earning</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                Every recurring charge processed through PekoPay earns you
                cashback — monthly, weekly, or whatever cadence your business
                runs on. The more consistent your billing, the more you earn back
                over time.
              </p>
            </div>
            <ul className="checklist checklist-row">
              <li>Earn cashback on every recurring transaction</li>
              <li>Cashback compounds across your entire subscriber base</li>
              <li>No extra steps — earnings apply automatically on every cycle</li>
            </ul>
          </div>
        </section>

        {/* ONE SETUP — copy LEFT / image RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="invoice-copy solution-copy">
              <h2>One Setup. Ongoing Collections.</h2>
              <p className="cta-sub">Recurring Billing Without the Manual Work</p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                Configure your billing schedule once in PekoPay and the charges
                run automatically on your timeline. Monthly retainers, weekly
                service fees, annual memberships — set the cadence, store the
                card, and PekoPay handles every collection from there.
              </p>
              <ul className="checklist">
                <li>Set billing frequency — weekly, monthly, or custom</li>
                <li>Stored cards charged automatically on schedule</li>
                <li>
                  Failed payment handling built in — no manual follow-up required
                </li>
              </ul>
            </div>
            <div className="solution-figure">
              <img
                src="/assets/solutions/invoice.svg"
                alt="Recurring billing schedule setup in PekoPay"
              />
            </div>
          </div>
        </section>

        {/* OPEN API — image LEFT / copy RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="solution-figure">
              <img
                src="/assets/solutions/reminders.svg"
                alt="PekoPay open API connecting to a custom platform"
              />
            </div>
            <div className="invoice-copy solution-copy">
              <h2>Connect to Your Existing Systems via Open API</h2>
              <p className="cta-sub">
                Built for Businesses That Already Have Their Own Platform
              </p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                If your business runs on a custom system you&rsquo;ve spent years
                building, you shouldn&rsquo;t have to rebuild your payment flow
                around a new processor. PekoPay&rsquo;s open API plugs directly
                into your existing platform — your brand, your workflow, PekoPay
                running quietly in the background.
              </p>
              <ul className="checklist">
                <li>Open API connects to any custom-built platform</li>
                <li>Full subscription management available through the API</li>
                <li>
                  PekoPay handles processing — your system stays front and centre
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* USE CASES (light) */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Built for Every Recurring Revenue Model</h2>
              <p className="cta-sub">
                From Trades to Professional Services to Membership Businesses
              </p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                Any business that bills on a schedule is a fit for PekoPay
                subscriptions. Here&rsquo;s where we&rsquo;re already running.
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <span className="num">01</span>
                <h3>
                  Property management companies billing monthly admin and legal
                  support fees
                </h3>
              </div>
              <div className="security-card">
                <span className="num">02</span>
                <h3>
                  Trade businesses charging monthly maintenance and service
                  contracts
                </h3>
              </div>
              <div className="security-card">
                <span className="num">03</span>
                <h3>
                  Membership organizations and clubs running recurring dues on
                  stored cards
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* API & INTEGRATION (dark) */}
        <section className="block partner-sec">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>The Flexibility Legacy Processors Don&rsquo;t Offer</h2>
              <p className="partner-sub">Helcim Couldn&rsquo;t Do This. PekoPay Can.</p>
              <p className="partner-body" style={{ margin: "20px auto 0" }}>
                StrataPress had been running on a custom platform for seven years
                when they needed a payment processor that could integrate without
                disrupting what they&rsquo;d built. Helcim couldn&rsquo;t
                accommodate it. PekoPay&rsquo;s open API connected cleanly, and
                their team was on live testing calls until everything ran exactly
                right.
              </p>
            </div>
            <div className="dark-cards">
              <div className="dark-card">
                <span className="num">01</span>
                <h3>
                  Open API that integrates with custom-built platforms without
                  disrupting your existing workflow
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">02</span>
                <h3>
                  Live technical support through integration and testing — not
                  just documentation
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">03</span>
                <h3>
                  Competitive processing rates that made switching from Helcim a
                  straightforward decision
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* STRATAPRESS TESTIMONIAL */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>What Our Clients Say</h2>
              <p className="cta-sub">Real Businesses. Real Results.</p>
            </div>
            <blockquote
              style={{
                maxWidth: "780px",
                margin: "32px auto 0",
                padding: "32px 40px",
                borderLeft: "4px solid #5b6abf",
                background: "transparent",
                fontStyle: "italic",
                fontSize: "20px",
                lineHeight: 1.6,
                color: "var(--ink-soft)",
              }}
            >
              &ldquo;We&rsquo;ve had an excellent experience working with
              PekoPay. The onboarding process was smooth, and their team has been
              incredibly responsive and helpful in getting our payment gateway
              and subscription management set up properly. Their support has been
              outstanding, and the processing rates are very competitive.
              It&rsquo;s refreshing to work with a company that is both easy to
              reach and genuinely invested in helping its clients succeed. Highly
              recommended from the team at StrataPress.&rdquo;
            </blockquote>
            <p
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontWeight: 500,
                color: "var(--ink)",
              }}
            >
              — StrataPress Team
            </p>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="block cta-sec">
          <div className="wrap">
            <div className="cta-inner">
              <h2>Open an Account and Start Running Recurring Revenue</h2>
              <p className="cta-sub">Set It Up. Earn Cashback. Let It Run.</p>
              <p className="cta-body">
                PekoPay subscriptions work for any business billing on a schedule
                — whether you&rsquo;re managing five clients or five hundred.
                Connect via API or set it up directly in your dashboard and start
                your first billing cycle today.
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
