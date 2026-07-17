import type { MetadataRoute } from "next";
import { acts, siteConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/services",
    "/process",
    "/case-studies",
    "/about",
    "/faqs",
    "/contact",
    "/terms",
    "/privacy",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const act of acts) {
    entries.push({
      url: `${siteConfig.url}/services/${act.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
