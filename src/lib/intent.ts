import { brandSearchKeywords, industryKeywords } from "@/lib/seoKeywords";

export type IntentPage = {
  slug: string;
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  relatedServices?: string[];
  relatedLocations?: string[];
};

function industryPage(
  slug: string,
  industryKey: keyof typeof industryKeywords,
  eyebrow: string,
  title: string,
  focus: string,
  bullets: string[],
  extraFaqs: { q: string; a: string }[] = []
): IntentPage {
  return {
    slug,
    path: `/${slug}`,
    eyebrow,
    title,
    description: `${title} by Hind Landscape Co. — design, softscape, hardscape, irrigation, lighting and maintenance AMC for ${focus} across Delhi NCR and India.`,
    intro: `Looking for ${title.toLowerCase()}? Hind Landscape Co. plans and builds outdoor spaces that survive Delhi heat, monsoon and heavy use — with named plant lists, clear scopes and optional AMC for ${focus}.`,
    bullets,
    keywords: industryKeywords[industryKey] ?? [
      title,
      `${eyebrow} landscaping Delhi`,
      "landscaping company Delhi NCR",
      "Hind Landscape Co.",
    ],
    faqs: [
      {
        q: `Do you deliver ${eyebrow.toLowerCase()} landscaping in Delhi?`,
        a: `Yes. ${title} is a core commercial offering — we survey the site, quote zone-wise and execute with maintenance in mind.`,
      },
      {
        q: "Is a free site visit available?",
        a: "Yes for serious enquiries across Delhi NCR. Pan-India mobilisation is confirmed after reviewing photos and scope.",
      },
      ...extraFaqs,
    ],
  };
}

function hub(page: Omit<IntentPage, "path"> & { path?: string }): IntentPage {
  return { ...page, path: page.path ?? `/${page.slug}` };
}

