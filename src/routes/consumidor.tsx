import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ShieldCheck,
  Receipt,
  Landmark,
  Wifi,
  PackageX,
  FileSignature,
  AlertTriangle,
  MessageSquare,
  Search,
  ClipboardList,
  ArrowRight,
  FileText,
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
import consumidorHero from "@/assets/consumidor-hero.jpg";

export const Route = createFileRoute("/consumidor")({
  head: () => ({
    meta: [
      { title: "Direito do Consumidor | Vitor Zattoni Advogado" },
      {
        name: "description",
        content:
          "Orientação jurídica em Direito do Consumidor: cobranças, contratos, bancos, operadoras, produtos e serviços. Atendimento sigiloso e individualizado.",
      },
      { property: "og:title", content: "Direito do Consumidor | Vitor Zattoni Advogado" },
      {
        property: "og:description",
        content:
          "Atuação em relações de consumo com análise responsável de contratos, cobranças e conflitos com empresas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: consumidorHero },
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

const seals = [
  "Atendimento sigiloso",
  "Análise individual",
  "Comunicação clara",
  "Atuação responsável",
];

const situacoes = [
  { icon: Receipt, title: "Cobranças indevidas", text: "Valores não reconhecidos, cobranças recorrentes, faturas divergentes ou débitos questionáveis." },
  { icon: Landmark, title: "Problemas com bancos", text: "Contratos bancários, cartões, tarifas, bloqueios, cobranças, empréstimos ou movimentações não reconhecidas." },
  { icon: Wifi, title: "Operadoras e serviços", text: "Problemas com internet, telefone, planos, cancelamentos, cobranças e falhas na prestação do serviço." },
  { icon: PackageX, title: "Produto não entregue ou com defeito", text: "Compras que não chegaram, produtos com vício, divergência na oferta ou dificuldade de solução com a empresa." },
  { icon: FileSignature, title: "Contratos de consumo", text: "Cláusulas, multas, cancelamentos, obrigações, reajustes e condições aplicadas ao consumidor." },
  { icon: AlertTriangle, title: "Negativação e cadastros", text: "Inscrição em órgãos de proteção ao crédito, cobranças desconhecidas ou dúvidas sobre a origem do débito." },
];

const ajuda = [
  "Compreender o problema de forma organizada",
  "Avaliar contratos, comprovantes, protocolos e conversas",
  "Verificar se houve cobrança indevida, falha ou prejuízo",
  "Identificar documentos importantes para o caso",
  "Orientar os próximos passos de forma clara",
];

const etapas = [
  { icon: MessageSquare, title: "Primeiro contato", text: "Você envia uma mensagem pelo WhatsApp explicando brevemente a situação." },
  { icon: Search, title: "Levantamento inicial", text: "São avaliadas informações sobre a empresa envolvida, cobranças, contratos, protocolos e documentos." },
  { icon: ClipboardList, title: "Análise do caso", text: "O contexto é analisado para verificar possibilidades, riscos, limites e próximos passos." },
  { icon: ArrowRight, title: "Orientação", text: "São explicados os caminhos possíveis e, se houver viabilidade, a forma de atuação profissional." },
];

const documentos = [
  "Contratos",
  "Comprovantes de pagamento",
  "Boletos, faturas ou extratos",
  "Prints de conversas",
  "Protocolos de atendimento",
  "E-mails ou notificações",
  "Comprovantes de compra",
  "Prints de oferta ou anúncio",
  "Comprovante de negativação, se houver",
];

const faq = [
  { q: "Todo problema com empresa gera direito a indenização?", a: "Não. Cada situação precisa ser analisada individualmente, considerando fatos, documentos, provas e legislação aplicável." },
  { q: "Preciso ter protocolos de atendimento?", a: "Protocolos, mensagens, e-mails e comprovantes podem ajudar na análise, mas os documentos necessários dependem do caso." },
  { q: "Problemas com banco podem ser avaliados?", a: "Sim. Situações envolvendo cobranças, contratos, cartões, tarifas, bloqueios e outras questões bancárias podem ser analisadas." },
  { q: "Problemas com operadora podem ser avaliados?", a: "Sim. Questões envolvendo internet, telefone, planos, cancelamentos, cobranças e falhas no serviço podem ser analisadas." },
  { q: "O atendimento pode ser online?", a: "Sim. Quando adequado, o atendimento inicial pode ser realizado por canais digitais." },
  { q: "O advogado pode garantir resultado?", a: "Não. Nenhum resultado pode ser garantido. A atuação depende da análise dos fatos, documentos, provas, legislação aplicável e decisão das autoridades competentes." },
];

function Page() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header transparentOnTop />
      <Hero />
      <Intro />
      <Situacoes />
      <ComoAjuda />
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
          src={consumidorHero}
          alt="Documento de contrato de consumo elegante sobre mesa de mármore escuro com caneta dourada"
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
            Direito do Consumidor
          </span>
          <h1 className="mt-8 font-display text-5xl font-medium leading-[1.05] text-offwhite md:text-7xl">
            Problemas em relações de consumo exigem orientação clara e responsável
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-offwhite/80 md:text-xl">
            Atuação em conflitos envolvendo cobranças indevidas, serviços não
            prestados, produtos com defeito, contratos abusivos, bancos, operadoras
            e negativações.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton size="lg" variant="primary" withIcon={false}>
              Solicitar orientação
            </WhatsAppButton>
            <a
              href="#situacoes"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/60 px-7 py-4 text-xs uppercase tracking-[0.2em] text-offwhite transition-all hover:border-gold hover:bg-gold/10"
            >
              Ver situações atendidas
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
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Visão geral</span>
            <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
              Quando uma empresa falha, o consumidor não precisa lidar com tudo sozinho
            </h2>
            <div className="mt-6 h-px w-16 gold-divider" />
            <p className="mt-8 text-justify leading-relaxed text-offwhite/80">
              Cobranças indevidas, serviços não prestados, produtos com defeito,
              contratos abusivos e negativações podem trazer prejuízos financeiros
              e transtornos ao consumidor. A análise jurídica permite compreender o
              caso, reunir os documentos necessários e orientar os próximos passos
              com clareza e responsabilidade.
            </p>
          </div>
          <aside className="reveal md:col-span-2">
            <div className="h-full rounded-sm border-l-2 border-gold/70 bg-navy-deep/50 p-8 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.55)]">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Observação</span>
              <p className="mt-5 font-display text-xl italic leading-relaxed text-offwhite/90">
                "Cada caso depende da análise dos fatos, documentos, provas e
                legislação aplicável."
              </p>
            </div>
          </aside>
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
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Situações atendidas</span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Situações que podem ser analisadas
          </h2>
          <p className="mt-5 text-offwhite/65">
            Conheça alguns exemplos de problemas em relações de consumo que podem
            exigir orientação jurídica.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            Falar sobre meu caso
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function ComoAjuda() {
  return (
    <section className="relative border-t border-gold/15 bg-gradient-to-b from-navy-mid to-navy-deep py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          <div className="reveal md:col-span-3">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Orientação</span>
            <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
              Como a orientação jurídica pode ajudar
            </h2>
            <div className="mt-6 h-px w-16 gold-divider" />
            <p className="mt-8 leading-relaxed text-offwhite/80">
              Antes de tomar qualquer decisão, é importante entender o contexto,
              reunir documentos e avaliar se há caminhos administrativos ou
              jurídicos possíveis.
            </p>
            <ul className="mt-8 space-y-3">
              {ajuda.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-offwhite/80">
                  <span className="mt-2 h-1 w-3 flex-shrink-0 bg-gold" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <aside className="reveal md:col-span-2">
            <div className="h-full rounded-sm border-l-2 border-gold/70 bg-navy-deep/50 p-8 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.55)]">
              <AlertTriangle className="h-7 w-7 text-gold" strokeWidth={1.25} />
              <p className="mt-6 font-display text-xl italic leading-relaxed text-offwhite/90">
                "A atuação jurídica não representa promessa de resultado. A análise
                é feita com base no caso concreto."
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
            Solicitar orientação
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
            Documentos que podem auxiliar na análise
          </h2>
          <p className="mt-5 text-offwhite/65">
            A documentação varia conforme o caso, mas alguns registros costumam ser
            úteis.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documentos.map((doc, i) => (
            <li
              key={doc}
              className="reveal flex items-start gap-4 rounded-sm border border-gold/20 bg-navy-deep/55 p-5 transition-all hover:border-gold/60"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" strokeWidth={1.25} />
              <span className="text-sm leading-relaxed text-offwhite/85">{doc}</span>
            </li>
          ))}
        </ul>

        <p className="reveal mx-auto mt-10 max-w-2xl text-center text-sm italic text-offwhite/60">
          A lista pode variar conforme a situação. O atendimento ajuda a identificar
          quais documentos são relevantes para o caso.
        </p>
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
          Entre em contato pelo WhatsApp e explique brevemente o ocorrido para uma
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
