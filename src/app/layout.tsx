import type { Metadata } from "next";
import { SiteProvider } from "@/components/SiteChrome";
import { JsonLd } from "@/components/JsonLd";
import { business } from "@/lib/business";
import { teamMembers } from "@/lib/team";
import { absoluteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Hind Landscape Co. | Landscaping & Gardening Delhi NCR & India",
    template: "%s | Hind Landscape Co.",
  },
  description: business.description,
  applicationName: business.name,
  keywords: [
    "landscaping company India",
    "landscaping company Delhi",
    "landscaping company Delhi NCR",
    "garden design Delhi",
    "lawn care Delhi NCR",
    "terrace garden",
    "farmhouse landscaping Delhi",
    "landscape maintenance AMC",
    "outdoor lighting garden",
    "irrigation systems India",
  ],
  /* hreflang added in layout-level alternates below */
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: business.name,
    title: "Hind Landscape Co. | Landscaping & Gardening",
    description: business.description,
    url: absoluteUrl("/"),
    images: [{ url: absoluteUrl("/images/hero.jpg"), width: 1200, height: 630, alt: "Hind Landscape Co. landscaping" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hind Landscape Co. | Landscaping & Gardening",
    description: business.description,
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

const orgLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: business.legalName,
  url: business.siteUrl,
  email: business.email,
  telephone: business.phoneTel,
  founder: {
    "@type": "Person",
    name: business.contactName,
  },
  image: absoluteUrl("/images/hero.jpg"),
  description: business.description,
  priceRange: business.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  areaServed: [
    "Delhi",
    "Gurugram",
    "Noida",
    "Faridabad",
    "Greater Noida",
    "Ghaziabad",
    "Delhi NCR",
    "Haryana",
    "Uttar Pradesh",
    "Rajasthan",
    "Maharashtra",
    "Karnataka",
    "Telangana",
    "Tamil Nadu",
    "Gujarat",
    "West Bengal",
    "India",
  ],
  employee: teamMembers.map((m) => ({
    "@type": "Person",
    name: m.name,
    jobTitle: m.role,
  })),
  openingHours: business.hours,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd data={orgLd} />
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
