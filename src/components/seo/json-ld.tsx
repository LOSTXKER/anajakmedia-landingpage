import type { Location } from "@/lib/data";

const BASE_URL = "https://anajakmedia.com";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Anajak Media",
    legalName: "ห้างหุ้นส่วนจำกัด อาณาจักร์ เอ็นเตอร์ไพรส์",
    url: BASE_URL,
    logo: `${BASE_URL}/og-image.jpg`,
    foundingDate: "2007-11-21",
    address: {
      "@type": "PostalAddress",
      streetAddress: "39/12 หมู่ที่ 8",
      addressLocality: "ตำบลป่าแดด อำเภอเมืองเชียงใหม่",
      addressRegion: "เชียงใหม่",
      postalCode: "50100",
      addressCountry: "TH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@anajakmedia.com",
      availableLanguage: ["Thai", "English"],
    },
    sameAs: [],
    description:
      "ผู้บริหารเครือข่ายจอ LED โดยตรง 3 ทำเลยุทธศาสตร์ ครอบคลุมเชียงใหม่ ลงโฆษณาตรง ไม่ผ่านเอเจนซี่ ดำเนินธุรกิจมากว่า 17 ปี",
  };

  return <JsonLdScript data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Anajak Media",
    url: BASE_URL,
    description:
      "ผู้บริหารเครือข่ายจอ LED โดยตรง 3 ทำเลยุทธศาสตร์ ครอบคลุมเชียงใหม่ ลงโฆษณาตรง ไม่ผ่านเอเจนซี่",
  };

  return <JsonLdScript data={data} />;
}

export function LocalBusinessJsonLd({ location }: { location: Location }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Anajak Media — ${location.nameEn}`,
    description: location.description,
    url: `${BASE_URL}/products/${location.slug}`,
    image: `${BASE_URL}${location.heroImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.nameEn,
      addressRegion: "เชียงใหม่",
      addressCountry: "TH",
    },
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
      opens: "06:00",
      closes: "00:00",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Anajak Media",
      url: BASE_URL,
    },
  };

  return <JsonLdScript data={data} />;
}

export function ServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "Anajak Media",
      url: BASE_URL,
    },
    serviceType: "Digital Billboard Advertising",
    areaServed: {
      "@type": "City",
      name: "เชียงใหม่",
    },
    description:
      "ลงโฆษณาจอ LED ตรงกับผู้บริหารจอ ไม่ผ่านเอเจนซี่ เครือข่าย 3 ทำเลยุทธศาสตร์ในเชียงใหม่ ราคาโปร่งใส คำนวณเองได้ทันที",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "THB",
      availability: "https://schema.org/InStock",
    },
  };

  return <JsonLdScript data={data} />;
}

export function ContactPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "ติดต่อ Anajak Media",
    url: `${BASE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "Anajak Media",
      email: "contact@anajakmedia.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "39/12 หมู่ที่ 8",
        addressLocality: "ตำบลป่าแดด อำเภอเมืองเชียงใหม่",
        addressRegion: "เชียงใหม่",
        postalCode: "50100",
        addressCountry: "TH",
      },
    },
  };

  return <JsonLdScript data={data} />;
}
