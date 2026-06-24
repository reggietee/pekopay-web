import type { Metadata } from "next";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Sign In — PekoPay",
};

type Feature = { label: string; icon: React.ReactNode };

const I = {
  stroke: {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  },
};

const FEATURES: Feature[] = [
  {
    label: "Global Payment Gateway",
    icon: (
      <svg viewBox="0 0 24 24" {...I.stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
      </svg>
    ),
  },
  {
    label: "Mobile Payments",
    icon: (
      <svg viewBox="0 0 24 24" {...I.stroke}>
        <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
        <path d="M10.5 18.5h3" />
      </svg>
    ),
  },
  {
    label: "Unlimited Cashback Potential",
    icon: (
      <svg viewBox="0 0 24 24" {...I.stroke}>
        <path d="M7 9.5c-2.2 0-4 1.1-4 2.5s1.8 2.5 4 2.5 3-1.1 4-2.5c1-1.4 1.8-2.5 4-2.5s4 1.1 4 2.5-1.8 2.5-4 2.5-3-1.1-4-2.5" />
      </svg>
    ),
  },
  {
    label: "E-commerce Integrations",
    icon: (
      <svg viewBox="0 0 24 24" {...I.stroke}>
        <path d="M5 7h14l-1.2 11a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 7Z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
    ),
  },
  {
    label: "Recurring Billing",
    icon: (
      <svg viewBox="0 0 24 24" {...I.stroke}>
        <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8M20 4v4h-4" />
        <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16M4 20v-4h4" />
      </svg>
    ),
  },
];

export default function LoginPage() {
  return (
    <main className="auth">
      <aside className="auth-aside">
        <ul className="auth-features">
          {FEATURES.map((f) => (
            <li className="auth-feature" key={f.label}>
              <span className="auth-feature-icon">{f.icon}</span>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>
      </aside>

      <div className="auth-main">
        <div className="auth-card">
          <img
            src="/pekopay-logo-mockup.png"
            alt="PekoPay"
            className="auth-card-logo"
          />
          <h1>Hi, Welcome Back</h1>
          <p className="auth-card-sub">Enter your credentials to continue</p>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
