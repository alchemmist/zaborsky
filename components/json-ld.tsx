const siteUrl = "https://xn--80adjbqf5a.xn--p1ai";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ZABORSKY",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description:
      "Премиальная установка заборов, благоустройство участка и монтаж решений под ключ.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7-965-938-33-73",
      contactType: "customer service",
      email: "prometiz@inbox.ru",
      availableLanguage: ["Russian"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "RU",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
