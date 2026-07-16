import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.studiodaff.com"),

  title: {
    default: "Studio Daff | Premium Pet Grooming & Spa",
    template: "%s | Studio Daff",
  },

  description:
    "Studio Daff Premium Pet Grooming & Spa. Köpek ve kedi grooming, banyo, spa, tırnak kesimi ve profesyonel bakım hizmetleri. Etiler / Beşiktaş / İstanbul.",

  keywords: [
    "Studio Daff",
    "Pet Grooming",
    "Köpek Kuaförü",
    "Kedi Kuaförü",
    "Pet Spa",
    "Pet Grooming İstanbul",
    "Pet Grooming Beşiktaş",
    "Pet Grooming Etiler",
    "Köpek Bakımı",
    "Kedi Bakımı",
    "Premium Pet Grooming",
  ],

  authors: [
    {
      name: "Studio Daff",
    },
  ],

  creator: "Studio Daff",

  publisher: "Studio Daff",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.studiodaff.com",
  },

  verification: {
    google: "CWV-ppm_49y0JFlz2A95bT9JN8cFugzZGFWj5fdhjus",
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.studiodaff.com",
    siteName: "Studio Daff",
    title: "Studio Daff | Premium Pet Grooming & Spa",
    description:
      "Premium Pet Grooming & Spa - Etiler / Beşiktaş / İstanbul",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Daff",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Studio Daff | Premium Pet Grooming & Spa",
    description:
      "Premium Pet Grooming & Spa - Etiler / Beşiktaş / İstanbul",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  applicationName: "Studio Daff",

  appleWebApp: {
    capable: true,
    title: "Studio Daff",
    statusBarStyle: "black-translucent",
  },

  category: "Pet Grooming",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PetStore",

  name: "Studio Daff",

  image: "https://www.studiodaff.com/logo.png",

  url: "https://www.studiodaff.com",

  telephone: "+90 530 734 74 62",

  email: "info@studiodaff.com",

  priceRange: "₺₺",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Etiler Mahallesi",
    addressLocality: "Beşiktaş",
    addressRegion: "İstanbul",
    postalCode: "34337",
    addressCountry: "TR",
  },

  openingHoursSpecification: [
    {
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
      closes: "19:00",
    },
  ],

  sameAs: [
    "https://www.instagram.com/studio_daff/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>

      <body className={poppins.className}>
        {children}
        <GoogleAnalytics gaId="G-LHFP4GDV01" />
      </body>
    </html>
  );
}