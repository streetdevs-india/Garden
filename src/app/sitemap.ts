import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog/posts";
import { business } from "@/lib/business";
import { intentPages } from "@/lib/intent";
import { locations } from "@/lib/locations";
import { services } from "@/lib/site";

const base = business.siteUrl.replace(/\/$/, "");

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/gallery",
  "/testimonials",
  "/contact",
  "/quote",
  "/blog",
  "/locations",
  "/vs/four-leaf-landscape",
  "/vs/greenstar-landscape",
  "/vs/dilkhush-landscaping",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  for (const page of intentPages) {
    const boost =
      page.slug === "hind-landscape-co" ||
      page.slug === "best-landscaping-company-delhi" ||
      page.slug === "best-landscaping-company-noida";
    entries.push({
      url: `${base}${page.path}`,
      lastModified: now,
      changeFrequency: boost ? "weekly" : "monthly",
      priority: boost ? 0.95 : 0.85,
    });
  }

  for (const s of services) {
    entries.push({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }

  for (const loc of locations) {
    entries.push({
      url: `${base}/locations/${loc.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: loc.primary ? 0.9 : 0.65,
    });
  }

  for (const post of blogPosts) {
    entries.push({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.55,
    });
  }

  return entries;
}
