"use client";

import { useState } from "react";

type Inquiry = "sales" | "support" | "general";

const TYPES: {
  id: Inquiry;
  label: string;
  body: string;
  formTitle: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "sales",
    label: "Sales",
    body: "Talk to our team about pricing, cashback, and how PekoPay fits your business.",
    formTitle: "Tell us about your business",
    icon: (
      <svg
        className="contact-type-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: "support",
    label: "Technical Support",
    body: "Already a PekoPay merchant? Get help with your account, integrations, or payments.",
    formTitle: "Describe the issue you're experiencing",
    icon: (
      <svg
        className="contact-type-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M14.5 9.5 18 6M6 18l3.5-3.5M14.5 14.5 18 18M6 6l3.5 3.5" />
      </svg>
    ),
  },
  {
    id: "general",
    label: "General Inquiries",
    body: "Questions about partnerships, press, or anything else — we'll point you the right way.",
    formTitle: "Send us a message",
    icon: (
      <svg
        className="contact-type-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 0 1 4.5 1.5c0 1.5-2 2-2 3" />
        <path d="M12 16.5h.01" />
      </svg>
    ),
  },
];

export default function ContactHub() {
  const [selected, setSelected] = useState<Inquiry>("sales");
  const active = TYPES.find((t) => t.id === selected) ?? TYPES[0];

  return (
    <>
      <div
        className="contact-type-grid"
        role="radiogroup"
        aria-label="What can we help you with?"
      >
        {TYPES.map((type) => {
          const isActive = type.id === selected;
          return (
            <button
              key={type.id}
              type="button"
              role="radio"
              aria-checked={isActive}
              className={`contact-type-card${isActive ? " active" : ""}`}
              onClick={() => setSelected(type.id)}
            >
              {type.icon}
              <h3>{type.label}</h3>
              <p>{type.body}</p>
            </button>
          );
        })}
      </div>

      <div className="contact-card contact-card-flat">
        <h2 className="contact-form-title">{active.formTitle}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="hidden" name="inquiryType" value={active.label} />
          <div className="contact-grid">
            <div className="auth-field">
              <label className="auth-label" htmlFor="full-name">
                Full Name *
              </label>
              <input
                id="full-name"
                className="auth-input"
                placeholder="Full Name"
                autoComplete="name"
              />
            </div>
            <div className="auth-field">
              <label className="auth-label" htmlFor="company">
                Company Name *
              </label>
              <input
                id="company"
                className="auth-input"
                placeholder="Company Name"
                autoComplete="organization"
              />
            </div>
            <div className="auth-field">
              <label className="auth-label" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                className="auth-input"
                placeholder="Email"
                autoComplete="email"
              />
            </div>
            <div className="auth-field">
              <label className="auth-label" htmlFor="phone">
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                className="auth-input"
                placeholder="Phone"
                autoComplete="tel"
              />
            </div>
            <div className="auth-field full">
              <label className="auth-label" htmlFor="inquiry-type">
                Inquiry Type
              </label>
              <select
                id="inquiry-type"
                className="auth-input"
                value={selected}
                onChange={(e) => setSelected(e.target.value as Inquiry)}
              >
                {TYPES.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="auth-field full">
              <label className="auth-label" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                className="auth-input"
                placeholder="Message"
                rows={6}
              />
            </div>
          </div>
          <div className="contact-actions">
            <button type="submit" className="btn btn-gold btn-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
