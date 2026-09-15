export const competitors = [
  {
    slug: "four-leaf-landscape",
    name: "Four Leaf Landscape",
    site: "https://fourscape.com/",
    focus: "Commercial and estate-scale turnkey landscaping with strong Delhi NCR city pages.",
    whenGreenlyFits:
      "Choose Greenly when you want residential-friendly garden design, terrace gardens, lawn programmes and clear homeowner communication alongside commercial capability.",
    checklist: [
      "Named project proof and BOQ clarity",
      "City-specific mobilisation plan",
      "Irrigation and drainage coordination",
      "Post-handover AMC options",
    ],
  },
  {
    slug: "greenstar-landscape",
    name: "Greenstar Landscape",
    site: "https://www.greenstarlandscape.com/",
    focus: "Delhi-based landscaping services including vertical gardens, terrace gardens and hard/soft landscaping.",
    whenGreenlyFits:
      "Greenly emphasises premium editorial garden design, transparent service pages, maintenance AMC and educational guides so buyers can compare scope clearly.",
    checklist: [
      "Detailed service scope pages",
      "Maintenance plan after install",
      "Terrace and vertical garden expertise",
      "Written exclusions in quotations",
    ],
  },
  {
    slug: "dilkhush-landscaping",
    name: "Dilkhush Landscaping",
    site: "https://dilkhushlandscaping.com/",
    focus: "Delhi NCR garden design and build services for homes and outdoor renovations.",
    whenGreenlyFits:
      "Greenly pairs design-build delivery with structured service hubs, location pages and a large knowledge base for homeowners researching landscaping in Delhi NCR.",
    checklist: [
      "Design + install accountability",
      "Lawn and irrigation planning",
      "Seasonal maintenance options",
      "Clear next-step quoting process",
    ],
  },
] as const;

export function getCompetitor(slug: string) {
  return competitors.find((c) => c.slug === slug);
}
