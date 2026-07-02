import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Customer Manager — PekoPay",
  description:
    "Manage your client profiles, payment methods, subscriptions, and billing details — all from one place in PekoPay.",
};

export default function CustomerManagerPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                Every Client. Every Card. Every Detail.{" "}
                <span className="italic">One Place.</span>
              </h1>
              <p className="hero-sub">
                A CRM Built Around How Your Clients Actually Pay You.
              </p>
              <p className="hero-body">
                PekoPay Customer Manager gives you a complete profile for every
                client — their contact details, stored payment methods, active
                subscriptions, and billing history — so your team can manage
                accounts without jumping between tools.
              </p>
              <div className="hero-ctas">
                <Link className="btn btn-gold btn-lg btn-wrap" href="/login">
                  Start Managing Your Clients – Open An Account Now!
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="/assets/solutions/phone.svg"
                alt="PekoPay customer manager client profile"
                className="solution-phone"
              />
            </div>
          </div>
        </section>

        {/* CASHBACK */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Every Client Transaction Earns You Cashback</h2>
              <p className="cta-sub">
                Customer Manager Makes It Easy to Run More Transactions — and Earn
                on All of Them
              </p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                The more organized your client accounts, the more efficiently you
                collect. Every transaction processed through a managed client
                profile earns you cashback — whether it&rsquo;s a one-time charge,
                a recurring subscription, or a batch run.
              </p>
            </div>
            <ul className="checklist checklist-row">
              <li>Cashback earned on every transaction across all managed clients</li>
              <li>Organized profiles mean faster charging and fewer missed payments</li>
              <li>Cashback tracked per client in your reporting dashboard</li>
            </ul>
          </div>
        </section>

        {/* FULL PROFILES — copy LEFT / image RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="invoice-copy solution-copy">
              <h2>Full Client Profiles — Not Just a Card on File</h2>
              <p className="cta-sub">
                Contact Details, Payment Methods, and Billing History in One
                Profile
              </p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                PekoPay Customer Manager goes beyond card storage. Each client
                profile holds their email, address, tax invoice history, active
                subscriptions, and every payment method they&rsquo;ve stored — so
                your team has everything they need to manage an account without
                asking the client twice.
              </p>
              <ul className="checklist">
                <li>Store email, address, and tax invoice details per client</li>
                <li>Multiple payment methods saved and selectable per profile</li>
                <li>Full billing history accessible from the client record</li>
              </ul>
            </div>
            <div className="solution-figure">
              <img
                src="/assets/solutions/invoice.svg"
                alt="Full client profile in PekoPay Customer Manager"
              />
            </div>
          </div>
        </section>

        {/* MANAGE FROM ONE SCREEN — image LEFT / copy RIGHT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap invoicing-grid">
            <div className="solution-figure">
              <img
                src="/assets/solutions/reminders.svg"
                alt="Managing subscriptions in PekoPay Customer Manager"
              />
            </div>
            <div className="invoice-copy solution-copy">
              <h2>Manage Subscriptions and Payment Methods from One Screen</h2>
              <p className="cta-sub">Add, Switch, or Remove — Without Touching the Client</p>
              <p className="hero-body" style={{ marginTop: 18 }}>
                When a client wants to change their card, pause a subscription, or
                update their billing details, your team handles it directly from
                their profile. No back-and-forth. No re-sending forms. The account
                secretary equivalent — built into PekoPay.
              </p>
              <ul className="checklist">
                <li>Add or remove subscriptions directly from the client profile</li>
                <li>Switch between stored payment methods with one click</li>
                <li>Update billing details without requiring client re-entry</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WHAT IT LETS YOU DO (light) */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>What Customer Manager Lets You Do</h2>
              <p className="cta-sub">Full Account Control Without Leaving PekoPay</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                Everything your team needs to manage a client relationship — from
                first payment to ongoing billing — lives inside the client
                profile.
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <span className="num">01</span>
                <h3>
                  Create a client profile with contact details, stored cards, and
                  tax invoice preferences
                </h3>
              </div>
              <div className="security-card">
                <span className="num">02</span>
                <h3>
                  Manage active subscriptions — add, pause, or cancel directly
                  from the profile
                </h3>
              </div>
              <div className="security-card">
                <span className="num">03</span>
                <h3>
                  Switch payment methods, update billing details, and view full
                  transaction history per client
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* PAYMENT CRM (dark) */}
        <section className="block partner-sec">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>The Payment CRM Your Business Has Been Missing</h2>
              <p className="partner-sub">
                Built for Teams That Manage Accounts, Not Just Transactions
              </p>
              <p className="partner-body" style={{ margin: "20px auto 0" }}>
                Most payment processors give you a transaction list. PekoPay gives
                you a client management system. Whether you&rsquo;re a law office
                with a billing secretary, a property manager handling dozens of
                accounts, or a service business with recurring clients — Customer
                Manager gives your team the control they need.
              </p>
            </div>
            <div className="dark-cards">
              <div className="dark-card">
                <span className="num">01</span>
                <h3>
                  Purpose-built for teams managing multiple client accounts with
                  different billing needs
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">02</span>
                <h3>
                  Replaces the spreadsheet-and-email approach most businesses fall
                  back on
                </h3>
              </div>
              <div className="dark-card">
                <span className="num">03</span>
                <h3>
                  Canadian support team available to help configure client
                  profiles and billing workflows
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="block cta-sec">
          <div className="wrap">
            <div className="cta-inner">
              <h2>Open an Account and Take Control of Your Client Billing</h2>
              <p className="cta-sub">
                Profiles. Cards. Subscriptions. All Managed in One Place.
              </p>
              <p className="cta-body">
                PekoPay Customer Manager works for any business managing more than
                a handful of clients — from independent operators to enterprise
                accounts. Get set up today and give your team the tools to manage
                every client relationship properly.
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
