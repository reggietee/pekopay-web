import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Pricing — PekoPay",
  description:
    "Transparent, competitive, cashback-driven pricing. See PekoPay's standard card rates, volume pricing, and full fee schedule.",
};

type Fee = { name: string; rate?: string; note?: string };

function FeeCard({ name, rate, note }: Fee) {
  return (
    <div className="price-card">
      <span className="name">{name}</span>
      {rate && <span className="rate">{rate}</span>}
      {note && <span className="note">{note}</span>}
    </div>
  );
}

const ALT_PAYMENTS: Fee[] = [
  {
    name: "ApplePay, GooglePay, SRC, W3C",
    rate: "Included",
    note: "Wallets included at no added cost, above card processing fees do apply",
  },
  {
    name: "Direct Debit",
    rate: "0.50% + $0.30",
    note: "US ACH, EU SEPA, CA PAD, AU BECS",
  },
  { name: "PayByBank", rate: "0.50% + $0.30" },
  { name: "iDeal", rate: "0.00% + $0.80" },
  { name: "Giropay", rate: "1.40% + $0.30" },
  { name: "Sofort", rate: "1.40% + $0.30" },
  { name: "eNets", rate: "3.25% + $0.30" },
  { name: "Alipay", rate: "3.75% + $0.30" },
  { name: "WebMoney", rate: "1.55% + $0.30" },
  { name: "Skrill", rate: "1.95% + $0.30" },
  { name: "CashU", rate: "7.50% + $0.30" },
  { name: "PaySafeCard", rate: "10.5% + $0.30" },
  {
    name: "Boleto Bancario",
    rate: "0.50% + $2.00",
    note: "Plus 20.4% in repatriation taxes paid to Brazilian authorities",
  },
  {
    name: "Local LATAM Acquiring",
    rate: "4.50% + $0.30",
    note: "Mexico, Brazil, Argentina, Chile, Columbia transactions processed by local Bank; Fee does not include FX conversion fees that may be charged by the acquiring bank",
  },
];

const CHARGEBACK_GENERAL: Fee[] = [
  {
    name: "Chargeback Fee",
    rate: "$25 / chargeback",
    note: "Transactions settled by a third party, i.e. Amex & PayPal",
  },
  {
    name: "Direct Debit / Bank Transfer Reversals",
    rate: "$15 / reversal",
    note: "Includes failed, cancelled or disputed payments",
  },
  {
    name: "US Direct Debit Account Validation",
    rate: "$1.50 / validation",
    note: "Per NACHA requirement to validate each account before processing",
  },
];

const CHARGEBACK_REPRESENTMENT: Fee[] = [
  {
    name: "Self Service & PekoPay",
    rate: "Represented Chargebacks: $10 / dispute",
    note: "Representing 2nd chargebacks will result in a passthrough cost set by the card schemes",
  },
  {
    name: "Full Service Representment",
    rate: "$15 / reversal",
    note: "Representing 2nd chargebacks will result in a passthrough cost set by the card schemes",
  },
];

const CHARGEBACK_PREVENTION: Fee[] = [
  {
    name: "Order Insight by Verifi (coming soon)",
    rate: "Tier 1,2,3 = $0.20, $0.30, $0.50 / inquiry",
    note: "A pre-chargeback inquiry from Visa, Tier Determined based on MCC",
  },
  {
    name: "Transaction Retrieval Requests (TRR)",
    rate: "$7 / transaction",
    note: "A pre-chargeback inquiry from American Express or Discover",
  },
  {
    name: "TC40 & SAFE Refund",
    rate: "$40 / transaction",
    note: "Chargeback Mitigation Service, May be required for certain MCCs",
  },
];

const CHARGEBACK_RESOLUTION: Fee[] = [
  {
    name: "Ethoca & Verifi Chargeback Prevention Alerts",
    note: "May be required for certain MCCs",
  },
  {
    name: "PekoPay Rapid Dispute Resolution Fee (RDR)",
    rate: "Tier 1, 2, 3 = $10, $25, $40",
    note: "When enrolled by PekoPay, Tier Determined based on MCC",
  },
  {
    name: "PekoPay RDR Handling Fee",
    rate: "$5 / RDR",
    note: "When enrolled by PekoPay",
  },
  {
    name: "Non-PekoPay RDR Handling Fee",
    rate: "$15 / RDR",
    note: "When enrolled by 3rd Party",
  },
];

