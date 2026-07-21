// PekoPay FAQ content — single source of truth for the /faq page AND its
// JSON-LD schema. Source copy: pekopay-faq-copy.md (v1.0, 2026-07-21).
//
// Held-back questions (answers awaiting a [CONFIRM] value) are commented out
// at the bottom of this file with their markers intact. Do not publish a
// placeholder or invent a value — see the summary at the end of the PR.

export type AnswerBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "link"; text: string; href: string; label: string };

export type FaqItem = {
  id: string; // anchor slug, e.g. "pricing-cost"
  question: string;
  answer: AnswerBlock[];
};

export type FaqCategory = {
  id: string; // e.g. "pricing"
  title: string; // e.g. "Pricing and Fees"
  items: FaqItem[];
};

export type FaqData = {
  featured: FaqItem[]; // most-asked, rendered first, ungrouped
  categories: FaqCategory[];
};

// Freshness signal — feeds both the "Last updated" line and schema dateModified.
export const FAQ_LAST_MODIFIED = "2026-07-21"; // ISO 8601 for schema
export const FAQ_LAST_MODIFIED_DISPLAY = "July 21, 2026";

export const SITE_URL = "https://pekopay.com";

export const FAQ_INTRO =
  "Everything you need to know about processing payments with PekoPay. Rates and fees, deposit timing, cashback, security, and what switching from another processor actually involves. Can't find your question? Reach out to the team.";

