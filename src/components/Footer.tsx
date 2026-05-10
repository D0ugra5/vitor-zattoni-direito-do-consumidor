import { Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-navy-deep py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl text-gold">VZ</span>
              <span className="text-sm tracking-wide text-offwhite">
                Vitor Zattoni Advogado
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-offwhite/65">
              Atuação jurídica em Direito Imobiliário, Inventário e Direito do Consumidor.
            </p>
            <div className="mt-5 space-y-1 text-sm text-offwhite/65">
              <div>OAB/PR: 125.654</div>
              <div>Cidade/Estado: Quatro Barras - PR</div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold/80">Navegação</div>
            <ul className="mt-4 space-y-2 text-sm text-offwhite/75">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/imobiliario" className="hover:text-gold">Imobiliário</Link></li>
              <li><Link to="/inventario" className="hover:text-gold">Inventário</Link></li>
              <li><Link to="/consumidor" className="hover:text-gold">Consumidor</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold/80">Contato</div>
            <ul className="mt-4 space-y-2 text-sm text-offwhite/75">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp
                </a>
              </li>
              <li><a href="#" className="hover:text-gold">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-gold">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 h-px w-full gold-divider opacity-60" />

        <p className="mt-8 text-center text-xs italic leading-relaxed text-offwhite/55">
          As informações deste site possuem caráter exclusivamente informativo e não
          representam promessa de resultado. A atuação profissional depende da análise
          individual de cada caso.
        </p>
      </div>
    </footer>
  );
}
