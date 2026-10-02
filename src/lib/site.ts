import { serviceKeywordMap } from "@/lib/seoKeywords";

export type ServiceItem = {
  slug: string;
  title: string;
  text: string;
  detail: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  body: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
};

/**
 * Client-priority services first (SEO titles are the approved “After Click” phrases).
 * Keep those exact keyword titles — they drive India search targeting.
 */
export const services: ServiceItem[] = [
  {
    slug: "hardscaping",
    title: "Hardscape & Civil",
    text: "Patios, pathways, decks and durable outdoor structure.",
    detail:
      "Stone, pavers, steps and civil finishes built for Indian heat and monsoon — so outdoor spaces stay usable year after year.",
    image: "/images/service-hardscape.jpg",
    seoTitle: "Hardscaping and Hardscape Landscaping for Commercial Sites",
    seoDescription:
      "Hardscaping and hardscape landscaping for commercial sites in Delhi NCR and India — pathways, plazas, decks, steps and outdoor floors by Hind Landscape Co.",
    body: [
      "Hardscape sets how people move through a site — entries, plazas, dining decks, pool surrounds and quiet seating courts.",
      "We build with drainage, levels and material durability so stone and pavers survive monsoon, heat and commercial footfall.",
      "Civil and softscape are coordinated so the finished landscape feels complete — not like separate vendor work.",
    ],
    faqs: [
      {
        q: "Do you hardscape commercial campuses?",
        a: "Yes. We deliver pathways, plazas, parking-edge softworks and outdoor floors for offices, hotels and institutions across India.",
      },
      {
        q: "What materials do you use?",
        a: "Natural stone, concrete pavers and site-suitable finishes chosen for slip resistance, colour and maintenance.",
      },
    ],
    keywords: (serviceKeywordMap["hardscaping"] ?? []),
  },
  {
    slug: "softscape-horticulture",
    title: "Softscape & Horticulture",
    text: "Planting plans, beds and garden softscape that thrive.",
    detail:
      "Climate-aware planting, lawns and horticulture so softscape stays green through Delhi heat, dust and monsoon.",
    image: "/images/service-design.jpg",
    seoTitle: "Softscape and Garden Landscaping Services in India",
    seoDescription:
      "Softscape and garden landscaping services in India — planting design, horticulture, lawns and beds for homes and commercial sites by Hind Landscape Co.",
    body: [
      "Softscape is the living layer of a landscape — trees, shrubs, groundcovers, lawns and seasonal colour.",
      "Hind Landscape Co. selects species for Indian climate, water use and maintenance reality, not just handover-day photos.",
      "From compact city gardens to campus horticulture, we keep planting plans practical for Delhi NCR and pan-India sites.",
    ],
    faqs: [
      {
        q: "Do you provide planting schedules?",
        a: "Yes. Layouts and named plant lists are part of softscape scopes so installation stays clear for site teams.",
      },
      {
        q: "Can softscape be separate from hardscape?",
        a: "Yes — many clients start with softscape enrichment on an existing hardscape, or the reverse.",
      },
    ],
    keywords: (serviceKeywordMap["softscape-horticulture"] ?? []),
  },
  {
    slug: "irrigation",
    title: "Landscape Irrigation Services",
    text: "Drip, sprinkler and zoned watering that saves water.",
    detail:
      "Efficient irrigation that reaches the roots and skips the waste — built for commercial and residential landscapes in India.",
    image: "/images/service-irrigation.jpg",
    seoTitle: "Landscape Irrigation Services for Commercial Sites",
    seoDescription:
      "Landscape irrigation services for commercial sites in India — drip, sprinkler and controller systems for campuses, hotels and estates by Hind Landscape Co.",
    body: [
      "Irrigation should match plant zones — lawns, shrubs, pots and trees rarely need the same water schedule.",
      "We design drip, sprinkler and controller setups that reduce waste and keep beds alive through Delhi NCR summers.",
      "Systems are planned with maintenance access so AMC teams can service filters and valves without digging up the garden.",
    ],
    faqs: [
      {
        q: "Do you irrigate terrace and podium gardens?",
        a: "Yes. Terrace, podium and balcony systems are zoned for planters, green walls and lightweight mixes.",
      },
      {
        q: "Can irrigation connect to timers?",
        a: "Yes. Controllers and timers are part of most commercial and residential installs.",
      },
    ],
    keywords: (serviceKeywordMap["irrigation"] ?? []),
  },
  {
    slug: "lighting",
    title: "Landscape Lighting",
    text: "Warm, safe evening light for paths and planting.",
    detail:
      "Pathway, façade and soft wash lighting so commercial and residential landscapes stay usable after dusk.",
    image: "/images/service-lighting.jpg",
    seoTitle: "Landscape Lighting Services for Commercial Landscapes",
    seoDescription:
      "Landscape lighting services for commercial landscapes in Delhi NCR and India — pathways, trees, façades and seating by Hind Landscape Co.",
    body: [
      "Outdoor lighting should guide feet, show planting and avoid glare into windows or neighbouring plots.",
      "We place path lights, uplights and soft wash fixtures so gardens and campuses feel usable after sunset.",
      "Wiring and fixture choices consider weather sealing and easy lamp maintenance for AMC teams.",
    ],
    faqs: [
      {
        q: "Do you use warm LED fixtures?",
        a: "Yes. Warm white LEDs are preferred for residential, hospitality and commercial garden lighting.",
      },
    ],
    keywords: (serviceKeywordMap["lighting"] ?? []),
  },
  {
    slug: "landscape-maintenance-amc",
    title: "Landscape Maintenance (AMC)",
    text: "Scheduled care so gardens stay handover-ready.",
    detail:
      "Annual maintenance contracts for lawns, hedges, irrigation checks and seasonal tasks across Delhi NCR and India.",
    image: "/images/service-lawn.jpg",
    seoTitle: "Garden Maintenance Services and Landscape Maintenance AMC",
    seoDescription:
      "Garden maintenance services and landscape maintenance AMC in Delhi NCR and India — lawns, hedges, irrigation and seasonal care by Hind Landscape Co.",
    body: [
      "AMC keeps gardens consistent after installation — the difference between a photo-day landscape and one that lasts.",
      "Scopes include visit frequency, mowing, pruning, fertiliser windows, irrigation checks and replacement rules.",
      "Ideal for homes, societies, hotels and commercial campuses that need predictable care.",
    ],
    faqs: [
      {
        q: "Can AMC cover only lawns?",
        a: "Yes. We can scope lawn-only or full softscape and irrigation maintenance.",
      },
    ],
    keywords: (serviceKeywordMap["landscape-maintenance-amc"] ?? []),
  },
  {
    slug: "terrace-garden",
    title: "Terrace & Podium Garden",
    text: "Rooftop, terrace and podium planting that feels intentional.",
    detail:
      "Waterproofing-aware terrace and podium gardens with planters, seating greenery and light irrigation.",
    image: "/images/service-design.jpg",
    seoTitle: "Terrace Garden and Podium Landscaping Services",
    seoDescription:
      "Terrace garden and podium landscaping services in Delhi NCR and India — planters, lightweight mixes, irrigation and seating greenery by Hind Landscape Co.",
    body: [
      "Terrace and podium gardens must respect waterproofing, load and wind.",
      "We plan planter layouts and plant lists that stay healthy without damaging the slab — for apartments, clubs and commercial podiums.",
      "Ideal for Delhi NCR projects seeking privacy screens, flowering pots and compact seating gardens.",
    ],
    faqs: [
      {
        q: "Do you coordinate with waterproofing?",
        a: "We design above finished waterproofing and flag any concerns before planting begins.",
      },
    ],
    keywords: (serviceKeywordMap["terrace-garden"] ?? []),
  },
  {
    slug: "vertical-garden",
    title: "Vertical Garden (Greenwall)",
    text: "Living walls for façades, balconies and atriums.",
    detail:
      "Natural vertical gardens and green walls with irrigation and plant mixes suited to Indian light and heat.",
    image: "/images/service-trees.jpg",
    seoTitle: "Natural Vertical Garden in Delhi NCR",
    seoDescription:
      "Natural vertical garden and greenwall installation in Delhi NCR — living walls for homes, offices and commercial façades by Hind Landscape Co.",
    body: [
      "Vertical gardens need reliable irrigation and plant species that survive heat and reflected light.",
      "We build modular living walls for balconies, compound walls and lobby atriums with maintenance access in mind.",
      "AMC is available for living walls we install across Delhi NCR.",
    ],
    faqs: [
      {
        q: "Are green walls high maintenance?",
        a: "They need scheduled irrigation checks and plant replacement. We offer AMC for living walls we install.",
      },
    ],
    keywords: (serviceKeywordMap["vertical-garden"] ?? []),
  },
  {
    slug: "terrarium-paludarium",
    title: "Terrarium and Paludarium",
    text: "Indoor living ecosystems for homes and lobbies.",
    detail:
      "Custom terrarium and paludarium installations — glass gardens and humid planted displays for Indian interiors.",
    image: "/images/service-trees.jpg",
    seoTitle: "Terrarium and Paludarium Service in India",
    seoDescription:
      "Terrarium and paludarium service in India — custom indoor planted displays for homes, offices and hospitality by Hind Landscape Co.",
    body: [
      "Terrariums and paludariums bring living greenery into controlled indoor environments.",
      "We design plant mixes, moisture balance and styling for lobbies, residences and boutique spaces across India.",
      "Maintenance guidance is included so displays stay healthy after handover.",
    ],
    faqs: [
      {
        q: "Do you build large lobby terrariums?",
        a: "Yes — from tabletop pieces to statement lobby installations, sized to light and humidity conditions.",
      },
    ],
    keywords: (serviceKeywordMap["terrarium-paludarium"] ?? []),
  },
  {
    slug: "indoor-plantation",
    title: "Indoor Plantation",
    text: "Office and indoor planting that stays healthy.",
    detail:
      "Indoor planting and office landscaping — planters, species selection and care plans for Indian workplaces.",
    image: "/images/service-design.jpg",
    seoTitle: "Indoor Planting and Office Landscaping Services",
    seoDescription:
      "Indoor planting and office landscaping services in India — lobby planters, workstation greenery and indoor horticulture by Hind Landscape Co.",
    body: [
      "Indoor plantation improves air quality perception and workplace calm when species match light levels.",
      "We specify planters, soil mixes and plant lists for offices, clinics and hospitality interiors across Delhi NCR and India.",
      "Optional AMC keeps indoor plants replaced and healthy without facilities-team guesswork.",
    ],
    faqs: [
      {
        q: "Do you service office plants monthly?",
        a: "Yes. Indoor plantation AMC can include watering checks, pruning and plant replacement.",
      },
    ],
    keywords: (serviceKeywordMap["indoor-plantation"] ?? []),
  },
  {
    slug: "swimming-pools",
    title: "Swimming Pools",
    text: "Pool surrounds and poolside landscape rooms.",
    detail:
      "Pool landscaping and swimming pool surrounds — planting, decks and softscape that feel resort-ready.",
    image: "/images/work-landscape.jpg",
    seoTitle: "Pool Landscaping and Swimming Pool Surrounds",
    seoDescription:
      "Pool landscaping and swimming pool surrounds in Delhi NCR and India — decks, planting and outdoor living by Hind Landscape Co.",
    body: [
      "Pool landscapes need slip-aware paving, chlorine-tolerant planting and clear circulation for guests.",
      "We design surrounds, planter edges and soft night lighting so pool decks feel like outdoor rooms.",
      "Scopes coordinate with pool contractors on levels, drainage and access.",
    ],
    faqs: [
      {
        q: "Do you build the pool structure itself?",
        a: "We focus on pool landscaping and surrounds. Structural pool works are coordinated with specialist pool contractors.",
      },
    ],
    keywords: (serviceKeywordMap["swimming-pools"] ?? []),
  },
  {
    slug: "water-features",
    title: "Water Features",
    text: "Fountains, cascades and reflective water elements.",
    detail:
      "Water feature landscaping for commercial sites — fountains, cascades and calm reflective pools.",
    image: "/images/work-landscape.jpg",
    seoTitle: "Water Feature Landscaping for Commercial Sites",
    seoDescription:
      "Water feature landscaping for commercial sites in India — fountains, cascades and reflective pools by Hind Landscape Co.",
    body: [
      "Water features become arrival statements when circulation, planting and lighting work together.",
      "We plan pumps, edges and softscape so commercial sites stay dramatic without high surprise maintenance.",
      "Ideal for campuses, hotels, clubs and estate entries across Delhi NCR and India.",
    ],
    faqs: [
      {
        q: "Do you maintain fountains after install?",
        a: "Yes — water feature checks can be added to landscape AMC scopes.",
      },
    ],
    keywords: (serviceKeywordMap["water-features"] ?? []),
  },
  {
    slug: "trees-plants-exporter",
    title: "Trees and Plants Exporter",
    text: "Quality trees and plants for projects across India.",
    detail:
      "Trees and plants export and supply from Delhi India — specimen trees, palms and project-ready stock.",
    image: "/images/service-trees.jpg",
    seoTitle: "Trees and Plants Exporter in Delhi India",
    seoDescription:
      "Trees and plants exporter in Delhi India — specimen trees, palms and project plant supply by Hind Landscape Co.",
    body: [
      "Good landscapes start with healthy stock sized for the design — not last-minute market substitutions.",
      "We source and supply trees and plants for residential, commercial and hospitality projects across India.",
      "Export and interstate logistics are planned with hardening and transit care so plants arrive ready to establish.",
    ],
    faqs: [
      {
        q: "Do you supply only with full landscape contracts?",
        a: "We supply for our own installs and selected project plant lists. Ask the studio for current stock and lead times.",
      },
    ],
    keywords: (serviceKeywordMap["trees-plants-exporter"] ?? []),
  },
  /* Additional India-relevant scopes (kept after client list) */
  {
    slug: "lawn-care",
    title: "Lawn Care & Maintenance",
    text: "Healthy lawns, green spaces, always looking their best.",
    detail:
      "Mowing, feeding and seasonal care that keep the lawn dense, even and green without turning your weekends into chores.",
    image: "/images/service-lawn.jpg",
    seoTitle: "Lawn Care & Maintenance Services in Delhi NCR & India",
    seoDescription:
      "Professional lawn care, mowing, feeding and seasonal maintenance for homes and commercial properties in Delhi NCR and India.",
    body: [
      "Indian lawns struggle with heat stress, uneven watering and monsoon growth spurts. A fixed care calendar keeps turf dense and even.",
      "Our lawn programmes cover mowing height, feeding, aeration where needed, edge cleaning and seasonal resets.",
      "Ideal for villas, farmhouses, society common areas and hospitality lawns that must look ready every week.",
    ],
    faqs: [
      {
        q: "Which grass types do you work with?",
        a: "We advise based on light, water and use — including common warm-season lawns used across North India.",
      },
      {
        q: "Is lawn AMC available?",
        a: "Yes. Scheduled visits keep mowing, feeding and seasonal tasks on track.",
      },
    ],
    keywords: (serviceKeywordMap["lawn-care"] ?? []),
  },
  {
    slug: "farmhouse-landscaping",
    title: "Farmhouse Landscaping",
    text: "Estate-scale gardens for farmhouses and weekend homes.",
    detail: "Driveway avenues, lawns, orchard edges, seating courts and lighting for farmhouse properties.",
    image: "/images/work-farmhouse.jpg",
    seoTitle: "Farmhouse Landscaping Delhi NCR | Estate Garden Design",
    seoDescription:
      "Farmhouse landscaping in Delhi NCR — driveways, lawns, orchard edges, outdoor living and lighting for weekend homes.",
    body: [
      "Farmhouses need landscapes that feel generous yet maintainable when owners visit on weekends.",
      "We plan arrival avenues, lawns, water-wise beds, outdoor kitchen surrounds and soft night lighting.",
    ],
    faqs: [
      {
        q: "Do you landscape farmhouses outside Delhi?",
        a: "Yes across NCR and selected North India locations where crew logistics work.",
      },
    ],
    keywords: (serviceKeywordMap["farmhouse-landscaping"] ?? []),
  },
  {
    slug: "seasonal-cleanup",
    title: "Seasonal Cleanups",
    text: "Keep your garden fresh all year round.",
    detail:
      "Leaf falls, spring tidy-ups and end-of-season resets so the garden never looks forgotten between visits.",
    image: "/images/service-cleanup.jpg",
    seoTitle: "Seasonal Garden Cleanup Services | Leaf & Monsoon Reset India",
    seoDescription:
      "Seasonal garden cleanups, leaf removal, monsoon recovery and winter prep for homes and commercial landscapes in India.",
    body: [
      "Seasons change fast in North India — leaf fall, monsoon weeds and summer stress all need planned resets.",
      "Cleanup visits clear debris, edge beds, refresh mulch and prep lawns for the next growth cycle.",
    ],
    faqs: [
      {
        q: "How often should seasonal cleanup happen?",
        a: "Most Delhi NCR gardens benefit from major resets around monsoon and late winter, plus lighter visits as needed.",
      },
    ],
    keywords: (serviceKeywordMap["seasonal-cleanup"] ?? []),
  },
  {
    slug: "balcony-garden",
    title: "Balcony Garden",
    text: "Compact greening for apartments and small outdoor edges.",
    detail:
      "Balcony and small-space gardens with planters, privacy screens and light irrigation for Delhi NCR apartments.",
    image: "/images/service-design.jpg",
    seoTitle: "Balcony Garden Design Services in Delhi NCR & India",
    seoDescription:
      "Balcony garden design services in Delhi NCR and India — planters, privacy planting and compact outdoor greening by Hind Landscape Co.",
    body: [
      "Balcony gardens need lightweight mixes, wind-safe planters and plants that tolerate reflected heat.",
      "We design compact layouts for herbs, flowering pots and privacy screens without overloading the slab.",
      "Ideal for Delhi NCR apartments seeking green outlooks without a full terrace rebuild.",
    ],
    faqs: [
      {
        q: "How much weight can a balcony take?",
        a: "We keep planter sizes and soil mixes conservative and flag structural limits before install.",
      },
    ],
    keywords: (serviceKeywordMap["balcony-garden"] ?? []),
  },
  {
    slug: "society-landscaping",
    title: "Society & Apartment Landscaping",
    text: "Common areas, lawns and AMC for residential societies.",
    detail:
      "Society and apartment complex landscaping — entry gardens, lawns, play edges and maintenance AMC across Delhi NCR.",
    image: "/images/work-maintenance.jpg",
    seoTitle: "Society Landscaping and Apartment Complex AMC in Delhi NCR",
    seoDescription:
      "Society landscaping and apartment complex AMC in Delhi NCR — common lawns, entry gardens and scheduled maintenance by Hind Landscape Co.",
    body: [
      "Society landscapes must look presentable every week with clear crew access and resident-safe materials.",
      "We scope entry courts, lawns, hedge lines, irrigation checks and seasonal resets for RWAs and facility teams.",
      "AMC contracts include visit calendars and named plant replacement rules so common areas stay handover-ready.",
    ],
    faqs: [
      {
        q: "Do you work with RWAs and facility managers?",
        a: "Yes. Quotes and AMC scopes are written for society committees and facility teams.",
      },
    ],
    keywords: (serviceKeywordMap["society-landscaping"] ?? []),
  },
  {
    slug: "landscape-architecture",
    title: "Landscape Architecture",
    text: "Master plans and design direction for larger sites.",
    detail:
      "Landscape architecture and garden design for campuses, estates and commercial outdoor master plans across India.",
    image: "/images/service-design.jpg",
    seoTitle: "Landscape Architect and Garden Designer in Delhi NCR India",
    seoDescription:
      "Landscape architect and garden designer in Delhi NCR and India — outdoor master plans, planting design and site planning by Hind Landscape Co.",
    body: [
      "Landscape architecture connects circulation, planting, water and light into one outdoor plan.",
      "The Hind studio prepares layouts and material direction for architects, developers and homeowners.",
      "From villa gardens to campus master plans, design stays practical for Indian climate and construction reality.",
    ],
    faqs: [
      {
        q: "Do you provide drawings for tender?",
        a: "Yes — layout drawings, planting schedules and scope notes can be prepared for tender and site teams.",
      },
    ],
    keywords: (serviceKeywordMap["landscape-architecture"] ?? []),
  },
];