// ── Featured: the 10 most-asked, in fixed order. Q6 (How much does PekoPay
//    cost?) is held back for [CONFIRM: RATE] — the rate is the answer — so the
//    featured block renders 9 until that value lands. ──
export const featured: FaqItem[] = [
  {
    id: "getting-started-what-is-pekopay",
    question: "What is PekoPay?",
    answer: [
      {
        type: "p",
        text: "PekoPay is a Canadian payment processing platform that lets businesses accept credit cards, debit cards, and digital wallets online and in person, and earn annual cashback on everything they process.",
      },
      {
        type: "p",
        text: "Merchants get competitive processing rates, a reporting dashboard, invoicing, recurring billing, and card storage in one account. PekoPay is built by PekoLabs Inc., headquartered in Vancouver, British Columbia.",
      },
    ],
  },
  {
    id: "getting-started-canada",
    question: "Does PekoPay work in Canada?",
    answer: [
      {
        type: "p",
        text: "Yes. PekoPay is a Canadian company, settles in Canadian dollars to Canadian bank accounts, and is built specifically for Canadian businesses.",
      },
      {
        type: "p",
        text: "PekoPay is headquartered in Vancouver, BC. Merchants across all ten provinces and three territories can open an account. You can also accept international cards from customers outside Canada, with funds settling to your Canadian account in CAD.",
      },
    ],
  },
  // (3) How much does PekoPay cost? — HELD BACK (see commented block below).
  {
    id: "pricing-hidden-fees",
    question: "Are there any hidden fees?",
    answer: [
      {
        type: "p",
        text: "No. PekoPay publishes every fee it charges, and there are no monthly minimums, statement fees, or PCI compliance fees.",
      },
      { type: "p", text: "Fees that do apply in specific situations:" },
      {
        type: "ul",
        items: [
          // Chargeback fee amount was [CONFIRM] in the source; the amount is
          // held, but the fact that the fee applies is publishable.
          "Chargeback fee: applies per disputed transaction",
          "Cross-border fee: applies when a customer's card is issued outside Canada",
          "Currency conversion: applies when a transaction is processed in a currency other than CAD",
        ],
      },
      {
        type: "p",
        text: "Everything else is covered by your per-transaction rate.",
      },
    ],
  },
  {
    id: "pricing-contract",
    question: "Is there a contract?",
    answer: [
      {
        type: "p",
        text: "No. PekoPay has no long-term contract and no cancellation penalty, so you can leave at any time.",
      },
      {
        type: "p",
        text: "The reasoning is simple: merchants should stay because the service works, not because leaving is expensive.",
      },
    ],
  },
  {
    id: "payments-methods",
    question: "What payment methods does PekoPay accept?",
    answer: [
      {
        type: "p",
        text: "PekoPay accepts all major credit and debit cards plus digital wallets, including Visa, Mastercard, American Express, Discover, Apple Pay, and Google Pay.",
      },
      { type: "p", text: "Full list:" },
      {
        type: "ul",
        items: [
          "Visa",
          "Mastercard",
          "American Express",
          "Discover",
          "Debit cards",
          "Apple Pay",
          "Google Pay",
          "Digital wallets",
          "International credit cards",
        ],
      },
      {
        type: "p",
        text: "Additional payment methods may be available depending on your country and industry.",
      },
    ],
  },
  {
    id: "payments-deposit-timing",
    question: "When will I receive my deposits?",
    answer: [
      {
        type: "p",
        text: "Most PekoPay merchants receive deposits within 1 to 3 business days of the transaction settling.",
      },
      { type: "p", text: "Timing depends on:" },
      {
        type: "ul",
        items: [
          "Your banking institution",
          "Your country",
          "Your processing history",
          "Your account standing",
        ],
      },
      {
        type: "p",
        text: "New accounts sometimes see slightly longer timing during the first few weeks while processing history is established.",
      },
    ],
  },
  {
    id: "cashback-what-is-it",
    question: "What is PekoPay Cashback?",
    answer: [
      {
        type: "p",
        text: "PekoPay Cashback pays merchants an annual rebate based on how much they processed through PekoPay that year.",
      },
      {
        type: "p",
        text: "There is no cap on how much you can earn and no separate program to enrol in. The more you process, the more you get back. Cashback is paid once per year.",
      },
    ],
  },
  {
    id: "security-is-pekopay-secure",
    question: "Is PekoPay secure?",
    answer: [
      {
        type: "p",
        text: "Yes. PekoPay is PCI-DSS Level 1 compliant and protects every transaction with end-to-end encryption, tokenization, and active fraud monitoring.",
      },
      { type: "p", text: "Security measures in place:" },
      {
        type: "ul",
        items: [
          "PCI-DSS Level 1 compliance",
          "End-to-end encryption",
          "Tokenization",
          "Fraud monitoring",
          "Chargeback protection tools",
        ],
      },
      {
        type: "p",
        text: "Card data is tokenized, which means the actual card number is never stored on your systems or ours in a usable form.",
      },
    ],
  },
  {
    id: "security-why-pekopay",
    question: "Why should I choose PekoPay over other payment processors?",
    answer: [
      {
        type: "p",
        text: "PekoPay is the only Canadian payment processor that pays merchants annual cashback on everything they process, on top of competitive rates and no contract.",
      },
      { type: "p", text: "What you get:" },
      {
        type: "ul",
        items: [
          "Annual cashback rewards",
          "No long-term contracts",
          "Transparent pricing",
          "International payment acceptance",
          "Recurring billing",
          "Secure payment processing",
          "Modern APIs and integrations",
          "Reporting dashboard",
          "Canadian-based support",
          "Solutions that scale from sole proprietor to enterprise",
        ],
      },
      {
        type: "p",
        text: "Whether you are just starting out or processing millions a year, PekoPay is built to make payments simple, secure, and worth something back.",
      },
    ],
  },
];

