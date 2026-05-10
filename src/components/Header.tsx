import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/imobiliario", label: "Imobiliário" },
  { to: "/inventario", label: "Inventário" },
  { to: "/consumidor", label: "Consumidor" },
] as const;

type Props = {
  /** When true the header starts transparent over a hero and becomes solid on scroll. */
  transparentOnTop?: boolean;
};

export function Header({ transparentOnTop = false }: Props) {
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid
          ? "border-b border-gold/15 bg-navy-deep/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-display text-2xl font-semibold tracking-wide text-gold">
            VZ
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-medium tracking-wide text-offwhite">
              Vitor Zattoni Advogado
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.28em] text-gold/80">
              Sociedade Individual de Advocacia
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-offwhite/85 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-gold/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-offwhite transition-all hover:border-gold hover:bg-gold/10"
          >
            Contato
          </a>
        </nav>

        <button
          aria-label="Abrir menu"
          className="rounded-md p-2 text-offwhite md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-gold/15 bg-navy-deep md:hidden ${
          open ? "max-h-96" : "max-h-0"
        } transition-all duration-300`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-b border-gold/10 py-3 text-sm text-offwhite/85 hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-sm border border-gold/70 px-4 py-3 text-xs uppercase tracking-[0.2em] text-offwhite hover:bg-gold/10"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
