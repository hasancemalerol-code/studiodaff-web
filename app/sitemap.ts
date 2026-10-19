import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!baseUrl || !/^https:\/\//.test(baseUrl)) return [];
  return [{ url: new URL("/", baseUrl).toString(), changeFrequency: "weekly", priority: 1 }];
}
