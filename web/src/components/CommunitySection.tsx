const highlights = [
  {
    title: "Community-led answers",
    description: "Ask verified experts and get guidance within hours."
  },
  {
    title: "Personal support",
    description: "Dedicated help with KYC, orders, and platform walkthroughs."
  },
  {
    title: "Partner programs",
    description: "Refer clients and track onboarding progress in one place."
  }
];

export default function CommunitySection() {
  return (
    <section id="community" className="section-pad bg-white">
      <div className="container-base">
        <h2 className="section-title">You’re never investing alone</h2>
        <p className="section-subtitle">
          Our community and support team keep you informed and confident.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
