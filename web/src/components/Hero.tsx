export default function Hero() {
  return (
    <section className="section-pad">
      <div className="container-base grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="badge">Built for new and seasoned investors</span>
          <h1 className="mt-5 text-4xl font-semibold text-ink md:text-5xl">
            Invest with clarity, confidence, and guided support.
          </h1>
          <p className="mt-5 text-lg text-slate">
            Zenflow brings education, transparent pricing, and an intuitive
            onboarding experience together, so you can focus on your financial
            goals.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="button-primary">Start onboarding</button>
            <button className="button-secondary">Explore products</button>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sea" />
              KYC in minutes, with secure uploads
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sea" />
              Compare IPOs, funds, equities, loans
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sea" />
              Alerts for price moves and orders
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sea" />
              Trusted broker integrations
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 right-4 h-32 w-32 rounded-full bg-sunrise/50 blur-3xl" />
          <div className="absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-mint blur-3xl" />
          <div className="card relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate">Portfolio overview</p>
                <p className="text-2xl font-semibold text-ink">₹4,82,330</p>
              </div>
              <div className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-sea">
                +8.2% this month
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { label: "Equity", value: "₹2,50,120", change: "+5.8%" },
                { label: "Mutual Funds", value: "₹1,42,980", change: "+3.2%" },
                { label: "IPOs", value: "₹62,000", change: "+9.4%" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl bg-mist px-4 py-3"
                >
                  <p className="text-sm font-medium text-ink">{item.label}</p>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-ink">{item.value}</p>
                    <p className="text-xs text-sea">{item.change}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-cloud p-4">
              <p className="text-xs uppercase text-slate">Next step</p>
              <p className="mt-2 text-sm font-medium text-ink">
                Complete your KYC in 3 simple steps
              </p>
              <button className="mt-4 w-full rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">
                Continue onboarding
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
