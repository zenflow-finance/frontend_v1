import Logo from "@/components/Logo";

const columns = [
  {
    title: "Platform",
    links: ["Products", "Pricing", "Security", "Roadmap"]
  },
  {
    title: "Resources",
    links: ["Learning Hub", "Market Guides", "FAQs", "Support"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "Partners", "Contact"]
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-cloud bg-white py-14">
      <div className="container-base grid gap-10 md:grid-cols-[1.2fr_2fr]">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-slate">
            Zenflow helps investors in India learn, compare, and trade with
            confidence. Built with compliance and clarity at the core.
          </p>
          <p className="text-xs text-slate">© 2026 Zenflow. All rights reserved.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-ink">{column.title}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
