import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Payment Links — PekoPay",
  description:
    "Create and share a payment link in seconds. No website required. Get paid from anywhere and earn cashback on every transaction with PekoPay.",
};

export default function PaymentLinksPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                Get Paid from Anywhere with a{" "}
                <span className="italic">Single Link</span>
              </h1>
              <p className="hero-sub">
                Create a Payment Link in Seconds. Share It Anywhere. Get Paid.
              </p>
              <p className="hero-body">
                No website. No checkout page. No developer. PekoPay payment
                links let you accept payments from any client, anywhere — send
                via email, text, or DM and get paid instantly.
              </p>
              <div className="hero-ctas">
                <Link className="btn btn-gold btn-lg btn-wrap" href="/login">
                  Create Your First Payment Link – Open An Account Now!
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="/assets/solutions/phone.svg"
                alt="PekoPay payment link share screen"
                className="solution-phone"
              />
            </div>
          </div>
        </section>

        {/* CASHBACK */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Every Payment Link Transaction Earns You Cashback</h2>
              <p className="cta-sub">You Don&rsquo;t Just Get Paid — You Earn</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                PekoPay cashback applies to every payment collected through a
                link. Whether you&rsquo;re sending one link or a hundred, every
                transaction puts money back in your pocket.
              </p>
            </div>
            <ul className="checklist checklist-row">
              <li>Earn cashback on every payment link transaction</li>
              <li>No minimum volume required to start earning</li>
              <li>Cashback stacks across every product you use on PekoPay</li>
            </ul>
          </div>
        </section>

        {/* SHARE ANYWHERE — copy LEFT / image RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="invoice-copy solution-copy">
              <h2>Set Up in Seconds, Share Anywhere</h2>
              <p className="cta-sub">Works Where Your Clients Already Are</p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                Generate a payment link directly from your PekoPay dashboard,
                set the amount, and share it however you communicate with
                clients — email, text, WhatsApp, Instagram, or anywhere else.
                Your client clicks, pays, and you&rsquo;re done.
              </p>
              <ul className="checklist">
                <li>Create a link in seconds from your dashboard</li>
                <li>Set a fixed amount or let the client enter their own</li>
                <li>Share via any channel — no integration required</li>
              </ul>
            </div>
            <div className="solution-figure">
              <img
                src="/assets/solutions/invoice.svg"
                alt="Payment link being shared via messaging"
              />
            </div>
          </div>
        </section>

        {/* EARLY STAGE — image LEFT / copy RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="solution-figure">
              <img
                src="/assets/solutions/reminders.svg"
                alt="Payment link opened on a mobile device"
              />
            </div>
            <div className="invoice-copy solution-copy">
              <h2>Perfect for Early-Stage and Independent Businesses</h2>
              <p className="cta-sub">
                Start Accepting Payments Before You Have a Website
              </p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                Payment links are how modern businesses close sales before
                they&rsquo;ve built out their full stack. Freelancers,
                independent contractors, market vendors, and early-stage shops
                use PekoPay links to collect payment the moment a client says
                yes.
              </p>
              <ul className="checklist">
                <li>No website or storefront required</li>
                <li>Ideal for service-based and freelance businesses</li>
                <li>Flexible enough to use at any stage of your business</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>How Payment Links Work</h2>
              <p className="cta-sub">Three Steps from Setup to Paid</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                Simple enough to use from your phone. Powerful enough to handle
                real volume.
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <span className="num">01</span>
                <h3>
                  Create a payment link in your PekoPay dashboard and set the
                  charge amount
                </h3>
              </div>
              <div className="security-card">
                <span className="num">02</span>
                <h3>
                  Share the link with your client by email, text, or any
                  messaging app
                </h3>
              </div>
              <div className="security-card">
                <span className="num">03</span>
                <h3>
                  Your client pays securely and you receive funds — with
                  cashback applied automatically
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* FLEXIBILITY (dark) */}
        <section className="block partner-sec">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Flexible Enough to Fit How You Already Work</h2>
              <p className="partner-sub">
                No Rigid Workflows. No Locked-In Systems.
              </p>
              <p className="partner-body" style={{ margin: "20px auto 0" }}>
                Unlike legacy processors that make custom setups a headache,
                PekoPay is built for flexibility. If you need to embed a link in
                a custom flow, connect it to your existing tools, or build
                something unique — our team works with you to make it happen.
              </p>
            </div>
            <div className="dark-cards">
              <div className="dark-card">
                <span className="num">01</span>
                <h3>
                  Embed payment links in emails, invoices, or any client-facing
                  document
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">02</span>
                <h3>
                  Flexible integration support for businesses building custom
                  workflows
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">03</span>
                <h3>
                  Canadian support team available when you need help configuring
                  your setup
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="block cta-sec">
          <div className="wrap">
            <div className="cta-inner">
              <h2>Open an Account and Start Getting Paid</h2>
              <p className="cta-sub">
                Simple Payments. Real Cashback. Zero Friction.
              </p>
              <p className="cta-body">
                PekoPay payment links work for businesses at every stage — from
                your first sale to your hundredth client. Get set up in minutes
                and start collecting payments today.
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
