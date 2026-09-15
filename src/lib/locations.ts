export type LocationPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
  primary?: boolean;
};

export const locations: LocationPage[] = [
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    title: "Landscaping Company in Delhi NCR | Garden Design & Maintenance",
    description:
      "Greenly delivers landscape design, lawn care, irrigation, hardscaping and garden maintenance across Delhi, Gurugram, Noida and Faridabad.",
    intro:
      "Delhi NCR gardens face heat, dust, monsoon bursts and winter fog. Greenly plans planting, irrigation and hardscape so outdoor spaces stay usable year-round for homes, farmhouses, hotels and campuses.",
    highlights: [
      "Design-build for residential, farmhouse and commercial sites",
      "Irrigation and drainage suited to NCR summers and monsoons",
      "AMC-style maintenance for lawns, hedges and seasonal colour",
      "On-site surveys across Delhi, Gurugram, Noida and Faridabad",
    ],
    faqs: [
      {
        q: "Do you work across all of Delhi NCR?",
        a: "Yes. We mobilise for projects in Delhi, Gurugram, Noida, Greater Noida, Faridabad and nearby NCR locations where logistics support quality delivery.",
      },
      {
        q: "What landscaping services are popular in Delhi NCR?",
        a: "Garden design, lawn installation, terrace gardens, irrigation, outdoor lighting, hardscaping and annual maintenance contracts are the most requested scopes.",
      },
    ],
    primary: true,
  },
  {
    slug: "delhi",
    name: "Delhi",
    title: "Landscaping Company in Delhi | Greenly Garden Design",
    description:
      "Hire Greenly for landscaping in Delhi — garden design, lawn care, terrace gardens, irrigation, lighting and maintenance for homes and commercial properties.",
    intro:
      "From South Delhi farmhouses to compact city gardens, Greenly builds outdoor spaces that handle Delhi’s climate while looking calm and finished.",
    highlights: [
      "Residential and farmhouse landscaping in Delhi",
      "Terrace and balcony garden planning",
      "Lawn care and seasonal cleanup programmes",
      "Outdoor lighting and hardscape paths",
    ],
    faqs: [
      {
        q: "Is Greenly a landscaping company in Delhi?",
        a: "Yes. Greenly provides landscape design, installation and maintenance services for clients across Delhi and the wider NCR.",
      },
    ],
    primary: true,
  },
  {
    slug: "gurugram",
    name: "Gurugram",
    title: "Landscaping Company in Gurugram / Gurgaon | Greenly",
    description:
      "Landscaping services in Gurugram — garden design, lawns, podium planting, irrigation and maintenance for homes, societies and commercial sites.",
    intro:
      "Gurugram projects often need podium-ready planting, strong irrigation and low-maintenance beds. Greenly scopes gardens that survive wind, heat and tower logistics.",
    highlights: [
      "Society and villa garden design in Gurugram",
      "Podium and terrace planting coordination",
      "Irrigation zones for new towers and estates",
      "Maintenance AMC for managed properties",
    ],
    faqs: [
      {
        q: "Do you cover Gurgaon and Gurugram?",
        a: "Yes. Searches for landscaping company in Gurgaon and Gurugram both map to our Delhi NCR service — we survey and execute across the city.",
      },
    ],
    primary: true,
  },
  {
    slug: "noida",
    name: "Noida",
    title: "Landscaping Company in Noida | Garden & Lawn Services",
    description:
      "Greenly offers landscaping in Noida and Greater Noida — garden design, lawns, irrigation, hardscaping and maintenance for homes and commercial campuses.",
    intro:
      "Noida and Greater Noida sites need planting that handles expressway dust and varied soil. We design gardens with clear irrigation and maintenance plans.",
    highlights: [
      "Villa and society landscaping in Noida",
      "Campus and clubhouse outdoor spaces",
      "Smart irrigation and lawn programmes",
      "Seasonal colour and hedge maintenance",
    ],
    faqs: [
      {
        q: "Do you work in Greater Noida as well?",
        a: "Yes. We take suitable residential and commercial landscaping projects across Noida, Greater Noida and linked corridors.",
      },
    ],
    primary: true,
  },
  {
    slug: "faridabad",
    name: "Faridabad",
    title: "Landscaping Company in Faridabad | Greenly",
    description:
      "Landscape design, lawn care, irrigation and garden maintenance for homes and commercial properties in Faridabad.",
    intro:
      "Faridabad gardens benefit from durable hardscape, drought-aware planting and scheduled maintenance. Greenly delivers design through upkeep.",
    highlights: [
      "Home and farmhouse garden design",
      "Lawn installation and care",
      "Irrigation and outdoor lighting",
      "Seasonal cleanup and AMC options",
    ],
    faqs: [
      {
        q: "Can I get a site visit in Faridabad?",
        a: "Yes. Share your location and project type on the quote form and we schedule a site assessment.",
      },
    ],
    primary: true,
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    title: "Landscaping Services in Mumbai | Greenly Pan-India",
    description:
      "Greenly mobilises for selected landscaping projects in Mumbai — terrace gardens, podium planting, lawn care and outdoor design.",
    intro:
      "We take Mumbai projects where scope, access and logistics support quality delivery — especially terrace, podium and premium residential gardens.",
    highlights: ["Terrace and balcony gardens", "Podium softscape", "Irrigation for coastal humidity", "Design consultations"],
    faqs: [{ q: "Do you have a Mumbai office?", a: "We mobilise nationally for suitable programmes. Contact us with site details for feasibility." }],
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    title: "Landscaping Services in Bangalore | Greenly",
    description:
      "Garden design, lawn care and outdoor landscaping for selected Bangalore residential and commercial projects.",
    intro:
      "Bangalore’s climate suits rich planting. Greenly supports design-build and maintenance where we can maintain quality on site.",
    highlights: ["Garden design", "Lawn and hedge care", "Irrigation planning", "Outdoor living spaces"],
    faqs: [{ q: "How do I start a Bangalore project?", a: "Send site photos and locality via the quote page — we confirm mobilisation and next steps." }],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    title: "Landscaping Services in Hyderabad | Greenly",
    description: "Selected landscaping and garden design services for Hyderabad homes and commercial properties.",
    intro: "We support Hyderabad clients with garden design, lawn programmes and irrigation planning on suitable scopes.",
    highlights: ["Garden design", "Lawn care", "Hardscaping", "Maintenance planning"],
    faqs: [{ q: "Is Hyderabad in your service area?", a: "Yes for suitable projects. Share location and budget band on the quote form." }],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    title: "Landscaping Services in Jaipur | Greenly",
    description: "Heat-aware garden design, lawns and irrigation for selected landscaping projects in Jaipur.",
    intro: "Jaipur landscapes need water-wise planting and durable finishes. Greenly scopes gardens that stay practical through hot summers.",
    highlights: ["Water-wise planting", "Lawn alternatives where needed", "Irrigation zones", "Hardscape paths"],
    faqs: [{ q: "Do you understand Jaipur’s climate?", a: "Yes — planting and irrigation plans account for heat, water use and seasonal dust." }],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    title: "Landscaping Services in Chandigarh | Greenly",
    description: "Garden design and landscaping services for selected projects in Chandigarh and nearby regions.",
    intro: "Chandigarh gardens reward clean lines and healthy lawns. We deliver design and care programmes for suitable residential and institutional sites.",
    highlights: ["Lawn care", "Garden design", "Tree and hedge shaping", "Seasonal maintenance"],
    faqs: [{ q: "Can you maintain gardens after installation?", a: "Yes — maintenance and AMC options are available where we execute the project." }],
  },
  {
    slug: "goa",
    name: "Goa",
    title: "Landscaping Services in Goa | Resort & Villa Gardens",
    description: "Tropical garden design and landscaping for selected villa and hospitality projects in Goa.",
    intro: "Goa landscapes lean tropical, humid and hospitality-facing. We support villa and resort outdoor programmes where mobilisation fits.",
    highlights: ["Tropical planting", "Villa gardens", "Hospitality outdoor spaces", "Irrigation and lighting"],
    faqs: [{ q: "Do you do hotel landscaping in Goa?", a: "Yes for suitable hospitality scopes. Share property type and timeline on the contact form." }],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
