import Logo from "@/components/Logo";

const links = [
  { label: "Products", href: "#products" },
  { label: "Learning", href: "#learning" },
  { label: "Pricing", href: "#pricing" },
  { label: "Community", href: "#community" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-cloud bg-white/80 backdrop-blur">
      <div className="container-base flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-sea">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="button-secondary">Log in</button>
          <button className="button-primary">Get started</button>
        </div>
      </div>
    </header>
  );
}
