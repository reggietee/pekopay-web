import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Quotes — PekoPay",
  description:
    "Send a quote, collect a deposit, and invoice for the rest — all in one place. PekoPay closes the gap between estimate and payment for service businesses.",
};

export default function QuotesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                From Quote to Deposit to <span className="italic">Paid</span> —
                All in One Place
              </h1>
              <p className="hero-sub">
                Send Estimates. Secure Deposits. Invoice When the Work is Done.
              </p>
              <p className="hero-body">
                Most payment processors make you manage quotes and invoices in
                two completely separate tools. PekoPay connects the whole
                workflow — send a professional quote, collect a deposit to
                confirm the job, and issue the final invoice when you&rsquo;re
                done.
              </p>
              <div className="hero-ctas">
                <Link className="btn btn-gold btn-lg btn-wrap" href="/login">
                  Start Quoting Today – Open An Account Now!
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="/assets/solutions/phone.svg"
                alt="PekoPay quotes and deposit workflow"
                className="solution-phone"
              />
            </div>
          </div>
        </section>

        {/* CASHBACK */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Earn Cashback from the First Dollar Collected</h2>
              <p className="cta-sub">Deposits and Final Payments Both Earn</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                PekoPay cashback applies to every transaction in the quotes
                workflow — the deposit when the job is booked and the final
                payment when the work is complete. Every dollar collected puts
                money back in your pocket.
              </p>
            </div>
            <ul className="checklist checklist-row">
              <li>Earn cashback on deposit transactions</li>
              <li>Earn cashback on final invoice payments</li>
              <li>Cashback applies automatically — nothing to set up</li>
            </ul>
          </div>
        </section>

        {/* SEND A QUOTE — copy LEFT / image RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="invoice-copy solution-copy">
              <h2>Send a Professional Quote in Minutes</h2>
              <p className="cta-sub">Look Established Before the Job Even Starts</p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                Create a detailed quote from your PekoPay dashboard, itemize the
                scope of work, and send it directly to your client. They review,
                approve, and you&rsquo;re ready to move forward — no
                back-and-forth, no separate tools.
              </p>
              <ul className="checklist">
                <li>Itemize scope, materials, and labour in one quote</li>
                <li>Send directly to your client via email</li>
                <li>Client approval captured before any work begins</li>
              </ul>
            </div>
            <div className="solution-figure">
              <img
                src="/assets/solutions/invoice.svg"
                alt="PekoPay quote being sent to a client"
              />
            </div>
          </div>
        </section>

        {/* SECURE A DEPOSIT — image LEFT / copy RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="solution-figure">
              <img
                src="/assets/solutions/reminders.svg"
                alt="Deposit secured on quote approval"
              />
            </div>
            <div className="invoice-copy solution-copy">
              <h2>Secure a Deposit to Confirm the Job</h2>
              <p className="cta-sub">Protect Your Time Before You Show Up</p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                Once your client approves the quote, PekoPay collects the deposit
                to lock in the booking. No more showing up to a job that falls
                through. The deposit is secured at approval and held until
                you&rsquo;re ready to collect the balance.
              </p>
              <ul className="checklist">
                <li>Deposit collected at quote approval — not after the job</li>
                <li>Client payment details secured at the time of booking</li>
                <li>Protects your time and your schedule</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>How the Quote Workflow Works</h2>
              <p className="cta-sub">
                One Connected Flow from Estimate to Final Payment
              </p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                No switching between tools. No chasing deposits after the fact.
                The whole job lives in PekoPay from first quote to final payment.
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <span className="num">01</span>
                <h3>
                  Create and send a quote with a full breakdown of the work and
                  a deposit amount
                </h3>
              </div>
              <div className="security-card">
                <span className="num">02</span>
                <h3>
                  Your client approves the quote and the deposit is secured at
                  that moment
                </h3>
              </div>
              <div className="security-card">
                <span className="num">03</span>
                <h3>
                  Complete the work, issue the final invoice through PekoPay, and
                  collect the balance
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* TRADES & SERVICE BUSINESSES (dark) */}
        <section className="block partner-sec">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Built for the Gap Other Platforms Left Open</h2>
              <p className="partner-sub">
                Service Titan and Jobber Don&rsquo;t Connect Quotes to Invoices —
                PekoPay Does
              </p>
              <p className="partner-body" style={{ margin: "20px auto 0" }}>
                Trade businesses have been telling us the same thing: their
                current tools handle quotes in one place and invoices in another.
                That disconnect costs time, creates confusion, and makes chasing
                deposits harder than it needs to be. PekoPay closes that gap.
              </p>
            </div>
            <div className="dark-cards">
              <div className="dark-card">
                <span className="num">01</span>
                <h3>
                  Quotes, deposits, and final invoices managed in a single
                  platform
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">02</span>
                <h3>
                  Purpose-built for trade and service businesses that work on a
                  quote-first model
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">03</span>
                <h3>
                  Canadian support team ready to get your quotes workflow set up
                  from day one
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="block cta-sec">
          <div className="wrap">
            <div className="cta-inner">
              <h2>Open an Account and Start Closing Jobs</h2>
              <p className="cta-sub">
                Quote It. Secure It. Invoice It. All with PekoPay.
              </p>
              <p className="cta-body">
                PekoPay quotes are built for contractors, tradespeople, and
                service businesses who are done managing estimates and invoices
                in two separate places. Get set up today and start collecting
                deposits the moment a client says yes.
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
