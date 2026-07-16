export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PetStore",

    name: "Studio Daff",

    image: "https://studiodaff.com/logo.png",

    url: "https://studiodaff.com",

    telephone: "+90 530 734 74 62",

    email: "info@studiodaff.com",

    priceRange: "₺₺",

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "Etiler Mahallesi",

      addressLocality:
        "Beşiktaş",

      addressRegion:
        "İstanbul",

      postalCode: "34337",

      addressCountry: "TR",
    },

    geo: {
      "@type": "GeoCoordinates",

      latitude: 41.078,

      longitude: 29.034,
    },

    openingHoursSpecification: [
      {
        "@type":
          "OpeningHoursSpecification",

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

        closes: "19:00",
      },
    ],

    sameAs: [
      "https://instagram.com/studiodaff",
      "https://facebook.com/studiodaff",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}