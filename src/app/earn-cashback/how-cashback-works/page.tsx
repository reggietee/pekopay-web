import type { Metadata } from "next";
import Link from "next/link";
import CashbackCalculator from "@/components/CashbackCalculator";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "How Cashback Works — PekoPay",
  description:
    "With PekoPay, every transaction you process earns you cashback. See how earning works and estimate your annual cashback.",
};

const PARTNERS = [
  { src: "/assets/partners/Joumaa-Johnson.svg", alt: "Joumaa Johnson" },
  { src: "/assets/partners/SookeLanding.svg", alt: "Sooke Landing" },
  { src: "/assets/partners/VanIsleGroup.svg", alt: "Van Isle Group" },
];

export default function CashbackPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="sec-head-center" style={{ marginBottom: 0 }}>
              <h1>
                Earn <span className="italic">Cashback</span> on Every Payment
                with PekoPay
              </h1>
              <p className="hero-sub" style={{ marginTop: 18 }}>
                Get Paid to Process Payments
              </p>
              <p className="cta-body" style={{ marginTop: 22 }}>
                With PekoPay, every transaction you process earns you
                cashback—helping you save money and grow your business
                effortlessly.
              </p>
              <div
                className="cta-actions"
                style={{ marginTop: 32, justifyContent: "center" }}
              >
                <Link className="btn btn-gold btn-lg" href="/login">
                  Open An Account
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>How Earning Cashback Works</h2>
              <p className="cta-sub">Turn Every Payment Into Earnings</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                Unlike traditional payment processors that charge high fees,
                PekoPay rewards you with cashback every time you accept a payment
                from your customers.
              </p>
            </div>
            <ul className="checklist checklist-row">
              <li>Earn cashback on every transaction</li>
              <li>The more you process, the more you earn</li>
              <li>No limits—cashback applies to all payments</li>
            </ul>
            <p
              className="cta-sub"
              style={{ textAlign: "center", marginTop: 8 }}
            >
              Switch to PekoPay and start getting paid for processing payments!
            </p>
          </div>
        </section>

        {/* TRUSTED BY */}
        <section className="trusted">
          <div className="wrap trusted-row">
            <div className="trusted-label">Trusted By</div>
            <div className="trusted-logos">
              {PARTNERS.map((p) => (
                <img
                  key={p.alt}
                  src={p.src}
                  alt={p.alt}
                  className="trusted-logo-img"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CALCULATOR */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Cashback Calculator</h2>
              <p className="cta-sub">See How Much You Can Earn!</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                Wondering how much cashback you could be earning? Our Cashback
                Calculator helps you estimate your potential savings in just a
                few clicks.
              </p>
            </div>
            <CashbackCalculator />
          </div>
        </section>

        {/* BENEFIT CARDS */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="feature-cards">
              <article className="feature-card">
                <h3>Payout Date</h3>
                <p className="sub">Get Paid Every Year</p>
                <p className="intro">
                  Your cashback earnings are paid out annually on the anniversary
                  of your PekoPay account signup.
                </p>
                <ul className="checklist">
                  <li>Consistent yearly cashback payout</li>
                  <li>Easy to track your earnings</li>
                  <li>A hassle-free way to earn while you process payments</li>
                </ul>
                <p className="note">
                  Sign up today and start accumulating cashback right away!
                </p>
              </article>

              <article className="feature-card">
                <h3>Tax-Free Earnings</h3>
                <p className="sub">Keep More of Your Money</p>
                <p className="intro">
                  Good news! The cashback you earn with PekoPay is completely
                  tax-free. That means you get to keep every dollar earned,
                  without worrying about deductions.
                </p>
                <ul className="checklist">
                  <li>100% tax-free cashback</li>
                  <li>No hidden fees or reductions</li>
                  <li>More money back into your business</li>
                </ul>
              </article>

              <article className="feature-card">
                <h3>How You Can Use Your Cashback</h3>
                <p className="sub">Reinvest, Save, or Spend—It&rsquo;s Your Choice</p>
                <p className="intro">
                  Your cashback earnings can be used however you like. Whether you
                  want to reinvest in your business, save for future expenses, or
                  enjoy personal rewards, the choice is yours!
                </p>
                <ul className="checklist">
                  <li>Offset your payment processing costs</li>
                  <li>Reinvest in marketing or business growth</li>
                  <li>Save or withdraw as extra income</li>
                </ul>
                <p className="note">
                  Start earning cashback today and watch your savings grow with
                  every payment!
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
