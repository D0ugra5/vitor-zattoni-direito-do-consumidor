import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/imobiliario")({
  head: () => ({
    meta: [
      { title: "Direito Imobiliário | Vitor Zattoni Advogado" },
      {
        name: "description",
        content:
          "Atuação em Direito Imobiliário: contratos, locação, compra e venda, regularização de imóveis e análise documental.",
      },
      { property: "og:title", content: "Direito Imobiliário | Vitor Zattoni Advogado" },
      {
        property: "og:description",
        content:
          "Orientação jurídica em Direito Imobiliário, com atendimento individualizado e comunicação clara.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-4xl px-5 pb-20 pt-40 md:pt-48">
        <span className="text-xs uppercase tracking-[0.25em] text-gold">Área de atuação</span>
        <h1 className="mt-4 font-display text-4xl font-medium text-offwhite md:text-6xl">
          Direito Imobiliário
        </h1>
        <div className="mt-6 h-px w-24 gold-divider" />
        <p className="mt-8 max-w-2xl text-lg text-offwhite/75">
          Orientação em contratos, locação, compra e venda, regularização de imóveis,
          análise documental e questões relacionadas a bens imóveis.
        </p>
        <p className="mt-4 max-w-2xl text-sm italic text-offwhite/55">
          Conteúdo em construção. Em breve, mais informações sobre esta área.
        </p>
        <div className="mt-10">
          <WhatsAppButton size="lg">Entrar em contato</WhatsAppButton>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
