import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="logo">
              <img
                src="/pekopay-logo-mockup.png"
                alt="PekoPay"
                className="logo-img logo-img-footer"
              />
            </Link>
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
                <Link href="/solution/invoicing">Invoicing</Link>
              </li>
              <li>
                <Link href="/solution/batch-processing">Batch Processing</Link>
              </li>
              <li>
                <Link href="/solution/payment-links">Payment Links</Link>
              </li>
              <li>
                <Link href="/solution/quotes">Quotes</Link>
              </li>
              <li>
                <Link href="/solution/subscriptions">Subscriptions</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Features</h5>
            <ul>
              <li>
                <Link href="/feature/card-vault">Card Vault</Link>
              </li>
              <li>
                <Link href="/feature/custom-reports">Custom Reports</Link>
              </li>
              <li>
                <Link href="/feature/customer-manager">Customer Manager</Link>
              </li>
              <li>
                <Link href="/feature/integrations">Integrations</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Partnership</h5>
            <ul>
              <li>
                <Link href="/partnerships/referral-program">
                  Referral Program
                </Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Cashback</h5>
            <ul>
              <li>
                <Link href="/earn-cashback/how-cashback-works">
                  Earning Cashback
                </Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Blog</h5>
            <ul>
              <li>
                <Link href="/blog">All Posts</Link>
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
  );
}
