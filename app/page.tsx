import { HomePage } from "@/components/home-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заборы и благоустройство",
  description: "Заборский — установка заборов, жалюзи, металлопланкена, евроштакетника, 3D сетки. Благоустройство участка под ключ.",
  alternates: {
    canonical: "https://заборский.рф",
  },
  openGraph: {
    title: "Заборы и благоустройство",
    description: "Заборский — установка заборов, жалюзи, металлопланкена, евроштакетника, 3D сетки. Благоустройство участка под ключ.",
  },
};

export default function RootPage() {
  return <HomePage />;
}
