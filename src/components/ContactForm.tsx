"use client";

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
          Submit
        </button>
      </div>
    </form>
  );
}
