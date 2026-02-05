"use client";

import { useState } from "react";

export type ResponsiveAsset = {
  alt: string;
  web: string;
  tab: string;
  mobile: string;
  webPng?: string;
  tabPng?: string;
  mobilePng?: string;
};

// Responsive image that prefers PNG and falls back to SVG if PNG is missing.
export default function ResponsiveAssetImage({
  asset,
  className = ""
}: {
  asset: ResponsiveAsset;
  className?: string;
}) {
  const [useSvg, setUseSvg] = useState(false);

  const webSrc = useSvg ? asset.web : asset.webPng ?? asset.web;
  const tabSrc = useSvg ? asset.tab : asset.tabPng ?? asset.tab;
  const mobileSrc = useSvg ? asset.mobile : asset.mobilePng ?? asset.mobile;

  return (
    <picture>
      <source media="(max-width: 640px)" srcSet={mobileSrc} />
      <source media="(max-width: 1024px)" srcSet={tabSrc} />
      <img
        src={webSrc}
        alt={asset.alt}
        className={className}
        loading="lazy"
        onError={() => setUseSvg(true)}
      />
    </picture>
  );
}
