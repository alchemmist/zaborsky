import type { MetadataRoute } from "next";

const siteUrl = "https://xn--80adjbqf5a.xn--p1ai";

const routes = [
  { url: siteUrl, priority: 1, changeFrequency: "monthly" as const },
  { url: `${siteUrl}/about`, priority: 0.6, changeFrequency: "monthly" as const },
  { url: `${siteUrl}/about/reviews`, priority: 0.5, changeFrequency: "monthly" as const },
  { url: `${siteUrl}/contacts`, priority: 0.7, changeFrequency: "monthly" as const },
  { url: `${siteUrl}/fences`, priority: 0.8, changeFrequency: "weekly" as const },
  { url: `${siteUrl}/fences/accessories`, priority: 0.5, changeFrequency: "monthly" as const },
  { url: `${siteUrl}/fences/accessories/caps`, priority: 0.4, changeFrequency: "monthly" as const },
  { url: `${siteUrl}/fences/accessories/parapets`, priority: 0.4, changeFrequency: "monthly" as const },
  { url: `${siteUrl}/fences/eco-z`, priority: 0.6, changeFrequency: "weekly" as const },
  { url: `${siteUrl}/fences/euro-jalusi`, priority: 0.6, changeFrequency: "weekly" as const },
  { url: `${siteUrl}/fences/gitter`, priority: 0.6, changeFrequency: "weekly" as const },
  { url: `${siteUrl}/fences/grass-fence`, priority: 0.6, changeFrequency: "weekly" as const },
  { url: `${siteUrl}/fences/high-tech`, priority: 0.6, changeFrequency: "weekly" as const },
  { url: `${siteUrl}/fences/metal-planken-rancho`, priority: 0.6, changeFrequency: "weekly" as const },
  { url: `${siteUrl}/fences/metal-planken-rancho/euro-shaketnik`, priority: 0.6, changeFrequency: "weekly" as const },
  { url: `${siteUrl}/fences/resnichki`, priority: 0.6, changeFrequency: "weekly" as const },
  { url: `${siteUrl}/fences/siding`, priority: 0.6, changeFrequency: "weekly" as const },
  { url: `${siteUrl}/landscaping`, priority: 0.7, changeFrequency: "monthly" as const },
  { url: `${siteUrl}/landscaping/step-pavers`, priority: 0.5, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
