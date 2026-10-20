import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  const sitemap = url && /^https:\/\//.test(url) ? new URL("/sitemap.xml", url).toString() : undefined;
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] }], ...(sitemap ? { sitemap } : {}) };
}
