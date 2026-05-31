import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Smartphone,
  Ban,
  ShieldAlert,
  FileSearch,
  MessageSquare,
  Search,
  ClipboardList,
  ArrowRight,
  AlertTriangle,
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
import bloqueioHero from "@/assets/bloqueio-app-hero.jpg";

export const Route = createFileRoute("/bloqueio-app-transporte")({
  head: () => {
    const url = "https://vitorzattoni.com.br/bloqueio-app-transporte";
    const title =
      "Conta bloqueada em aplicativo de transporte? Análise jurídica | Vitor Zattoni Advogado";
    const description =
      "Conta bloqueada, desativada ou suspensa em aplicativo de transporte (Uber, 99, iFood e similares)? Envie as informações do seu caso para análise jurídica individual.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content:
            "conta bloqueada uber, conta desativada uber, conta bloqueada 99, desbloquear conta uber, motorista de aplicativo bloqueado, advogado para motorista de aplicativo, suspensão de conta em aplicativo de transporte",
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: bloqueioHero },
        {
          property: "og:image:alt",
          content:
            "Smartphone exibindo notificação de conta bloqueada em aplicativo de transporte",
        },
        { property: "og:locale", content: "pt_BR" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: bloqueioHero },
        { name: "robots", content: "index, follow" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "O advogado pode desbloquear a conta no aplicativo de transporte?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Não há garantia de desbloqueio. A análise jurídica avalia as circunstâncias do caso, os termos de uso da plataforma e as possibilidades de contestação ou medidas cabíveis.",
                },
              },
              {
                "@type": "Question",
                name: "Todo bloqueio ou desativação de conta pode ser contestado?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Não. Cada situação precisa ser analisada individualmente, considerando fatos, documentos, termos de uso e legislação aplicável.",
                },
              },
              {
                "@type": "Question",
                name: "O atendimento sobre bloqueio de conta pode ser online?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim. Quando adequado, o atendimento inicial pode ser realizado por canais digitais.",
                },
              },
              {
                "@type": "Question",
                name: "O advogado pode garantir resultado na reativação da conta?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Não. Nenhum resultado pode ser garantido. A atuação depende da análise dos fatos, documentos, provas, legislação aplicável e decisão das autoridades competentes.",
                },
              },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Vitor Zattoni Advogado",
            description,
            url,
            areaServed: "BR",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Quatro Barras",
              addressRegion: "PR",
              addressCountry: "BR",
            },
          }),
        },
      ],
    };
  },
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

const situacoes = [
  {
    icon: Ban,
    title: "Conta bloqueada sem aviso prévio",
    text: "Bloqueio repentino da conta sem notificação clara ou possibilidade de defesa, prejudicando a renda do motorista.",
  },
  {
    icon: ShieldAlert,
    title: "Desativação por avaliação de passageiro",
    text: "Conta suspensa ou desativada com base em avaliações, denúncias ou classificações que não foram devidamente apuradas.",
  },
  {
    icon: Smartphone,
    title: "Restrição de acesso à plataforma",
    text: "Impedimento de login ou uso do aplicativo sem explicação detalhada ou canal efetivo para contestação.",
  },
  {
    icon: FileSearch,
    title: "Não recebimento de valores pendentes",
    text: "Saldo ou repasses retidos pela plataforma após o bloqueio, sem transparência sobre o motivo ou prazo de liberação.",
  },
];

const etapas = [
  { icon: MessageSquare, title: "Primeiro contato", text: "Você envia uma mensagem pelo WhatsApp explicando brevemente a situação do bloqueio ou da desativação." },
  { icon: Search, title: "Levantamento inicial", text: "São avaliadas informações sobre a plataforma, notificações recebidas, histórico e documentos do caso." },
  { icon: ClipboardList, title: "Análise do caso", text: "O contexto é analisado para verificar possibilidades, riscos, limites e caminhos jurídicos cabíveis." },
  { icon: ArrowRight, title: "Orientação", text: "São explicados os caminhos possíveis e, se houver viabilidade, a forma de atuação profissional." },
];

