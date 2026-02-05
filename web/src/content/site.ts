// Centralized, editable content model for Zenflow.
// Keeping copy/data here makes updates easy without touching layout logic.

export type NavLink = {
  label: string;
  href: string;
  isPrimary?: boolean;
};

export type FeaturePillar = {
  title: string;
  description: string;
  tag: string;
};

export type ProductHighlight = {
  title: string;
  description: string;
  accent: "saffron" | "emerald" | "sky";
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const navLinks: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
  { label: "Disclosures", href: "/disclosures" }
];

export const secondaryNavLinks: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "Markets", href: "/markets" },
  { label: "Become a Partner", href: "/partners" },
  { label: "Knowledge Center", href: "/knowledge" },
  { label: "Customer Support", href: "/support" },
  { label: "Community", href: "/community" },
  { label: "Career", href: "/careers" }
];

// Mega menu content is centralized so we can swap labels/icons later.
export const megaMenuContent = {
  products: {
    investmentServices: [
      "Algo Trading",
      "Commodity Trading",
      "Margin Trading Facility",
      "Derivative Trading",
      "Stock Trading"
    ],
    wealthManagement: [
      "Mutual Funds",
      "IPO",
      "Foreign Portfolio Investment",
      "Portfolio Management"
    ]
  },
  markets: {
    tabs: ["Equity", "Derivative", "Mutual Fund", "IPO", "News"],
    columns: [
      {
        title: "Price Analysis",
        items: [
          "Nifty 50",
          "Bank Nifty",
          "Top Gainers",
          "Top Losers",
          "Out & Under Performers",
          "Only Buyers & Sellers",
          "Highs & Lows",
          "Advances & Declines",
          "5 Days Up/Down",
          "Historical Returns",
          "Heat Map"
        ]
      },
      {
        title: "Volume Analysis",
        items: ["Most Active", "Block Deals", "Bulk Deals", "Highest & Lowest Delivery"]
      },
      {
        title: "Index Analysis",
        items: [
          "Live Indices",
          "Rising VDP",
          "Rising VD Fall in Price",
          "Price Shockers",
          "Volume Shockers",
          "Delivery Shockers"
        ]
      },
      {
        title: "Corporate Action",
        items: [
          "BSE Announcements",
          "Book Closure",
          "Board Meetings",
          "Bonus Issues",
          "Right Issues",
          "Split of Face Value",
          "Dividend Details",
          "Delisted Companies",
          "Change of Name"
        ]
      },
      {
        title: "Other Market",
        items: [
          "FII Investments",
          "DII Investments",
          "World Indices",
          "ADR Prices",
          "Penny Stocks",
          "Sector Based Analysis",
          "NSE Holidays"
        ]
      },
      {
        title: "Top Performing Stocks (NSE)",
        items: [
          "Top Performers",
          "Under Performers",
          "52 Week High",
          "52 Week Low",
          "Top ROCE",
          "Dividend Yield",
          "Pledge"
        ]
      }
    ]
  },
  knowledge: {
    items: ["Learn", "Blog", "Newsletters", "Press Release"]
  }
};

export const heroHighlights = [
  "Equities + bonds + curated themes",
  "Seamless onboarding with guided KYC",
  "Portfolio rhythm with real-time alerts",
  "Deep research, tools, and learnables"
];

export const ecosystemPillars: FeaturePillar[] = [
  {
    title: "Unified investing hub",
    description:
      "Track equities, bonds, and curated baskets in one calm, unified dashboard.",
    tag: "Zen view"
  },
  {
    title: "Guided wealth paths",
    description:
      "Goal-based journeys tuned for growth, income, or stability across life stages.",
    tag: "Life stages"
  },
  {
    title: "Trust-first architecture",
    description:
      "Compliance-focused workflows with transparent pricing and risk clarity.",
    tag: "SEBI-aligned"
  }
];

export const productHighlights: ProductHighlight[] = [
  {
    title: "Equity intelligence",
    description:
      "Real-time insights, watchlists, and risk markers that keep decisions grounded.",
    accent: "saffron"
  },
  {
    title: "Bond & fixed-income flow",
    description:
      "Curated bond ladders, yield clarity, and predictable allocation options.",
    accent: "emerald"
  },
  {
    title: "Next-gen research",
    description:
      "Sector pulses, thematic baskets, and learning modules in one place.",
    accent: "sky"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The interface feels calm even when markets are loud. I finally know where my money is going.",
    name: "Aarav Mehta",
    role: "Long-term investor"
  },
  {
    quote:
      "Zenflow makes bond investing less mysterious. The yield ladder view is clean and clear.",
    name: "Neha Kapoor",
    role: "Fixed-income planner"
  },
  {
    quote:
      "A perfect blend of learning and action. It feels like a full ecosystem, not just a broker.",
    name: "Rahul Singh",
    role: "First-time investor"
  }
];

export const complianceHighlights = [
  "SEBI & exchange compliant workflows",
  "Risk disclosures clearly surfaced",
  "Data protection-first architecture"
];

export const regulatoryHighlights = [
  {
    title: "Compliance-led onboarding",
    description:
      "KYC-first, risk-aligned onboarding flows designed to be audit-ready."
  },
  {
    title: "Transparent disclosures",
    description:
      "Risk, pricing, and product disclosures are surfaced before any action."
  },
  {
    title: "Institution-grade security",
    description:
      "Data access and permissions engineered for long-term trust."
  }
];

export const regulatoryStats = [
  { label: "SEBI-aligned workflows", value: "Built-in" },
  { label: "Disclosure checkpoints", value: "Multi-step" },
  { label: "Compliance mindset", value: "Always on" }
];

export const footerColumns = [
  {
    title: "Zenflow",
    links: [
      { label: "About", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Open Demat Account", href: "/open-account" },
      { label: "Help Center", href: "/support" },
      { label: "Disclosures", href: "/disclosures" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Risk Disclosure", href: "/disclosures" },
      { label: "Terms", href: "/disclosures" },
      { label: "Privacy", href: "/disclosures" }
    ]
  }
];

export const disclosures = [
  "Investments in securities markets are subject to market risks. Read all related documents carefully before investing.",
  "Past performance is not indicative of future results. Investors should consider their risk profile before investing.",
  "Zenflow is a conceptual platform. Regulatory registrations, memberships, and disclosures will be updated before launch."
];
