import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

// Login hub for the Zenflow ecosystem.
export default function LoginPage() {
  const newLogins = [
    { label: "Rocket Web", href: "/login/rocket-web-new" },
    { label: "Backoffice Client", href: "/login/backoffice-client" },
    { label: "Backoffice Branch", href: "/login/backoffice-branch" },
    { label: "Re-KYC", href: "/login/re-kyc" }
  ];

  const oldLogins = [
    { label: "Rocket Web", href: "/login/rocket-web-old" },
    { label: "Fund Transfer", href: "/login/fund-transfer" },
    { label: "Wealth", href: "/login/wealth" }
  ];

  return (
    <main>
      <PageHeader
        title="Login"
        subtitle="Choose the portal that fits your role or workflow."
        ctaLabel="Open Demat Account"
        ctaHref="/open-account"
      />
      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="card border-ink/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zen-saffron">
              Tech Login
            </p>
            <div className="mt-4 flex items-center gap-3 text-base font-medium text-ink">
              <span className="text-zen-saffron">›</span>
              <Link href="/login/back-office">Back Office</Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card border-ink/10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zen-saffron">
                New
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink/80">
                {newLogins.map((item) => (
                  <li key={item.href} className="flex items-center gap-2">
                    <span className="text-zen-saffron">›</span>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card border-ink/10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zen-saffron">
                Old
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink/80">
                {oldLogins.map((item) => (
                  <li key={item.href} className="flex items-center gap-2">
                    <span className="text-zen-saffron">›</span>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
