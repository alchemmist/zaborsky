import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { ContactFloat } from "@/components/contact-float";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/json-ld";
import { sitePath } from "@/components/site-path";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

const faviconPath = sitePath("/logo.svg");

const siteUrl = "https://заборский.рф";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Заборский — заборы и благоустройство",
    template: "%s | Заборский",
  },
  description:
    "Премиальная установка заборов, благоустройство участка и монтаж решений под ключ.",
  icons: {
    icon: faviconPath,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Заборский",
    title: "Заборский — заборы и благоустройство",
    description:
      "Премиальная установка заборов, благоустройство участка и монтаж решений под ключ.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Заборский — заборы и благоустройство",
    description:
      "Премиальная установка заборов, благоустройство участка и монтаж решений под ключ.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`h-full antialiased ${oswald.variable} ${openSans.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <SiteHeader />
        {children}
        <Footer />
        <ContactFloat />
      </body>
    </html>
  );
}
