import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Integrations — PekoPay",
  description:
    "Connect PekoPay to the tools your business already runs on. QuickBooks integration available now, with more on the way.",
};

export default function IntegrationsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                PekoPay Works With{" "}
                <span className="italic">the Tools You Already Use.</span>
              </h1>
              <p className="hero-sub">
                Connect Your Payment Processing to Your Business Stack.
              </p>
              <p className="hero-body">
                PekoPay integrates directly with the platforms your business
                depends on — so your payments, bookkeeping, and client management
                stay in sync without manual data entry or duplicate work.
              </p>
              <div className="hero-ctas">
                <Link className="btn btn-gold btn-lg btn-wrap" href="/login">
                  Connect Your Tools – Open An Account Now!
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="/assets/solutions/phone.svg"
                alt="PekoPay integrations dashboard"
                className="solution-phone"
              />
            </div>
          </div>
        </section>

        {/* QUICKBOOKS SPOTLIGHT (plain checklist, not checklist-row) */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>QuickBooks Integration — Available Now</h2>
              <p className="cta-sub">
                Sync Your PekoPay Transactions Directly to QuickBooks
              </p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                PekoPay&rsquo;s QuickBooks integration connects your payment
                processing directly to your bookkeeping workflow. Transactions
                sync automatically, reducing manual entry and keeping your books
                accurate without extra work from your team.
              </p>
            </div>
            <ul className="checklist">
              <li>Payment data synced directly to QuickBooks in real time</li>
              <li>Reduces manual bookkeeping entry across invoices and payouts</li>
              <li>
                Connect your QuickBooks account directly from your PekoPay
                dashboard
              </li>
            </ul>
          </div>
        </section>

        {/* API / WEBHOOK — copy LEFT / image RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="invoice-copy solution-copy">
              <h2>Connect via API or Webhook — No Developer Required</h2>
              <p className="cta-sub">Low-Code Integration for Any Platform</p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                If your business runs on a custom platform or a tool we
                haven&rsquo;t built a native integration for yet, PekoPay&rsquo;s
                open API and webhook support lets you connect without writing
                complex code. Add your API key, configure your webhook endpoint,
                and PekoPay starts talking to your existing system.
              </p>
              <ul className="checklist">
                <li>Open API compatible with any custom-built platform</li>
                <li>Webhook support for real-time event triggers</li>
                <li>API key setup available directly from your PekoPay dashboard</li>
              </ul>
            </div>
            <div className="solution-figure">
              <img
                src="/assets/solutions/invoice.svg"
                alt="PekoPay API and webhook connection"
              />
            </div>
          </div>
        </section>

        {/* PARTNER — image LEFT / copy RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="solution-figure">
              <img
                src="/assets/solutions/reminders.svg"
                alt="PekoPay implementation partner integration"
              />
            </div>
            <div className="invoice-copy solution-copy">
              <h2>Building Something That Should Connect to PekoPay?</h2>
              <p className="cta-sub">
                We Work With Development Teams and App Partners Directly
              </p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                If you&rsquo;re a developer or software partner looking to
                integrate PekoPay into your platform or client workflow, get in
                touch. We work directly with implementation partners to build
                connections that work for your specific use case — and
                we&rsquo;re actively expanding our integration library.
              </p>
              <ul className="checklist">
                <li>Direct support for development teams building PekoPay integrations</li>
                <li>Implementation partner program available for app and platform partners</li>
                <li>
                  More native integrations in active development — contact us to
                  discuss yours
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* COMING SOON (dark) */}
        <section className="block partner-sec">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>More Integrations Coming Soon</h2>
              <p className="partner-sub">
                We&rsquo;re Building Out Our Integration Library Based on What Our
                Clients Need
              </p>
              <p className="partner-body" style={{ margin: "20px auto 0" }}>
                Our integration roadmap is driven by the tools our clients are
                already using. Shopify is next in development, with Zapier and
                more on the way. If the tool you need isn&rsquo;t listed yet,
                reach out — we track every integration request and prioritize
                based on demand.
              </p>
            </div>
            <div className="dark-cards">
              <div className="dark-card">
                <span className="num">01</span>
                <h3>Shopify integration currently in development</h3>
              </div>
              <div className="dark-card">
                <span className="num">02</span>
                <h3>
                  Zapier connection in active planning — unlocks workflow
                  automation across hundreds of apps
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">03</span>
                <h3>
                  Don&rsquo;t see what you need? Contact our team and we&rsquo;ll
                  add it to the roadmap
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="block cta-sec">
          <div className="wrap">
            <div className="cta-inner">
              <h2>Open an Account and Connect PekoPay to Your Business</h2>
              <p className="cta-sub">QuickBooks Ready. API Open. More on the Way.</p>
              <p className="cta-body">
                Whether you&rsquo;re connecting PekoPay to your bookkeeping
                software, plugging into a custom platform via API, or looking to
                build a deeper integration — we have a path for you. Get started
                today.
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
