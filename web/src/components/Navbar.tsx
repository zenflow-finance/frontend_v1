import Link from "next/link";

import { megaMenuContent, secondaryNavLinks } from "@/content/site";

// Header layout inspired by the reference: top utility bar + mega menu row.
// Mega menus are desktop-only for now to keep mobile behavior simple.
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/90 backdrop-blur">
      <div className="container-base flex flex-wrap items-center gap-4 py-4">
        {/* Brand lockup (swap icon once the final logo file is added). */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-ivory">
            <span className="text-sm font-bold tracking-wide">ZF</span>
          </div>
          <div className="leading-tight">
            <p className="text-lg font-semibold tracking-wide text-ink">Zenflow</p>
            <p className="text-xs text-ink/60">Finance</p>
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

      {/* Secondary navigation row with mega menus */}
      <div className="border-t border-ink/10 bg-ivory/70">
        <div className="container-base hidden items-center gap-6 py-3 text-sm font-medium text-ink/70 md:flex">
          {/* Products mega menu */}
          <div className="group relative">
            <Link href="/products" className="flex items-center gap-2">
              Products
              <span className="text-ink/40">▾</span>
            </Link>
            <div className="absolute left-0 top-full hidden w-[760px] rounded-3xl border border-ink/10 bg-white p-8 shadow-deep group-hover:block">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zen-saffron">
                    Investment Services
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {megaMenuContent.products.investmentServices.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zen-emerald/15 text-zen-emerald">
                          ●
                        </span>
                        <span className="text-sm text-ink">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zen-saffron">
                    Wealth Management
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {megaMenuContent.products.wealthManagement.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zen-saffron/20 text-zen-saffron">
                          ●
                        </span>
                        <span className="text-sm text-ink">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Markets mega menu */}
          <div className="group relative">
            <Link href="/markets" className="flex items-center gap-2">
              Markets
              <span className="text-ink/40">▾</span>
            </Link>
            <div className="absolute left-0 top-full hidden w-[980px] rounded-3xl border border-ink/10 bg-white p-8 shadow-deep group-hover:block">
              <div className="flex flex-wrap gap-3">
                {megaMenuContent.markets.tabs.map((tab) => (
                  <div
                    key={tab}
                    className="flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-xs text-ink/70"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zen-emerald/15 text-zen-emerald">
                      ●
                    </span>
                    {tab}
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-8 lg:grid-cols-6">
                {megaMenuContent.markets.columns.map((column) => (
                  <div key={column.title}>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zen-saffron">
                      {column.title}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-ink/70">
                      {column.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="text-zen-saffron">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Static links (no mega menu yet) */}
          {secondaryNavLinks
            .filter(
              (link) =>
                link.label !== "Products" &&
                link.label !== "Markets" &&
                link.label !== "Knowledge Center"
            )
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-ink"
              >
                {link.label}
              </Link>
            ))}

          {/* Knowledge Center mega menu */}
          <div className="group relative">
            <Link href="/knowledge" className="flex items-center gap-2">
              Knowledge Center
              <span className="text-ink/40">▾</span>
            </Link>
            <div className="absolute left-0 top-full hidden w-[320px] rounded-3xl border border-ink/10 bg-white p-6 shadow-deep group-hover:block">
              <div className="space-y-4">
                {megaMenuContent.knowledge.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zen-sky/15 text-zen-sky">
                      ●
                    </span>
                    <span className="text-sm text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
