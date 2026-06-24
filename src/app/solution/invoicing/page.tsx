import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Invoicing — PekoPay",
  description:
    "Send professional invoices, get paid quickly, and earn cashback on every transaction with PekoPay invoicing.",
};

export default function InvoicingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                Get Paid <span className="italic">Faster</span> with PekoPay
                Invoicing
              </h1>
              <p className="hero-sub">
                Send Invoices &amp; Earn Cashback on Every Payment
              </p>
              <p className="hero-body">
                Simplify your billing process with PekoPay&rsquo;s invoicing
                feature. Send professional invoices, get paid quickly, and earn
                cashback on every transaction—all in one seamless platform.
              </p>
              <div className="hero-ctas">
                <Link className="btn btn-gold btn-lg btn-wrap" href="/login">
                  Start Invoicing Today – Open An Account Now!
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="/assets/solutions/phone.svg"
                alt="PekoPay app on a phone"
                className="solution-phone"
              />
            </div>
          </div>
        </section>

        {/* MAXIMIZE EARNINGS */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Maximize Earnings with Cashback</h2>
              <p className="cta-sub">Every Invoice Transaction Earns You Money</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                With PekoPay, you don&rsquo;t just process payments—you earn on
                them! For every invoice paid, you receive cashback, reducing your
                payment processing costs and boosting your bottom line.
              </p>
            </div>
            <ul className="checklist checklist-row">
              <li>Earn cashback on every invoice transaction</li>
              <li>Reduce payment processing fees</li>
              <li>Keep more of your hard-earned revenue</li>
            </ul>
          </div>
        </section>

        {/* PROFESSIONAL & CUSTOMIZABLE INVOICES */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="invoice-copy solution-copy">
              <h2>Professional &amp; Customizable Invoices</h2>
              <p className="cta-sub">Make a Great Impression with Every Invoice</p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                Create sleek, branded invoices in minutes. PekoPay&rsquo;s
                invoicing tool lets you:
              </p>
              <ul className="checklist">
                <li>Customize invoices with your company logo and colors</li>
                <li>Add detailed line items, taxes, and notes</li>
                <li>Send invoices instantly via email or text</li>
              </ul>
            </div>
            <div className="solution-figure">
              <img
                src="/assets/solutions/invoice.svg"
                alt="A PekoPay invoice and card payment screen"
              />
            </div>
          </div>
        </section>

        {/* AUTOMATED PAYMENT REMINDERS */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="solution-figure">
              <img
                src="/assets/solutions/reminders.svg"
                alt="Automated payment reminders illustration"
              />
            </div>
            <div className="invoice-copy solution-copy">
              <h2>Automated Payment Reminders</h2>
              <p className="cta-sub">No More Chasing Late Payments</p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                Stay on top of unpaid invoices without the hassle.
                PekoPay&rsquo;s automated reminders:
              </p>
              <ul className="checklist">
                <li>Notify clients of upcoming due dates</li>
                <li>Send friendly reminders for overdue payments</li>
                <li>Help you get paid faster without manual follow-ups</li>
              </ul>
            </div>
          </div>
        </section>

        {/* REAL-TIME INVOICE TRACKING */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Real-Time Invoice Tracking</h2>
              <p className="cta-sub">Know When Your Invoice is Paid</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                Stay updated on the status of every invoice with real-time
                tracking:
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <span className="num">01</span>
                <h3>See when an invoice is viewed &amp; paid</h3>
              </div>
              <div className="security-card">
                <span className="num">02</span>
                <h3>Track outstanding payments</h3>
              </div>
              <div className="security-card">
                <span className="num">03</span>
                <h3>Get instant notifications for successful transactions</h3>
              </div>
            </div>
          </div>
        </section>

        {/* RECURRING INVOICING (dark) */}
        <section className="block partner-sec">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Recurring Invoicing Made Simple</h2>
              <p className="partner-sub">Automate Payments for Repeat Clients</p>
              <p className="partner-body" style={{ margin: "20px auto 0" }}>
                Save time by setting up recurring invoices for regular customers.
                With PekoPay, you can:
              </p>
            </div>
            <div className="dark-cards">
              <div className="dark-card">
                <span className="num">01</span>
                <h3>Schedule invoices to be sent automatically</h3>
              </div>
              <div className="dark-card">
                <span className="num">02</span>
                <h3>Set up flexible payment plans</h3>
              </div>
              <div className="dark-card">
                <span className="num">03</span>
                <h3>Offer installment billing options</h3>
              </div>
            </div>
          </div>
        </section>

        {/* SECURE & COMPLIANT */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Secure &amp; Compliant Transactions</h2>
              <p className="cta-sub">Protect Your Business &amp; Client Payments</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                PekoPay follows the highest security and compliance standards,
                including:
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <span className="num">PCI-DSS</span>
                <h3>PCI-DSS Compliance</h3>
                <p>Secure payment data protection</p>
              </div>
              <div className="security-card">
                <span className="num">3D SECURE</span>
                <h3>3D Secure Authentication</h3>
                <p>Fraud prevention measures</p>
              </div>
              <div className="security-card">
                <span className="num">GDPR · PSD2</span>
                <h3>GDPR &amp; PSD2 Compliance</h3>
                <p>Meeting global security standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="block cta-sec">
          <div className="wrap">
            <div className="cta-inner">
              <h2>Open an Account &amp; Start Invoicing Today!</h2>
              <p className="cta-sub">
                Get Paid Faster, Earn Cashback, &amp; Grow Your Business
              </p>
              <p className="cta-body">
                With PekoPay invoicing, you can streamline your billing, accept
                multiple payment methods, track invoices in real-time, and earn
                cashback on every transaction.
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
