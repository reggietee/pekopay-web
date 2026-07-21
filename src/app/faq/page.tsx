import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import FaqAccordion from "./FaqAccordion";
import { FAQS, faqPlainText } from "./faqData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — PekoPay",
  description:
    "Answers to common questions about PekoPay — pricing, payment methods, deposits, security, cashback, and more.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faqPlainText(item),
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* HEADER + ACCORDION */}
        <section className="block">
          <div className="wrap">
            <div className="faq-header">
              <span className="eyebrow">Frequently Asked Questions</span>
              <h1>
                Answers to your{" "}
                <span className="accent-italic">questions.</span>
              </h1>
              <p className="faq-desc">
                Everything you need to know about PekoPay — pricing, payments,
                security, and more. Can&rsquo;t find what you&rsquo;re looking
                for? Reach out to our team.
              </p>
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </section>

        {/* CLOSING CTA */}
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
