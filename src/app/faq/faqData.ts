// PekoPay FAQ content — single source of truth for the /faq page AND its
// JSON-LD schema. Source copy: pekopay-faq-copy.md (v1.0, 2026-07-21),
// then accuracy-checked against the PekoPay/BlueSnap FAQ bible (2026-07-21):
// corrected deposit timing, PCI SAQ mapping, Discover availability, data
// export, and reserves; unblocked multi-currency, e-Transfer/EFT, the
// prohibited-industry list, and a process answer for chargebacks.
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
        text: "PekoPay accepts all major credit and debit cards plus digital wallets, including Visa, Mastercard, American Express, Apple Pay, and Google Pay.",
      },
      { type: "p", text: "Full list:" },
      {
        type: "ul",
        items: [
          "Visa",
          "Mastercard",
          "American Express",
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
        text: "PekoPay's default payout schedule is daily, with each payout settling to your bank account 2 business days after the transaction (Daily +2).",
      },
      { type: "p", text: "A few things affect the exact timing:" },
      {
        type: "ul",
        items: [
          "Your agreement — some accounts are set up with custom payout terms",
          "Business days only — if a payout date lands on a bank holiday, it moves to the next business day",
          "Your own bank's processing times",
          "New accounts may see slightly longer timing while processing history is established",
        ],
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
          {
            type: "p",
            text: "A few categories can't be supported or need extra review, including:",
          },
          {
            type: "ul",
            items: [
              "Illegal or unlawful goods and services",
              "Get-rich-quick, work-from-home, and investment schemes",
              "Counterfeit, replica, or stolen goods",
              "Cryptocurrency, and unlicensed financial, securities, or forex/binary-options businesses",
              "Debt collection, debt settlement, and credit repair",
              "Gambling and sports-betting services",
              "Adult content",
              "Weapons, firearms, ammunition, and hazardous materials",
            ],
          },
          {
            type: "p",
            text: "This isn't the full list — if you're unsure whether your business qualifies, ask the team before you apply.",
          },
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
        id: "payments-etransfer-eft",
        question: "Can I accept Interac e-Transfer or EFT payments?",
        answer: [
          {
            type: "p",
            text: "Yes. Alongside cards, PekoPay supports bank payments — ACH and e-Transfer / EFT — so you can offer customers a lower-cost way to pay on larger invoices.",
          },
          {
            type: "p",
            text: "Bank account and routing details are validated before a transaction is processed, which stops fake or mistyped account data before it turns into a failed payment.",
          },
        ],
      },
      {
        id: "payments-multicurrency",
        question: "Can I accept payments in US dollars or other currencies?",
        answer: [
          {
            type: "p",
            text: "Yes. PekoPay accepts payments in more than 100 currencies and can settle to your account in any of 16 currencies, including Canadian and US dollars.",
          },
          {
            type: "p",
            text: "When you settle in the same currency a customer paid in — a like-for-like currency — there are no FX or conversion fees. For other currencies, PekoPay converts at live Interbank rates with a competitive mark-up that covers the conversion, so the price your shopper sees at checkout is the price they pay.",
          },
          {
            type: "p",
            text: "If you regularly invoice customers abroad, the team can walk you through the settlement currencies that fit your business.",
          },
        ],
      },
      {
        id: "payments-reserves",
        question: "Will PekoPay hold a reserve on my funds?",
        answer: [
          {
            type: "p",
            text: "Most PekoPay merchants have no reserve on their account. When one does apply, it is based on your risk profile and can be set at onboarding or later in the relationship — and you are told about it directly.",
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
      // (Q14) Interac Debit — HELD BACK (see commented block). Q15 e-Transfer/EFT
      // and Q16 multi-currency published above after the bible cross-reference.
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
            text: "Because card data is tokenized and never touches your servers in raw form, most merchants qualify for the short, simple SAQ A. Depending on how you integrate, you may complete the longer SAQ A-EP, or SAQ C-VT if you use the Virtual Terminal; API integrations are assessed on their specific configuration. The questionnaire is renewed yearly, and PekoPay does not charge a PCI compliance fee.",
          },
        ],
      },
      {
        id: "security-chargebacks",
        question: "What happens if I get a chargeback?",
        answer: [
          {
            type: "p",
            text: "You are notified in your PekoPay dashboard as soon as a chargeback is filed, and you can submit evidence to dispute it.",
          },
          { type: "p", text: "How it works:" },
          {
            type: "ol",
            items: [
              "The customer's bank files the dispute and the transaction amount is temporarily held.",
              "PekoPay notifies you with the reason code so you know why it was raised.",
              "You upload supporting documents — receipts, delivery confirmation, correspondence — through the dashboard.",
              "The issuing bank reviews the evidence and decides, usually within 30 to 90 days.",
            ],
          },
          {
            type: "p",
            text: "PekoPay also offers prevention tools that stop many disputes before they become chargebacks — real-time alerts (Ethoca and Verifi) that let a sale be refunded before it escalates, plus managed dispute responses. Clear records and these tools are the most reliable way to keep chargebacks low.",
          },
        ],
      },
      {
        id: "security-data-portability",
        question: "Is my customer data safe, and what happens if I leave?",
        answer: [
          {
            type: "p",
            text: "Your customer and transaction data belongs to you, and you can retrieve all of it — everything not covered by PCI rules — at any time through our Reporting API.",
          },
          {
            type: "p",
            text: "Stored card tokens are specific to PekoPay's vault and cannot be transferred directly to another processor for security reasons, but PekoPay will coordinate a compliant card data migration with your new provider on request. Standard practice in the industry, and PekoPay will not make it difficult.",
          },
        ],
      },
      // Q25 chargebacks published above (process answer) after the bible
      // cross-reference; exact evidence window + fee amount still to confirm.
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
   PUBLISHED, BUT WITH OPEN FLAGS TO CONFIRM WITH PEKOPAY:
   - Q15 payments-etransfer-eft: bible confirms ACH/E-Transfer support; confirm
     whether this is Canadian Interac e-Transfer branding specifically.
   - Q25 security-chargebacks: process published; exact evidence window (days)
     and chargeback fee amount still need confirmation before adding them.
   - Q12 payments-methods: Discover removed (bible: US/UK/EUR merchants only);
     re-add if PekoPay has enabled Discover for Canadian merchants.
   See the PR summary for the full flag list (cashback figures, Canadian-based
   support, in-person/POS, PCI Level 1, no-PCI-fee, refund timing).
   ----------------------------------------------------------------------------
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

   Q20 · cashback-how-much · "How much cashback will I earn?"
     "[CONFIRM: CASHBACK] Merchants earn [X%] of annual processed volume back."
     NEEDS: cashback rate / band + worked example.

   Q21 · cashback-when-paid · "When is cashback paid out?"
     "Cashback is calculated on your full calendar year ... paid [CONFIRM: month / timing]."
     NEEDS: payout month / timing.

   Q22 · cashback-minimum · "Is there a minimum to qualify for cashback?"
     "[CONFIRM: CASHBACK] [No minimum ...] or [Merchants qualify after $X]."
     NEEDS: minimum volume threshold (or confirmation there is none).

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
