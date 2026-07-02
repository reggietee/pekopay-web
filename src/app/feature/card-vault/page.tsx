import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Card Vault — PekoPay",
  description:
    "Store client payment details securely, stay PCI compliant, and eliminate the cost of third-party card storage tools — all built into PekoPay.",
};

export default function CardVaultPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                Store Client Cards <span className="italic">Securely.</span>{" "}
                Never Chase Payment Details Again.
              </h1>
              <p className="hero-sub">
                PCI Compliant Card Storage — Built In, Not Bolted On.
              </p>
              <p className="hero-body">
                Stop storing client card details in spreadsheets and third-party
                tools. PekoPay Card Vault stores payment information securely,
                keeps your business PCI compliant, and charges stored cards
                automatically — so your team never has to re-enter a number.
              </p>
              <div className="hero-ctas">
                <Link className="btn btn-gold btn-lg btn-wrap" href="/login">
                  Secure Your Client Cards – Open An Account Now!
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="/assets/solutions/phone.svg"
                alt="PekoPay card vault secure storage"
                className="solution-phone"
              />
            </div>
          </div>
        </section>

        {/* CASHBACK */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Earn Cashback on Every Stored Card Transaction</h2>
              <p className="cta-sub">
                Card Vault Doesn&rsquo;t Just Save Time — It Earns
              </p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                Every charge processed through a stored card in PekoPay earns you
                cashback. Whether you&rsquo;re running a single recurring client
                or hundreds of stored accounts, every transaction puts money back
                in your pocket.
              </p>
            </div>
            <ul className="checklist checklist-row">
              <li>Earn cashback on every stored card transaction</li>
              <li>Cashback applies to one-time and recurring charges alike</li>
              <li>No extra steps — earnings are automatic on every run</li>
            </ul>
          </div>
        </section>

        {/* SECURE STORAGE — copy LEFT / image RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="invoice-copy solution-copy">
              <h2>
                Client Cards Stored Securely — Your Team Sees Only the Last Four
                Digits
              </h2>
              <p className="cta-sub">PCI Compliance Without the Third-Party Bill</p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                PekoPay Card Vault encrypts and stores client payment details so
                your team never handles raw card data. No spreadsheets. No
                exposed numbers. No third-party card storage subscription. PCI
                compliance is built into every PekoPay account at no additional
                cost.
              </p>
              <ul className="checklist">
                <li>
                  Full card data encrypted and vaulted — team sees last four
                  digits only
                </li>
                <li>PCI compliant by default — no additional software required</li>
                <li>Replaces costly third-party card storage subscriptions</li>
              </ul>
            </div>
            <div className="solution-figure">
              <img
                src="/assets/solutions/invoice.svg"
                alt="Encrypted card storage in PekoPay"
              />
            </div>
          </div>
        </section>

        {/* EXPIRY — image LEFT / copy RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="solution-figure">
              <img
                src="/assets/solutions/reminders.svg"
                alt="Automatic card expiry notification"
              />
            </div>
            <div className="invoice-copy solution-copy">
              <h2>Expired Cards Managed Automatically</h2>
              <p className="cta-sub">
                No More Manual Follow-Ups on Expiring Payment Details
              </p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                When a stored card is approaching its expiry date, PekoPay sends
                automatic notifications to both your team and your client. No
                manual tracking. No missed billing cycles. The right card is
                always on file when you need to run a charge.
              </p>
              <ul className="checklist">
                <li>Automatic expiry alerts sent to merchants and clients</li>
                <li>Clients prompted to update card details before expiry</li>
                <li>
                  Billing cycles protected — no failed charges from outdated cards
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (light) */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>How Card Vault Works</h2>
              <p className="cta-sub">Secure Storage in Three Steps</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                Simple enough for any team member to manage. Secure enough to
                replace your current setup entirely.
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <span className="num">01</span>
                <h3>
                  Client enters their card details once — securely stored to
                  their profile in PekoPay
                </h3>
              </div>
              <div className="security-card">
                <span className="num">02</span>
                <h3>
                  Your team charges the stored card any time — one-off, batch, or
                  recurring — without re-entering details
                </h3>
              </div>
              <div className="security-card">
                <span className="num">03</span>
                <h3>
                  PekoPay monitors expiry dates and notifies both parties
                  automatically when an update is needed
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* ONE PLATFORM (dark) */}
        <section className="block partner-sec">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>One Platform. No Add-On Subscriptions.</h2>
              <p className="partner-sub">
                Stop Paying Extra for What Should Already Be Included
              </p>
              <p className="partner-body" style={{ margin: "20px auto 0" }}>
                Businesses using Lone Wolf for batch processing often pay
                separately for third-party card storage tools just to store card
                data securely. With PekoPay, card vaulting is included — no
                monthly subscription, no volume-based pricing, no third-party
                dependency.
              </p>
            </div>
            <div className="dark-cards">
              <div className="dark-card">
                <span className="num">01</span>
                <h3>
                  Card vaulting included in your PekoPay account — no separate
                  subscription required
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">02</span>
                <h3>
                  Eliminates the need for third-party PCI compliance tools and
                  their associated fees
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">03</span>
                <h3>
                  One platform handles storage, charging, expiry management, and
                  cashback earnings
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES (light) */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Built for the Way Real Businesses Actually Store Cards</h2>
              <p className="cta-sub">From Spreadsheets to Secure Vault</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                Pemberton Holmes was managing client card details the way most
                businesses do — in a file, accessible to anyone who needed to run
                a charge. PekoPay Card Vault gave them a compliant, automated
                replacement that their accounting team could run without touching
                a single card number.
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <span className="num">01</span>
                <h3>
                  Real estate brokerages managing monthly fee cycles across
                  dozens of client accounts
                </h3>
              </div>
              <div className="security-card">
                <span className="num">02</span>
                <h3>
                  Cleaning companies with recurring clients whose card details
                  are entered once and stored permanently
                </h3>
              </div>
              <div className="security-card">
                <span className="num">03</span>
                <h3>
                  Any business currently storing card details in a spreadsheet,
                  email, or third-party tool
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="block cta-sec">
          <div className="wrap">
            <div className="cta-inner">
              <h2>Open an Account and Secure Your Client Cards</h2>
              <p className="cta-sub">PCI Compliant. Automated. Included.</p>
              <p className="cta-body">
                PekoPay Card Vault is ready for any business storing client
                payment details — from a handful of regulars to hundreds of
                accounts. Get set up today and retire the spreadsheet for good.
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
