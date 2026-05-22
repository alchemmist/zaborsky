import Image from "next/image";
import type { ReactNode } from "react";
import { sitePath } from "@/components/site-path";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";

type ServicePageProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  price?: string;
  features?: string[];
  breadcrumbs: BreadcrumbItem[];
  breadcrumbsPath: string;
  children?: ReactNode;
};

export function ServicePage({
  title,
  description,
  imageSrc,
  imageAlt,
  price,
  features,
  breadcrumbs,
  breadcrumbsPath,
  children,
}: ServicePageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    provider: {
      "@type": "Organization",
      name: "Заборский",
    },
    ...(price ? { offers: { "@type": "Offer", price, priceCurrency: "RUB" } } : {}),
    areaServed: { "@type": "Country", name: "RU" },
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Главная", url: "/" },
          ...breadcrumbs.map((b) => ({
            name: b.label,
            url: b.href ?? breadcrumbsPath,
          })),
        ]}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="relative isolate flex h-[50svh] min-h-[420px] items-center overflow-hidden bg-slate-900">
        <Image
          src={sitePath(imageSrc)}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1d262b]/48" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-semibold uppercase tracking-[0.22em] text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>
            {price ? (
              <p className="mt-4 text-xl font-semibold text-white/90 sm:text-2xl">
                от {price}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
            <p>{description}</p>
          </div>
          {features?.length ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-base font-semibold uppercase tracking-[0.12em] text-slate-900">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {children}
    </main>
  );
}
