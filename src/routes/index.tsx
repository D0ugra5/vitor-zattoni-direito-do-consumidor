import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Building2,
  Scale,
  ShoppingBag,
  Eye,
  ShieldCheck,
  Lock,
  Compass,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-library.jpg";
import aboutImage from "@/assets/vitor-zattoni.png";
import transitionImage from "@/assets/transition-columns.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vitor Zattoni Advogado | Direito Imobiliário, Inventário e Consumidor" },
      {
        name: "description",
        content:
          "Site institucional de Vitor Zattoni Advogado, com atuação em Direito Imobiliário, Inventário e Direito do Consumidor. Atendimento jurídico claro, sigiloso e individualizado.",
      },
      {
        property: "og:title",
        content: "Vitor Zattoni Advogado | Direito Imobiliário, Inventário e Consumidor",
      },
      {
        property: "og:description",
        content:
          "Atuação jurídica em Direito Imobiliário, Inventário e Direito do Consumidor, com atendimento individualizado e comunicação clara.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
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

const areas = [
  {
    to: "/imobiliario" as const,
    icon: Building2,
    title: "Direito Imobiliário",
    text:
      "Atuação em contratos, locações, compra e venda, regularização de imóveis e solução de conflitos envolvendo bens imobiliários.",
  },
  {
    to: "/inventario" as const,
    icon: Scale,
    title: "Inventário",
    text:
      "Atuação em inventários judiciais e extrajudiciais, partilha de bens, regularização patrimonial e orientação em questões sucessórias.",
  },
  {
    to: "/consumidor" as const,
    icon: ShoppingBag,
    title: "Direito do Consumidor",
    text:
      "Atuação em conflitos de consumo, cobranças indevidas, falhas na prestação de serviços, produtos com defeito e práticas abusivas.",
  },
];

const principles = [
  { icon: Eye, title: "Clareza", text: "Comunicação objetiva." },
  { icon: ShieldCheck, title: "Comprometimento", text: "Análise cuidadosa." },
  { icon: Lock, title: "Sigilo", text: "Tratamento profissional e reservado das informações apresentadas." },
  { icon: Compass, title: "Credibilidade", text: "Orientação jurídica considerando riscos, possibilidades e próximos passos." },
];

function Home() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header transparentOnTop />
      <Hero />
      
      <Areas />
      <About />
      <Principles />
      <Transition />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Biblioteca jurídica elegante com balança da justiça"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/30" />
      </div>

      {/* Decorative gold lines */}
      <div className="pointer-events-none absolute left-10 top-1/2 hidden h-40 w-px gold-divider rotate-90 md:block" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-px w-32 gold-divider" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-32 md:py-40">
        <div className="reveal max-w-3xl">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Vitor Zattoni Advogado
          </span>
          <h1 className="mt-8 font-display text-5xl font-medium leading-[1.05] text-offwhite md:text-7xl">
            Atuação com ética e responsabilidade
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-offwhite/80 md:text-xl">
            Atuação em Direito Imobiliário, Inventário e Direito do Consumidor.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#areas"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/60 px-7 py-4 text-xs uppercase tracking-[0.2em] text-offwhite transition-all hover:border-gold hover:bg-gold/10"
            >
              Conhecer áreas de atuação
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold/95 px-7 py-4 text-xs uppercase tracking-[0.2em] text-navy-deep transition-all hover:bg-gold"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="border-t border-gold/15 bg-gradient-to-b from-navy-deep to-navy-mid py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="reveal text-xs uppercase tracking-[0.3em] text-gold">
          Posicionamento
        </span>
        <h2 className="reveal mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
          Uma atuação jurídica orientada pela confiança
        </h2>
        <div className="reveal mx-auto mt-8 h-px w-20 gold-divider" />
        <p className="reveal mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-offwhite/75">
          O trabalho jurídico exige atenção aos detalhes, escuta cuidadosa e compreensão
          do contexto de cada cliente. A atuação é pautada por clareza, responsabilidade
          e análise técnica, buscando oferecer orientação segura em cada etapa.
        </p>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="relative bg-navy-mid py-24 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px flex justify-center">
        <div className="h-px w-40 gold-divider md:w-64" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Áreas de atuação
          </h2>
          <p className="mt-5 text-offwhite/65">
            Conheça as principais frentes de atuação jurídica.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {areas.map(({ to, icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="reveal group flex flex-col rounded-sm border border-gold/25 bg-navy-deep/60 p-8 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_20px_50px_-18px_rgba(201,163,92,0.35)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Icon className="h-8 w-8 text-gold" strokeWidth={1.25} />
              <div className="mt-6 h-px w-12 bg-gold/60 transition-all duration-300 group-hover:w-20" />
              <h3 className="mt-6 font-display text-2xl text-offwhite">{title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-offwhite/70">{text}</p>
              <Link
                to={to}
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold transition-all hover:gap-3 hover:text-gold-soft"
              >
                Conhecer área <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="border-t border-gold/15 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="reveal relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-gold/40 bg-navy-deep">
              <img
                src={aboutImage}
                alt="Vitor Zattoni, advogado"
                className="h-full w-full object-cover object-top"
                loading="lazy"
                width={1024}
                height={1280}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-gold/60 md:block" />
            <div className="absolute -top-4 -left-4 hidden h-24 w-24 border-l border-t border-gold/60 md:block" />
          </div>

          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Sobre</span>
            <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
              Vitor Zattoni Advogado
            </h2>
            <div className="mt-6 h-px w-16 gold-divider" />
            <p className="mt-8 leading-relaxed text-offwhite/75">
              Advogado formado pela PUCPR, com experiência acadêmica internacional em
              Direito Internacional e Europeu pela University of Silesia, na Polônia.
              Possui MBA em Gestão e Business Law pela FGV e pós-graduação em Direito
              Tributário pela PUCRS. Atua de forma técnica e com atenção às
              particularidades de cada caso.
            </p>

            <dl className="mt-10 space-y-3 text-sm">
              <Row label="OAB/PR" value="125.654" />
              <Row label="Cidade/Estado" value="Quatro Barras - PR" />
              <Row label="Áreas" value="Imobiliário · Inventário · Consumidor · Tributário" />
            </dl>


            <div className="mt-10">
              <WhatsAppButton variant="outline" size="lg">
                Entrar em contato
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-gold/15 py-3 sm:flex-row sm:gap-6">
      <dt className="min-w-[140px] text-xs uppercase tracking-[0.2em] text-gold/80">
        {label}
      </dt>
      <dd className="text-offwhite/85">{value}</dd>
    </div>
  );
}

function Principles() {
  return (
    <section className="relative border-t border-gold/15 bg-gradient-to-b from-navy-mid to-navy-deep py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Valores</span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Princípios que orientam o atendimento
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-gold/25 bg-gold/20 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="reveal flex flex-col items-center text-center bg-navy-deep/70 p-8 transition-colors hover:bg-navy-deep/90"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Icon className="h-7 w-7 text-gold" strokeWidth={1.25} />
              <h3 className="mt-6 font-display text-xl text-offwhite">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-offwhite/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Transition() {
  return (
    <section className="relative isolate overflow-hidden border-t border-gold/15">
      <div className="absolute inset-0">
        <img
          src={transitionImage}
          alt="Arquitetura clássica representando justiça"
          className="h-full w-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 py-32 text-center md:py-44">
        <div className="reveal">
          <div className="mx-auto h-px w-16 gold-divider" />
          <p className="mt-10 font-display text-2xl leading-relaxed text-offwhite md:text-4xl">
            "Orientação jurídica com atenção aos detalhes e compromisso com decisões
            mais seguras."
          </p>
          <div className="mx-auto mt-10 h-px w-16 gold-divider" />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="border-t border-gold/15 py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="reveal text-xs uppercase tracking-[0.3em] text-gold">Contato</span>
        <h2 className="reveal mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
          Contato
        </h2>
        <div className="reveal mx-auto mt-6 h-px w-16 gold-divider" />
        <p className="reveal mx-auto mt-8 max-w-md leading-relaxed text-offwhite/75">
          Para orientações jurídicas, entre em contato pelo WhatsApp e informe brevemente
          sua situação.
        </p>
        <div className="reveal mt-10 flex justify-center">
          <WhatsAppButton size="lg">Enviar mensagem</WhatsAppButton>
        </div>
        <p className="reveal mt-6 text-xs italic text-offwhite/55">
          Atendimento sigiloso e individualizado.
        </p>
      </div>
    </section>
  );
}
