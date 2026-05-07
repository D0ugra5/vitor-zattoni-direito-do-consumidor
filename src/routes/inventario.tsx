import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/inventario")({
  head: () => ({
    meta: [
      { title: "Inventário | Vitor Zattoni Advogado" },
      {
        name: "description",
        content:
          "Atuação em inventários, partilha de bens, sucessão patrimonial e regularização de questões hereditárias.",
      },
      { property: "og:title", content: "Inventário | Vitor Zattoni Advogado" },
      {
        property: "og:description",
        content:
          "Orientação em inventário e sucessão, com responsabilidade e clareza.",
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
          Inventário
        </h1>
        <div className="mt-6 h-px w-24 gold-divider" />
        <p className="mt-8 max-w-2xl text-lg text-offwhite/75">
          Atuação em inventários, partilha de bens, sucessão patrimonial e regularização
          de questões familiares e hereditárias.
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
