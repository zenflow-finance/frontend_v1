import SectionHeading from "@/components/SectionHeading";
import SectionShell from "@/components/SectionShell";

// Pricing teaser section with future-proof placeholders.
// Copy can be updated once pricing is finalized.
export default function PricingSection() {
  const plans = [
    {
      name: "Essential",
      price: "₹0",
      description: "Core investing tools with full compliance support.",
      perks: ["Equities + bonds access", "Goal templates", "Market alerts"]
    },
    {
      name: "Zen+",
      price: "₹499/mo",
      description: "Advanced research, sector pulses, and advisor sessions.",
      perks: ["Thematic baskets", "Premium research", "Priority support"]
    },
    {
      name: "Wealth Desk",
      price: "Custom",
      description: "For teams and HNIs looking for deeper portfolio oversight.",
      perks: ["Multi-user access", "Dedicated RM", "Custom analytics"]
    }
  ];

  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Pricing"
        title="Transparent plans with no hidden complexity"
        subtitle="Keep pricing flexible until we finalize. These tiers are safe placeholders." 
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="card border-ink/10">
            <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>
            <p className="mt-2 text-3xl font-semibold text-ink">{plan.price}</p>
            <p className="mt-3 text-sm text-ink/70">{plan.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              {plan.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-zen-emerald" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
