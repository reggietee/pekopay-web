import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Perks — PekoPay",
  description:
    "Join PekoPay to unlock exclusive discounts and financial benefits from our trusted partners — insurance rebates, business banking, and more.",
};

type Perk = {
  logo: string;
  alt: string;
  title?: string;
  sub?: string;
  body: string;
};

const PERKS: Perk[] = [
  {
    logo: "/assets/perks/CanadaLife.svg",
    alt: "Canada Life",
    body: "Businesses that set up a group insurance plan through the PekoPay Perks link will receive free lifetime access to online doctors for their employees, ensuring convenient and immediate healthcare support. This exclusive benefit helps businesses enhance employee wellness while saving on healthcare costs.",
  },
  {
    logo: "/assets/perks/Manulife.svg",
    alt: "Manulife",
    body: "Businesses that open a Manulife Bank business account through PekoPay will enjoy 1.45% interest on account holdings, no monthly fees, and free bank-to-bank transfers. This allows businesses to maximize their savings while benefiting from a hassle-free banking experience.",
  },
  {
    logo: "/assets/perks/Joumaa-Johnson.png",
    alt: "Joumaa-Johnson Financial",
    body: "When businesses purchase a term life insurance policy through any of Joumaa-Johnson Financial's insurance partners, they will receive a 19% rebate on all policy premiums. This exclusive discount helps businesses and individuals secure financial protection at a lower cost.",
  },
  {
    logo: "/assets/perks/Getresponse.webp",
    alt: "GetResponse",
    title: "Exclusive PekoPay Discount",
    sub: "Save on GetResponse’s leading email marketing platform.",
    body: "PekoPay users enjoy an exclusive 10% discount on all services from GetResponse, the leading email marketing and automation platform. Whether you're building a mailing list, launching campaigns, or optimizing your sales funnels, PekoPay members can unlock savings on powerful tools that help grow your business—just for being part of the PekoPay network.",
  },
];

export default function PerksPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="sec-head-center" style={{ marginBottom: 0 }}>
              <h1>
                Unlock <span className="italic">Exclusive</span>{" "}
                Discounts &amp; Benefits for Your Business
              </h1>
              <p className="cta-body" style={{ marginTop: 24 }}>
                When you join PekoPay, you gain access to exclusive perks,
                discounts, and financial benefits from our trusted partners. From
                premium rebates on insurance to high-interest business banking and
                free virtual healthcare, maximize your savings while growing your
                business.
              </p>
            </div>
          </div>
        </section>

        {/* PERKS */}
        <section className="block" style={{ paddingTop: 80 }}>
          <div className="wrap">
            <div className="feature-cards two-col">
              {PERKS.map((perk) => (
                <article className="feature-card" key={perk.alt}>
                  <img src={perk.logo} alt={perk.alt} className="perk-logo" />
                  {perk.title && <h3>{perk.title}</h3>}
                  {perk.sub && <p className="sub">{perk.sub}</p>}
                  <p className="body">{perk.body}</p>
                  <div className="perk-actions">
                    <Link className="btn btn-ghost" href="#">
                      Learn More
                    </Link>
                    <Link className="btn btn-gold" href="/login">
                      Unlock Perk
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