const faq = [
  { q: "O advogado pode desbloquear a conta?", a: "Não há garantia de desbloqueio. A análise jurídica avalia as circunstâncias do caso, os termos de uso da plataforma e as possibilidades de contestação ou medidas cabíveis." },
  { q: "Todo bloqueio pode ser contestado?", a: "Não. Cada situação precisa ser analisada individualmente, considerando fatos, documentos, termos de uso e legislação aplicável." },
  { q: "O atendimento pode ser online?", a: "Sim. Quando adequado, o atendimento inicial pode ser realizado por canais digitais." },
  { q: "O advogado pode garantir resultado?", a: "Não. Nenhum resultado pode ser garantido. A atuação depende da análise dos fatos, documentos, provas, legislação aplicável e decisão das autoridades competentes." },
];

function Page() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header transparentOnTop />
      <Hero />
      <Situacoes />
      <ComoFunciona />
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
          src={bloqueioHero}
          alt="Smartphone sobre mesa escura exibindo notificação de conta bloqueada em aplicativo de transporte"
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
            Análise Jurídica
          </span>
          <h1 className="mt-8 font-display text-5xl font-medium leading-[1.05] text-offwhite md:text-7xl">
            Conta bloqueada ou desativada em aplicativo de transporte?
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-offwhite/80 md:text-xl">
            Algumas situações podem exigir uma análise jurídica individual. Envie as informações do seu caso para que a equipe avalie os documentos e apresente as orientações adequadas.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton size="lg" variant="primary" withIcon={false}>
              Solicitar análise do caso
            </WhatsAppButton>
            <a
              href="#situacoes"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/60 px-7 py-4 text-xs uppercase tracking-[0.2em] text-offwhite transition-all hover:border-gold hover:bg-gold/10"
            >
              Falar com a equipe
            </a>
          </div>

          <p className="reveal mt-8 max-w-2xl text-sm italic text-offwhite/55">
            O envio das informações não garante a adoção de medida judicial ou administrativa. Cada situação é analisada individualmente.
          </p>
        </div>
      </div>
    </section>
  );
}

function Situacoes() {
  return (
    <section id="situacoes" className="relative border-t border-gold/15 bg-navy-mid py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Situações</span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Situações que podem ser analisadas
          </h2>
          <p className="mt-5 text-offwhite/65">
            Exemplos de bloqueio, desativação ou suspensão de conta em aplicativos de transporte e entrega — como Uber, 99, iFood e similares — que podem exigir orientação jurídica individual, tanto para motoristas quanto para passageiros e entregadores.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {situacoes.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="reveal group flex flex-col rounded-sm border border-gold/25 bg-navy-deep/60 p-8 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_20px_50px_-18px_rgba(201,163,92,0.35)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Icon className="mx-auto h-8 w-8 text-gold" strokeWidth={1.25} />
              <div className="mx-auto mt-6 h-px w-12 bg-gold/60 transition-all duration-300 group-hover:w-20" />
              <h3 className="mt-6 font-display text-2xl text-offwhite">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-offwhite/70">{text}</p>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 flex justify-center">
          <WhatsAppButton size="lg" withIcon={false}>
            Solicitar análise do caso
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  return (
    <section className="relative border-t border-gold/15 bg-gradient-to-b from-navy-mid to-navy-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Atendimento</span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Como funciona o atendimento
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
            Solicitar análise do caso
          </WhatsAppButton>
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
            Dúvidas frequentes
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
          Precisa entender melhor sua situação?
        </h2>
        <div className="reveal mx-auto mt-6 h-px w-16 gold-divider" />
        <p className="reveal mx-auto mt-8 max-w-md leading-relaxed text-offwhite/75">
          Entre em contato pelo WhatsApp e envie as informações do seu caso para uma análise inicial.
        </p>
        <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton size="lg" withIcon={false}>
            Solicitar análise do caso
          </WhatsAppButton>
          <WhatsAppButton size="lg" variant="outline" withIcon={false}>
            Falar com a equipe
          </WhatsAppButton>
        </div>
        <p className="reveal mt-6 text-xs italic text-offwhite/55">
          O envio das informações não garante a adoção de medida judicial ou administrativa. Cada situação é analisada individualmente.
        </p>
      </div>
    </section>
  );
}