/** First 12 = client-priority commercial scopes (exact SEO titles in seoTitle). */
export const CLIENT_SERVICE_COUNT = 12;

export function getClientServices() {
  return services.slice(0, CLIENT_SERVICE_COUNT);
}

export function getExtraServices() {
  return services.slice(CLIENT_SERVICE_COUNT);
}
export const features = [
  {
    icon: "/images/icon-design.png",
    title: "Site-Specific Design",
    text: "Plans built around your light, soil and how you use the space",
  },
  {
    icon: "/images/icon-install.png",
    title: "Clean Installation",
    text: "On-time delivery, zero damage to property or neighbours",
  },
  {
    icon: "/images/icon-maintain.png",
    title: "AMC After Handover",
    text: "Scheduled care so gardens stay the way they looked on Day 1",
  },
  {
    icon: "/images/icon-eco.png",
    title: "Climate-Aware Planting",
    text: "Species and irrigation suited to Delhi NCR heat, dust and monsoon",
  },
] as const;

export const stats = [
  { icon: "/images/icon-projects.png", value: 150, suffix: "+", label: "Projects Completed" },
  { icon: "/images/icon-clients.png", value: 100, suffix: "%", label: "Satisfied Clients" },
  { icon: "/images/icon-years.png", value: 15, suffix: "+", label: "Years of Excellence" },
] as const;

