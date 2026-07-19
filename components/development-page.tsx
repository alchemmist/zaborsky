import Image from "next/image";
import type { ReactNode } from "react";
import { sitePath } from "@/components/site-path";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { getSettings } from "@/lib/settings";
import { HeroImageEditor } from "@/components/admin/hero-image-editor";

type DevelopmentPageProps = {
  title: ReactNode;
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  breadcrumbsPath?: string;
};

export async function DevelopmentPage({
  title,
  imageSrc,
  imageAlt,
  children,
  breadcrumbs,
  breadcrumbsPath,
}: DevelopmentPageProps) {
  const heroKey = (breadcrumbsPath ?? "").replace(/\/$/, "");
  const { heroImages } = await getSettings();
  const heroSrc = (heroKey && heroImages[heroKey]) || imageSrc;
  const uploaded = heroSrc.startsWith("/uploads/");
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {breadcrumbs ? (
        <>
          <BreadcrumbJsonLd
            items={[
              { name: "Главная", url: "/" },
              ...breadcrumbs.map((b) => {
                const rawUrl = b.href ?? breadcrumbsPath ?? "/";
                const url = rawUrl.endsWith("/") ? rawUrl : `${rawUrl}/`;
                return { name: b.label, url };
              }),
            ]}
          />
          <Breadcrumbs items={breadcrumbs} />
        </>
      ) : null}
      <section className="relative isolate flex h-[50svh] min-h-[420px] items-center overflow-hidden bg-slate-900">
        <Image
          src={sitePath(heroSrc)}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          unoptimized={uploaded}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1d262b]/48" />
        {heroKey ? <HeroImageEditor path={heroKey} /> : null}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-semibold uppercase tracking-[0.22em] text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>
          </div>
        </div>
      </section>
      {children}
    </main>
  );
}
