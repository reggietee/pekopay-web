export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

// Mirrors the live pekopay.com top navigation.
export const NAV: NavItem[] = [
  {
    label: "Solution",
    children: [
      { label: "Batch Processing", href: "/solution/batch-processing" },
      { label: "Invoicing", href: "/solution/invoicing" },
      { label: "Payment Links", href: "/solution/payment-links" },
      { label: "Quotes", href: "/solution/quotes" },
      { label: "Subscriptions", href: "/solution/subscriptions" },
    ],
  },
  {
    label: "Features",
    children: [
      { label: "Card Vault", href: "/feature/card-vault" },
      { label: "Custom Reports", href: "/feature/custom-reports" },
      { label: "Customer Manager", href: "/feature/customer-manager" },
      { label: "Integrations", href: "/feature/integrations" },
    ],
  },
  {
    label: "Earn Cashback",
    children: [
      {
        label: "How Cashback Works",
        href: "/earn-cashback/how-cashback-works",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Partnerships",
    children: [
      { label: "Referral Program", href: "/partnerships/referral-program" },
    ],
  },
  { label: "Contact Sales", href: "/contact-us" },
  { label: "Perks", href: "/perks" },
  { label: "Developer", href: "/developer" },
];

// Primary header action — live site shows a single "Sign In / Sign Up".
export const PRIMARY_CTA: NavChild = {
  label: "Sign In / Sign Up",
  href: "/login",
};
