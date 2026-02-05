import Link from "next/link";

import { navLinks } from "@/content/site";

// Primary site navigation used across all pages.
// Uses centralized navLinks so updates stay modular.
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/80 backdrop-blur">
      <div className="container-base flex h-20 items-center justify-between gap-6">
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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/70 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu (no JS, keeps layout lightweight) */}
        <details className="relative md:hidden">
          <summary className="list-none rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-48 rounded-2xl border border-ink/10 bg-white p-4 shadow-deep">
            <div className="flex flex-col gap-3 text-sm text-ink/70">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </details>

        {/* Primary CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/open-account"
            className="hidden rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold text-ink transition hover:border-ink/50 sm:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/open-account"
            className="rounded-full bg-ink px-5 py-2 text-xs font-semibold uppercase tracking-wide text-ivory shadow-glow transition hover:-translate-y-0.5"
          >
            Open Account
          </Link>
        </div>
      </div>
    </header>
  );
}
