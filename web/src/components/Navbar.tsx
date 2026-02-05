import Link from "next/link";

import { secondaryNavLinks } from "@/content/site";

// Header layout inspired by the reference: top utility bar + secondary nav row.
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/90 backdrop-blur">
      <div className="container-base flex flex-wrap items-center gap-4 py-4">
        {/* Brand lockup */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-ivory">
            <span className="text-sm font-bold tracking-wide">ZF</span>
          </div>
          <div className="leading-tight">
            <p className="text-lg font-semibold tracking-wide text-ink">Zenflow</p>
            <p className="text-xs text-ink/60">Financial ecosystem</p>
          </div>
        </Link>

        {/* Search bar */}
        <div className="order-3 w-full flex-1 md:order-none md:w-auto">
          <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-2 shadow-sm">
            <input
              type="text"
              placeholder="Search for stocks or mutual funds.."
              className="w-full bg-transparent text-sm text-ink placeholder:text-ink/50 focus:outline-none"
            />
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zen-saffron text-zen-saffron">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </span>
          </div>
        </div>

        {/* Primary actions */}
        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/open-account"
            className="rounded-xl border border-zen-saffron px-4 py-2 text-xs font-semibold text-zen-saffron transition hover:bg-zen-saffron/10"
          >
            Login
          </Link>
          <Link
            href="/open-account"
            className="rounded-xl bg-zen-saffron px-5 py-2 text-xs font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Open Account
          </Link>
        </div>
      </div>

      {/* Secondary navigation row */}
      <div className="border-t border-ink/10 bg-ivory/70">
        <div className="container-base flex flex-wrap items-center gap-6 py-3 text-sm font-medium text-ink/70">
          {secondaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
