import { business } from "@/lib/business";
import { absoluteUrl } from "@/lib/seo";
import { teamMembers } from "@/lib/team";

const origin = business.siteUrl.replace(/\/$/, "");

export const ORG_ID = `${origin}/#organization`;
export const WEBSITE_ID = `${origin}/#website`;

/** Name variants people actually type. Kept identical in visible copy and schema. */
export const brandAliases = [
  "Hind Landscape",
  "Hind Landscaping",
  "Hind Landscape Company",
  "Hind Landscape Co",
  "Hindlandscape",
  "Hind Landscaping Company",
  "Hind Landscape Delhi",
  "Hind Landscape Noida",
  "Hind Landscape Okhla",
] as const;

/** Stops Google from merging this studio with a different company of a similar name. */
export const notAffiliated =
  "Hind Landscape Co. is an independent company. Its only website is hindlandscaping.com. It is not Hindgreen Landscape Pvt. Ltd. and it is not Greentech International Co.";

export const entitySummary =
  "Hind Landscape Co. is India's trusted landscape design and development company at D-51, Abul Fazal Enclave, Jamia Nagar, Okhla, New Delhi 110025. Phone +91 99901 16281. Official website hindlandscaping.com. Full-spectrum residential and commercial landscaping, rooftop gardens, vertical green walls and maintenance AMC across India.";

const cities = [
  "Delhi",
  "New Delhi",
  "Noida",
  "Greater Noida",
  "Gurugram",
  "Gurgaon",
  "Faridabad",
  "Ghaziabad",
  "Okhla",
  "Jamia Nagar",
  "South Delhi",
];

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: origin,
        name: business.name,
        alternateName: [...brandAliases],
        description: entitySummary,
        inLanguage: "en-IN",
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": ["LandscapingBusiness", "ProfessionalService"],
        "@id": ORG_ID,
        name: business.legalName,
        legalName: business.legalName,
        alternateName: [...brandAliases],
        disambiguatingDescription: notAffiliated,
        url: origin,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/images/logo-hind-full.png"),
        },
        image: absoluteUrl("/images/gallery-modern-lawn.png"),
        email: business.email,
        telephone: business.phoneTel,
        priceRange: business.priceRange,
        slogan: business.tagline,
        description: entitySummary,
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
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.addressLine)}`,
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "18:00",
        },
        areaServed: cities.map((name) => ({ "@type": "City", name })),
        knowsAbout: [
          "Landscape architecture",
          "Landscaping in Delhi",
          "Landscaping in Noida",
          "Garden design",
          "Hardscape",
          "Softscape",
          "Terrace gardens",
          "Vertical gardens",
          "Landscape maintenance",
        ],
        employee: teamMembers
          .filter((m) => !m.featured)
          .map((m) => ({
            "@type": "Person",
            name: m.name,
            jobTitle: m.role,
          })),
        ...(business.sameAs.length ? { sameAs: business.sameAs } : {}),
      },
    ],
  };
}
