import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

// Open account page with a simple, frontend-only form.
export default function OpenAccountPage() {
  return (
    <main>
      <PageHeader
        title="Open Account"
        subtitle="Start your onboarding journey with a short, guided form. (Frontend only)" 
      />
      <SectionShell>
        <div className="grid gap-8 md:grid-cols-[1fr_0.7fr]">
          <form className="card border-ink/10">
            <div className="grid gap-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink/40"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  Mobile number
                </label>
                <input
                  type="tel"
                  placeholder="+91"
                  className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink/40"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@domain.com"
                  className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink/40"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  Investment interest
                </label>
                <select className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink/40">
                  <option>Equities</option>
                  <option>Bonds</option>
                  <option>Both</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              className="mt-6 w-full rounded-full bg-ink px-4 py-3 text-sm font-semibold text-ivory"
            >
              Continue
            </button>
          </form>

          <div className="card border-ink/10 bg-ivory/70">
            <h3 className="text-lg font-semibold text-ink">What happens next</h3>
            <p className="mt-3 text-sm text-ink/70">
              We guide you through KYC, risk profiling, and portfolio setup with
              full compliance disclosures.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              {[
                "Identity verification",
                "Risk alignment",
                "Portfolio creation",
                "Account activation"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-zen-emerald" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