export const intentPages: IntentPage[] = [
  {
    slug: "hind-landscape-co",
    path: "/hind-landscape-co",
    eyebrow: "Hind Landscape Co.",
    title: "Hind Landscape Co.",
    description:
      "Hind Landscape Co. is an independent studio at D-51, Abul Fazal Enclave, Okhla, New Delhi. Website hindlandscaping.com. Not Hindgreen Landscape Pvt. Ltd. Call +91 99901 16281.",
    intro:
      "Hind Landscape Co. is an independent landscaping company in Okhla, New Delhi. The only official website is hindlandscaping.com. Hind Landscape Co. is not Hindgreen Landscape Pvt. Ltd. and it is not Greentech International Co. Those are different businesses.",
    bullets: [
      "Legal name: Hind Landscape Co.",
      "Studio: Hind Landscape Co., Okhla, New Delhi",
      "Studio: D-51, Abul Fazal Enclave, Jamia Nagar, Okhla, New Delhi 110025",
      "Phone: +91 99901 16281 · Email: hindlandscaping@gmail.com",
      "Website: hindlandscaping.com",
      "Hours: Monday to Saturday, 8:00 AM – 6:00 PM",
    ],
    keywords: [...brandSearchKeywords, "Hind Landscape Co. Okhla", "Hind Landscape Jamia Nagar"],
    relatedLocations: ["delhi", "noida", "south-delhi"],
    faqs: [
      {
        q: "Is Hind Landscape Co. the same as Hindgreen Landscape Pvt. Ltd.?",
        a: "No. Hind Landscape Co. is a separate company at D-51, Abul Fazal Enclave, Jamia Nagar, Okhla, New Delhi 110025. Its website is hindlandscaping.com and its phone is +91 99901 16281. It is not Hindgreen Landscape Pvt. Ltd. and it is not Greentech International Co.",
      },
      {
        q: "What is Hind Landscape Co.?",
        a: "Hind Landscape Co. is a landscape architecture and contracting studio in Okhla, New Delhi. It designs, builds and maintains gardens for homes, hotels, societies and commercial sites in Delhi and Noida.",
      },
      {
        q: "Where is Hind Landscape Co. located?",
        a: "D-51, Abul Fazal Enclave, Jamia Nagar, Okhla, New Delhi, Delhi 110025.",
      },
      {
        q: "Is Hind Landscape the same as Hind Landscaping?",
        a: "Yes. Hind Landscape, Hind Landscaping, Hind Landscape Company and Hind Landscape Co. all refer to this studio at hindlandscaping.com.",
      },
      {
        q: "How do I contact Hind Landscape Co.?",
        a: "Call or WhatsApp +91 99901 16281, or email hindlandscaping@gmail.com. Site visits in Delhi and Noida are free for serious enquiries.",
      },
    ],
  },
  {
    slug: "best-landscaping-company-delhi",
    path: "/best-landscaping-company-delhi",
    eyebrow: "Delhi",
    title: "Best Landscaping Company in Delhi",
    description:
      "Best landscaping company in Delhi — Hind Landscape Co. in Okhla. Garden design, hardscape, terrace gardens and maintenance AMC across Delhi. Call +91 99901 16281.",
    intro:
      "Looking for the best landscape in Delhi? Hind Landscape Co. is the Okhla studio homeowners, hotels and societies call when the garden has to survive Delhi heat, dust and monsoon — with named plant lists and optional AMC.",
    bullets: [
      "Garden design and planting plans for Delhi plots and farmhouses",
      "Hardscape, irrigation, lighting and water features",
      "Terrace, podium and vertical gardens",
      "Landscape maintenance AMC after handover",
      "Free site visit across Delhi, including South Delhi and Okhla",
    ],
    keywords: [
      "best landscape in Delhi",
      "best landscaping company in Delhi",
      "best landscape company Delhi",
      "best garden designer Delhi",
      "landscaping company Delhi",
      "Hind Landscape Co.",
    ],
    relatedServices: ["landscape-architecture", "softscape-horticulture", "terrace-garden", "landscape-maintenance-amc"],
    relatedLocations: ["delhi", "delhi-ncr", "south-delhi", "chattarpur"],
    faqs: [
      {
        q: "Who is the best landscaping company in Delhi?",
        a: "Hind Landscape Co., from Okhla, New Delhi, designs and builds residential, hotel and commercial landscapes across Delhi, with maintenance AMC after handover.",
      },
      {
        q: "Do you visit sites anywhere in Delhi?",
        a: "Yes. South Delhi, farmhouse belts, societies and commercial sites are covered. Share the locality on the quote form to book a free site visit.",
      },
      {
        q: "What does a Delhi landscape project include?",
        a: "Design, softscape, hardscape, irrigation, outdoor lighting and an optional annual maintenance contract so the garden holds through summer and monsoon.",
      },
    ],
  },
  {
    slug: "best-landscaping-company-noida",
    path: "/best-landscaping-company-noida",
    eyebrow: "Noida",
    title: "Best Landscaping Company in Noida",
    description:
      "Best landscaping company in Noida — Hind Landscape Co. designs society greens, villa gardens, hardscape and AMC for Noida and Greater Noida. Call +91 99901 16281.",
    intro:
      "Searching for the best landscape in Noida? Hind Landscape Co. plans and builds society lawns, villa gardens, podium planting and hardscape for Noida, Greater Noida and Noida Extension — with irrigation that suits expressway dust and a maintenance plan after handover.",
    bullets: [
      "Society and RWA common-area landscaping in Noida",
      "Villa and sector garden design",
      "Hardscape pathways, plazas and edges",
      "Podium and terrace planting",
      "Landscape AMC for Noida and Greater Noida",
    ],
    keywords: [
      "best landscape in Noida",
      "best landscaping company in Noida",
      "best landscape company Noida",
      "landscaping company Noida",
      "society landscaping Noida",
      "Hind Landscape Co.",
      "Hind Landscape Noida",
    ],
    relatedServices: ["hardscaping", "softscape-horticulture", "society-landscaping", "landscape-maintenance-amc"],
    relatedLocations: ["noida", "greater-noida", "noida-extension", "sector-62-noida"],
    faqs: [
      {
        q: "Who is the best landscaping company in Noida?",
        a: "Hind Landscape Co. delivers society, villa and commercial landscapes in Noida and Greater Noida, from design through annual maintenance.",
      },
      {
        q: "Do you cover Greater Noida and Noida Extension?",
        a: "Yes. Noida, Greater Noida and Noida Extension are priority service areas for suitable residential and society scopes.",
      },
      {
        q: "Can an RWA hire Hind Landscape Co. in Noida?",
        a: "Yes. Common-area lawns, hedges, irrigation and AMC are scoped zone-wise so the society can compare the work clearly.",
      },
    ],
  },
  {
    slug: "landscaping-company-india",
    path: "/landscaping-company-india",
    eyebrow: "India",
    title: "Landscaping Company in India | Design, Build & Maintain",
    description:
      "Hind Landscape Co. is a landscaping company in India for hardscape, softscape, irrigation, lighting, terrace gardens, vertical gardens and maintenance AMC — Delhi NCR primary, pan-India mobilisation.",
    intro:
      "Buyers searching for a landscaping company in India need clear scope, climate-aware planting and maintenance continuity. Hind Landscape Co. designs, builds and maintains outdoor spaces for homes, hotels, campuses and commercial sites.",
    bullets: [
      "Hardscape & civil, softscape & horticulture",
      "Irrigation, lighting and water features",
      "Terrace, podium and vertical gardens",
      "Landscape maintenance AMC after handover",
    ],
    keywords: [
      "landscaping company India",
      "landscaping company Delhi NCR",
      "garden landscaping services India",
      "commercial landscaping company India",
      "Hind Landscape Co.",
    ],
    faqs: [
      { q: "Where does Hind Landscape Co. primarily operate?", a: "Delhi NCR is primary. We mobilise across India for suitable project scopes." },
      { q: "Do you handle commercial landscaping?", a: "Yes — hotels, campuses, societies, developers and estate-scale residential programmes." },
    ],
  },

  industryPage(
    "hotel-landscaping",
    "hotel",
    "Hotel & Resort",
    "Hotel Landscaping in Delhi",
    "hotels and resorts",
    ["Arrival courts and drop-off planting", "Pool and patio surrounds", "Night landscape lighting", "Seasonal hospitality AMC"],
    [{ q: "Do you work with hotel PMCs?", a: "Yes — we coordinate drawings, phased install and handover notes for operations and facilities teams." }]
  ),
  industryPage(
    "commercial-landscaping",
    "commercial",
    "Commercial",
    "Commercial Landscaping in Delhi",
    "offices, retail and commercial campuses",
    ["Arrival softscape and plazas", "Irrigation zoning for FM teams", "Hardscape edges and lawns", "AMC-ready handover"],
    [{ q: "Can you quote zone-wise for commercial sites?", a: "Yes. Commercial scopes are broken into zones so procurement and FM teams can compare line items clearly." }]
  ),
  industryPage(
    "residential-landscaping",
    "residential",
    "Residential",
    "Residential Landscaping in Delhi",
    "villas, apartments and farmhouses",
    ["Garden design and planting plans", "Lawn, irrigation and lighting", "Terrace and balcony gardens", "Optional home AMC"],
    [{ q: "Do you landscape small home gardens?", a: "Yes — from compact South Delhi plots to farmhouse estates, scoped to your budget and maintenance comfort." }]
  ),
  industryPage(
    "corporate-landscaping",
    "corporate",
    "Corporate",
    "Corporate Landscaping in Delhi",
    "corporate campuses and HQ grounds",
    ["Shade trees and arrival lawns", "Irrigation and maintenance zones", "Staff outdoor seating edges", "FM-friendly AMC"],
    [{ q: "Do you support multi-campus rollouts?", a: "Yes for suitable programmes — we align planting standards and AMC calendars across sites where logistics allow." }]
  ),
  industryPage(
    "industrial-landscaping",
    "industrial",
    "Industrial",
    "Industrial Landscaping in Delhi",
    "factories, warehouses and industrial parks",
    ["Buffer planting and dusty-site species", "Safe circulation planting", "Low-maintenance softscape", "Scheduled industrial AMC"],
    [{ q: "Which species work on dusty industrial sites?", a: "We favour hardy, low-dust-stress plants and clear sightline planting along roads and loading edges." }]
  ),
  industryPage(
    "developer-landscaping",
    "developer",
    "Developer",
    "Developer Landscaping in Delhi",
    "township and real-estate developers",
    ["Master-plan softscape packages", "Sample flat / club landscaping", "Society common-area handover", "Phased install for sales timelines"],
    [{ q: "Can landscaping align with sales handovers?", a: "Yes — we phase sample flats, clubhouses and common areas to match launch and possession calendars." }]
  ),
  industryPage(
    "hospital-landscaping",
    "hospital",
    "Hospital",
    "Hospital Landscaping in Delhi",
    "hospitals and healthcare campuses",
    ["Calm healing gardens", "Accessible paths and shade", "Low-allergen plant guidance", "Hygiene-aware maintenance"],
    [{ q: "Do you plan accessible healing gardens?", a: "Yes — graded paths, shade, seating and low-allergen guidance for patient and visitor outdoor rooms." }]
  ),
  industryPage(
    "mall-retail-landscaping",
    "mall",
    "Mall & Retail",
    "Mall Landscaping in Delhi",
    "malls and retail destinations",
    ["Entry statement planting", "Food-court outdoor edges", "Podium and terrace softscape", "High-footfall AMC"],
    [{ q: "Can mall landscapes handle heavy footfall?", a: "Yes — we specify durable paving edges, resilient planting and AMC suited to high visitor traffic." }]
  ),
  industryPage(
    "school-institution-landscaping",
    "school",
    "School & Institution",
    "School Landscaping in Delhi",
    "schools, colleges and institutions",
    ["Safe play-edge planting", "Campus lawns and avenues", "Assembly-court softscape", "Term-based maintenance"],
    [{ q: "Do you schedule work around school terms?", a: "Yes — noisy or disruptive works are planned around exams and term breaks wherever possible." }]
  ),
  industryPage(
    "sports-campus-landscaping",
    "sports",
    "Sports Campus",
    "Sports Campus Landscaping in Delhi",
    "sports campuses and training grounds",
    ["Spectator arrival planting", "Turf edges and buffers", "Durable species selection", "Match-day ready AMC"],
    [{ q: "Can landscapes stay match-day ready?", a: "Yes — AMC calendars can include pre-event grooming for lawns, hedges and arrival courts." }]
  ),
  industryPage(
    "embassy-landscaping",
    "embassy",
    "Embassy",
    "Embassy Landscaping in Delhi",
    "embassy and diplomatic compounds",
    ["Secure compound softscape", "Formal arrival gardens", "Discrete maintenance access", "Confidential site protocols"],
    [{ q: "Do you follow embassy security protocols?", a: "Yes — crew lists, access windows and discreet maintenance routines are coordinated with compound security." }]
  ),

  {
    slug: "corporate-campus-landscaping",
    path: "/corporate-campus-landscaping",
    eyebrow: "Corporate",
    title: "Corporate Landscaping in Delhi",
    description:
      "Corporate Landscaping in Delhi by Hind Landscape Co. — campus shade, arrival lawns, irrigation and FM-friendly AMC.",
    intro:
      "Corporate campuses in Delhi need durable turf, clear irrigation and safe sightlines. Hind Landscape Co. delivers design through maintenance AMC for managed properties.",
    bullets: ["Arrival lawns and avenue planting", "Irrigation zoning", "Shade and seating edges", "FM-ready AMC"],
    keywords: industryKeywords.corporate,
    faqs: [
      { q: "Can you maintain after install?", a: "Yes. Landscape maintenance AMC keeps campuses consistent year-round." },
    ],
  },

  {
    slug: "hotel-landscaping-delhi-ncr",
    path: "/hotel-landscaping-delhi-ncr",
    eyebrow: "Hospitality · Delhi NCR",
    title: "Hotel Landscaping in Delhi NCR",
    description:
      "Hotel Landscaping in Delhi NCR by Hind Landscape Co. — arrival courts, pool surrounds, night lighting and hospitality AMC.",
    intro:
      "Hotel landscapes across Delhi NCR are judged at check-in and after dark. We plan planting, paving and lighting that stay presentable under heavy guest use.",
    bullets: ["Arrival and drop-off planting", "Pool and patio surrounds", "Night lighting plans", "Hospitality AMC"],
    keywords: [
      "Hotel Landscaping in Delhi NCR",
      "hotel landscaping Delhi",
      "hospitality landscaping NCR",
      "hotel garden Delhi NCR",
    ],
    relatedServices: ["lighting", "swimming-pools", "landscape-maintenance-amc"],
    relatedLocations: ["delhi-ncr", "gurgaon", "noida"],
    faqs: [
      { q: "Do you work with hotel PMCs in NCR?", a: "Yes — drawings, phased install and handover notes for operations teams." },
    ],
  },
  {
    slug: "hotel-landscaping-agra",
    path: "/hotel-landscaping-agra",
    eyebrow: "Hospitality · Agra",
    title: "Hotel Landscaping in Agra",
    description:
      "Hotel Landscaping in Agra by Hind Landscape Co. — heat-tolerant planting, arrival gardens and guest-facing outdoor rooms.",
    intro:
      "Agra hotels need landscapes that handle heat, dust and constant guest photography. Hind Landscape Co. designs arrival gardens and pool edges that stay presentable.",
    bullets: ["Arrival statement gardens", "Heat-tolerant planting", "Pool surrounds", "Night lighting"],
    keywords: ["Hotel Landscaping in Agra", "hotel garden Agra", "hospitality landscaping Agra"],
    relatedLocations: ["agra"],
    faqs: [
      { q: "Do you mobilise to Agra?", a: "Yes for suitable hotel and resort scopes — share photos and property type on the quote form." },
    ],
  },
  {
    slug: "resort-landscaping-agra",
    path: "/resort-landscaping-agra",
    eyebrow: "Resort · Agra",
    title: "Resort Landscaping in Agra",
    description:
      "Resort Landscaping in Agra by Hind Landscape Co. — estate softscape, water features and resort-ready outdoor living.",
    intro:
      "Resort landscapes in Agra should feel generous yet maintainable. We plan lawns, water features and pathways for guest flow and heat-aware species.",
    bullets: ["Resort lawns and avenues", "Water features", "Guest pathway planting", "Seasonal AMC"],
    keywords: ["Resort Landscaping in Agra", "resort garden Agra", "resort landscaping Uttar Pradesh"],
    relatedServices: ["water-features", "softscape-horticulture"],
    relatedLocations: ["agra"],
    faqs: [
      { q: "Can you handle large resort plots?", a: "Yes — master softscape packages with phased install for opening timelines." },
    ],
  },
  {
    slug: "resort-landscaping-goa",
    path: "/resort-landscaping-goa",
    eyebrow: "Resort · Goa",
    title: "Resort Landscaping in Goa",
    description:
      "Resort Landscaping in Goa by Hind Landscape Co. — tropical villa gardens, pool surrounds and coastal-aware planting.",
    intro:
      "Goa resorts need tropical planting that thrives in humidity and salt air. Hind Landscape Co. designs pool gardens, villa courts and arrival softscape for hospitality brands.",
    bullets: ["Tropical resort planting", "Pool and villa surrounds", "Coastal-aware species", "Hospitality AMC"],
    keywords: ["Resort Landscaping in Goa", "resort landscaping Goa", "tropical resort garden Goa"],
    relatedLocations: ["goa"],
    faqs: [
      { q: "Do you work on Goa resort projects?", a: "Yes for suitable resort and villa scopes — we confirm logistics after reviewing the site brief." },
    ],
  },

  {
    slug: "garden-maintenance-delhi-ncr",
    path: "/garden-maintenance-delhi-ncr",
    eyebrow: "Maintenance",
    title: "Garden Maintenance Services and Landscape Maintenance AMC",
    description:
      "Garden Maintenance Services and Landscape Maintenance AMC in Delhi NCR — lawns, hedges, irrigation checks and seasonal care by Hind Landscape Co.",
    intro:
      "Delhi NCR gardens need scheduled care through heat, monsoon and winter. Hind Landscape Co. offers visit-based maintenance and AMC programmes.",
    bullets: ["Lawn mowing and feeding", "Hedge and shrub shaping", "Irrigation checks", "Seasonal cleanup"],
    keywords: [
      "Garden Maintenance Services and Landscape Maintenance AMC",
      "garden maintenance Delhi NCR",
      "landscape AMC Delhi",
      "landscape maintenance AMC India",
    ],
    relatedServices: ["landscape-maintenance-amc", "lawn-care"],
    faqs: [
      { q: "Which cities are covered?", a: "Delhi, Gurugram/Gurgaon, Noida, Faridabad, Ghaziabad and wider Delhi NCR for suitable AMC scopes." },
    ],
  },
  {
    slug: "landscape-contractor-delhi",
    path: "/landscape-contractor-delhi",
    eyebrow: "Delhi",
    title: "Landscaping Company in Delhi | Landscape Contractor",
    description:
      "Landscaping Company in Delhi — Hind Landscape Co. handles design-build execution, irrigation, hardscape and maintenance handover.",
    intro:
      "A landscaping company in Delhi should understand local climate, nursery supply and site access. Hind Landscape Co. executes residential and commercial outdoor works with clear scope.",
    bullets: ["Design-build execution", "Hardscape and softscape", "Irrigation and lighting", "Handover and AMC"],
    keywords: [
      "Landscaping Company in Delhi",
      "landscape contractor Delhi",
      "garden landscaping Delhi",
      "best landscaping company Delhi NCR",
    ],
    relatedLocations: ["delhi", "delhi-ncr", "south-delhi"],
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
    bullets: ["Design and drawings", "Softscape and lawn area", "Hardscape materials", "Irrigation and lighting", "Ongoing AMC"],
    keywords: ["landscaping cost India", "garden landscaping cost Delhi", "landscape quotation India"],
    faqs: [
      { q: "Can you give a fixed price online?", a: "Not accurately — final pricing follows site survey." },
      { q: "What increases cost most?", a: "Specimen plants, complex hardscape, waterproofing interfaces and intensive irrigation often drive budgets." },
    ],
  },
  {
    slug: "faq",
    path: "/faq",
    eyebrow: "FAQ",
    title: "Landscaping FAQs | Hind Landscape Co.",
    description:
      "Frequently asked questions about Hind Landscape Co. landscaping services, Delhi NCR coverage, timelines, AMC and quotations.",
    intro: "Straight answers on services, geography, timelines and how to start a project with Hind Landscape Co.",
    bullets: ["Services and coverage", "Timelines and site visits", "AMC and maintenance", "Quotations"],
    keywords: ["landscaping FAQ India", "Hind Landscape Co. FAQ"],
    faqs: [
      { q: "Who is Hind Landscape Co.?", a: "Hind Landscape Co. is an independent landscaping studio at D-51, Abul Fazal Enclave, Jamia Nagar, Okhla, New Delhi 110025. Website hindlandscaping.com. Phone +91 99901 16281. It is not Hindgreen Landscape Pvt. Ltd. and not Greentech International Co." },
      { q: "What services does Hind Landscape Co. offer?", a: "Hardscape & civil, softscape & horticulture, irrigation, lighting, landscape maintenance AMC, terrace & podium gardens, vertical gardens, indoor plantation, water features, pools and more." },
      { q: "Is Delhi NCR your main area?", a: "Yes. We also mobilise pan-India for suitable projects including Mumbai, Bengaluru, Hyderabad, Goa, Jaipur, Pune and Chennai." },
      { q: "How do I get a quote?", a: "Use the Get a Free Quote form with locality, photos and rough scope." },
      { q: "Do you maintain gardens after installation?", a: "Yes — optional landscape maintenance AMC." },
    ],
  },

  /* High-value service x city hubs */
  hub({
    slug: "terrace-garden-delhi",
    eyebrow: "Terrace · Delhi",
    title: "Terrace Garden in Delhi | Podium & Rooftop Landscaping",
    description:
      "Terrace garden in Delhi by Hind Landscape Co. — waterproofing-aware planters, lightweight mixes, irrigation and seating greenery for apartments and commercial podiums.",
    intro:
      "Delhi terrace gardens must respect heat, wind and slab waterproofing. Hind Landscape Co. designs rooftop and podium planting that stays healthy without damaging the structure.",
    bullets: [
      "Waterproofing-aware planter layouts",
      "Heat- and wind-tolerant species",
      "Light irrigation for terrace beds",
      "Optional terrace AMC",
    ],
    keywords: [
      "terrace garden Delhi",
      "terrace garden Delhi NCR",
      "rooftop garden landscaping Delhi",
      "podium landscaping Delhi",
      "Terrace Garden and Podium Landscaping Services",
    ],
    relatedServices: ["terrace-garden", "irrigation"],
    relatedLocations: ["delhi", "south-delhi"],
    faqs: [
      { q: "Do you terrace-garden apartments in Delhi?", a: "Yes — we size planters and mixes for typical residential slabs and confirm access before install." },
      { q: "Is AMC available for terrace gardens?", a: "Yes. Terrace AMC covers watering checks, plant replacement and seasonal resets." },
    ],
  }),
  hub({
    slug: "vertical-garden-gurgaon",
    eyebrow: "Vertical · Gurugram",
    title: "Vertical Garden in Gurgaon | Greenwall Installation",
    description:
      "Vertical garden in Gurgaon / Gurugram by Hind Landscape Co. — living walls with irrigation for homes, offices and commercial façades.",
    intro:
      "Gurugram vertical gardens need reliable drip and species that survive heat and reflected light. We build modular green walls with maintenance access for villas, offices and lobbies.",
    bullets: ["Modular living wall systems", "Zoned irrigation", "Heat-tolerant plant mixes", "Greenwall AMC"],
    keywords: [
      "vertical garden Gurgaon",
      "vertical garden Gurugram",
      "greenwall Gurgaon",
      "Natural Vertical Garden in Delhi NCR",
      "living wall installation Gurugram",
    ],
    relatedServices: ["vertical-garden", "irrigation"],
    relatedLocations: ["gurgaon", "gurugram", "dlf-gurugram"],
    faqs: [
      { q: "Do you install green walls in DLF and Golf Course Road?", a: "Yes for suitable villa, society and commercial façades across Gurugram." },
      { q: "Are vertical gardens high maintenance?", a: "They need scheduled irrigation checks and plant replacement — we offer AMC for walls we install." },
    ],
  }),
  hub({
    slug: "farmhouse-landscaping-chattarpur",
    eyebrow: "Farmhouse · Chattarpur",
    title: "Farmhouse Landscaping in Chattarpur | Estate Gardens",
    description:
      "Farmhouse landscaping in Chattarpur by Hind Landscape Co. — driveways, lawns, orchard edges, outdoor living and lighting for Delhi NCR weekend estates.",
    intro:
      "Chattarpur farmhouses need landscapes that feel generous yet maintainable when owners visit on weekends. We plan arrival avenues, lawns, water-wise beds and soft night lighting.",
    bullets: ["Arrival avenues and lawns", "Orchard and boundary edges", "Outdoor seating gardens", "Weekend-friendly AMC"],
    keywords: [
      "farmhouse landscaping Chattarpur",
      "farmhouse landscaping Delhi",
      "estate landscaping NCR",
      "farmhouse garden design Chattarpur",
    ],
    relatedServices: ["farmhouse-landscaping", "lighting", "lawn-care"],
    relatedLocations: ["chattarpur", "south-delhi", "delhi-ncr"],
    faqs: [
      { q: "Do you landscape large Chattarpur plots?", a: "Yes — phased estate softscape with clear irrigation and access planning." },
      { q: "Can maintenance be weekend-focused?", a: "AMC visit calendars can align with how often the farmhouse is used." },
    ],
  }),
  hub({
    slug: "landscape-amc-gurugram",
    eyebrow: "AMC · Gurugram",
    title: "Landscape Maintenance AMC in Gurugram | Garden Care",
    description:
      "Landscape maintenance AMC in Gurugram / Gurgaon — lawns, hedges, irrigation checks and seasonal care by Hind Landscape Co.",
    intro:
      "Gurugram gardens and campuses need scheduled care through heat, wind and monsoon. Hind Landscape Co. offers visit-based AMC for villas, societies and commercial softscape.",
    bullets: ["Lawn and hedge programmes", "Irrigation filter and valve checks", "Seasonal resets", "Written AMC visit calendars"],
    keywords: [
      "landscape maintenance AMC Gurugram",
      "garden AMC Gurugram",
      "garden maintenance Gurgaon",
      "landscape AMC Gurgaon",
      "Garden Maintenance Services and Landscape Maintenance AMC",
    ],
    relatedServices: ["landscape-maintenance-amc", "lawn-care"],
    relatedLocations: ["gurugram", "gurgaon", "golf-course-road"],
    faqs: [
      { q: "Do you cover Golf Course Road and DLF?", a: "Yes for suitable villa, society and campus AMC scopes across Gurugram." },
      { q: "Can AMC be lawn-only?", a: "Yes — lawn-only or full softscape and irrigation maintenance." },
    ],
  }),
  hub({
    slug: "hardscape-noida",
    eyebrow: "Hardscape · Noida",
    title: "Hardscape Landscaping in Noida | Pathways & Plazas",
    description:
      "Hardscape landscaping in Noida by Hind Landscape Co. — pathways, plazas, decks and outdoor floors for homes, societies and commercial sites.",
    intro:
      "Noida sites need hardscape that survives monsoon drainage and expressway dust. We build pathways, plazas and outdoor floors coordinated with softscape and irrigation.",
    bullets: ["Pathways and plaza paving", "Drainage-aware levels", "Deck and seating courts", "Hardscape–softscape coordination"],
    keywords: [
      "hardscape Noida",
      "hardscape landscaping Noida",
      "commercial hardscaping Noida",
      "Hardscaping and Hardscape Landscaping for Commercial Sites",
      "outdoor paving Noida",
    ],
    relatedServices: ["hardscaping", "softscape-horticulture"],
    relatedLocations: ["noida", "greater-noida", "noida-extension"],
    faqs: [
      { q: "Do you hardscape commercial campuses in Noida?", a: "Yes — plazas, parking-edge softworks and outdoor floors for offices and institutions." },
      { q: "Which materials do you use?", a: "Natural stone, concrete pavers and site-suitable finishes for slip resistance and monsoon durability." },
    ],
  }),
  hub({
    slug: "softscape-delhi-ncr",
    eyebrow: "Softscape · Delhi NCR",
    title: "Softscape Landscaping in Delhi NCR | Planting & Horticulture",
    description:
      "Softscape landscaping in Delhi NCR — planting design, horticulture, lawns and beds for homes and commercial sites by Hind Landscape Co.",
    intro:
      "Delhi NCR softscape must survive heat, dust and monsoon. Hind Landscape Co. selects species and planting plans that stay green after handover — not just on photo day.",
    bullets: ["Named plant lists", "Lawn and bed design", "Climate-aware horticulture", "Softscape AMC options"],
    keywords: [
      "softscape Delhi NCR",
      "softscape landscaping Delhi",
      "garden softscape NCR",
      "Softscape and Garden Landscaping Services in India",
      "horticulture landscaping Delhi NCR",
    ],
    relatedServices: ["softscape-horticulture", "lawn-care"],
    relatedLocations: ["delhi-ncr", "delhi", "gurugram", "noida"],
    faqs: [
      { q: "Do you provide planting schedules?", a: "Yes — layouts and named plant lists keep installation clear for site teams." },
      { q: "Can softscape be separate from hardscape?", a: "Yes — many clients enrich planting on existing hardscape, or the reverse." },
    ],
  }),
  hub({
    slug: "irrigation-delhi-ncr",
    eyebrow: "Irrigation · Delhi NCR",
    title: "Landscape Irrigation in Delhi NCR | Drip & Sprinkler",
    description:
      "Landscape irrigation services in Delhi NCR — drip, sprinkler and controller systems for homes, campuses and commercial gardens by Hind Landscape Co.",
    intro:
      "Delhi NCR summers punish under-watered beds. We design zoned drip and sprinkler systems with maintenance access so gardens survive heat without wasting water.",
    bullets: ["Drip and sprinkler zoning", "Controller and timer setups", "Terrace and podium irrigation", "AMC-friendly valve access"],
    keywords: [
      "landscape irrigation Delhi NCR",
      "drip irrigation landscaping Delhi",
      "garden irrigation Gurugram",
      "Landscape Irrigation Services for Commercial Sites",
      "commercial irrigation Noida",
    ],
    relatedServices: ["irrigation", "landscape-maintenance-amc"],
    relatedLocations: ["delhi-ncr", "gurgaon", "noida"],
    faqs: [
      { q: "Do you irrigate terrace gardens in NCR?", a: "Yes — terrace, podium and balcony systems zoned for planters and lightweight mixes." },
      { q: "Can irrigation connect to timers?", a: "Yes — controllers and timers are part of most residential and commercial installs." },
    ],
  }),
  hub({
    slug: "lawn-care-delhi",
    eyebrow: "Lawn · Delhi",
    title: "Lawn Care in Delhi | Maintenance & Feeding",
    description:
      "Lawn care in Delhi by Hind Landscape Co. — mowing, feeding, edge cleaning and seasonal resets for homes, societies and hospitality lawns.",
    intro:
      "Delhi lawns struggle with heat stress, uneven watering and monsoon growth spurts. A fixed care calendar keeps turf dense and even without weekend chores.",
    bullets: ["Mowing height programmes", "Feeding and seasonal resets", "Edge cleaning", "Lawn-only or full AMC"],
    keywords: [
      "lawn care Delhi",
      "lawn care Delhi NCR",
      "lawn maintenance Delhi",
      "garden lawn services Delhi",
      "lawn AMC Delhi",
    ],
    relatedServices: ["lawn-care", "landscape-maintenance-amc"],
    relatedLocations: ["delhi", "south-delhi", "delhi-ncr"],
    faqs: [
      { q: "Which grass types do you work with?", a: "We advise based on light, water and use — including common warm-season lawns used across North India." },
      { q: "Is lawn AMC available?", a: "Yes. Scheduled visits keep mowing, feeding and seasonal tasks on track." },
    ],
  }),
  hub({
    slug: "society-landscaping-noida",
    eyebrow: "Society · Noida",
    title: "Society Landscaping in Noida | Apartment Complex AMC",
    description:
      "Society landscaping in Noida — entry gardens, common lawns, play edges and RWA maintenance AMC by Hind Landscape Co.",
    intro:
      "Noida and Greater Noida societies need landscapes that look presentable every week with clear crew access. We scope entry courts, lawns, hedges and irrigation for RWAs and facility teams.",
    bullets: ["Entry and common-area gardens", "Lawn and hedge programmes", "Irrigation checks", "RWA-friendly AMC contracts"],
    keywords: [
      "society landscaping Noida",
      "apartment complex landscaping Noida",
      "RWA garden maintenance Noida",
      "society landscaping Delhi NCR",
      "society lawn maintenance Greater Noida",
    ],
    relatedServices: ["society-landscaping", "landscape-maintenance-amc"],
    relatedLocations: ["noida", "greater-noida", "noida-extension"],
    faqs: [
      { q: "Do you work with RWAs in Noida?", a: "Yes — quotes and AMC scopes are written for society committees and facility managers." },
      { q: "Can you cover Greater Noida townships?", a: "Yes for suitable common-area and phase-wise society scopes." },
    ],
  }),
  hub({
    slug: "garden-design-gurugram",
    eyebrow: "Design · Gurugram",
    title: "Garden Design in Gurugram | Landscape Architect",
    description:
      "Garden design in Gurugram / Gurgaon by Hind Landscape Co. — outdoor layouts, planting plans and landscape architecture for villas and campuses.",
    intro:
      "Gurugram villas and campuses need outdoor plans that handle wind, podium logistics and water reality. Hind Landscape Co. prepares layouts and planting direction for homeowners, architects and developers.",
    bullets: ["Site-specific garden layouts", "Planting schedules", "Hardscape–softscape coordination", "Tender-ready drawings on request"],
    keywords: [
      "garden design Gurugram",
      "garden design Gurgaon",
      "landscape architect Gurugram",
      "garden designer Gurgaon",
      "outdoor master plan Gurugram",
    ],
    relatedServices: ["landscape-architecture", "softscape-horticulture"],
    relatedLocations: ["gurugram", "gurgaon", "golf-course-road", "dlf-gurugram"],
    faqs: [
      { q: "Do you provide drawings for tender?", a: "Yes — layout drawings, planting schedules and scope notes for tender and site teams." },
      { q: "Do you design villa gardens on Golf Course Road?", a: "Yes for suitable residential and podium garden scopes across Gurugram." },
    ],
  }),
  hub({
    slug: "balcony-garden-delhi",
    eyebrow: "Balcony · Delhi",
    title: "Balcony Garden in Delhi | Apartment Greening",
    description:
      "Balcony garden design in Delhi — planters, privacy screens and compact outdoor greening for apartments by Hind Landscape Co.",
    intro:
      "Delhi balcony gardens need lightweight mixes, wind-safe planters and plants that tolerate reflected heat. We design compact layouts for herbs, flowering pots and privacy screens.",
    bullets: ["Lightweight planter design", "Privacy planting", "Heat-tolerant species", "Simple care guidance"],
    keywords: [
      "balcony garden Delhi",
      "balcony garden Delhi NCR",
      "apartment balcony landscaping Delhi",
      "small space garden Delhi",
    ],
    relatedServices: ["balcony-garden", "indoor-plantation"],
    relatedLocations: ["delhi", "south-delhi", "dwarka", "rohini"],
    faqs: [
      { q: "How much weight can a balcony take?", a: "We keep planter sizes and soil mixes conservative and flag structural limits before install." },
      { q: "Do you service balcony plants?", a: "Optional visit-based care is available for balconies we plant." },
    ],
  }),
  hub({
    slug: "landscape-lighting-delhi",
    eyebrow: "Lighting · Delhi",
    title: "Landscape Lighting in Delhi | Outdoor Garden Lights",
    description:
      "Landscape lighting in Delhi — pathway, tree and façade lighting for homes, hotels and commercial gardens by Hind Landscape Co.",
    intro:
      "Delhi outdoor lighting should guide feet, show planting and avoid glare into windows. We place path lights, uplights and soft wash fixtures for usable evenings.",
    bullets: ["Pathway and step lighting", "Tree uplights", "Warm LED fixtures", "Weather-sealed outdoor wiring"],
    keywords: [
      "landscape lighting Delhi",
      "outdoor garden lighting Delhi",
      "Landscape Lighting Services for Commercial Landscapes",
      "garden lighting contractor Delhi",
    ],
    relatedServices: ["lighting"],
    relatedLocations: ["delhi", "delhi-ncr"],
    faqs: [
      { q: "Do you use warm LED fixtures?", a: "Yes — warm white LEDs are preferred for residential, hospitality and commercial garden lighting." },
      { q: "Can lighting be added to an existing garden?", a: "Yes — we survey cable routes and fixture positions before install." },
    ],
  }),

  /* National / NCR industry hubs */
  hub({
    slug: "commercial-landscaping-india",
    eyebrow: "Commercial · India",
    title: "Commercial Landscaping Company in India",
    description:
      "Commercial landscaping company in India — Hind Landscape Co. delivers hardscape, softscape, irrigation, lighting and AMC for hotels, campuses, developers and institutions.",
    intro:
      "Buyers searching for a commercial landscaping company in India need BOQ clarity, climate-aware planting and maintenance continuity. Hind Landscape Co. designs and builds commercial outdoor programmes from Delhi NCR with pan-India mobilisation.",
    bullets: [
      "Commercial hardscape and softscape packages",
      "Irrigation and outdoor lighting",
      "Hotel, campus, mall and developer scopes",
      "Handover and landscape AMC",
    ],
    keywords: [
      "commercial landscaping company India",
      "commercial landscaping India",
      "Commercial Landscaping in Delhi",
      "commercial garden landscaping India",
    ],
    relatedServices: ["hardscaping", "softscape-horticulture", "irrigation", "landscape-maintenance-amc"],
    faqs: [
      { q: "Do you handle pan-India commercial projects?", a: "Yes for suitable scopes — Delhi NCR is primary; we mobilise after reviewing drawings and logistics." },
      { q: "What industries do you cover?", a: "Hotels, corporate campuses, developers, hospitals, schools, malls, industrial parks and embassies." },
    ],
  }),
  hub({
    slug: "corporate-landscaping-delhi-ncr",
    eyebrow: "Corporate · Delhi NCR",
    title: "Corporate Landscaping in Delhi NCR | Campus & HQ",
    description:
      "Corporate landscaping in Delhi NCR — campus shade, arrival lawns, irrigation zoning and FM-friendly AMC by Hind Landscape Co.",
    intro:
      "Corporate campuses across Gurugram, Noida and Delhi need durable turf, clear irrigation and safe sightlines. We deliver design through maintenance AMC for managed properties.",
    bullets: ["Arrival lawns and avenues", "Irrigation zoning for FM teams", "Staff outdoor seating edges", "Campus AMC calendars"],
    keywords: [
      "corporate landscaping Delhi NCR",
      "Corporate Landscaping in Delhi",
      "corporate campus landscaping Delhi NCR",
      "office campus landscaping Gurugram",
      "corporate landscaping Noida",
    ],
    relatedServices: ["softscape-horticulture", "irrigation", "landscape-maintenance-amc"],
    relatedLocations: ["delhi-ncr", "gurugram", "noida", "faridabad"],
    faqs: [
      { q: "Do you work on Gurugram and Noida campuses?", a: "Yes — Cyber City, Golf Course Road, Expressway and Faridabad corridors for suitable corporate scopes." },
      { q: "Is AMC available for FM teams?", a: "Yes — visit calendars, irrigation checks and plant replacement rules written for facilities managers." },
    ],
  }),
  hub({
    slug: "hotel-landscaping-india",
    eyebrow: "Hospitality · India",
    title: "Hotel Landscaping in India | Resort & Hospitality Gardens",
    description:
      "Hotel landscaping in India by Hind Landscape Co. — arrival courts, pool surrounds, night lighting and hospitality AMC for hotels and resorts.",
    intro:
      "Hotel and resort landscapes across India are judged at check-in and after dark. Hind Landscape Co. plans planting, paving and lighting that stay presentable under heavy guest use — from Delhi NCR to Agra, Goa and beyond.",
    bullets: ["Hospitality arrival gardens", "Pool and patio surrounds", "Night landscape lighting", "Seasonal hospitality AMC"],
    keywords: [
      "hotel landscaping India",
      "hotel landscaping Delhi",
      "resort landscaping India",
      "hospitality landscaping India",
      "Hotel Landscaping in Delhi",
    ],
    relatedServices: ["lighting", "swimming-pools", "softscape-horticulture"],
    relatedLocations: ["delhi-ncr", "agra", "goa", "mumbai"],
    faqs: [
      { q: "Do you landscape hotels outside Delhi?", a: "Yes for suitable hotel and resort scopes — share property type, photos and city on the quote form." },
      { q: "Can you align with hotel opening timelines?", a: "Yes — phased install for soft openings and full handover packages for operations teams." },
    ],
  }),
  hub({
    slug: "residential-landscaping-delhi-ncr",
    eyebrow: "Residential · Delhi NCR",
    title: "Residential Landscaping in Delhi NCR | Home & Villa Gardens",
    description:
      "Residential landscaping in Delhi NCR — garden design, lawns, terrace gardens and home AMC for villas, apartments and farmhouses by Hind Landscape Co.",
    intro:
      "Homeowners across Delhi, Gurugram, Noida and Faridabad need gardens that survive local climate with clear communication. We design, build and optionally maintain residential outdoor spaces.",
    bullets: ["Home garden design", "Lawn, irrigation and lighting", "Terrace and balcony options", "Optional residential AMC"],
    keywords: [
      "residential landscaping Delhi NCR",
      "Residential Landscaping in Delhi",
      "home garden landscaping Delhi",
      "villa landscaping Gurgaon",
      "residential landscaping Noida",
    ],
    relatedServices: ["softscape-horticulture", "terrace-garden", "lawn-care"],
    relatedLocations: ["delhi-ncr", "delhi", "gurugram", "noida", "faridabad"],
    faqs: [
      { q: "Do you landscape villas in Gurugram and Noida?", a: "Yes — villa courts, lawns and terrace gardens across primary NCR localities." },
      { q: "Is a free site visit available for homes?", a: "Yes for serious residential enquiries across Delhi NCR." },
    ],
  }),
  hub({
    slug: "developer-landscaping-india",
    eyebrow: "Developer · India",
    title: "Developer Landscaping in India | Township Softscape",
    description:
      "Developer landscaping in India — master-plan softscape, sample flats, clubhouses and society handover packages by Hind Landscape Co.",
    intro:
      "Township and real-estate developers need landscaping that matches sales timelines and society handover standards. We deliver phased softscape packages from Delhi NCR with pan-India mobilisation for suitable programmes.",
    bullets: ["Master-plan softscape packages", "Sample flat and club landscaping", "Society common-area handover", "Phased install for launches"],
    keywords: [
      "developer landscaping India",
      "Developer Landscaping in Delhi",
      "township landscaping India",
      "real estate landscaping India",
    ],
    relatedServices: ["hardscaping", "softscape-horticulture", "society-landscaping"],
    faqs: [
      { q: "Can landscaping align with possession calendars?", a: "Yes — we phase sample flats, clubhouses and common areas to match launch and handover dates." },
      { q: "Do you hand over to RWAs?", a: "Yes — common-area scopes and optional AMC can transfer cleanly to society committees." },
    ],
  }),
  hub({
    slug: "landscaping-services-delhi",
    eyebrow: "Services · Delhi",
    title: "Landscaping Services in Delhi | Design, Build & AMC",
    description:
      "Landscaping services in Delhi by Hind Landscape Co. — garden design, hardscape, softscape, irrigation, lighting, terrace gardens and maintenance AMC.",
    intro:
      "Delhi buyers searching for landscaping services need one accountable team for design, execution and care. Hind Landscape Co. delivers full outdoor programmes for homes, hotels and commercial sites across the city and NCR.",
    bullets: [
      "Garden design and landscape architecture",
      "Hardscape, softscape and irrigation",
      "Terrace, vertical and indoor planting",
      "Landscape maintenance AMC",
    ],
    keywords: [
      "landscaping services Delhi",
      "landscaping services Delhi NCR",
      "garden landscaping services Delhi",
      "landscape contractor Delhi",
      "Landscaping Company in Delhi",
    ],
    relatedServices: ["hardscaping", "softscape-horticulture", "irrigation", "landscape-maintenance-amc"],
    relatedLocations: ["delhi", "delhi-ncr", "south-delhi"],
    faqs: [
      { q: "Which landscaping services do you offer in Delhi?", a: "Hardscape, softscape, irrigation, lighting, terrace and vertical gardens, indoor plantation, water features, pools and AMC." },
      { q: "Do you cover South Delhi and Chattarpur?", a: "Yes — South Delhi, Chattarpur, Vasant Kunj and wider Delhi NCR for suitable scopes." },
    ],
  }),
];

export function getIntentPage(slug: string) {
  return intentPages.find((p) => p.slug === slug);
}

export const INTENT_ROUTE_SLUGS = intentPages.map((p) => p.slug);
