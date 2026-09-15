import { competitors } from "@/lib/competitors";

export type IntentPage = {
  slug: string;
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export const intentPages: IntentPage[] = [
  {
    slug: "landscaping-company-india",
    path: "/landscaping-company-india",
    eyebrow: "India",
    title: "Landscaping Company in India | Design, Build & Maintain",
    description:
      "Greenly is a landscaping company in India for garden design, lawns, irrigation, hardscaping, lighting and maintenance — Delhi NCR primary, pan-India mobilisation.",
    intro:
      "Buyers searching for a landscaping company in India need clear scope, climate-aware planting and maintenance continuity — not brochure promises. Greenly designs, builds and maintains outdoor spaces for homes, farmhouses, hotels and commercial sites.",
    bullets: [
      "Garden design and planting plans",
      "Lawn care, irrigation and outdoor lighting",
      "Hardscaping, terraces and vertical gardens",
      "Maintenance AMC after handover",
    ],
    faqs: [
      { q: "Where does Greenly primarily operate?", a: "Delhi NCR is primary. We mobilise across India for suitable project scopes." },
      { q: "Do you handle commercial landscaping?", a: "Yes — hotels, campuses, societies and estate-scale residential programmes." },
    ],
  },
  {
    slug: "commercial-landscaping",
    path: "/commercial-landscaping",
    eyebrow: "Commercial",
    title: "Commercial Landscaping Services India | Greenly",
    description:
      "Commercial landscaping for hotels, campuses, societies and retail — design, install, irrigation, lighting and AMC.",
    intro:
      "Commercial landscapes must survive footfall, FM teams and seasonal stress. Greenly scopes arrival courts, lawns, planting and irrigation with maintenance in mind.",
    bullets: ["Hospitality outdoor spaces", "Campus and institutional softscape", "Society common areas", "AMC-ready handover"],
    faqs: [
      { q: "What is typical commercial scope?", a: "Design-build softscape/hardscape, irrigation, lighting and optional maintenance contracts." },
    ],
  },
  {
    slug: "hotel-landscaping",
    path: "/hotel-landscaping",
    eyebrow: "Hospitality",
    title: "Hotel Landscaping Services | Arrival, Pool & Night Gardens",
    description:
      "Hotel landscaping for arrival courts, pool surrounds, night lighting and guest-facing gardens across India.",
    intro:
      "Hotel landscapes are judged at check-in and after dark. We plan planting, paving and lighting that stay presentable under heavy use.",
    bullets: ["Arrival and drop-off planting", "Pool and patio surrounds", "Night lighting plans", "Seasonal maintenance"],
    faqs: [
      { q: "Do you work with hotel PMCs?", a: "Yes — we coordinate drawings, phased install and handover notes for operations teams." },
    ],
  },
  {
    slug: "corporate-campus-landscaping",
    path: "/corporate-campus-landscaping",
    eyebrow: "Corporate",
    title: "Corporate Campus Landscaping | Shade, Arrival & AMC",
    description:
      "Corporate campus landscaping — shade trees, arrival lawns, irrigation zones and FM-friendly maintenance programmes.",
    intro:
      "Campus landscapes need durable turf, clear irrigation and safe sightlines. Greenly delivers design through maintenance AMC for managed properties.",
    bullets: ["Arrival lawns and avenue planting", "Irrigation zoning", "Shade and seating edges", "FM-ready AMC"],
    faqs: [
      { q: "Can you maintain after install?", a: "Yes. Landscape maintenance AMC keeps campuses consistent year-round." },
    ],
  },
  {
    slug: "residential-landscaping",
    path: "/residential-landscaping",
    eyebrow: "Residential",
    title: "Residential Landscaping & Garden Design | Greenly",
    description:
      "Residential landscaping for villas, apartments and farmhouses — garden design, lawns, terrace gardens and lighting.",
    intro:
      "Home gardens should feel personal and easy to live with. We design outdoor rooms around how your family actually uses the space.",
    bullets: ["Villa and city gardens", "Terrace and balcony greening", "Lawn and irrigation", "Outdoor lighting"],
    faqs: [
      { q: "Do you do small balcony projects?", a: "Yes — terrace and balcony gardens are a core residential service." },
    ],
  },
  {
    slug: "garden-maintenance-delhi-ncr",
    path: "/garden-maintenance-delhi-ncr",
    eyebrow: "Maintenance",
    title: "Garden Maintenance Delhi NCR | Lawn & Landscape AMC",
    description:
      "Garden maintenance in Delhi NCR — lawn care, hedge pruning, irrigation checks and seasonal cleanups with AMC options.",
    intro:
      "Delhi NCR gardens need scheduled care through heat, monsoon and winter. Greenly offers visit-based maintenance and AMC programmes.",
    bullets: ["Lawn mowing and feeding", "Hedge and shrub shaping", "Irrigation checks", "Seasonal cleanup"],
    faqs: [
      { q: "Which cities are covered?", a: "Delhi, Gurugram, Noida, Faridabad and wider Delhi NCR for suitable AMC scopes." },
    ],
  },
  {
    slug: "landscape-contractor-delhi",
    path: "/landscape-contractor-delhi",
    eyebrow: "Delhi",
    title: "Landscape Contractor in Delhi | Design-Build Execution",
    description:
      "Looking for a landscape contractor in Delhi? Greenly handles design-build execution, irrigation, hardscape and maintenance handover.",
    intro:
      "A landscape contractor in Delhi should understand local climate, nursery supply and site access. Greenly executes residential and commercial outdoor works with clear scope.",
    bullets: ["Design-build execution", "Hardscape and softscape", "Irrigation and lighting", "Handover and AMC"],
    faqs: [
      { q: "Do you survey sites in Delhi?", a: "Yes. Share locality and photos on the quote form to schedule a visit." },
    ],
  },
  {
    slug: "landscaping-cost-guide",
    path: "/landscaping-cost-guide",
    eyebrow: "Cost guide",
    title: "Landscaping Cost Guide India | What Affects Garden Budgets",
    description:
      "Landscaping cost guide for India — design fees, softscape, hardscape, irrigation, lighting and maintenance AMC drivers.",
    intro:
      "Landscape cost varies by area, materials, irrigation complexity and access. This guide explains cost drivers so quotations are easier to compare.",
    bullets: [
      "Design and drawings",
      "Softscape and lawn area",
      "Hardscape materials",
      "Irrigation and lighting",
      "Ongoing AMC",
    ],
    faqs: [
      { q: "Can you give a fixed price online?", a: "Not accurately — final pricing follows site survey. We share indicative ranges after understanding scope." },
      { q: "What increases cost most?", a: "Imported specimen plants, complex hardscape, waterproofing interfaces and intensive irrigation often drive budgets." },
    ],
  },
  {
    slug: "faq",
    path: "/faq",
    eyebrow: "FAQ",
    title: "Landscaping FAQs | Greenly",
    description:
      "Frequently asked questions about Greenly landscaping services, Delhi NCR coverage, timelines, AMC and quotations.",
    intro: "Straight answers on services, geography, timelines and how to start a project with Greenly.",
    bullets: ["Services and coverage", "Timelines and site visits", "AMC and maintenance", "Quotations"],
    faqs: [
      { q: "What services does Greenly offer?", a: "Garden design, lawn care, tree care, irrigation, hardscaping, lighting, seasonal cleanup, terrace gardens, vertical gardens, farmhouse landscaping and maintenance AMC." },
      { q: "Is Delhi NCR your main area?", a: "Yes. We also mobilise pan-India for suitable projects." },
      { q: "How do I get a quote?", a: "Use the Get a Free Quote form with locality, photos and rough scope." },
      { q: "Do you maintain gardens after installation?", a: "Yes — optional landscape maintenance AMC." },
    ],
  },
];
