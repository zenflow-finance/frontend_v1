import Link from "next/link";

import SectionShell from "@/components/SectionShell";

// Bottom-of-page CTA to keep focus on account opening.
export default function CTA() {
  return (
    <SectionShell>
      <div className="card border-ink/10 bg-ink text-ivory">
        <div className="grid gap-6 md:grid-cols-[1.4fr_0.6fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ivory/70">
              Ready to begin
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Open your Zenflow account and start building steady wealth.
            </h3>
            <p className="mt-3 text-sm text-ivory/70">
              We keep onboarding clear, guided, and compliant with risk
              disclosures up front.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href="/open-account"
              className="button-primary bg-ivory text-ink"
            >
              Open Account
            </Link>
            <Link
              href="/support"
              className="button-secondary border-ivory/50 text-ivory hover:border-ivory"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
