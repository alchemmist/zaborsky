import { getSettings } from "@/lib/settings";
import { telHref } from "@/lib/format";
import { GEO } from "@/lib/geo";

const siteUrl = "https://заборский.рф";

const areaServed = [
  { "@type": "City", name: GEO.city },
  ...GEO.nearbyCities.map((name) => ({ "@type": "City", name })),
  { "@type": "AdministrativeArea", name: GEO.region },
  { "@type": "AdministrativeArea", name: GEO.region2 },
  { "@type": "Country", name: "Россия" },
];

const postalAddress = {
  "@type": "PostalAddress",
  addressLocality: GEO.city,
  addressRegion: GEO.region,
  addressCountry: "RU",
};

export async function OrganizationJsonLd() {
  const { phone, email } = await getSettings();
  const telephone = telHref(phone).replace("tel:", "");
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
      telephone,
      contactType: "customer service",
      email,
      availableLanguage: ["Russian"],
    },
    address: postalAddress,
    areaServed,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export async function LocalBusinessJsonLd() {
  const { phone, email } = await getSettings();
  const telephone = telHref(phone).replace("tel:", "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Заборский",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    image: `${siteUrl}/logo.svg`,
    description:
      "Премиальная установка заборов, благоустройство участка и монтаж решений под ключ.",
    telephone,
    email,
    priceRange: "₽₽",
    sameAs: [
      "https://t.me/alex_zaborsky",
      "https://max.ru/u/f9LHodD0cOJiBu4STx8Aftcw4KZhEOB63VktzebdOwXrwVfS40jk-2SXHaw",
    ],
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      email,
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

type AggregateRating = {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
};

type ReviewData = {
  reviewBody: string;
  author: string;
  datePublished?: string;
};

const defaultShippingDetails = {
  "@type": "OfferShippingDetails",
  shippingRate: {
    "@type": "MonetaryAmount",
    value: "0",
    currency: "RUB",
  },
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: "RU",
  },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: {
      "@type": "QuantitativeValue",
      minValue: 3,
      maxValue: 10,
      unitCode: "DAY",
    },
    transitTime: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 7,
      unitCode: "DAY",
    },
  },
};

const defaultReturnPolicy = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "RU",
  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
};

export function ProductJsonLd({
  name,
  description,
  price,
  priceCurrency = "RUB",
  image,
  aggregateRating,
  review,
  shippingDetails,
  returnPolicy,
}: {
  name: string;
  description: string;
  price?: string;
  priceCurrency?: string;
  image?: string;
  aggregateRating?: AggregateRating;
  review?: ReviewData;
  shippingDetails?: Record<string, unknown> | false;
  returnPolicy?: Record<string, unknown> | false;
}) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: { "@type": "Brand", name: "Заборский" },
    ...(image ? { image: `${siteUrl}${image}` } : {}),
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            price,
            priceCurrency,
            availability: "https://schema.org/InStock",
            ...(shippingDetails !== false
              ? { shippingDetails: shippingDetails ?? defaultShippingDetails }
              : {}),
            ...(returnPolicy !== false
              ? { hasMerchantReturnPolicy: returnPolicy ?? defaultReturnPolicy }
              : {}),
          },
        }
      : {}),
    ...(aggregateRating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: aggregateRating.ratingValue,
            reviewCount: aggregateRating.reviewCount,
            bestRating: aggregateRating.bestRating ?? 5,
            worstRating: aggregateRating.worstRating ?? 1,
          },
        }
      : {}),
    ...(review
      ? {
          review: {
            "@type": "Review",
            reviewBody: review.reviewBody,
            author: { "@type": "Person", name: review.author },
            ...(review.datePublished ? { datePublished: review.datePublished } : {}),
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
