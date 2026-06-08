import { HomePage } from "@/components/home-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заборы и благоустройство",
  description: "Заборский — установка заборов, жалюзи, металлопланкена, евроштакетника, 3D сетки. Благоустройство участка под ключ.",
  alternates: {
    canonical: "https://xn--80adjbqf5a.xn--p1ai",
  },
  openGraph: {
    title: "Заборы и благоустройство",
    description: "Заборский — установка заборов, жалюзи, металлопланкена, евроштакетника, 3D сетки. Благоустройство участка под ключ.",
  },
};

export default function RootPage() {
  return <HomePage />;
}
