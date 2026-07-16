import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://studiodaff.com/sitemap.xml",

    host: "https://studiodaff.com",
  };
}