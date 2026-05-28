import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  HandCoins,
  Scale,
  Gavel,
  ShieldOff,
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

const faq = [
  {
    q: "Qual o valor da pensão alimentícia?",
    a: "Não existe um percentual fixo em lei. O valor é definido caso a caso, considerando as necessidades de quem recebe e as possibilidades financeiras de quem paga (binômio necessidade x possibilidade). Em situações comuns, o juiz costuma fixar entre 20% e 30% dos rendimentos líquidos, mas o caso concreto pode justificar valores diferentes.",
  },
  {
    q: "Como pedir pensão alimentícia, inclusive pela justiça gratuita?",
    a: "O pedido é feito por meio de ação de alimentos, com documentos que comprovem a relação de parentesco, as necessidades do alimentando e, quando possível, indícios da renda do alimentante. Quem não tem condições de arcar com custas pode requerer o benefício da justiça gratuita.",
  },
  {
    q: "Pensão alimentícia vai até os 18 ou 21 anos?",
    a: "A obrigação não termina automaticamente aos 18 anos. Se o filho ainda estuda (em geral até concluir curso superior ou técnico) e comprovadamente depende dos pais, a pensão pode ser mantida. A exoneração depende de processo judicial, e não cessa por simples decurso de idade.",
  },
  {
    q: "Guarda compartilhada também tem pagamento de pensão?",
    a: "Sim. Guarda compartilhada se refere à divisão das decisões sobre a vida do filho, não ao pagamento. Quem tiver maior capacidade financeira pode continuar obrigado a pagar pensão, mesmo com convivência dividida.",
  },
  {
    q: "E se o pai (ou a mãe) não pagar a pensão?",
    a: "É possível ajuizar execução de alimentos. A depender do rito escolhido, a inadimplência pode levar à penhora de bens e valores, inscrição em cadastros de inadimplentes, protesto da dívida e até prisão civil do devedor por até 90 dias.",
  },
  {
    q: "Quando é possível revisar ou exonerar a pensão alimentícia?",
    a: "Quando há mudança relevante na situação financeira do alimentante (desemprego, redução de renda, novos filhos) ou nas necessidades do alimentando. A revisão pode aumentar ou reduzir o valor; a exoneração, encerrar a obrigação. Ambas exigem ação judicial.",
  },
  {
    q: "Estou desempregado. Mesmo assim tenho que pagar pensão?",
    a: "A obrigação não desaparece com o desemprego, mas o valor pode ser revisto judicialmente conforme a nova realidade. Continuar pagando, mesmo um valor menor, e buscar a revisão é o caminho mais seguro para evitar execução e prisão civil.",
  },
  {
    q: "O atendimento pode ser feito pelo WhatsApp?",
    a: "Sim. O primeiro contato e o levantamento inicial podem ser feitos pelo WhatsApp, de forma sigilosa. A partir daí, são indicados os próximos passos conforme o caso.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/pensao-alimenticia")({
  head: () => ({
    meta: [
      { title: "Advogado de Pensão Alimentícia — Vitor Zattoni" },
      {
        name: "description",
        content:
          "Advogado para pensão alimentícia: pedir, revisar, executar ou exonerar. Atendimento sigiloso pelo WhatsApp. OAB/PR 125.654.",
      },
      {
        property: "og:title",
        content: "Advogado de Pensão Alimentícia — Vitor Zattoni",
      },
      {
        property: "og:description",
        content:
          "Pedido, revisão, execução e exoneração de pensão alimentícia. Análise individual de cada caso.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://vitorzattoni.com.br/pensao-alimenticia",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://vitorzattoni.com.br/pensao-alimenticia",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd),
      },
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

const servicos = [
  {
    icon: HandCoins,
    title: "Pedir pensão alimentícia",
    text: "Ação de alimentos para filhos, ex-cônjuge ou outros familiares com direito reconhecido, com pedido de alimentos provisórios desde o início do processo.",
  },
  {
    icon: Scale,
    title: "Revisar o valor (aumento ou redução)",
    text: "Quando a situação financeira de quem paga ou as necessidades de quem recebe mudam — desemprego, novo filho, gastos com saúde ou educação.",
  },
  {
    icon: Gavel,
    title: "Executar pensão atrasada",
    text: "Cobrança das parcelas em atraso, com possibilidade de penhora, protesto, inscrição em cadastros de inadimplentes e prisão civil do devedor.",
  },
  {
    icon: ShieldOff,
    title: "Exonerar a obrigação",
    text: "Encerrar a pensão quando o filho atinge a maioridade e independência, ou quando deixam de existir os requisitos que justificavam o pagamento.",
  },
];

const sinais = [
  "O pai ou a mãe parou de pagar a pensão",
  "O valor atual ficou inviável após desemprego ou redução de renda",
  "As despesas do filho aumentaram (escola, saúde, atividades)",
  "Filho completou 18 anos e está em curso superior ou técnico",
  "Existe guarda compartilhada e dúvida sobre quem deve pagar",
  "O devedor não tem renda formal e parece esconder bens",
  "Há ameaça de prisão por dívida de pensão",
];

const etapas = [
  {
    icon: MessageSquare,
    title: "Primeiro contato",
    text: "Você envia uma mensagem pelo WhatsApp explicando a situação de forma resumida.",
  },
  {
    icon: Search,
    title: "Levantamento inicial",
    text: "São avaliados documentos, comprovantes de renda, decisões anteriores e o histórico do caso.",
  },
  {
    icon: ClipboardList,
    title: "Análise jurídica",
    text: "O caso é analisado considerando fatos, provas e legislação aplicável à pensão alimentícia.",
  },
  {
    icon: ArrowRight,
    title: "Orientação e atuação",
    text: "São explicados os caminhos possíveis e, havendo viabilidade, a forma de atuação profissional.",
  },
];

function Page() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header transparentOnTop />
      <Hero />
      <Servicos />
      <QuandoProcurar />
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
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-navy-deep">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.32_0.06_265)_0%,oklch(0.18_0.04_265)_45%,oklch(0.12_0.03_265)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/30" />
      </div>

      <div className="pointer-events-none absolute left-10 top-1/2 hidden h-40 w-px gold-divider rotate-90 md:block" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-px w-32 gold-divider" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-32 md:py-40">
        <div className="reveal max-w-3xl">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Pensão Alimentícia
          </span>
          <h1 className="mt-8 font-display text-5xl font-medium leading-[1.05] text-offwhite md:text-7xl">
            Advogado de Pensão Alimentícia
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-offwhite/80 md:text-xl">
            Pedir, revisar, executar ou exonerar pensão alimentícia. Atendimento
            sigiloso pelo WhatsApp, com análise individual de cada caso.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton size="lg" variant="primary" withIcon={false}>
              Falar com o advogado
            </WhatsAppButton>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/60 px-7 py-4 text-xs uppercase tracking-[0.2em] text-offwhite transition-all hover:border-gold hover:bg-gold/10"
            >
              Ver como posso ajudar
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-offwhite/65">
            <span>OAB/PR 125.654</span>
            <span className="h-3 w-px bg-gold/40" />
            <span>Quatro Barras – PR</span>
            <span className="h-3 w-px bg-gold/40" />
            <span>Atendimento sigiloso</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Servicos() {
  return (
    <section
      id="servicos"
      className="relative border-t border-gold/15 bg-gradient-to-b from-navy-deep to-navy-mid py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Como posso ajudar
          </span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Atuação em pensão alimentícia
          </h2>
          <p className="mt-5 text-offwhite/65">
            Da fixação inicial à exoneração: cada etapa exige análise específica
            do caso, dos documentos e da legislação aplicável.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {servicos.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="reveal group flex flex-col rounded-sm border border-gold/25 bg-navy-deep/60 p-8 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_20px_50px_-18px_rgba(201,163,92,0.35)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Icon className="h-8 w-8 text-gold" strokeWidth={1.25} />
              <div className="mt-6 h-px w-12 bg-gold/60 transition-all duration-300 group-hover:w-20" />
              <h3 className="mt-6 font-display text-2xl text-offwhite">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-offwhite/70">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 flex justify-center">
          <WhatsAppButton size="lg" withIcon={false}>
            Falar sobre meu caso
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function QuandoProcurar() {
  return (
    <section className="relative border-t border-gold/15 bg-navy-mid py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          <div className="reveal md:col-span-3">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Quando procurar
            </span>
            <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
              Sinais de que vale buscar orientação
            </h2>
            <div className="mt-6 h-px w-16 gold-divider" />
            <p className="mt-8 leading-relaxed text-offwhite/80">
              Algumas situações comuns indicam que o caso merece análise
              jurídica antes que o problema se agrave — para o lado de quem
              paga ou de quem recebe.
            </p>
            <ul className="mt-8 space-y-3">
              {sinais.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-sm text-offwhite/80"
                >
                  <span className="mt-2 h-1 w-3 flex-shrink-0 bg-gold" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <aside className="reveal md:col-span-2">
            <div className="h-full rounded-sm border-l-2 border-gold/70 bg-navy-deep/50 p-8 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.55)]">
              <AlertTriangle className="h-7 w-7 text-gold" strokeWidth={1.25} />
              <p className="mt-6 font-display text-xl italic leading-relaxed text-offwhite/90">
                "Em pensão alimentícia, o tempo conta. Quanto antes o caso é
                analisado, mais opções costumam existir."
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  return (
    <section className="relative border-t border-gold/15 bg-navy-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Atendimento
          </span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Como funciona o atendimento
          </h2>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gold/20 md:block"
          />
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
                <h3 className="mt-6 font-display text-2xl text-offwhite">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/75">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-20 flex justify-center">
          <WhatsAppButton size="lg" withIcon={false}>
            Iniciar atendimento
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
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Dúvidas
          </span>
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
              className="rounded-sm border border-gold/25 bg-navy-deep/55 px-6"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg text-offwhite hover:no-underline">
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
    <section className="relative border-t border-gold/30 bg-navy-deep py-24 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Próximo passo
          </span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Conte sua situação e receba uma orientação clara
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-offwhite/70">
            Atendimento sigiloso pelo WhatsApp. Cada caso é analisado
            individualmente, sem promessa de resultado.
          </p>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton size="lg" withIcon={false}>
              Falar no WhatsApp agora
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
