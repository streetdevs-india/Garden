import type { Metadata } from "next";
import { business } from "@/lib/business";

const siteName = business.name;

export function absoluteUrl(path = "/") {
  const base = business.siteUrl.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean === "/" ? "" : clean}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/images/hero.jpg",
  noIndex = false,
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const ogImage = absoluteUrl(image);

  return {
    title: fullTitle,
    description,
    keywords: keywords?.length ? keywords : undefined,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      siteName,
      title: fullTitle,
      description,
      locale: "en_IN",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
