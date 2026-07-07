import Image from "next/image";
import type { ReactNode } from "react";
import { sitePath } from "@/components/site-path";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";

type DevelopmentPageProps = {
  title: ReactNode;
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  breadcrumbsPath?: string;
};

export function DevelopmentPage({
  title,
  imageSrc,
  imageAlt,
  children,
  breadcrumbs,
  breadcrumbsPath,
}: DevelopmentPageProps) {
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
          </div>
        </div>
      </section>
      {children}
    </main>
  );
}
