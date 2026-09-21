import { getCompetitorKeywords } from "@/lib/seoKeywords";

export type Competitor = {
  slug: string;
  name: string;
  site: string;
  focus: string;
  whenHindFits: string;
  whenTheyFit: string;
  checklist: string[];
  differentiators: string[];
  keywords: string[];
};

export const competitors: Competitor[] = [
  {
    slug: "four-leaf-landscape",
    name: "Four Leaf Landscape",
    site: "https://fourscape.com/",
    focus:
      "Commercial and estate-scale turnkey landscaping with strong Delhi NCR city pages, BOQ discipline and corporate/hospitality positioning.",
    whenHindFits:
      "Choose Hind Landscape Co. when you want residential-friendly garden design, terrace gardens, lawn programmes and clear homeowner communication alongside commercial capability — plus transparent service hubs and educational cost guides.",
    whenTheyFit:
      "Four Leaf Landscape may fit buyers focused primarily on large commercial, institutional and estate programmes with heavy BOQ/PMC coordination.",
    checklist: [
      "Named project proof and BOQ clarity",
      "City-specific mobilisation plan",
      "Irrigation and drainage coordination",
      "Post-handover AMC options",
      "Written exclusions and handover notes",
    ],
    differentiators: [
      "Hind publishes clear service, location and industry hubs so scope is easy to compare before a site visit.",
      "Strong residential, terrace, balcony and society AMC language alongside commercial work.",
      "Cost guide and FAQ content help homeowners and RWAs evaluate quotations fairly.",
    ],
    keywords: [
      ...(getCompetitorKeywords("four-leaf-landscape")?.comparison ?? []),
      ...(getCompetitorKeywords("four-leaf-landscape")?.brand ?? []),
      "landscaping company Delhi NCR",
      "Hind Landscape Co.",
    ],
  },
  {
    slug: "greenstar-landscape",
    name: "Greenstar Landscape",
    site: "https://www.greenstarlandscape.com/",
    focus:
      "Delhi-based landscaping services including vertical gardens, terrace gardens and hard/soft landscaping for homes and commercial sites.",
    whenHindFits:
      "Hind Landscape Co. emphasises premium editorial garden design, transparent service pages, maintenance AMC and educational guides so buyers can compare scope clearly before appointing a team.",
    whenTheyFit:
      "Greenstar Landscape may fit buyers looking for a compact Delhi landscaping vendor with vertical and terrace garden offerings.",
    checklist: [
      "Detailed service scope pages",
      "Maintenance plan after install",
      "Terrace and vertical garden expertise",
      "Written exclusions in quotations",
      "City coverage clarity (Delhi NCR vs pan-India)",
    ],
    differentiators: [
      "Hind pairs design-build delivery with dedicated vertical garden, terrace and irrigation hubs for Delhi NCR.",
      "Location pages and industry intents make local search intent easier to match.",
      "Optional AMC is documented for lawns, living walls and commercial softscape.",
    ],
    keywords: [
      ...(getCompetitorKeywords("greenstar-landscape")?.comparison ?? []),
      ...(getCompetitorKeywords("greenstar-landscape")?.brand ?? []),
      "vertical garden Delhi NCR",
      "terrace garden Delhi NCR",
      "Hind Landscape Co.",
    ],
  },
  {
    slug: "dilkhush-landscaping",
    name: "Dilkhush Landscaping",
    site: "https://dilkhushlandscaping.com/",
    focus:
      "Delhi NCR garden design and build services for homes and outdoor renovations.",
    whenHindFits:
      "Hind Landscape Co. pairs design-build delivery with structured service hubs, location pages and a large knowledge base for homeowners researching landscaping in Delhi NCR — plus commercial and hospitality capability when needed.",
    whenTheyFit:
      "Dilkhush Landscaping may fit homeowners seeking a local garden design-and-build partner for residential outdoor renovations.",
    checklist: [
      "Design + install accountability",
      "Lawn and irrigation planning",
      "Seasonal maintenance options",
      "Clear next-step quoting process",
      "Named plant lists in proposals",
    ],
    differentiators: [
      "Hind covers residential gardens and farmhouses plus hotels, campuses and developer softscape.",
      "Dedicated Chattarpur farmhouse, balcony and society AMC hubs help local homeowners shortlist faster.",
      "Pan-India mobilisation is available for suitable project scopes beyond NCR.",
    ],
    keywords: [
      ...(getCompetitorKeywords("dilkhush-landscaping")?.comparison ?? []),
      ...(getCompetitorKeywords("dilkhush-landscaping")?.brand ?? []),
      "garden design Delhi NCR",
      "residential landscaping Delhi",
      "Hind Landscape Co.",
    ],
  },
];

export function getCompetitor(slug: string) {
  return competitors.find((c) => c.slug === slug);
}