const SALES_OPTIMIZATION: Fee[] = [
  {
    name: "Failover Transactions",
    rate: "$0.80 / success",
    note: "Charged when a PekoPay initiated failover results in a successful transaction",
  },
  {
    name: "Account Updater",
    rate: "$0.50 / repair",
    note: "Includes cards migrated from another processor; See documentation for billable responses",
  },
  {
    name: "Visa Network Token Credential Updates",
    rate: "$0.09 / authorization",
    note: "Charged when token PAN or expiration date is updated and used in an authorization attempt",
  },
  {
    name: "Manually Entered Cards",
    rate: "0.50% of transaction value",
    note: "i.e. Virtual Terminal",
  },
  {
    name: "Subscription Manager",
    rate: "0.70% of recurring transaction value",
  },
  { name: "Vendor Transfer Fees", rate: "CA ACH/EFT $0.50; Wire $20.00" },
  { name: "Split Payments", rate: "0.25% of amount paid to vendor" },
];

const FRAUD: Fee[] = [
  {
    name: "Portfolio Configuration (enabled by default)",
    rate: "$0.05 / transaction",
    note: "PekoPay manages fraud, enabled by default",
  },
  {
    name: "Custom Configuration",
    rate: "$0.07 / transaction",
    note: "PekoPay manages fraud with Merchant configured rules",
  },
  {
    name: "Complete Configuration",
    rate: "$7,500 / setup + $0.03 / transaction",
    note: "Merchant manages instance of fraud & rules",
  },
];