export const reasons = [
  {
    icon: "/images/icon-team.png",
    title: "Expert Team",
    text: "Skilled & Professional",
  },
  {
    icon: "/images/icon-materials.png",
    title: "Quality Materials",
    text: "Long Lasting Results",
  },
  {
    icon: "/images/icon-time.png",
    title: "On-Time Delivery",
    text: "We Value Your Time",
  },
] as const;

export const works = [
  { src: "/images/work-hotel.jpg", alt: "Hotel gardens at dusk with warm outdoor lighting" },
  { src: "/images/work-farmhouse.jpg", alt: "Farmhouse garden path with layered planting" },
  { src: "/images/work-landscape.jpg", alt: "Landscape design with waterfall and stonework" },
  { src: "/images/work-maintenance.jpg", alt: "Garden maintenance team planting seasonal beds" },
] as const;

export const testimonials = [
  {
    quote:
      "We had two other landscapers quote before Hind Landscape Co.. Both sent vague proposals with no plant names and left us guessing on budget. Hind Landscape Co. visited, walked us through a clear zone-wise plan, and delivered exactly on time. Two monsoons later the garden still looks like handover day.",
    name: "Rajan Kapoor",
    place: "Home garden, Vasant Kunj, New Delhi",
  },
  {
    quote:
      "Our Chattarpur farmhouse needed a complete overhaul — cracked paths, bare patches, zero lighting. The team phased the work over 12 weeks without blocking driveway access even once. They flagged a drainage issue before it became a problem. The entrance avenue is the first thing every guest mentions.",
    name: "Sunita Mehrotra",
    place: "Farmhouse, Chattarpur, Delhi NCR",
  },
  {
    quote:
      "We use Hind Landscape Co. for quarterly maintenance across two South Delhi properties. Same crew, same date each visit. They send a brief note after each session and replaced a failing hedge section last March before we even noticed the problem. Exactly what good maintenance should feel like.",
    name: "Deepak Srivastava",
    place: "Residential properties, South Delhi",
  },
] as const;

export const pages = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blogs" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
