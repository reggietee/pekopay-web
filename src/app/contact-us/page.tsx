import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Sales — PekoPay",
  description: "Talk to the PekoPay team about payments, pricing, and cashback.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="contact-hero">
          <svg
            className="contact-hero-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
            <path d="M3 6l9 6.5L21 6" />
          </svg>
          <h1>Talk to Us</h1>
        </section>

        <div className="wrap" style={{ paddingBottom: 120 }}>
          <div className="contact-card">
            <ContactForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
