import { createFileRoute } from "@tanstack/react-router";
import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import { ProblemaSection } from "@/components/soluai/ProblemaSection";
import { GargaloSection } from "@/components/soluai/GargaloSection";
import { ResultsSection } from "@/components/soluai/ResultsSection";
import { SegmentsSection } from "@/components/soluai/SegmentsSection";
import { ProcessoSection } from "@/components/soluai/ProcessoSection";
import { ModeloSection } from "@/components/soluai/ModeloSection";
import { FaqSection } from "@/components/soluai/FaqSection";
import { CtaSection, Footer } from "@/components/soluai/CtaSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ResponsiveHeroBanner />
      <ProblemaSection />
      <GargaloSection />
      <ResultsSection />
      <SegmentsSection />
      <ProcessoSection />
      <ModeloSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
