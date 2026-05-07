import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  MessageSquare,
  Receipt,
  PackageX,
  Wifi,
  CreditCard,
  ShoppingBag,
  AlertTriangle,
  FileWarning,
  PhoneOff,
  Plus,
  Minus,
} from "lucide-react";
import { Header } from "@/components/Header";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/consumidor")({
  head: () => ({
    meta: [
      { title: "Direito do Consumidor | Vitor Zattoni Advogado" },
      {
        name: "description",
        content:
          "Receba orientação jurídica em Direito do Consumidor pelo WhatsApp. Atendimento sigiloso, online e individualizado com Vitor Zattoni Advogado.",
      },
      { property: "og:title", content: "Direito do Consumidor | Vitor Zattoni Advogado" },
      {
        property: "og:description",
        content:
          "Orientação jurídica para problemas com operadora, banco, cobranças, contratos e serviços. Atendimento pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
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

const seals = [
  { icon: UserCheck, label: "Atendimento profissional" },
  { icon: Lock, label: "Sigilo jurídico" },
  { icon: ShieldCheck, label: "Análise individual do caso" },
  { icon: MessageSquare, label: "Comunicação clara" },
];

const situations = [
  { icon: Receipt, title: "Cobrança indevida", text: "Quando uma empresa cobra valores que você não reconhece ou que não foram contratados." },
  { icon: PackageX, title: "Serviço não entregue", text: "Casos em que o serviço prometido não foi prestado corretamente ou não corresponde ao contratado." },
  { icon: Wifi, title: "Problemas com operadora", text: "Situações com internet, telefone, plano de dados, cancelamentos, cobranças e falhas no atendimento." },
  { icon: CreditCard, title: "Problemas com banco ou cartão", text: "Cobranças, bloqueios, contratos, tarifas, negativação ou uso indevido." },
  { icon: ShoppingBag, title: "Produto não entregue ou com defeito", text: "Compras que não chegaram, produtos com problemas ou dificuldade para resolver com a empresa." },
  { icon: AlertTriangle, title: "Negativação indevida", text: "Quando o nome é incluído em órgãos de proteção ao crédito de forma questionável ou sem clareza." },
  { icon: FileWarning, title: "Contrato abusivo ou confuso", text: "Cláusulas difíceis de entender, obrigações desproporcionais ou dúvidas antes de assinar." },
  { icon: PhoneOff, title: "Empresa que não resolve pelo SAC", text: "Quando o consumidor tenta resolver administrativamente, mas não recebe retorno adequado." },
];

const steps = [
  { n: "01", title: "Você envia uma mensagem", text: "Clique no botão de WhatsApp e informe brevemente o que aconteceu." },
  { n: "02", title: "O caso é compreendido", text: "As informações iniciais são avaliadas para entender o contexto do problema." },
  { n: "03", title: "Documentos podem ser solicitados", text: "Comprovantes, contratos, prints, protocolos e outros documentos podem ajudar na análise." },
  { n: "04", title: "Você recebe orientação", text: "São explicados os caminhos possíveis, riscos, limites e próximos passos." },
];

const faqs = [
  { q: "O primeiro contato garante que meu caso será aceito?", a: "Não. O primeiro contato serve para entender a situação e verificar se existe possibilidade de atuação jurídica." },
  { q: "O advogado pode garantir resultado?", a: "Não. Nenhum resultado pode ser garantido. A atuação depende dos fatos, documentos, provas, legislação aplicável e decisão das autoridades competentes." },
  { q: "Quais documentos posso enviar pelo WhatsApp?", a: "Depende do caso. Em geral, contratos, comprovantes, prints, protocolos, notificações, boletos e documentos relacionados ao problema podem auxiliar na análise." },
  { q: "O atendimento pode ser online?", a: "Sim. Quando adequado, o atendimento pode ser realizado por canais digitais." },
  { q: "Tenho problema com uma empresa. Posso entrar em contato?", a: "Sim. Você pode relatar a situação para que seja feita uma análise inicial e, se houver possibilidade, receber orientação sobre os próximos passos." },
  { q: "Meus dados ficam protegidos?", a: "Sim. As informações fornecidas são tratadas com sigilo profissional." },
];

function Landing() {
  useReveal();
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Situations />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-hero-gradient relative overflow-hidden">
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full border border-gold/15" />
      <div className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full border border-gold/10" />
      <div className="pointer-events-none absolute left-10 bottom-10 h-px w-40 gold-divider" />

      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
            Direito do Consumidor
          </span>
          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] text-offwhite md:text-6xl">
            Teve problema com operadora, banco ou empresa?
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-offwhite/75 md:text-xl">
            Receba orientação jurídica para entender seus direitos, avaliar seu caso e
            identificar os próximos passos possíveis.
          </p>
          <p className="mt-3 text-sm text-offwhite/55">
            Atendimento sigiloso, online e individualizado.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton size="lg">Falar com um advogado no WhatsApp</WhatsAppButton>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-md border border-gold/60 px-7 py-4 text-base font-medium text-offwhite transition-all hover:border-gold hover:bg-gold/10"
            >
              Ver como funciona o atendimento
            </a>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {seals.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-offwhite/80">
                <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Situations() {
  return (
    <section className="border-t border-gold/15 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium text-offwhite md:text-5xl">
            Você está passando por alguma dessas situações?
          </h2>
          <p className="mt-4 text-offwhite/70">
            Uma orientação jurídica adequada ajuda a entender quais caminhos podem ser avaliados.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {situations.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="card-gold reveal rounded-lg p-6"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
              <h3 className="mt-5 font-display text-xl text-offwhite">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-offwhite/70">{text}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <WhatsAppButton size="lg">Quero orientação pelo WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-gold/15 bg-navy/40 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <div className="reveal text-center">
          <h2 className="font-display text-3xl font-medium text-offwhite md:text-5xl">
            Como funciona o atendimento pelo WhatsApp
          </h2>
          <p className="mt-4 text-offwhite/70">
            O processo é simples, sigiloso e conduzido com responsabilidade.
          </p>
        </div>

        <ol className="relative mt-14 space-y-10 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-gold/40 md:before:left-6">
          {steps.map((s) => (
            <li key={s.n} className="reveal relative flex gap-5 pl-0 md:gap-7">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold bg-navy-deep font-display text-sm text-gold md:h-12 md:w-12 md:text-base">
                {s.n}
              </div>
              <div className="pt-1">
                <h3 className="font-display text-2xl text-offwhite">{s.title}</h3>
                <p className="mt-1.5 text-offwhite/70">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="reveal mt-12 text-center text-sm italic text-offwhite/55">
          O atendimento não representa promessa de resultado. Cada caso depende da análise
          individual dos fatos, documentos e legislação aplicável.
        </p>

        <div className="reveal mt-8 flex justify-center">
          <WhatsAppButton size="lg">Começar atendimento pelo WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-gold/15 bg-navy/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="reveal text-center">
          <h2 className="font-display text-3xl font-medium text-offwhite md:text-5xl">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="reveal overflow-hidden rounded-lg border border-gold/30 bg-navy/60 transition-colors hover:border-gold/60"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-offwhite">{f.q}</span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  )}
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-offwhite/75">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-t border-gold/60 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="reveal font-display text-3xl font-medium text-offwhite md:text-5xl">
          Teve um problema e precisa entender seus direitos?
        </h2>
        <p className="reveal mt-5 text-offwhite/75">
          Entre em contato pelo WhatsApp e receba orientação jurídica para avaliar os
          próximos passos possíveis.
        </p>
        <div className="reveal mt-10 flex justify-center">
          <WhatsAppButton size="lg">Falar agora pelo WhatsApp</WhatsAppButton>
        </div>
        <p className="reveal mt-4 text-xs text-offwhite/55">
          Envie uma breve descrição do que aconteceu para facilitar o atendimento.
        </p>
      </div>
    </section>
  );
}
