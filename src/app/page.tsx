import Link from "next/link";
import CashbackCalculator from "@/components/CashbackCalculator";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Spotlight from "@/components/Spotlight";

function ArrowSvg() {
  return (
    <svg
      className="arrow-svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
      {/* ============ 1. HERO ============ */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>
              Payments that pay you{" "}
              <span className="accent-word">back.</span>
            </h1>
            <p className="hero-sub">
              No contracts. No monthly fees. Cashback on every transaction.
            </p>
            <p className="hero-body">
              PekoPay is a Canadian payment processor built for businesses that
              want to keep more of what they earn. Accept payments, get paid on
              your schedule, and earn cashback on every transaction you run.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-gold btn-lg" href="/login">
                Start Now
                <ArrowSvg />
              </Link>
              <Link className="btn btn-outline btn-lg" href="/contact-us">
                Talk to Sales
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-img-wrap">
              <img
                src="/hero-person.jpg"
                alt="Business professional working in an office"
                className="hero-img"
              />
              <div className="hero-img-badge">
                <span className="num">+0.8%</span>
                <span className="txt">Cashback on every transaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. TRUSTED BY ============ */}
      <section className="trusted">
        <div className="wrap trusted-row">
          <div className="trusted-label">
            Trusted by businesses in BC &amp; beyond
          </div>
          <div className="trusted-logos">
            <img
              src="/logo-stratapress.png"
              alt="StrataPress"
              className="trusted-logo-img"
            />
            <img
              src="/logo-pemberton.jpg"
              alt="Pemberton Holmes"
              className="trusted-logo-img"
            />
          </div>
        </div>
      </section>

      {/* ============ 3. PLATFORM GRID ============ */}
      <section className="block platform-sec" id="platform">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Platform</span>
              <h2 className="sec-h2">
                Every way to get{" "}
                <span className="accent-word">paid</span>, in one place.
              </h2>
              <p className="sub">Nine tools, one account, one set of books.</p>
            </div>
            <p className="body">
              Whether you bill monthly, quote first, charge in batches, or just
              need a link you can text someone, it runs through the same
              platform and earns cashback the same way.
            </p>
          </div>

          <div className="platform-layout">
            <div className="invoice-mock" aria-hidden="true">
              <div className="invoice-head">
                <span className="id">INV-2026-0421</span>
                <span className="status">Paid · +Cashback</span>
              </div>
              <div className="invoice-meta">
                <div>
                  <div className="k">Billed to</div>
                  <div className="v">Sooke Landing Marina</div>
                </div>
                <div>
                  <div className="k">Due</div>
                  <div className="v">May 24, 2026</div>
                </div>
              </div>
              <div className="invoice-lines">
                <div className="invoice-line">
                  <span>Mooring services, May</span>
                  <span className="amt">$4,200.00</span>
                </div>
                <div className="invoice-line">
                  <span>Fuel &amp; provisioning</span>
                  <span className="amt">$2,840.00</span>
                </div>
                <div className="invoice-line">
                  <span>Maintenance retainer</span>
                  <span className="amt">$1,500.00</span>
                </div>
              </div>
              <div className="invoice-total">
                <span className="lbl">Total paid</span>
                <span className="val">$8,540.00</span>
              </div>
              <div className="invoice-cashback">
                <span>Cashback earned on this invoice</span>
                <span className="val">+ $68.32</span>
              </div>
            </div>

            <div className="platform-cards">
              <div className="platform-group">
                <span className="platform-group-label">Solutions</span>
                <div className="platform-grid">
                  <Link className="platform-card" href="/solution/invoicing">
                    <h3>Invoicing</h3>
                    <p>Send professional invoices and get paid faster.</p>
                  </Link>
                  <Link
                    className="platform-card"
                    href="/solution/payment-links"
                  >
                    <h3>Payment Links</h3>
                    <p>Share a link, take a payment. No website needed.</p>
                  </Link>
                  <Link
                    className="platform-card"
                    href="/solution/subscriptions"
                  >
                    <h3>Subscriptions</h3>
                    <p>Recurring billing that runs on its own.</p>
                  </Link>
                  <Link
                    className="platform-card"
                    href="/solution/batch-processing"
                  >
                    <h3>Batch Processing</h3>
                    <p>Charge hundreds of customers in a single run.</p>
                  </Link>
                  <Link className="platform-card" href="/solution/quotes">
                    <h3>Quotes</h3>
                    <p>Send a quote, turn it into a payment once approved.</p>
                  </Link>
                </div>
              </div>

              <div className="platform-group">
                <span className="platform-group-label">Features</span>
                <div className="platform-grid">
                  <Link className="platform-card" href="/feature/card-vault">
                    <h3>Card Vault</h3>
                    <p>Store cards securely and charge them again anytime.</p>
                  </Link>
                  <Link
                    className="platform-card"
                    href="/feature/customer-manager"
                  >
                    <h3>Customer Manager</h3>
                    <p>Every customer, payment, and card on one record.</p>
                  </Link>
                  <Link
                    className="platform-card"
                    href="/feature/custom-reports"
                  >
                    <h3>Custom Reports</h3>
                    <p>Build the reports your business actually runs on.</p>
                  </Link>
                  <Link className="platform-card" href="/feature/integrations">
                    <h3>Integrations</h3>
                    <p>Connect the tools you already use.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p className="platform-note">
            Accepting payments from outside Canada? PekoPay supports over 100
            currencies.
          </p>
        </div>
      </section>

      {/* ============ 4. TERMS AND PAYOUTS ============ */}
      <section className="block terms-sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Terms &amp; payouts</span>
              <h2 className="sec-h2">
                Keep your money moving on your{" "}
                <span className="accent-word">terms.</span>
              </h2>
              <p className="sub">
                No lock-in, no surprises, no waiting on someone else&apos;s
                schedule.
              </p>
            </div>
            <p className="body">
              Most processors make leaving expensive and getting paid slow. We
              do neither. You decide how often the money lands, and you can walk
              away whenever you want.
            </p>
          </div>

          <div className="terms-grid">
            <div className="security-card">
              <span className="num">— 01</span>
              <h3>No long-term contracts</h3>
              <p>
                Leave whenever you want. Nothing to cancel, no exit fee, no
                notice period.
              </p>
            </div>
            <div className="security-card">
              <span className="num">— 02</span>
              <h3>No monthly fees</h3>
              <p>
                You pay when you process. When you don&apos;t process, you
                don&apos;t pay.
              </p>
            </div>
            <div className="security-card">
              <span className="num">— 03</span>
              <h3>Payouts on your schedule</h3>
              <p>
                Choose next day, weekly, or monthly. Change it whenever you
                like.
              </p>
            </div>
            <div className="security-card">
              <span className="num">— 04</span>
              <h3>Control your deposit costs</h3>
              <p>
                Your bank charges a fee per deposit. Set the frequency that
                suits your cash flow and your costs.
              </p>
            </div>
          </div>

          <div className="sec-cta">
            <Link className="btn btn-outline" href="/pricing">
              See pricing
              <ArrowSvg />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 5. CASHBACK CALC ============ */}
      <section className="block cashback-sec" id="cashback">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Cashback</span>
              <h2 className="sec-h2">
                Earn <span className="accent-word">cashback</span> on every
                payment.
              </h2>
              <p className="sub">From your very first transaction.</p>
            </div>
            <p className="body">
              There&apos;s no volume you have to hit and no tier you have to
              reach. Every transaction you process earns cashback, whether you
              run four hundred dollars a month or four hundred thousand.
            </p>
          </div>

          <ul className="checklist checklist-row">
            <li>Earn from your first transaction</li>
            <li>No minimum volume to qualify</li>
            <li>No holdbacks and no expiry</li>
          </ul>

          <CashbackCalculator />
        </div>
      </section>

      {/* ============ 6. WHY WE CAN DO THIS ============ */}
      <section className="block why-sec">
        <div className="wrap">
          <div className="why-inner">
            <span className="kicker">Why cashback</span>
            <h2 className="sec-h2">
              How we can <span className="accent-word">afford</span> to do
              this.
            </h2>
            <p>
              It&apos;s the question we get more than any other. Every payment
              processor earns a margin on the transactions it handles. Most of
              them keep all of it. We take a large portion of ours and give it
              back to the business that earned it in the first place.
            </p>
            <p>
              That&apos;s the whole mechanism. There&apos;s no partner bank
              funding it, no promotional period, and no clawback later.
            </p>
            <Link
              className="text-link"
              href="/earn-cashback/how-cashback-works"
            >
              How cashback works
              <ArrowSvg />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 7. SUPPORT AND ONBOARDING ============ */}
      <section className="block support-sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Support</span>
              <h2 className="sec-h2">
                A real person, usually within 30{" "}
                <span className="accent-word">minutes.</span>
              </h2>
              <p className="sub">The part everyone finds out about too late.</p>
            </div>
            <p className="body">
              Most businesses don&apos;t think about support until the day a
              payment fails and nobody picks up. We&apos;d rather you find out
              now.
            </p>
          </div>

          <div className="support-grid">
            <div className="security-card">
              <span className="num">— 01</span>
              <h3>Under 30 minutes</h3>
              <p>Typical response time during business hours.</p>
            </div>
            <div className="security-card">
              <span className="num">— 02</span>
              <h3>Same-day meetings</h3>
              <p>Need to talk it through? Book a call and get it the same day.</p>
            </div>
            <div className="security-card">
              <span className="num">— 03</span>
              <h3>We move your cards for you</h3>
              <p>
                Coming from another processor? We migrate your stored cards and
                recurring billing so nothing breaks and nobody re-enters
                anything.
              </p>
            </div>
            <div className="security-card">
              <span className="num">— 04</span>
              <h3>Help to your first $10K</h3>
              <p>
                A real person walks you through setup and stays with you through
                your first transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 8. INTEGRATIONS ============ */}
      <section className="block integrations-sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Integrations</span>
              <h2 className="sec-h2">
                Works with the <span className="accent-word">tools</span> you
                already run on.
              </h2>
            </div>
            <p className="body">
              PekoPay connects to the software your business already uses, so
              payments and cashback land where your books and your records
              already live. If you&apos;d rather build it yourself, the API is
              open.
            </p>
          </div>

          <div className="qb-callout">
            <img
              src="/logo-quickbooks.png"
              alt="QuickBooks"
              className="qb-logo"
            />
            <div className="qb-copy">
              <h3>Works seamlessly with QuickBooks.</h3>
              <p>
                Sync your payments and cashback directly into QuickBooks. No
                manual entry and no reconciliation headaches, just books that
                stay current on their own.
              </p>
            </div>
          </div>

          <p className="integrations-row">
            Also connects with Lone Wolf, plus more integrations added
            regularly.
          </p>

          <div className="sec-cta">
            <Link className="btn btn-outline" href="/feature/integrations">
              See all integrations
              <ArrowSvg />
            </Link>
            <Link className="btn btn-outline" href="/developer">
              Read the API docs
              <ArrowSvg />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 9. PROOF ============ */}
      <section className="block proof-sec">
        <div className="wrap">
          <span className="kicker proof-eyebrow">Customers</span>
        </div>

        <Spotlight />

        <div className="wrap">
          <div className="testimonials-grid">
            <figure className="testimonial">
              <blockquote>
                We&apos;ve had a great experience working with the PekoPay team.
                Their platform has been a valuable addition to our operations,
                providing a simple and efficient way to manage payments. What
                stands out most is their responsiveness and willingness to
                support our team whenever needed. It&apos;s clear they care
                about their partners and are committed to continuously improving
                their service. We appreciate the relationship and look forward to
                continuing to work together.
              </blockquote>
              <figcaption>
                <img
                  src="/logo-pemberton.jpg"
                  alt="Pemberton Holmes"
                  className="testimonial-logo"
                />
              </figcaption>
            </figure>

            <figure className="testimonial">
              <blockquote>
                We&apos;ve had an excellent experience working with PekoPay. The
                onboarding process was smooth, and their team has been incredibly
                responsive and helpful in getting our payment gateway and
                subscription management set up properly. Their support has been
                outstanding, and the processing rates are very competitive.
                It&apos;s refreshing to work with a company that is both easy to
                reach and genuinely invested in helping its clients succeed.
                Highly recommended from the team at StrataPress.
              </blockquote>
              <figcaption>
                <img
                  src="/logo-stratapress.png"
                  alt="StrataPress"
                  className="testimonial-logo"
                />
              </figcaption>
            </figure>
          </div>

          <div className="industries-row">
            <h3>Built for businesses that bill regularly.</h3>
            <div className="industries-list">
              <span className="ind">Real estate brokerages</span>
              <span className="ind">Strata and property management</span>
              <span className="ind">Professional services</span>
              <span className="ind">Home services</span>
              <span className="ind">Membership organizations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 10. SECURITY AND CANADIAN TRUST ============ */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head-center">
            <h2>
              Built in Canada.{" "}
              <span className="accent-word">Secured</span> to the highest
              standard.
            </h2>
          </div>

          <div className="security-grid security-grid-4">
            <div className="security-card">
              <span className="num">— 01</span>
              <h3>PCI DSS Level 1</h3>
              <p>
                The highest tier of the payment card industry&apos;s security
                standard, validated annually by an independent assessor. Held
                in-house, so you don&apos;t need your own compliant storage.
              </p>
              <div className="stamp">PCI</div>
            </div>
            <div className="security-card">
              <span className="num">— 02</span>
              <h3>99.99% uptime</h3>
              <p>The platform your revenue runs through stays up.</p>
              <div className="stamp stamp-sm">99.99</div>
            </div>
            <div className="security-card">
              <span className="num">— 03</span>
              <h3>3D Secure authentication</h3>
              <p>
                An extra verification step on every transaction that cuts fraud
                and chargebacks.
              </p>
              <div className="stamp">3DS</div>
            </div>
            <div className="security-card">
              <span className="num">— 04</span>
              <h3>Canadian by design</h3>
              <p>
                Built and run from Vancouver, for Canadian businesses, with a
                team in your time zone.
              </p>
              <div className="stamp">CA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 11. FAQ TEASER ============ */}
      <section className="block faq-teaser-sec">
        <div className="wrap">
          <div className="sec-head-center">
            <h2>
              Questions we get a <span className="accent-word">lot.</span>
            </h2>
          </div>

          <div className="faq-teaser-grid">
            <div className="faq-teaser-item">
              <h3>Is there a contract or a monthly fee?</h3>
              <p>
                Neither. No long-term commitment, no monthly fee, and nothing to
                cancel if you decide to leave.
              </p>
            </div>
            <div className="faq-teaser-item">
              <h3>How much cashback do I earn?</h3>
              <p>
                Cashback is earned on every transaction with no minimum volume
                to qualify. Use the calculator above for an estimate based on
                what you process.
              </p>
            </div>
            <div className="faq-teaser-item">
              <h3>How soon do I get paid?</h3>
              <p>
                You choose next day, weekly, or monthly. Settlement time after
                that depends on your bank.
              </p>
            </div>
            <div className="faq-teaser-item">
              <h3>Do I need to be PCI compliant myself?</h3>
              <p>
                No. PekoPay holds PCI DSS Level 1 certification in-house, so you
                don&apos;t need your own compliant card storage.
              </p>
            </div>
          </div>

          <div className="sec-cta sec-cta-center">
            <Link className="btn btn-outline" href="/faq">
              Read all FAQs
              <ArrowSvg />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 12. FINAL CTA ============ */}
      <section className="block cta-sec">
        <div className="wrap">
          <div className="cta-inner">
            <h2>
              Ready to earn <span className="accent-word">cashback</span> on
              every payment?
            </h2>
            <p className="cta-body">
              Join businesses across Canada keeping more of what they process.
              Setup takes minutes and there&apos;s nothing to sign.
            </p>
            <div className="cta-actions">
              <Link className="btn btn-gold btn-lg" href="/login">
                Get Started
                <ArrowSvg />
              </Link>
              <Link className="btn btn-outline btn-lg" href="/contact-us">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PARTNER BAND ============ */}
      <section className="partner-band">
        <div className="wrap partner-band-inner">
          <p>
            <strong>Financial professional?</strong> Refer businesses to
            PekoPay and earn recurring commissions.
          </p>
          <Link className="text-link" href="/partnerships/referral-program">
            Join the referral program
            <ArrowSvg />
          </Link>
        </div>
      </section>

      </main>

      <SiteFooter />
    </>
  );
}
