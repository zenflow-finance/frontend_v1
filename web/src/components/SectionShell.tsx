import type { ReactNode } from "react";

// Shared layout wrapper for all sections.
// Keeps spacing consistent and easy to tune later.
export default function SectionShell({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`section-pad ${className}`.trim()}>
      <div className="container-base">{children}</div>
    </section>
  );
}
