import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-navy-deep/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-2xl font-semibold tracking-wide text-gold">
            VZ
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-offwhite sm:inline">
            Vitor Zattoni Advogado
          </span>
        </a>
        <nav className="flex items-center gap-4">
          <a
            href="#como-funciona"
            className="hidden text-sm text-offwhite/80 hover:text-gold sm:inline"
          >
            Como funciona
          </a>
          <WhatsAppButton variant="outline" size="md">
            Falar no WhatsApp
          </WhatsAppButton>
        </nav>
      </div>
    </header>
  );
}
