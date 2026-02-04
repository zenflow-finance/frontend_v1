import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zenflow | Invest Smarter with Confidence",
  description:
    "Consumer-friendly investing platform built for India. Learn, compare, and trade with confidence.",
  icons: {
    icon: "/logo.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
