const tiers = [
  {
    title: "Starter",
    price: "₹0",
    description: "Learn, compare, and build your plan.",
    perks: ["Access learning hub", "Product comparisons", "Market alerts"]
  },
  {
    title: "Active",
    price: "₹299/mo",
    description: "Trade with smarter insights and alerts.",
    perks: ["Advanced alerts", "Portfolio snapshots", "Priority support"],
    highlight: true
  },
  {
    title: "Pro",
    price: "Custom",
    description: "For high-volume traders and partner teams.",
    perks: ["Dedicated manager", "Custom reporting", "Partner dashboard"]
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-pad">
      <div className="container-base">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="section-title">Pricing built for transparency</h2>
            <p className="section-subtitle">
              Choose a plan that matches how you invest. Upgrade anytime.
            </p>
          </div>
          <button className="button-secondary">See full pricing</button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`card ${tier.highlight ? "border-sea bg-mint" : ""}`}
            >
              <p className="text-sm font-semibold text-slate">{tier.title}</p>
              <p className="mt-3 text-3xl font-semibold text-ink">
                {tier.price}
              </p>
              <p className="mt-3 text-sm text-slate">{tier.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sea" />
                    {perk}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