const COMPLIANCE: Fee[] = [
  {
    name: "Tax Management Service",
    rate: "0.50% per transaction",
    note: "Includes tax set up, implementation, guidance and tax handling",
  },
  { name: "3DSecure", rate: "$0.05 / transaction" },
  {
    name: "PCI Documentation",
    rate: "$50 / month",
    note: "Per MID without valid PCI documentation",
  },
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="sec-head-center" style={{ marginBottom: 0 }}>
              <h1>
                PekoPay <span className="italic">Pricing</span>
              </h1>
              <p className="hero-sub" style={{ marginTop: 18 }}>
                Transparent, Competitive, and Cashback-Driven
              </p>
              <p className="cta-body" style={{ marginTop: 22 }}>
                PekoPay offers straightforward pricing that allows businesses to
                process payments seamlessly while earning cashback on every
                transaction.
              </p>
            </div>
          </div>
        </section>

        {/* STANDARD + VOLUME */}
        <section className="block" style={{ paddingTop: 96 }}>
          <div className="wrap">
            <div className="feature-cards">
              <article className="feature-card">
                <h3>Standard Card Pricing</h3>
                <p className="sub">Simple, Competitive, and No Hidden Fees</p>
                <p className="intro">
                  Our standard card pricing ensures you get a great rate while
                  earning cashback on every payment.
                </p>
                <div className="price-lines">
                  <div className="price-line">
                    <span className="k">CA Issued Cards</span>
                    <span className="v">2.90% + $0.30</span>
                  </div>
                  <div className="price-line">
                    <span className="k">Non-CA Issued Cards</span>
                    <span className="v">3.50% + $0.30</span>
                  </div>
                  <div className="price-line">
                    <span className="k">Uncaptured Authorizations</span>
                    <span className="v">$0.10</span>
                  </div>
                </div>
                <ul className="checklist">
                  <li>No setup fees</li>
                  <li>No hidden charges</li>
                  <li>Earn cashback on every transaction</li>
                </ul>
              </article>

              <article className="feature-card">
                <h3>Volume-Based Pricing</h3>
                <p className="sub">Bigger Volume, Better Rates</p>
                <p className="intro">
                  Processing high transaction volumes? We offer customized
                  pricing to help you maximize your savings and cashback.
                </p>
                <ul className="checklist">
                  <li>Exclusive lower rates for high-volume businesses</li>
                  <li>
                    Personalized pricing based on your monthly processing volume
                  </li>
                  <li>Contact us to discuss your unique needs</li>
                </ul>
                <div style={{ marginTop: 24 }}>
                  <Link className="btn btn-gold" href="/contact-us">
                    Talk to Sales About Volume Pricing
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ALTERNATIVE PAYMENT TYPES */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Alternative Payment Types</h2>
              <p className="cta-sub">ApplePay, GooglePay, SRC, W3C</p>
              <p className="sec-body-intro" style={{ margin: "20px auto 0" }}>
                Wallets included at no added cost, above card processing fees do
                apply.
              </p>
            </div>
            <div className="price-grid">
              {ALT_PAYMENTS.map((f) => (
                <FeeCard key={f.name} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* CONVEYED TRANSACTIONS */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Conveyed Transactions</h2>
            </div>
            <div className="price-grid">
              <FeeCard
                name="Gateway Fee"
                rate="0.10% + $0.10"
                note="Transactions settled by a third party, i.e. Amex & PayPal"
              />
            </div>
          </div>
        </section>

        {/* CHARGEBACK MANAGEMENT (dark) */}
        <section className="block partner-sec">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Chargeback Management Options</h2>
            </div>
            <p className="price-subhead" style={{ color: "var(--gold-soft)" }}>
              General
            </p>
            <div className="price-grid">
              {CHARGEBACK_GENERAL.map((f) => (
                <FeeCard key={f.name} {...f} />
              ))}
            </div>
            <p className="price-subhead" style={{ color: "var(--gold-soft)" }}>
              Representment Tools
            </p>
            <div className="price-grid">
              {CHARGEBACK_REPRESENTMENT.map((f) => (
                <FeeCard key={f.name} {...f} />
              ))}
            </div>
            <p className="price-subhead" style={{ color: "var(--gold-soft)" }}>
              Prevention Tools
            </p>
            <div className="price-grid">
              {CHARGEBACK_PREVENTION.map((f) => (
                <FeeCard key={f.name} {...f} />
              ))}
            </div>
            <p className="price-subhead" style={{ color: "var(--gold-soft)" }}>
              Resolution Tools
            </p>
            <div className="price-grid">
              {CHARGEBACK_RESOLUTION.map((f) => (
                <FeeCard key={f.name} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* OPTIONAL OTHER FUNCTIONALITY */}
        <section className="block">
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Optional Other Functionality</h2>
            </div>
            <p className="price-subhead">Sales Optimization</p>
            <div className="price-grid">
              {SALES_OPTIMIZATION.map((f) => (
                <FeeCard key={f.name} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* FRAUD MANAGEMENT */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Fraud Management Options</h2>
            </div>
            <div className="price-grid">
              {FRAUD.map((f) => (
                <FeeCard key={f.name} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* COMPLIANCE AND TAXES */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Compliance and Taxes</h2>
            </div>
            <div className="price-grid">
              {COMPLIANCE.map((f) => (
                <FeeCard key={f.name} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* SETTLEMENT & IMPLEMENTATION */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head-center">
              <h2>Settlement &amp; Implementation</h2>
            </div>
            <div className="settle-grid">
              <div className="price-card">
                <span className="name">Settlement Currencies</span>
                <ul className="checklist" style={{ marginTop: 16 }}>
                  <li>Fees within this schedule denoted in CAD.</li>
                  <li>
                    Payments will be net settled and transactions reported to the
                    merchant in CAD.
                  </li>
                  <li>
                    Should the presentment currency differ from the settlement
                    currency, applicable FX fees will be applied.
                  </li>
                </ul>
              </div>
              <div className="price-card">
                <span className="name">Settlement Timing</span>
                <ul className="checklist" style={{ marginTop: 16 }}>
                  <li>Payout Frequency: Daily</li>
                  <li>Payout Timing from Settlement: 3 business days</li>
                  <li>
                    Please see PekoPay.com for settlement timing by payment type.
                  </li>
                  <li>
                    In the event that a payment day falls on a weekend or national
                    holiday then the payment will be initiated on the next bank
                    business day.
                  </li>
                </ul>
              </div>
              <div className="price-card">
                <span className="name">Settlement Cost</span>
                <p className="note" style={{ marginTop: 16 }}>
                  Transfer Fees: ACH/EFT $0.50; Wire $20.00 *
                </p>
                <p className="note">
                  *The cost of a wire does not include any intermediary or
                  receiving bank fees potentially associated with international
                  wires.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
