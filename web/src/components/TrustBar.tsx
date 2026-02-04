const trustItems = [
  "SEBI aligned workflows",
  "Bank-grade encryption",
  "KYC partners verified",
  "Motilal Oswal integration",
  "24/7 support care"
];

export default function TrustBar() {
  return (
    <section className="border-y border-cloud bg-white py-6">
      <div className="container-base flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
        {trustItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
