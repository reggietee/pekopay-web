import type { Metadata } from "next";
import ContactHub from "@/components/ContactHub";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Us — PekoPay",
  description:
    "Get in touch with PekoPay — sales, technical support, or general inquiries. We'll get you to the right place.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="block">
          <div className="wrap">
            <div className="contact-head">
              <span className="eyebrow">Contact Us</span>
              <h1>
                How can we <span className="accent-italic">help?</span>
              </h1>
              <p className="contact-head-desc">
                Whether you&rsquo;re exploring PekoPay, need technical help, or
                just have a question — pick the option that fits and we&rsquo;ll
                get you to the right place.
              </p>
            </div>
            <ContactHub />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
