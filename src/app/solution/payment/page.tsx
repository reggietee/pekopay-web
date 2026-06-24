import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Payment Options — PekoPay",
  description:
    "New payment options are coming soon to PekoPay — crypto, recurring payments, virtual terminal, online and mobile checkout, all with cashback.",
};

type Feature = {
  title: string;
  sub: string;
  intro: string;
  points: string[];
  note: string;
};

const FEATURES: Feature[] = [
  {
    title: "Crypto Payments",
    sub: "Get Paid in Cryptocurrency—Instantly & Securely",
    intro:
      "Stay ahead of the curve with PekoPay’s upcoming crypto payment feature. Soon, businesses will be able to:",
    points: [
      "Accept Bitcoin, Ethereum, and other major cryptocurrencies",
      "Get instant conversions to local currency if needed",
      "Offer customers more payment flexibility",
    ],
    note: "A game-changer for businesses looking to attract tech-savvy and international clients.",
  },
  {
    title: "Subscriptions & Recurring Payments",
    sub: "Automate Payments & Keep Revenue Flowing",
    intro:
      "PekoPay will soon support automated recurring payments, perfect for:",
    points: [
      "Subscription-based businesses",
      "Membership fees & retainers",
      "Monthly service contracts",
    ],
    note: "With our upcoming recurring payments feature, you can set up automatic billing and ensure a steady cash flow—while earning cashback on every transaction!",
  },
  {
    title: "Virtual Terminal",
    sub: "Accept Payments Over the Phone or In-Person",
    intro:
      "No card reader? No problem! The upcoming PekoPay Virtual Terminal allows businesses to:",
    points: [
      "Process credit & debit card payments securely from any device",
      "Take payments over the phone or via email orders",
      "Accept remote transactions with ease",
    ],
    note: "Fast, secure, and ideal for businesses that need a flexible payment solution without additional hardware.",
  },
  {
    title: "Online Checkout",
    sub: "Seamless Payment Integration for Your Website",
    intro: "PekoPay’s soon-to-launch online checkout will allow businesses to:",
    points: [
      "Integrate a payment gateway into their website",
      "Accept credit cards, bank transfers, and digital wallets",
      "Provide a smooth, secure checkout experience for customers",
    ],
    note: "Perfect for eCommerce stores and service-based businesses looking to streamline online payments while earning cashback.",
  },
  {
    title: "Mobile Checkout",
    sub: "Turn Your Phone into a Payment Terminal",
    intro:
      "With PekoPay’s upcoming Mobile Checkout feature, you’ll be able to:",
    points: [
      "Accept payments on the go from your smartphone or tablet",
      "Process tap, chip, or QR code payments without extra hardware",
      "Offer customers a convenient, contactless way to pay",
    ],
    note: "Ideal for mobile businesses, food vendors, and service providers on the move.",
  },
];

export default function PaymentPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Coming Soon</span>
              <h1 style={{ marginTop: 20 }}>
                New Payment Options Coming Soon to{" "}
                <span className="italic">PekoPay!</span>
              </h1>
              <p className="hero-sub">More Ways to Get Paid &amp; Earn Cashback</p>
              <p className="hero-body">
                Exciting new payment options are on the way! PekoPay is expanding
                to offer even more flexible ways for businesses to accept
                payments—while continuing to earn cashback on every transaction.
              </p>
            </div>
            <div className="hero-visual">
              <div className="pay-accounts">
                <div className="pay-accounts-label">Accounts</div>
                <div className="pay-account-row">
                  <div>
                    <div className="pay-account-name">Checking account</div>
                    <div className="pay-account-sub">PekoPay · CAD</div>
                  </div>
                  <div className="pay-account-bal">$12,557.97</div>
                </div>
                <div className="pay-account-row">
                  <div>
                    <div className="pay-account-name">Savings account</div>
                    <div className="pay-account-sub">PekoPay · CAD</div>
                  </div>
                  <div className="pay-account-bal">$9,436.41</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="block" style={{ paddingTop: 96 }}>
          <div className="wrap">
            <div className="feature-cards">
              {FEATURES.map((f) => (
                <article className="feature-card" key={f.title}>
                  <h3>{f.title}</h3>
                  <p className="sub">{f.sub}</p>
                  <p className="intro">{f.intro}</p>
                  <ul className="checklist">
                    {f.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <p className="note">{f.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="block cta-sec">
          <div className="wrap">
            <div className="cta-inner">
              <h2>Be the First to Access These Payment Options!</h2>
              <p className="cta-body">
                PekoPay is constantly evolving to bring you the best payment
                solutions. Don&rsquo;t miss out—sign up today and get notified
                when these new payment options launch!
              </p>
              <div className="cta-actions">
                <Link className="btn btn-gold btn-lg" href="/login">
                  Open a PekoPay Account Now
                </Link>
                <Link className="btn btn-outline btn-lg" href="/contact-us">
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
