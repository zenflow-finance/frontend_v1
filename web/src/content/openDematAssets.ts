// Placeholder assets for the Open Demat Account page.
// Each image has web, tablet, and mobile sizes for easy replacement later.

export type ResponsiveAsset = {
  alt: string;
  web: string;
  tab: string;
  mobile: string;
  sizes: {
    web: string;
    tab: string;
    mobile: string;
  };
};

export const openDematAssets = {
  hero: {
    alt: "Open Demat Account hero illustration",
    web: "/open-demat/01-web.svg",
    tab: "/open-demat/01-tab.svg",
    mobile: "/open-demat/01-mobile.svg",
    sizes: {
      web: "1200x800",
      tab: "900x700",
      mobile: "480x720"
    }
  },
  steps: {
    alt: "Demat account steps illustration",
    web: "/open-demat/02-web.svg",
    tab: "/open-demat/02-tab.svg",
    mobile: "/open-demat/02-mobile.svg",
    sizes: {
      web: "1200x800",
      tab: "900x700",
      mobile: "480x720"
    }
  },
  awards: {
    alt: "Awards and trust badges",
    web: "/open-demat/03-web.svg",
    tab: "/open-demat/03-tab.svg",
    mobile: "/open-demat/03-mobile.svg",
    sizes: {
      web: "1200x800",
      tab: "900x700",
      mobile: "480x720"
    }
  },
  app: {
    alt: "Rocket app preview",
    web: "/open-demat/04-web.svg",
    tab: "/open-demat/04-tab.svg",
    mobile: "/open-demat/04-mobile.svg",
    sizes: {
      web: "1200x800",
      tab: "900x700",
      mobile: "480x720"
    }
  },
  demat: {
    alt: "Demat account illustration",
    web: "/open-demat/05-web.svg",
    tab: "/open-demat/05-tab.svg",
    mobile: "/open-demat/05-mobile.svg",
    sizes: {
      web: "1200x800",
      tab: "900x700",
      mobile: "480x720"
    }
  },
  benefits: {
    alt: "Demat account benefits illustration",
    web: "/open-demat/06-web.svg",
    tab: "/open-demat/06-tab.svg",
    mobile: "/open-demat/06-mobile.svg",
    sizes: {
      web: "1200x800",
      tab: "900x700",
      mobile: "480x720"
    }
  }
} satisfies Record<string, ResponsiveAsset>;
