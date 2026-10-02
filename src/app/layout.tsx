import type { Metadata } from "next";
import { SiteProvider } from "@/components/SiteChrome";
import { JsonLd } from "@/components/JsonLd";
import { business } from "@/lib/business";
import { absoluteUrl } from "@/lib/seo";
import { homepageKeywords } from "@/lib/seoKeywords";
import { organizationGraph } from "@/lib/schema";
import { companyMeta } from "@/lib/companyContent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Hind Landscape Co. | Landscape Design and Development Company in India",
    template: "%s | Hind Landscape Co.",
  },
  description: companyMeta.homeDescription,
  applicationName: business.name,
  authors: [{ name: business.name, url: absoluteUrl("/about") }],
  creator: business.name,
  publisher: business.name,
  /* Discovery only — money keywords live on dedicated service/location/intent pages */
  keywords: [...homepageKeywords],
  /* hreflang added in layout-level alternates below */
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: business.name,
    title: "Hind Landscape Co. | Landscape Design and Development Company in India",
    description: companyMeta.homeDescription,
    url: absoluteUrl("/"),
    images: [{ url: absoluteUrl("/images/hero.jpg"), width: 1200, height: 630, alt: "Hind Landscape Co. landscaping in Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hind Landscape Co. | Landscape Design and Development Company in India",
    description: companyMeta.homeDescription,
    images: [absoluteUrl("/images/hero.jpg")],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-tree.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: absoluteUrl("/"), languages: { "en-IN": absoluteUrl("/") } },
};

const orgLd = organizationGraph();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd data={orgLd as unknown as Record<string, unknown>} />
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