// ── Secondary: remaining questions grouped into categories. Featured questions
//    are NOT repeated here. Held-back questions are omitted; a category left
//    empty by hold-backs (Cashback) is dropped entirely. ──
export const categories: FaqCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    items: [
      {
        id: "getting-started-eligibility",
        question: "What kinds of businesses can use PekoPay?",
        answer: [
          {
            type: "p",
            text: "PekoPay works with Canadian businesses of any size, from sole proprietors invoicing a handful of clients to established companies processing high monthly volume.",
          },
          {
            type: "p",
            text: "Common use cases include professional services, property management, SaaS and subscription businesses, trades and contractors, and retail. Some industries carry higher regulatory or chargeback risk and require additional review, or cannot be supported.",
          },
          // Dropped the "[CONFIRM: INDUSTRIES] — insert prohibited list" editorial
          // note; the answer above is complete without it.
        ],
      },
      {
        id: "getting-started-requirements",
        question: "What do I need to open a PekoPay account?",
        answer: [
          {
            type: "p",
            text: "You need your business registration details, a Canadian business bank account, and government-issued ID for the account owner.",
          },
          { type: "p", text: "Specifically:" },
          {
            type: "ul",
            items: [
              "Legal business name and business number",
              "Canadian business bank account (void cheque or direct deposit form)",
              "Government-issued photo ID for the principal owner or authorized signer",
              "Estimated monthly processing volume and average transaction size",
              "Business website or a description of what you sell",
            ],
          },
          {
            type: "p",
            text: "These are standard Know Your Customer requirements that apply to every regulated payment processor in Canada.",
          },
        ],
      },
      // (Q5) How long does approval take? — HELD BACK (see commented block).
    ],
  },
  {
    id: "pricing",
    title: "Pricing and Fees",
    items: [
      {
        id: "pricing-merchant-account",
        question: "Do I need a separate merchant account?",
        answer: [
          {
            type: "p",
            text: "No. Your merchant account is included when you open a PekoPay account, so there is nothing to set up separately or pay for on the side.",
          },
          {
            type: "p",
            text: "Some processors require you to source a merchant account from an acquiring bank and pay that bank separately. PekoPay handles the underwriting and the acquiring relationship as part of onboarding.",
          },
        ],
      },
      {
        id: "pricing-minimum-volume",
        question: "Is there a minimum monthly volume?",
        answer: [
          {
            type: "p",
            text: "No. PekoPay has no monthly minimum, so you pay only on what you actually process.",
          },
          {
            type: "p",
            text: "If you have a slow month, you pay nothing beyond the transaction fees on the volume you ran. This matters for seasonal businesses, contractors, and anyone with lumpy revenue.",
          },
        ],
      },
      {
        id: "pricing-comparison",
        question: "How does PekoPay compare to Stripe and Square?",
        answer: [
          {
            type: "p",
            text: "PekoPay is priced comparably to Stripe and Square on per-transaction rates, and adds annual cashback on your processed volume, which neither returns.",
          },
          { type: "p", text: "Practical differences:" },
          {
            type: "ul",
            items: [
              "Cashback: PekoPay pays annual cashback based on your processing volume. Stripe and Square do not.",
              "Rate structure: PekoPay rates are negotiable at volume. Stripe and Square publish flat rates that do not move.",
              "Canadian focus: PekoPay is Canadian-owned and Canadian-supported. Support is not routed offshore.",
              "Contracts: none at PekoPay, Stripe, or Square. This is table stakes, not a differentiator.",
            ],
          },
          {
            type: "p",
            text: "If you are already on another processor and want a side-by-side on your actual volume, the team will run the numbers.",
          },
        ],
      },
    ],
  },
  {
    id: "payments",
    title: "Payments and Deposits",
    items: [
      {
        id: "payments-reserves",
        question: "Will PekoPay hold a reserve on my funds?",
        answer: [
          {
            type: "p",
            text: "Most PekoPay merchants have no reserve on their account, and any reserve requirement is disclosed during onboarding before you process a single transaction.",
          },
          {
            type: "p",
            text: "Reserves are occasionally applied to accounts in higher-risk categories, businesses that deliver goods or services well after payment, or accounts with a history of elevated chargebacks. If one applies to you, you will be told the amount, the release schedule, and the conditions to remove it up front.",
          },
        ],
      },
      {
        id: "payments-refunds",
        question: "How do refunds work?",
        answer: [
          {
            type: "p",
            text: "You can issue a full or partial refund from your PekoPay dashboard, and the funds return to your customer's original payment method within 5 to 10 business days.",
          },
          {
            type: "p",
            // Source continues "[CONFIRM: whether the original processing fee is
            // returned on refund]"; that fragment is held, the sentence below
            // stands on its own.
            text: "The refunded amount is deducted from your next deposit.",
          },
        ],
      },
      // (Q14) Interac Debit, (Q15) e-Transfer/EFT, (Q16) multi-currency —
      // HELD BACK (see commented block).
    ],
  },
  // Cashback category omitted — all three remaining questions (Q20, Q21, Q22)
  // are held back for [CONFIRM: CASHBACK] values, leaving the group empty.
  {
    id: "security",
    title: "Security and Compliance",
    items: [
      {
        id: "security-pci-merchant-obligation",
        question: "Do I still need to complete PCI compliance myself?",
        answer: [
          {
            type: "p",
            text: "Most PekoPay merchants complete a short annual self-assessment questionnaire, and PekoPay's tokenization keeps that questionnaire to the simplest version available.",
          },
          {
            type: "p",
            text: "Because card data is tokenized and never touches your servers in raw form, most merchants qualify for SAQ A or SAQ A-EP, which are the shortest of the PCI self-assessments. PekoPay does not charge a PCI compliance fee.",
          },
        ],
      },
      {
        id: "security-data-portability",
        question: "Is my customer data safe, and what happens if I leave?",
        answer: [
          {
            type: "p",
            text: "Your customer and transaction data belongs to you, and you can export it at any time from your dashboard.",
          },
          {
            type: "p",
            text: "Stored card tokens are specific to PekoPay's vault and cannot be transferred directly to another processor for security reasons, but PekoPay will coordinate a compliant card data migration with your new provider on request. Standard practice in the industry, and PekoPay will not make it difficult.",
          },
        ],
      },
      // (Q25) What happens if I get a chargeback? — HELD BACK (see commented block).
    ],
  },
  {
    id: "switching",
    title: "Switching and Integrations",
    items: [
      {
        id: "switching-card-migration",
        question: "Can I move my saved customer cards to PekoPay?",
        answer: [
          {
            type: "p",
            text: "Yes. Stored cards can be migrated from your previous processor into PekoPay's Card Vault through a PCI-compliant transfer, so your recurring customers are not asked to re-enter their details.",
          },
          {
            type: "link",
            text: "Your current processor has to release the tokens, which most do on request. PekoPay coordinates the transfer directly with them. See Card Vault for how stored cards work day to day.",
            label: "Card Vault",
            href: "/feature/card-vault",
          },
        ],
      },
      // (Q28) switching, (Q29) existing hardware, (Q30) integrations —
      // HELD BACK (see commented block).
    ],
  },
  {
    id: "support",
    title: "Support and Developers",
    items: [
      {
        id: "support-api",
        question: "Does PekoPay have an API?",
        answer: [
          {
            type: "p",
            text: "Yes. PekoPay offers a REST API with a sandbox environment, so you can build and test a full integration before going live.",
          },
          {
            type: "link",
            text: "The API covers payments, refunds, customers, stored cards, subscriptions, and webhooks. Full reference and sandbox keys are on the Developer page.",
            label: "Developer page",
            href: "/developer",
          },
        ],
      },
      // (Q32) How do I get support? — HELD BACK (see commented block).
    ],
  },
];

