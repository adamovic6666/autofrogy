export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Auto Frogy",
    legalName: "SZTR UGREN",
    url: "https://www.autofrogy.com",
    logo: "https://www.autofrogy.com/images/og.png",
    description:
      "Preko 20 godina iskustva u proizvodnji plastičnih auto delova. Najveći izbor auto kopči i žabica, kopči podizača stakla, fiksatora za patosnice, nosača i ramova za tablice.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cara Dušana 144",
      addressLocality: "Inđija",
      postalCode: "22320",
      addressCountry: "RS",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+381-22-551-121",
      email: "office@autofrogy.com",
      contactType: "customer service",
      areaServed: "RS",
      availableLanguage: ["Serbian"],
    },
    sameAs: [
      "https://www.facebook.com/autofrogy/",
      "https://www.youtube.com/c/autofrogy",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": "https://www.autofrogy.com/#localbusiness",
    name: "Auto Frogy",
    legalName: "SZTR UGREN",
    image: "https://www.autofrogy.com/images/og.png",
    description:
      "Proizvođač i dobavljač plastičnih auto delova. Preko 20 godina iskustva u proizvodnji auto kopči, žabica, fiksatora i druge auto opreme.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cara Dušana 144",
      addressLocality: "Inđija",
      postalCode: "22320",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.038239,
      longitude: 20.065122,
    },
    url: "https://www.autofrogy.com",
    telephone: "+381-22-551-121",
    email: "office@autofrogy.com",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
