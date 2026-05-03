import { AboutSection } from "@/components/about-section";
import { CtaSection } from "@/components/cta-section";
import { FencesGrid } from "@/components/fences-grid";
import { Hero } from "@/components/hero";

export function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <CtaSection />
      <FencesGrid />
      <AboutSection />
    </main>
  );
}
