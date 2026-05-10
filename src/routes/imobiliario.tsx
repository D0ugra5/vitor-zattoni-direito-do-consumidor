import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Building2,
  KeyRound,
  ClipboardCheck,
  Scale,
  Search,
  ShoppingCart,
  FileSignature,
  AlertTriangle,
  MessageSquare,
  ClipboardList,
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
import imobiliarioHero from "@/assets/imobiliario-hero.jpg";
import imobiliarioAuthority from "@/assets/imobiliario-authority.jpg";

export const Route = createFileRoute("/imobiliario")({
  head: () => ({
    meta: [
      { title: "Advogado Imobiliário | Vitor Zattoni Advogado" },
      {
        name: "description",
        content:
          "Orientação jurídica em Direito Imobiliário, contratos, locação, compra e venda, regularização de imóveis e análise documental. Atendimento claro, sigiloso e individualizado.",
      },
      { property: "og:title", content: "Advogado Imobiliário | Vitor Zattoni Advogado" },
      {
        property: "og:description",
        content:
          "Atuação em Direito Imobiliário com análise documental, contratos e regularização patrimonial.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: imobiliarioHero },
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

const atuacao = [
  { icon: ShoppingCart, title: "Compra e venda de imóveis", text: "Orientação na análise de documentos, contratos, condições da negociação, riscos envolvidos e obrigações das partes." },
  { icon: FileSignature, title: "Contratos imobiliários", text: "Elaboração, revisão e análise de contratos de compra e venda, locação, cessão, promessa de compra e outros instrumentos." },
  { icon: KeyRound, title: "Locação", text: "Orientação em contratos de aluguel, garantias, reajustes, inadimplência, rescisão, direitos e deveres de locador e locatário." },
  { icon: ClipboardCheck, title: "Regularização de imóveis", text: "Apoio na análise de pendências documentais, registros, escrituras, matrícula, posse e situações que exigem regularização patrimonial." },
  { icon: Scale, title: "Conflitos imobiliários", text: "Orientação em disputas envolvendo imóveis, descumprimento contratual, posse, uso do bem, cobranças ou divergências entre as partes." },
  { icon: Search, title: "Pesquisa de ônus do imóvel", text: "Verificação de matrícula, restrições, pendências, dívidas e riscos que possam comprometer a compra do imóvel." },
];

const situacoes = [
  "Antes de comprar um imóvel",
  "Antes de vender um imóvel",
  "Antes de assinar contrato de locação",
  "Em caso de atraso, descumprimento ou inadimplência",
  "Quando há dúvida sobre escritura, matrícula ou registro",
  "Quando o imóvel possui pendências ou irregularidades",
  "Em conflitos entre locador e locatário",
  "Em dúvidas sobre posse, propriedade ou documentação",
];

const cuidados = [
  "Se o imóvel possui dívidas ou restrições",
  "Se há pendências na matrícula",
  "Se existem problemas envolvendo o proprietário",
  "Se a documentação está coerente com a negociação",
  "Se há riscos que possam dificultar a transferência",
];

const etapas = [
  { icon: MessageSquare, title: "Primeiro contato", text: "Você entra em contato pelo WhatsApp e informa brevemente a situação envolvendo o imóvel." },
  { icon: Search, title: "Levantamento inicial", text: "São avaliadas informações sobre o imóvel, partes envolvidas, documentos, contratos e objetivo do atendimento." },
  { icon: ClipboardList, title: "Análise jurídica", text: "Os documentos e o contexto são analisados para identificar riscos, dúvidas, possibilidades e próximos passos." },
  { icon: ArrowRight, title: "Orientação sobre a condução", text: "São explicados os caminhos possíveis, cuidados necessários e eventual proposta de atuação jurídica." },
];

const documentos = [
  "Contrato ou minuta contratual",
  "Matrícula atualizada do imóvel",
  "Escritura pública",
  "Certidões do imóvel",
  "Documentos pessoais das partes",
  "Comprovantes de pagamento",
  "Comprovantes de negociação",
  "Contrato de locação",
  "Notificações, mensagens ou e-mails",
  "Fotos, laudos ou documentos relacionados ao imóvel",
];

const faq = [
  { q: "Preciso de advogado antes de comprar um imóvel?", a: "A orientação jurídica pode ser importante antes da compra para analisar documentos, contrato, matrícula, certidões e possíveis riscos da negociação." },
  { q: "O advogado pode analisar um contrato de locação?", a: "Sim. Contratos de locação podem ser analisados para esclarecer obrigações, garantias, reajustes, multas, prazos e responsabilidades das partes." },
  { q: "O que verificar antes de assinar um contrato imobiliário?", a: "É importante avaliar as partes envolvidas, a documentação do imóvel, condições de pagamento, multas, prazos, obrigações e possíveis pendências." },
  { q: "Tenho problema com inquilino ou proprietário. Posso buscar orientação?", a: "Sim. Situações envolvendo locador, locatário, inadimplência, rescisão, garantias ou descumprimento contratual podem ser avaliadas juridicamente." },
  { q: "O imóvel está irregular. O que fazer?", a: "A regularização depende da situação documental do imóvel. É necessário analisar matrícula, escritura, registros, posse e demais documentos relacionados." },
  { q: "O atendimento pode ser online?", a: "Sim. Quando adequado, o atendimento inicial pode ser realizado por canais digitais." },
];

function Page() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header transparentOnTop />
      <Hero />
      <Intro />
      <Atuacao />
      <Analise />
      <Situacoes />
      <ComoFunciona />
      <Documentos />
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
          src={imobiliarioHero}
          alt="Contrato imobiliário, chaves douradas e planta arquitetônica sobre mesa de mármore"
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
            Direito Imobiliário
          </span>
          <h1 className="mt-8 font-display text-5xl font-medium leading-[1.05] text-offwhite md:text-7xl">
            Segurança jurídica para comprar, vender, alugar ou regularizar imóveis
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-offwhite/80 md:text-xl">
            Atuação em contratos imobiliários, locações, análise documental,
            regularização de imóveis e questões relacionadas à matrícula, posse e
            propriedade.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton size="lg" variant="primary" withIcon={false}>
              Solicitar orientação
            </WhatsAppButton>
            <a
              href="#atuacao"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/60 px-7 py-4 text-xs uppercase tracking-[0.2em] text-offwhite transition-all hover:border-gold hover:bg-gold/10"
            >
              Conhecer atuação
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
              Segurança antes da assinatura, durante a negociação e na regularização do imóvel
            </h2>
            <div className="mt-6 h-px w-16 gold-divider" />
            <p className="mt-8 leading-relaxed text-offwhite/80">
              Questões imobiliárias envolvem documentos, registros, contratos, prazos e
              responsabilidades que nem sempre aparecem de forma clara para quem está
              comprando, vendendo, alugando ou regularizando um imóvel. A atuação
              jurídica permite avaliar riscos, revisar documentos, orientar negociações
              e indicar os caminhos adequados para que cada decisão seja tomada com
              mais segurança.
            </p>
          </div>
          <aside className="reveal md:col-span-2">
            <div className="h-full rounded-sm border-l-2 border-gold/70 bg-navy-deep/50 p-8 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.55)]">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Observação</span>
              <p className="mt-5 font-display text-xl italic leading-relaxed text-offwhite/90">
                "No Direito Imobiliário, o problema pode não estar no imóvel, mas no
                que não foi analisado antes da assinatura."
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Atuacao() {
  return (
    <section id="atuacao" className="relative border-t border-gold/15 bg-navy-mid py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Atuação</span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Atuação em Direito Imobiliário
          </h2>
          <p className="mt-5 text-offwhite/65">
            Conheça algumas situações em que a orientação jurídica pode auxiliar.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {atuacao.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="reveal group flex flex-col items-center text-center rounded-sm border border-gold/25 bg-navy-deep/60 p-8 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_20px_50px_-18px_rgba(201,163,92,0.35)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Icon className="h-8 w-8 text-gold" strokeWidth={1.25} />
              <div className="mt-6 h-px w-12 bg-gold/60 transition-all duration-300 group-hover:w-20" />
              <h3 className="mt-6 font-display text-2xl text-offwhite">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-offwhite/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Analise() {
  return (
    <section className="relative border-t border-gold/15 bg-gradient-to-b from-navy-mid to-navy-deep py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          <div className="reveal md:col-span-3">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Prevenção</span>
            <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
              Antes de comprar um imóvel, é preciso saber se ele está realmente seguro para venda
            </h2>
            <div className="mt-6 h-px w-16 gold-divider" />
            <p className="mt-8 leading-relaxed text-offwhite/80">
              A compra de um imóvel envolve valores altos e não deve depender apenas da
              confiança entre as partes. Antes de assinar qualquer contrato, é importante
              verificar se existem pendências, dívidas, restrições ou problemas na
              documentação que possam trazer prejuízos depois. Essa análise ajuda o
              comprador a entender melhor a situação do imóvel e tomar uma decisão com
              mais segurança.
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-gold">
              O que pode ser verificado
            </p>
            <ul className="mt-4 space-y-3">
              {cuidados.map((c) => (
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
                "A atuação preventiva pode ser mais segura do que tentar corrigir um
                problema depois que ele já ocorreu."
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
    <section className="relative border-t border-gold/15 bg-navy-mid py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Situações comuns</span>
          <h2 className="mt-6 font-display text-3xl font-medium text-offwhite md:text-5xl">
            Situações comuns em questões imobiliárias
          </h2>
          <p className="mt-5 text-offwhite/65">
            A orientação jurídica pode ser importante em diferentes momentos da relação
            com o imóvel.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {situacoes.map((s, i) => (
            <li
              key={s}
              className="reveal flex items-start gap-4 rounded-sm border border-gold/20 bg-navy-deep/55 p-5 transition-all hover:border-gold/60"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <Building2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" strokeWidth={1.25} />
              <span className="text-sm leading-relaxed text-offwhite/85">{s}</span>
            </li>
          ))}
        </ul>
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
            Como funciona a orientação imobiliária
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
            Solicitar orientação imobiliária
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
            Documentos que podem ser importantes
          </h2>
          <p className="mt-5 text-offwhite/65">
            A documentação necessária varia conforme o caso, mas alguns documentos
            costumam auxiliar na análise inicial.
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
          src={imobiliarioAuthority}
          alt="Edifício residencial sofisticado ao entardecer"
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
            Patrimônio, contratos e segurança jurídica
          </h2>
          <p className="mx-auto mt-8 max-w-xl leading-relaxed text-offwhite/80">
            Negociações imobiliárias exigem cautela, análise técnica e atenção aos
            detalhes. Uma condução responsável contribui para decisões mais seguras e
            bem documentadas.
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
            Dúvidas frequentes sobre Direito Imobiliário
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
          Precisa de orientação sobre imóvel, contrato ou regularização?
        </h2>
        <div className="reveal mx-auto mt-6 h-px w-16 gold-divider" />
        <p className="reveal mx-auto mt-8 max-w-md leading-relaxed text-offwhite/75">
          Entre em contato pelo WhatsApp e informe brevemente sua situação para uma
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