export const faqData: FaqData = { featured, categories };

// Every published question in visual document order: featured first, then each
// category in order. Drives the FAQPage schema so it never drifts from the page.
export const allPublishedItems: FaqItem[] = [
  ...featured,
  ...categories.flatMap((c) => c.items),
];

// Serialise an answer to clean plain text for JSON-LD acceptedAnswer.text.
export function answerToPlainText(answer: AnswerBlock[]): string {
  return answer
    .map((block) => {
      switch (block.type) {
        case "p":
        case "link":
          return block.text;
        case "ul":
        case "ol":
          return (
            block.items.map((i) => i.replace(/\.$/, "")).join(", ") + "."
          );
      }
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

/* ============================================================================
   HELD BACK — awaiting [CONFIRM] values. Not rendered, not in schema. Restore
   each into its section once the client supplies the bracketed value.
   ----------------------------------------------------------------------------

   Q5 · getting-started-approval-time · "How long does approval take?"
     "Most PekoPay accounts are approved within [CONFIRM: 1-2 business days] of
      submitting a complete application." (+ supporting paragraph)
     NEEDS: confirmed approval turnaround.

   Q6 · pricing-cost · [FEATURED] · "How much does PekoPay cost?"
     "PekoPay charges [CONFIRM: RATE] per transaction, with no setup fee, no
      monthly fee, and no long-term contract." (+ "no fees" list, + rate note)
     NEEDS: published rate / band (e.g. "from 2.4% + 10¢").

   Q14 · payments-interac-debit · "Does PekoPay support Interac Debit?"
     [CONFIRM: RAILS] — drafts for yes / roadmap in source.
     NEEDS: whether Interac Debit is live, beta, or roadmap.

   Q15 · payments-etransfer-eft · "Can I accept Interac e-Transfer or EFT payments?"
     [CONFIRM: RAILS] — drafts for yes / no in source.
     NEEDS: whether e-Transfer / EFT / PAD are live, beta, or roadmap.

   Q16 · payments-multicurrency · "Can I accept payments in US dollars or other currencies?"
     "[CONFIRM] PekoPay accepts cards issued outside Canada, with funds settling
      to your Canadian account in Canadian dollars." (lead sentence flagged)
     NEEDS: confirmation of the multi-currency / foreign-card claim.

   Q20 · cashback-how-much · "How much cashback will I earn?"
     "[CONFIRM: CASHBACK] Merchants earn [X%] of annual processed volume back."
     NEEDS: cashback rate / band + worked example.

   Q21 · cashback-when-paid · "When is cashback paid out?"
     "Cashback is calculated on your full calendar year ... paid [CONFIRM: month / timing]."
     NEEDS: payout month / timing.

   Q22 · cashback-minimum · "Is there a minimum to qualify for cashback?"
     "[CONFIRM: CASHBACK] [No minimum ...] or [Merchants qualify after $X]."
     NEEDS: minimum volume threshold (or confirmation there is none).

   Q25 · security-chargebacks · "What happens if I get a chargeback?"
     "... you have [CONFIRM: X days] to submit evidence ..." + ol steps +
     "A chargeback fee of [CONFIRM] applies per dispute."
     NEEDS: evidence window (days) + chargeback fee amount. Uses an "ol" block.

   Q28 · switching-how-to-switch · "How do I switch to PekoPay from another processor?"
     "Switching takes about [CONFIRM: a week] ..." + ol steps.
     NEEDS: confirmed switch timeline. Uses an "ol" block.

   Q29 · switching-existing-hardware · "Can I keep my existing terminal or POS system?"
     "[CONFIRM] Some terminals can be reprogrammed ..." (lead sentence flagged)
     NEEDS: confirmation of hardware reprogramming policy.

   Q30 · switching-integrations · "What does PekoPay integrate with?"
     "PekoPay integrates with [CONFIRM: QuickBooks, Xero, Shopify, etc.] ..."
     with links to /feature/integrations and /developer.
     NEEDS: the actual integrations list.

   Q32 · support-contact · "How do I get support?"
     "Every PekoPay merchant gets [CONFIRM: Canadian-based] support by email and
      phone [CONFIRM: hours and timezone] ..." with link to /contact-us.
     NEEDS: support staffing location + hours/timezone.
   ==========================================================================*/
