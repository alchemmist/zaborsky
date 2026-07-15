import { AboutSection } from "@/components/about-section";
import { CtaSection } from "@/components/cta-section";
import { FencesGrid } from "@/components/fences-grid";
import { Hero } from "@/components/hero";
import { isAdmin } from "@/lib/auth-server";
import { AdminBar } from "@/components/admin/admin-bar";

export async function HomePage() {
  const editable = await isAdmin();
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero editable={editable} />
      <CtaSection />
      <FencesGrid />
      <AboutSection />
      {editable ? <AdminBar /> : null}
    </main>
  );
}
