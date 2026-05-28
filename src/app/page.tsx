import CashbackCalculator from "@/components/CashbackCalculator";
import MobileMenu from "@/components/MobileMenu";

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
      {/* ============ NAV ============ */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="logo" aria-label="PekoPay home">
            <span className="logo-mark">P</span>
            <span>PekoPay</span>
          </a>
          <div className="nav-links">
            <a href="#solution">Solutions</a>
            <a href="#cashback">Cashback</a>
            <a href="#partner">Partnerships</a>
          </div>
          <div className="nav-cta">
            <a className="btn btn-ghost" href="#signin">
              Sign In
            </a>
            <a className="btn btn-dark" href="#signup">
              Get Started
            </a>
          </div>
          <MobileMenu />
        </div>
      </nav>

      <main id="main-content">
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-intro">
            <span className="eyebrow">Payment processing, rewarded</span>
          </div>

          <div className="hero-statement">
            <h1>
              Every payment you process{" "}
              <span className="italic">earns you money.</span>
            </h1>
          </div>

          <div className="hero-rate" aria-label="0.8% cashback rate">
            <span className="hero-rate-plus">+</span>
            <span className="hero-rate-num">0.8</span>
            <span className="hero-rate-pct">%</span>
            <span className="hero-rate-label">
              cashback on<br />every transaction
            </span>
          </div>

          <div className="hero-bottom">
            <p className="hero-body">
              PekoPay helps businesses accept payments while earning cashback on
              every transaction. Save money, improve cash flow, and grow your
              business — all from one platform.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-gold btn-lg" href="#signup">
                Start Now
                <ArrowSvg />
              </a>
              <a className="btn btn-outline btn-lg" href="#contact">
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUSTED BY ============ */}
      <section className="trusted">
        <div className="wrap trusted-row">
          <div className="trusted-label">
            Trusted by businesses in BC &amp; beyond
          </div>
          <div className="trusted-logos">
            <span className="trusted-logo">
              <span className="dot" />
              Joumaa-Johnson
            </span>
            <span className="trusted-logo">
              <span className="dot" />
              SookeLanding
            </span>
            <span className="trusted-logo">
              <span className="dot" />
              VanIsleGroup
            </span>
          </div>
        </div>
      </section>

      {/* ============ INVOICING ============ */}
      <section className="block" id="solution">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">01 · Invoicing</span>
              <h2 className="sec-h2">
                Invoice &amp; get paid{" "}
                <span className="accent-italic">with cashback.</span>
              </h2>
              <p className="sub">
                Simplify payments &amp; boost your earnings.
              </p>
            </div>
            <p className="body">
              Send invoices, accept payments, and earn cashback—all in one
              platform. With PekoPay&apos;s invoicing feature, businesses can
              streamline collections and watch rewards stack up automatically.
            </p>
          </div>

          <div className="invoicing-grid">
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
                  <span>Mooring services — May</span>
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

            <div className="invoice-copy">
              <span className="eyebrow">What you get</span>
              <h3 className="invoice-copy-heading">
                One workflow. Three wins, every invoice.
              </h3>
              <ul className="checklist">
                <li>Accept online payments from clients effortlessly</li>
                <li>Track invoices and get paid faster</li>
                <li>Earn cashback for every transaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CASHBACK CALC ============ */}
      <section className="block cashback-sec" id="cashback">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">02 · Cashback</span>
              <h2 className="sec-h2">
                Earn cashback on{" "}
                <span className="accent-italic">every payment.</span>
              </h2>
              <p className="sub">Turn payment processing into profit.</p>
            </div>
            <p className="body">
              Unlike traditional payment processors, PekoPay rewards you for
              every transaction. The more you process, the more you earn.
            </p>
          </div>

          <ul className="checklist checklist-row">
            <li>Earn cashback on every sale</li>
            <li>Reduce your payment processing costs</li>
            <li>Keep more of your hard-earned money</li>
          </ul>

          <CashbackCalculator />
        </div>
      </section>

      {/* ============ CURRENCIES ============ */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head-solo">
            <h2>
              Accept payments in{" "}
              <span className="accent-italic">100+ currencies.</span>
            </h2>
          </div>

          <p className="sec-body-intro">
            Expand your business beyond borders. PekoPay lets you accept
            payments in over 100 currencies — built for businesses that
            don&apos;t stop at the city limit.
          </p>

          <div className="currencies-grid">
            <div className="currency-cards">
              <div className="item">
                <span className="num">01</span>
                <div>
                  <h3>Sell internationally with no hassle</h3>
                  <p>
                    Accept payments from customers around the world without
                    needing multiple payment processors.
                  </p>
                </div>
                <span className="ch">USD · EUR · JPY</span>
              </div>
              <div className="item">
                <span className="num">02</span>
                <div>
                  <h3>Offer customers their preferred payment currency</h3>
                  <p>
                    Enhance customer experience by letting them pay in their
                    local currency, increasing trust and sales.
                  </p>
                </div>
                <span className="ch">+97 more</span>
              </div>
              <div className="item">
                <span className="num">03</span>
                <div>
                  <h3>Reduce currency conversion fees</h3>
                  <p>
                    Minimize additional costs with automatic currency conversions
                    at competitive rates.
                  </p>
                </div>
                <span className="ch">Live FX</span>
              </div>
              <div className="item">
                <span className="num">04</span>
                <div>
                  <h3>Simplify global transactions</h3>
                  <p>
                    Receive payouts in your preferred currency without the need
                    to open foreign bank accounts.
                  </p>
                </div>
                <span className="ch">1-day payout</span>
              </div>
            </div>

            <div className="globe">
              <div className="globe-head">
                <div>
                  <div className="globe-label">Settle in</div>
                  <div className="globe-num">
                    100<span className="plus">+</span>
                  </div>
                  <div className="globe-label globe-label-sub">
                    currencies worldwide
                  </div>
                </div>
              </div>
              <div className="globe-pills">
                <span className="hot">CAD</span>
                <span className="hot">USD</span>
                <span>EUR</span>
                <span>GBP</span>
                <span>JPY</span>
                <span>AUD</span>
                <span>CHF</span>
                <span>SGD</span>
                <span>HKD</span>
                <span>NZD</span>
                <span>SEK</span>
                <span>NOK</span>
                <span>DKK</span>
                <span>MXN</span>
                <span>BRL</span>
                <span>ZAR</span>
                <span>INR</span>
                <span>+84</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECURITY ============ */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head-center">
            <h2>
              Security &amp; compliance{" "}
              <span className="accent-italic">you can trust.</span>
            </h2>
          </div>

          <div className="security-grid">
            <div className="security-card">
              <span className="num">— 01</span>
              <h3>PCI-DSS Compliance</h3>
              <p>
                Keeping your customers&apos; payment data secure with the
                highest industry standard for cardholder information.
              </p>
              <div className="stamp">PCI</div>
            </div>
            <div className="security-card">
              <span className="num">— 02</span>
              <h3>GDPR &amp; PSD2 Compliance</h3>
              <p>
                Meeting European security standards for data protection and
                strong customer authentication on every transaction.
              </p>
              <div className="stamp">EU</div>
            </div>
            <div className="security-card">
              <span className="num">— 03</span>
              <h3>3D Secure Authentication</h3>
              <p>
                Reducing fraud and chargebacks with an additional verification
                step that puts your business on safer ground.
              </p>
              <div className="stamp">3DS</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SPOTLIGHT ============ */}
      <section className="block spotlight-sec">
        <div className="spotlight">
          <div className="spotlight-img">
            <span className="spotlight-img-tag">Case study</span>
            <div className="placeholder-art">
              [ Photo: Sooke Landing Marina — coastal aerial ]
            </div>
            <span className="spotlight-img-caption">
              — Vancouver Island, British Columbia
            </span>
          </div>
          <div className="spotlight-body">
            <span className="eyebrow">Company spotlight</span>
            <h2>Sooke Landing Marina</h2>
            <p className="sub">A business thriving with PekoPay.</p>
            <p className="body">
              Sooke Landing Marina processes payments seamlessly with PekoPay,
              earning cashback while providing customers with smooth, secure
              transactions.
            </p>
            <a href="#solution" className="spotlight-link">
              Learn more
              <ArrowSvg />
            </a>
          </div>
        </div>
      </section>

      {/* ============ PARTNER PROGRAM ============ */}
      <section className="block partner-sec" id="partner">
        <div className="wrap">
          <div className="partner-grid">
            <div>
              <span className="eyebrow">03 · Partner Program</span>
              <h2 className="sec-h2">
                Join the PekoPay{" "}
                <span className="italic">Partner Program.</span>
              </h2>
              <p className="partner-sub">
                Earn recurring commissions as a partner.
              </p>
              <p className="partner-body">
                Are you a financial industry professional? Refer businesses to
                PekoPay and earn recurring commissions while helping your clients
                save on payment processing.
              </p>
              <div className="partner-cta">
                <a className="btn btn-gold-on-dark btn-lg" href="#apply">
                  Apply as a partner
                  <ArrowSvg />
                </a>
              </div>
            </div>

            <div className="partner-benefits">
              <div className="benefit-row">
                <span className="benefit-num">— 01</span>
                <p>Competitive commission structure</p>
              </div>
              <div className="benefit-row">
                <span className="benefit-num">— 02</span>
                <p>No upfront costs — just refer &amp; earn</p>
              </div>
              <div className="benefit-row">
                <span className="benefit-num">— 03</span>
                <p>Help businesses maximize their savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section className="block cta-sec" id="contact">
        <div className="wrap">
          <div className="cta-inner">
            <h2>
              Ready to earn cashback on{" "}
              <span className="accent-italic">every payment?</span>
            </h2>
            <p className="cta-body">
              Join businesses across Canada that are saving money on every
              transaction with PekoPay. Get started in minutes.
            </p>
            <div className="cta-actions">
              <a className="btn btn-gold btn-lg" href="#signup">
                Get Started
                <ArrowSvg />
              </a>
              <a className="btn btn-outline btn-lg" href="#contact">
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      </main>

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <a href="#" className="logo">
                <span className="logo-mark">P</span>
                <span>PekoPay</span>
              </a>
              <p>
                The smarter way to process payments — built for businesses that
                want to earn while they grow.
              </p>
              <p className="foot-address">
                1021 West Hastings St, 9th Floor
                <br />
                Vancouver, BC V6C 2R6
              </p>
            </div>
            <div className="foot-col">
              <h5>Solution</h5>
              <ul>
                <li>
                  <a href="#">Invoicing</a>
                </li>
                <li>
                  <a href="#">Payments Coming Soon</a>
                </li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Partnership</h5>
              <ul>
                <li>
                  <a href="#">Referral Program</a>
                </li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Cashback</h5>
              <ul>
                <li>
                  <a href="#">Earning Cashback</a>
                </li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Compliance &amp; Fraud Prevention</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-bot">
            <span>© 2026 PekoPay, Inc. All Rights Reserved.</span>
            <div className="links">
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
