import Link from "next/link";

// Shared page header for secondary pages.
export default function PageHeader({
  title,
  subtitle,
  ctaLabel = "Open Demat Account",
  ctaHref = "/open-account"
}: {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-ivory/80">
      <div className="absolute inset-0 -z-10 heritage-motif opacity-40" />
      <div className="container-base py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
          Zenflow
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-ink/70">{subtitle}</p>
        <div className="mt-6">
          <Link href={ctaHref} className="button-primary">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
