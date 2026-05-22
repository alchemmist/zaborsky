import type { MetadataRoute } from "next";

const siteUrl = "https://xn--80adjbqf5a.xn--p1ai";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
