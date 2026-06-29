import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Batch Processing — PekoPay",
  description:
    "Process hundreds of transactions in one submission, earn cashback on every charge, and stay fully PCI compliant — built for medium to enterprise businesses.",
};

export default function BatchProcessingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                Process Hundreds of Payments{" "}
                <span className="italic">All at Once</span> with PekoPay
              </h1>
              <p className="hero-sub">
                Bulk Charge. Zero Manual Work. Earn Cashback on Every
                Transaction.
              </p>
              <p className="hero-body">
                Stop processing payments one at a time. PekoPay&rsquo;s batch
                processing lets you upload a simple CSV, submit once, and charge
                every client&rsquo;s stored card simultaneously — saving your
                team hours each billing cycle.
              </p>
              <div className="hero-ctas">
                <Link className="btn btn-gold btn-lg btn-wrap" href="/login">
                  Start Processing in Bulk – Open An Account Now!
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="/assets/solutions/phone.svg"
                alt="PekoPay batch processing dashboard"
                className="solution-phone"
              />
            </div>
          </div>
        </section>

        {/* EARN WHILE YOU PROCESS */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Earn While You Process</h2>
              <p className="cta-sub">
                Every Batch Transaction Earns You Cashback
              </p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                With PekoPay, bulk billing isn&rsquo;t just efficient —
                it&rsquo;s profitable. Every card charged through a batch
                submission earns you cashback, reducing your effective
                processing cost across every transaction in the run.
              </p>
            </div>
            <ul className="checklist checklist-row">
              <li>Earn cashback on every card charged in a batch</li>
              <li>Reduce processing costs at scale</li>
              <li>More volume processed means more cashback earned</li>
            </ul>
          </div>
        </section>

        {/* UPLOAD FLOW — copy LEFT / image RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="invoice-copy solution-copy">
              <h2>Upload a CSV. Submit Once. Done.</h2>
              <p className="cta-sub">Billing at Scale Shouldn&rsquo;t Require a Team</p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                PekoPay batch processing was built for businesses that bill
                multiple clients on the same cycle. Upload a spreadsheet with
                your client names, emails, charge amounts, and stored card
                details — and submit. Every card gets charged in one go.
              </p>
              <ul className="checklist">
                <li>Import client billing data via CSV or Google Sheets</li>
                <li>Credit cards stored securely — no re-entry required</li>
                <li>One submission charges your entire client list at once</li>
              </ul>
            </div>
            <div className="solution-figure">
              <img
                src="/assets/solutions/invoice.svg"
                alt="CSV upload flow for batch billing"
              />
            </div>
          </div>
        </section>

        {/* USE CASES — image LEFT / copy RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="solution-figure">
              <img
                src="/assets/solutions/reminders.svg"
                alt="Batch billing run across multiple client accounts"
              />
            </div>
            <div className="invoice-copy solution-copy">
              <h2>Built for Real Estate, Clubs, and High-Volume Billers</h2>
              <p className="cta-sub">
                Purpose-Built for the Way Membership Businesses Work
              </p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                Whether you&rsquo;re managing office fees at a real estate
                brokerage, monthly dues at a members club, or recurring service
                charges across dozens of accounts — PekoPay handles the full
                billing run without you lifting a finger after upload.
              </p>
              <ul className="checklist">
                <li>Real estate brokerages running monthly fee cycles</li>
                <li>Private clubs with member accounts and accumulated charges</li>
                <li>Any business billing multiple clients on a set schedule</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>How Batch Processing Works</h2>
              <p className="cta-sub">Three Steps to Bulk Payment Collection</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                No complex setup. No developer required. Just a straightforward
                workflow your accounting team can run independently.
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <span className="num">01</span>
                <h3>
                  Prepare your billing file in CSV or Google Sheets with client
                  names, emails, and charge amounts
                </h3>
              </div>
              <div className="security-card">
                <span className="num">02</span>
                <h3>
                  Upload to PekoPay — stored client cards are matched
                  automatically
                </h3>
              </div>
              <div className="security-card">
                <span className="num">03</span>
                <h3>
                  Submit once and PekoPay charges every card simultaneously,
                  with a full run report available instantly
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* PCI COMPLIANCE (dark) */}
        <section className="block partner-sec">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>PCI Compliant by Default — Not an Add-On</h2>
              <p className="partner-sub">
                Protect Your Business Without Buying Extra Software
              </p>
              <p className="partner-body" style={{ margin: "20px auto 0" }}>
                Most batch processing setups require businesses to manage card
                data themselves — often in spreadsheets storing full card
                numbers, which is both a PCI violation and a serious liability.
                PekoPay handles card storage for you. Your team only ever sees
                the last four digits.
              </p>
            </div>
            <div className="dark-cards">
              <div className="dark-card">
                <span className="num">01</span>
                <h3>
                  Stored card data is vaulted securely — your team never sees
                  full card numbers
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">02</span>
                <h3>
                  No third-party PCI compliance software required — it&rsquo;s
                  built in
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">03</span>
                <h3>
                  Lone Wolf integration supported for real estate brokerages
                  already on that workflow
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CANADIAN SUPPORT */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Support From People Who Pick Up the Phone</h2>
              <p className="cta-sub">Canadian Businesses Supported by Canadians</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                When Pemberton Holmes moved their batch processing to PekoPay,
                two things stood out: the cashback, and the onboarding
                experience with a live person. Not a ticket. Not a chatbot. A
                direct call that got them set up and running.
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <span className="num">01</span>
                <h3>Live onboarding with a real person — often the founder</h3>
              </div>
              <div className="security-card">
                <span className="num">02</span>
                <h3>
                  Canadian support team that understands how Canadian businesses
                  operate
                </h3>
              </div>
              <div className="security-card">
                <span className="num">03</span>
                <h3>
                  Same-day demo calls available when you&rsquo;re ready to see it
                  in action
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="block cta-sec">
          <div className="wrap">
            <div className="cta-inner">
              <h2>Open an Account and Start Processing in Bulk</h2>
              <p className="cta-sub">
                Charge More Clients, Earn More Cashback, Spend Less Time Billing
              </p>
              <p className="cta-body">
                PekoPay batch processing is ready for membership clubs, real
                estate brokerages, and any medium to enterprise business ready
                to stop doing billing one invoice at a time.
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
