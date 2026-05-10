import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Home as HomeIcon,
  Car,
  Landmark,
  FileWarning,
  Users,
  FileCheck2,
  Scale,
  Gavel,
  MessageSquare,
  ClipboardList,
  Search,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import inventarioHero from "@/assets/inventario-hero.jpg";
import inventarioAuthority from "@/assets/inventario-authority.jpg";

export const Route = createFileRoute("/inventario")({
  head: () => ({
    meta: [
      { title: "Advogado para Inventário | Vitor Zattoni Advogado" },
      {
        name: "description",
        content:
          "Orientação jurídica em inventário, partilha de bens, sucessão e regularização patrimonial. Atendimento claro, sigiloso e individualizado.",
      },
      {
        property: "og:title",
        content: "Advogado para Inventário | Vitor Zattoni Advogado",
      },
      {
        property: "og:description",
        content:
          "Orientação em inventário, partilha de bens e regularização patrimonial, com responsabilidade e clareza.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: inventarioHero },
    ],
  }),
  component: Page,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const necessidades = [
  { icon: HomeIcon, title: "Imóveis", text: "Casas, apartamentos e terrenos." },
  { icon: Car, title: "Veículos", text: "Carros, motos e outros bens." },
  { icon: Landmark, title: "Contas e valores", text: "Saldos, aplicações e investimentos." },
  { icon: FileWarning, title: "Dívidas", text: "Débitos e obrigações deixadas." },
  { icon: Users, title: "Herdeiros", text: "Identificação e organização da partilha." },
  { icon: FileCheck2, title: "Regularização", text: "Transferência formal dos bens." },
];

const etapas = [
  { icon: MessageSquare, title: "Primeiro contato", text: "Você entra em contato pelo WhatsApp e informa brevemente a situação." },
  { icon: Search, title: "Levantamento inicial", text: "São avaliadas informações sobre bens, herdeiros, documentos e possíveis pendências." },
  { icon: ClipboardList, title: "Análise do caminho adequado", text: "É verificado se o caso pode seguir por via extrajudicial ou se exige condução judicial." },
  { icon: ArrowRight, title: "Orientação sobre os próximos passos", text: "São indicados documentos necessários, etapas do procedimento e possibilidades de atuação jurídica." },
];

const documentos = [
  "Certidão de óbito",
  "Documentos pessoais da pessoa falecida",
  "Documentos dos herdeiros",
  "Certidão de casamento ou união estável, quando houver",
  "Documentos dos imóveis",
  "Documentos de veículos",
  "Extratos bancários ou informações sobre valores",
  "Certidões, escrituras, contratos ou outros documentos patrimoniais",
];

const faq = [
  { q: "Todo falecimento exige inventário?", a: "O inventário costuma ser necessário quando a pessoa falecida deixou bens, direitos, valores, dívidas ou situações patrimoniais que precisam ser regularizadas." },
  { q: "O inventário pode ser feito em cartório?", a: "Em alguns casos, sim. O inventário extrajudicial pode ser uma possibilidade quando os requisitos legais estão presentes, como acordo entre os herdeiros e documentação adequada." },
  { q: "E se os herdeiros não estiverem de acordo?", a: "Quando há divergência entre herdeiros ou outras questões específicas, pode ser necessário avaliar a via judicial." },
  { q: "Preciso reunir todos os documentos antes de falar com o advogado?", a: "Não necessariamente. O primeiro contato pode ajudar a entender quais documentos serão necessários para a análise do caso." },
  { q: "O inventário envolve dívidas?", a: "Pode envolver. É importante avaliar bens, direitos e eventuais obrigações deixadas pela pessoa falecida." },
  { q: "O atendimento pode ser online?", a: "Sim. Quando adequado, o atendimento inicial pode ser realizado por canais digitais." },
];

function Page() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header transparentOnTop />
      <Hero />
      <Intro />
      <Necessidade />
      <JudicialExtrajudicial />
      <Authority />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={inventarioHero}
          alt="Documentos patrimoniais e livros jurídicos sobre mesa elegante"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/30" />
      </div>

      <div className="pointer-events-none absolute left-10 top-1/2 hidden h-40 w-px gold-divider rotate-90 md:block" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-px w-32 gold-divider" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-32 md:py-40">
        <div className="reveal max-w-3xl">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Inventário e Sucessão
          </span>
          <h1 className="mt-8 font-display text-5xl font-medium leading-[1.05] text-offwhite md:text-7xl">
            Inventário com clareza, segurança e responsabilidade
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-offwhite/80 md:text-xl">
            Atuação em inventários judiciais e extrajudiciais, partilha de bens,
            regularização de imóveis e organização da documentação necessária.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-offwhite/55">
            Um atendimento cuidadoso para compreender o cenário, organizar documentos
            e indicar os caminhos possíveis com segurança.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton size="lg" variant="primary" withIcon={false}>
              Solicitar orientação
            </WhatsAppButton>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/60 px-7 py-4 text-xs uppercase tracking-[0.2em] text-offwhite transition-all hover:border-gold hover:bg-gold/10"
            >
              Entender como funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="relative border-t border-gold/15 bg-gradient-to-b from-navy-deep to-navy-mid py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px flex justify-center">
        <div className="h-px w-40 gold-divider md:w-64" />
      </div>
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          <div className="reveal md:col-span-3">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Conceito</span>
            <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
              O que é o inventário?
            </h2>
            <div className="mt-6 h-px w-16 gold-divider" />
            <p className="mt-8 text-justify leading-relaxed text-offwhite/80">
              O inventário é o procedimento necessário para organizar e regularizar
              os bens deixados por uma pessoa falecida. Durante esse processo, são
              identificados os herdeiros, os bens, as dívidas e os documentos
              necessários para que a partilha seja feita de forma segura, seja em
              cartório ou pela via judicial, conforme cada situação.
            </p>
          </div>
          <aside className="reveal md:col-span-2">
            <div className="h-full rounded-sm border-l-2 border-gold/70 bg-navy-deep/50 p-8 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.55)]">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Observação</span>
              <p className="mt-5 font-display text-xl italic leading-relaxed text-offwhite/90">
                "Cada inventário possui particularidades. A análise jurídica ajuda a
                compreender o melhor caminho para conduzir o procedimento."
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Necessidade() {
  return (
    <section className="relative border-t border-gold/15 bg-navy-mid py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Quando se aplica</span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Quando o inventário é necessário?
          </h2>
          <p className="mt-5 text-offwhite/65">
            O inventário costuma ser necessário quando há bens, direitos ou obrigações
            deixadas por uma pessoa falecida.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {necessidades.map(({ icon: Icon, title }, i) => (
            <article
              key={title}
              className="reveal group flex flex-col items-center rounded-sm border border-gold/25 bg-navy-deep/60 p-8 text-center shadow-[0_14px_40px_-18px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_20px_50px_-18px_rgba(201,163,92,0.35)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Icon className="h-8 w-8 text-gold" strokeWidth={1.25} />
              <div className="mt-6 h-px w-12 bg-gold/60 transition-all duration-300 group-hover:w-20" />
              <h3 className="mt-6 font-display text-2xl text-offwhite">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JudicialExtrajudicial() {
  return (
    <section className="relative border-t border-gold/15 bg-gradient-to-b from-navy-mid to-navy-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Caminhos</span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Inventário judicial ou extrajudicial
          </h2>
          <p className="mt-5 text-offwhite/65">
            A forma de condução depende das características do caso.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {[
            {
              icon: Scale,
              title: "Inventário extrajudicial",
              text: "Pode ser realizado em cartório quando os requisitos legais estão presentes, como acordo entre os herdeiros e documentação adequada.",
              items: [
                "Pode ser mais simples quando há consenso",
                "Exige análise dos documentos",
                "Precisa observar os requisitos legais",
                "Deve ser conduzido com orientação profissional",
              ],
            },
            {
              icon: Gavel,
              title: "Inventário judicial",
              text: "Pode ser necessário quando há conflito, ausência de consenso, questões específicas envolvendo herdeiros ou outras situações que exigem atuação perante o Judiciário.",
              items: [
                "Indicado em casos com divergências",
                "Pode envolver análise mais detalhada",
                "Requer acompanhamento processual",
                "Depende das particularidades do caso",
              ],
            },
          ].map(({ icon: Icon, title, text, items }) => (
            <article
              key={title}
              className="reveal flex flex-col rounded-sm border border-gold/25 bg-navy-deep/60 p-10 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.55)]"
            >
              <Icon className="h-9 w-9 text-gold" strokeWidth={1.25} />
              <h3 className="mt-6 font-display text-2xl text-offwhite">{title}</h3>
              <div className="mt-4 h-px w-16 gold-divider" />
              <p className="mt-6 leading-relaxed text-offwhite/75">{text}</p>
              <ul className="mt-8 space-y-3">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-offwhite/80">
                    <span className="mt-2 h-1 w-3 flex-shrink-0 bg-gold" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="reveal mx-auto mt-12 max-w-2xl text-center text-sm italic text-offwhite/60">
          A definição do caminho adequado depende da análise individual da situação
          familiar e patrimonial.
        </p>
      </div>
    </section>
  );
}

function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative border-t border-gold/15 bg-navy-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Atendimento</span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Como funciona a orientação em inventário
          </h2>
        </div>

        <div className="relative mt-16">
          <div aria-hidden className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gold/20 md:block" />
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {etapas.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className={`reveal relative rounded-sm border border-gold/25 bg-navy-mid/60 p-8 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.55)] ${
                  i % 2 === 1 ? "md:translate-y-12" : ""
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 font-display text-lg text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-offwhite">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/75">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-20 flex justify-center">
          <WhatsAppButton size="lg" withIcon={false}>
            Solicitar orientação sobre inventário
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function Documentos() {
  return (
    <section className="relative border-t border-gold/15 bg-navy-mid py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Documentação</span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Documentos que podem ser necessários
          </h2>
          <p className="mt-5 text-offwhite/65">
            A documentação varia conforme o caso, mas alguns documentos costumam ser
            importantes na análise inicial.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {documentos.map((doc, i) => (
            <li
              key={doc}
              className="reveal flex items-start gap-4 rounded-sm border border-gold/20 bg-navy-deep/55 p-5 transition-all hover:border-gold/60"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold/50 font-display text-xs text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed text-offwhite/85">{doc}</span>
            </li>
          ))}
        </ul>

        <p className="reveal mx-auto mt-10 max-w-2xl text-center text-sm italic text-offwhite/60">
          A lista pode variar conforme a situação. A orientação jurídica ajuda a
          identificar quais documentos são necessários para o caso concreto.
        </p>
      </div>
    </section>
  );
}

function Authority() {
  return (
    <section className="relative isolate overflow-hidden border-t border-gold/15">
      <div className="absolute inset-0">
        <img
          src={inventarioAuthority}
          alt="Arquitetura clássica representando justiça"
          className="h-full w-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-navy-deep/85" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 py-32 text-center md:py-44">
        <div className="reveal">
          <div className="mx-auto h-px w-16 gold-divider" />
          <h2 className="mt-10 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Organização, clareza e segurança na regularização patrimonial
          </h2>
          <p className="mx-auto mt-8 max-w-xl leading-relaxed text-offwhite/80">
            O inventário exige cuidado com prazos, documentos, bens e interesses
            familiares. Uma condução responsável ajuda a tornar o processo mais claro
            e organizado.
          </p>
          <div className="mx-auto mt-10 h-px w-16 gold-divider" />
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="relative border-t border-gold/15 bg-gradient-to-b from-navy-deep to-navy-mid py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="reveal text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Dúvidas</span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Dúvidas frequentes sobre inventário
          </h2>
          <div className="mx-auto mt-6 h-px w-16 gold-divider" />
        </div>

        <Accordion type="single" collapsible className="reveal mt-12 space-y-3">
          {faq.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="rounded-sm border border-gold/25 bg-navy-deep/60 px-6"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg text-offwhite hover:text-gold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-offwhite/75">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contato" className="border-t border-gold/15 py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="reveal text-xs uppercase tracking-[0.3em] text-gold">Contato</span>
        <h2 className="reveal mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
          Precisa de orientação sobre inventário?
        </h2>
        <div className="reveal mx-auto mt-6 h-px w-16 gold-divider" />
        <p className="reveal mx-auto mt-8 max-w-md leading-relaxed text-offwhite/75">
          Entre em contato pelo WhatsApp e informe brevemente a situação para uma
          análise inicial.
        </p>
        <div className="reveal mt-10 flex justify-center">
          <WhatsAppButton size="lg">Enviar mensagem</WhatsAppButton>
        </div>
        <p className="reveal mt-6 text-xs italic text-offwhite/55">
          Atendimento sigiloso, individualizado e profissional.
        </p>
      </div>
    </section>
  );
}
