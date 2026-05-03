import { AboutSection } from "@/components/about-section";
import { CtaSection } from "@/components/cta-section";
import { FencesGrid } from "@/components/fences-grid";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f3eee5] text-slate-900">
      <Hero />
      <CtaSection />
      <FencesGrid />
      <AboutSection />
      <Footer />
    </main>
  );
}
