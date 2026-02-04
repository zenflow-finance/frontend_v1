export default function CTA() {
  return (
    <section className="section-pad">
      <div className="container-base">
        <div className="card flex flex-col items-start justify-between gap-6 bg-ink text-white md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase text-sunrise">Start in minutes</p>
            <h2 className="mt-3 text-3xl font-semibold">
              Begin your investment journey with clarity.
            </h2>
            <p className="mt-3 text-sm text-white/80">
              KYC-first onboarding, transparent fees, and guided learning.
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-3 md:w-auto">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink">
              Start onboarding
            </button>
            <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white">
              Talk to sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
