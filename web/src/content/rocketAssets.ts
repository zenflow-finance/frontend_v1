// Placeholder assets for the Rocket app page.
// Replace these with real creatives later.

export type RocketAsset = {
  alt: string;
  web: string;
  tab: string;
  mobile: string;
};

export const rocketAssets = {
  hero: {
    alt: "Rocket app hero",
    web: "/rocket/rocket-01-web.svg",
    tab: "/rocket/rocket-01-tab.svg",
    mobile: "/rocket/rocket-01-mobile.svg"
  },
  features: {
    alt: "Rocket key features",
    web: "/rocket/rocket-02-web.svg",
    tab: "/rocket/rocket-02-tab.svg",
    mobile: "/rocket/rocket-02-mobile.svg"
  },
  market: {
    alt: "Rocket market section",
    web: "/rocket/rocket-03-web.svg",
    tab: "/rocket/rocket-03-tab.svg",
    mobile: "/rocket/rocket-03-mobile.svg"
  },
  mobileApp: {
    alt: "Rocket mobile app",
    web: "/rocket/rocket-04-web.svg",
    tab: "/rocket/rocket-04-tab.svg",
    mobile: "/rocket/rocket-04-mobile.svg"
  },
  opportunities: {
    alt: "Rocket opportunities",
    web: "/rocket/rocket-05-web.svg",
    tab: "/rocket/rocket-05-tab.svg",
    mobile: "/rocket/rocket-05-mobile.svg"
  },
  explore: {
    alt: "Explore stocks",
    web: "/rocket/rocket-06-web.svg",
    tab: "/rocket/rocket-06-tab.svg",
    mobile: "/rocket/rocket-06-mobile.svg"
  }
} satisfies Record<string, RocketAsset>;
