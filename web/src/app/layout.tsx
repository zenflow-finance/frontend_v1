import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Zenflow | A Financial Ecosystem for India",
  description:
    "Zenflow is a futuristic yet minimal investing platform for equities, bonds, and guided wealth journeys.",
  icons: {
    icon: "/logo.svg"
  }
};

// Root layout keeps navigation and footer consistent across pages.
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
