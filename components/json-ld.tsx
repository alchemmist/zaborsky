const siteUrl = "https://xn--80adjbqf5a.xn--p1ai";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Заборский",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description:
      "Премиальная установка заборов, благоустройство участка и монтаж решений под ключ.",
    sameAs: [
      "https://t.me/alex_zaborsky",
      "https://max.ru/u/f9LHodD0cOJiBu4STx8Aftcw4KZhEOB63VktzebdOwXrwVfS40jk-2SXHaw",
    ],
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

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Заборский",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    image: `${siteUrl}/logo.svg`,
    description:
      "Премиальная установка заборов, благоустройство участка и монтаж решений под ключ.",
    telephone: "+7-965-938-33-73",
    email: "prometiz@inbox.ru",
    sameAs: [
      "https://t.me/alex_zaborsky",
      "https://max.ru/u/f9LHodD0cOJiBu4STx8Aftcw4KZhEOB63VktzebdOwXrwVfS40jk-2SXHaw",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "RU",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7-965-938-33-73",
      contactType: "customer service",
      email: "prometiz@inbox.ru",
      availableLanguage: ["Russian"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  price,
  priceCurrency = "RUB",
  image,
}: {
  name: string;
  description: string;
  price?: string;
  priceCurrency?: string;
  image?: string;
}) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    ...(image ? { image: `${siteUrl}${image}` } : {}),
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            price,
            priceCurrency,
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ReviewJsonLd({
  reviews,
  itemReviewedName,
}: {
  reviews: { text: string; author: string; date?: string }[];
  itemReviewedName: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: reviews.map((review, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        itemReviewed: { "@type": "Product", name: itemReviewedName },
        reviewBody: review.text,
        author: { "@type": "Person", name: review.author },
        ...(review.date ? { datePublished: review.date } : {}),
      },
    })),
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
