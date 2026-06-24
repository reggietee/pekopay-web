import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";
import { PRIMARY_CTA } from "./navConfig";

export default function SiteHeader() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo" aria-label="PekoPay home">
          <img
            src="/pekopay-logo-mockup.png"
            alt="PekoPay"
            className="logo-img"
          />
        </Link>
        <NavMenu />
        <div className="nav-cta">
          <Link className="btn btn-dark" href={PRIMARY_CTA.href}>
            {PRIMARY_CTA.label}
          </Link>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
