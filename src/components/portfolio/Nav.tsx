import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const items = [
  ["About", "about"],
  ["Academics", "academics"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Certificates", "certificates"],
  ["Awards", "awards"],
  ["Experience", "timeline"],
  ["Contact", "contact"],
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      <div className="mx-auto max-w-7xl px-6">
        <nav className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${scrolled ? "glass-strong" : "border border-transparent"}`}>
          <Link to="/" className="flex items-center gap-2 text-sm font-medium tracking-[0.2em] uppercase text-gold">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-gold text-[color:var(--ink)] font-display text-sm">M</span>
            <span className="hidden sm:inline">Mohit S</span>
          </Link>
          <ul className="hidden items-center gap-1 md:flex">
            {items.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="rounded-full px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-white/5 hover:text-gold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-gradient-gold px-4 py-2 text-xs font-medium text-[color:var(--ink)] shadow-gold-glow transition hover:scale-[1.03]"
          >
            Let's talk
          </a>
        </nav>
      </div>
    </header>
  );
}
