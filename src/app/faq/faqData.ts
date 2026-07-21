export type FaqBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type FaqItem = {
  question: string;
  answer: FaqBlock[];
};

export const FAQS: FaqItem[] = [
  {
    question: "What is PekoPay?",
    answer: [
      {
        type: "p",
        text: "PekoPay is a payment processing platform that enables businesses to securely accept online and in-person payments. Merchants can accept major credit cards, debit cards, digital wallets, and international payments while benefiting from competitive processing rates, powerful reporting tools, and annual cashback rewards.",
      },
    ],
  },
  {
    question: "What payment methods does PekoPay accept?",
    answer: [
      { type: "p", text: "PekoPay supports:" },
      {
        type: "ul",
        items: [
          "Visa",
          "Mastercard",
          "American Express",
          "Discover",
          "Debit Cards",
          "Apple Pay",
          "Google Pay",
          "Digital Wallets",
          "International Credit Cards",
        ],
      },
      {
        type: "p",
        text: "Additional payment methods may be available depending on your country.",
      },
    ],
  },
  {
    question: "How much does PekoPay cost?",
    answer: [
      { type: "p", text: "PekoPay offers transparent pricing with:" },
      {
        type: "ul",
        items: [
          "No setup fees",
          "No monthly fees",
          "No long-term contracts",
          "Competitive transaction rates",
          "No cancellation penalties",
        ],
      },
      {
        type: "p",
        text: "Pricing may vary based on industry, processing volume, and risk level.",
      },
    ],
  },
  {
    question: "When will I receive my deposits?",
    answer: [
      {
        type: "p",
        text: "Most merchants receive deposits within 1–3 business days, depending on:",
      },
      {
        type: "ul",
        items: [
          "Your banking institution",
          "Your country",
          "Processing history",
          "Account standing",
        ],
      },
    ],
  },
  {
    question: "Is there a contract?",
    answer: [
      {
        type: "p",
        text: "No. PekoPay believes merchants should stay because they love the service — not because they're locked into a contract.",
      },
    ],
  },
  {
    question: "What is PekoPay Cashback?",
    answer: [
      {
        type: "p",
        text: "One of PekoPay's unique benefits is its annual cashback program. Merchants earn unlimited tax-free cashback based on their processing activity throughout the year. Cashback is paid annually, rewarding businesses simply for processing payments through PekoPay.",
      },
    ],
  },
  {
    question: "Is PekoPay secure?",
    answer: [
      {
        type: "p",
        text: "Absolutely. PekoPay utilizes industry-leading security measures including:",
      },
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
        text: "Protecting your business and customer information is a top priority.",
      },
    ],
  },
  {
    question: "Why should I choose PekoPay over other payment processors?",
    answer: [
      {
        type: "p",
        text: "PekoPay combines competitive pricing with merchant-focused features, including:",
      },
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
          "Powerful reporting dashboard",
          "Dedicated customer support",
          "Scalable solutions for businesses of all sizes",
        ],
      },
      {
        type: "p",
        text: "Whether you're a startup or an established enterprise, PekoPay is designed to help your business grow while making payment processing simple, secure, and rewarding.",
      },
    ],
  },
];

// Flatten an answer to clean plain text for JSON-LD structured data.
export function faqPlainText(item: FaqItem): string {
  return item.answer
    .map((block) =>
      block.type === "p" ? block.text : block.items.join(", ")
    )
    .join(" ");
}
