import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Referral Program — PekoPay",
  description:
    "Earn passive income by referring friends to PekoPay. Share your link and earn commissions on every transaction they process.",
};

export default function ReferralPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                Share &amp; <span className="italic">Earn</span> with PekoPay!
              </h1>
              <p className="hero-sub">
                Earn Passive Income by Referring Your Friends
              </p>
              <p className="hero-body">
                Get rewarded for spreading the word! Invite your friends to use
                PekoPay, and you&rsquo;ll earn passive commissions every time they
                process a transaction. No limits, no hassle—just easy earnings!
              </p>
              <div className="hero-ctas">
                <Link className="btn btn-gold btn-lg" href="/login">
                  Start Referring Now
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="advance-card">
                <span className="advance-label">Cash Advance</span>
                <div className="advance-value">$250</div>
                <div className="advance-limit">Cash Advance Limit $650</div>
                <div className="advance-track">
                  <div className="advance-fill" />
                </div>
                <div className="advance-scale">
                  <span>$0</span>
                  <span>$1000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>How It Works</h2>
              <p className="cta-sub">Simple Steps to Earn Rewards</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                Referring friends to PekoPay is easy:
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <span className="num">01</span>
                <h3>Share Your Unique Referral Link</h3>
                <p>Invite friends to sign up using your personalized link.</p>
              </div>
              <div className="security-card">
                <span className="num">02</span>
                <h3>They Sign Up &amp; Process Payments</h3>
                <p>
                  Your referrals join PekoPay and start processing transactions.
                </p>
              </div>
              <div className="security-card">
                <span className="num">03</span>
                <h3>You Earn Passive Commissions</h3>
                <p>
                  Receive a commission on every payment they process, for as long
                  as they use PekoPay!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UNLIMITED EARNING (dark band) */}
        <section className="block partner-sec">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Unlimited Earning Potential</h2>
              <p className="partner-sub">No Caps, No Limits!</p>
              <p className="partner-body" style={{ margin: "20px auto 0" }}>
                Unlike other referral programs, PekoPay lets you earn unlimited
                commissions. Whether you refer one friend or a hundred,
                you&rsquo;ll continue to receive a percentage of their
                transactions—every time they process a payment.
              </p>
            </div>
          </div>
        </section>

        {/* WHO CAN YOU REFER */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Who Can You Refer?</h2>
              <p className="cta-sub">Help Businesses Save &amp; Earn</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                PekoPay is perfect for:
              </p>
            </div>
            <div className="security-grid">
              <div className="security-card">
                <span className="num">01</span>
                <h3>Small Business Owners</h3>
                <p>Save on transaction fees while earning cashback.</p>
              </div>
              <div className="security-card">
                <span className="num">02</span>
                <h3>Freelancers &amp; Entrepreneurs</h3>
                <p>Process payments efficiently with built-in rewards.</p>
              </div>
              <div className="security-card">
                <span className="num">03</span>
                <h3>E-commerce Stores</h3>
                <p>Seamless online payment processing with cashback perks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GET PAID HASSLE-FREE */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Get Paid Hassle-Free</h2>
              <p className="cta-sub">Fast &amp; Secure Payouts</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                PekoPay ensures you get rewarded seamlessly:
              </p>
            </div>
            <div className="feature-cards">
              <article className="feature-card">
                <h3>Direct Deposits</h3>
                <p className="intro">
                  Commissions are paid directly to your PekoPay wallet or bank
                  account.
                </p>
              </article>
              <article className="feature-card">
                <h3>Regular Payouts</h3>
                <p className="intro">Get paid on a consistent schedule.</p>
              </article>
              <article className="feature-card">
                <h3>Transparent Reporting</h3>
                <p className="intro">Track your earnings in real time.</p>
              </article>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="block cta-sec">
          <div className="wrap">
            <div className="cta-inner">
              <h2>Start Referring Today!</h2>
              <p className="cta-sub">Join in Just a Few Clicks</p>
              <p className="cta-body">
                Sign up for the PekoPay Referral Program today and start earning
                immediately. It&rsquo;s quick, easy, and completely free! Sign up,
                share your link, and watch your earnings grow!
              </p>
              <div className="cta-actions">
                <Link className="btn btn-gold btn-lg" href="/login">
                  Start Referring Now
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
