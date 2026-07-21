import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import FaqExplorer from "./FaqExplorer";
import {
  allPublishedItems,
  answerToPlainText,
  categories,
  FAQ_INTRO,
  FAQ_LAST_MODIFIED,
  FAQ_LAST_MODIFIED_DISPLAY,
  featured,
  SITE_URL,
} from "./faqData";

const PAGE_URL = `${SITE_URL}/faq`;
const TITLE = "PekoPay FAQ | Canadian Payment Processing Questions Answered";
const DESCRIPTION =
  "Rates, deposit timing, cashback, security, and switching. Straight answers about PekoPay, the Canadian payment processor that pays merchants back.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "PekoPay",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Single JSON-LD graph: FAQPage (all published questions in document order),
// Organization, and BreadcrumbList — all generated from the data module.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faqpage`,
      url: PAGE_URL,
      name: TITLE,
      dateModified: FAQ_LAST_MODIFIED,
      mainEntity: allPublishedItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answerToPlainText(item.answer),
        },
      })),
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "PekoPay",
      url: SITE_URL,
      logo: `${SITE_URL}/pekopay-logo-mockup.png`,
      parentOrganization: {
        "@type": "Organization",
        name: "PekoLabs Inc.",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "1021 West Hastings St, 9th Floor",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V6C 2R6",
        addressCountry: "CA",
      },
      areaServed: "CA",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Resources", item: PAGE_URL },
        { "@type": "ListItem", position: 3, name: "FAQ", item: PAGE_URL },
      ],
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* HEADER + EXPLORER */}
        <section className="block">
          <div className="wrap">
            <div className="faq-header">
              <span className="eyebrow">Frequently Asked Questions</span>
              <h1>
                Answers to your{" "}
                <span className="accent-italic">questions.</span>
              </h1>
              <p className="faq-desc">{FAQ_INTRO}</p>
              <p className="faq-updated">
                Last updated: {FAQ_LAST_MODIFIED_DISPLAY}
              </p>
            </div>
            <FaqExplorer featured={featured} categories={categories} />
          </div>
        </section>

        {/* CLOSING CTA (unchanged) */}
        <section className="block cta-sec">
          <div className="wrap">
            <div className="cta-inner">
              <h2>
                Still have <span className="accent-italic">questions?</span>
              </h2>
              <p className="cta-body">
                Our team is happy to help with anything not covered here —
                pricing, integrations, security, or anything else.
              </p>
              <div className="cta-actions">
                <Link className="btn btn-gold btn-lg" href="/contact-us">
                  Contact Us
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
