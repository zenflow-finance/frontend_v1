const products = [
  {
    title: "IPOs",
    description: "Stay ahead of new listings with guided checklists.",
    tag: "New listings"
  },
  {
    title: "Mutual Funds",
    description: "Compare goals, returns, and risk side by side.",
    tag: "Goal-based"
  },
  {
    title: "Equity",
    description: "Track performance with smart alerts and insights.",
    tag: "Real-time"
  },
  {
    title: "Loans",
    description: "Clear eligibility checks with transparent pricing.",
    tag: "Secure"
  }
];

export default function ProductsGrid() {
  return (
    <section id="products" className="section-pad">
      <div className="container-base">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="section-title">All the ways to grow your money</h2>
            <p className="section-subtitle">
              Explore products curated for new investors and active traders.
            </p>
          </div>
          <button className="button-secondary">View all products</button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <div key={product.title} className="card">
              <span className="badge">{product.tag}</span>
              <h3 className="mt-4 text-xl font-semibold text-ink">
                {product.title}
              </h3>
              <p className="mt-3 text-sm text-slate">{product.description}</p>
              <button className="mt-6 text-sm font-semibold text-sea">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
