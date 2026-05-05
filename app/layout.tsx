import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { ContactFloat } from "@/components/contact-float";
import { sitePath } from "@/components/site-path";
import "./globals.css";

const faviconPath = sitePath("/logo.svg");

export const metadata: Metadata = {
  title: "ZABORSKY — заборы и благоустройство",
  description:
    "Премиальная установка заборов, благоустройство участка и монтаж решений под ключ.",
  icons: {
    icon: faviconPath,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <Footer />
        <ContactFloat />
      </body>
    </html>
  );
}
