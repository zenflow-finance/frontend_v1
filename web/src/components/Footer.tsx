import Link from "next/link";

import { disclosures, footerColumns } from "@/content/site";

// Footer contains navigation + legal disclosure preview.
export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ivory/80">
      <div className="container-base grid gap-10 py-12 md:grid-cols-[1.4fr_2fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-ivory">
              <span className="text-sm font-bold">ZF</span>
            </div>
            <div>
              <p className="text-lg font-semibold text-ink">Zenflow</p>
              <p className="text-xs text-ink/60">Financial ecosystem</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-ink/70">
            Built in India for investors who want clarity, guidance, and
            long-term calm.
          </p>
          <div className="mt-4 space-y-2 text-xs text-ink/60">
            {disclosures.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
                {column.title}
              </p>
              <div className="mt-4 space-y-2 text-sm">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-ink/70 transition hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-ink/10 py-6 text-center text-xs text-ink/50">
        © 2026 Zenflow. All rights reserved.
      </div>
    </footer>
  );
}
