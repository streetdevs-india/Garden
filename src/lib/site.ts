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

export const services: ServiceItem[] = [
  {
    slug: "garden-design",
    title: "Garden Design & Planning",
    text: "Creative designs that match your style and space.",
    detail:
      "We plan every bed, path and view so the garden feels calm, useful and entirely yours — from the first sketch to the planting plan.",
    image: "/images/service-design.jpg",
    seoTitle: "Garden Design & Planning Services in India | Greenly",
    seoDescription:
      "Custom garden design and landscape planning for homes, farmhouses and commercial properties across Delhi NCR and India.",
    body: [
      "Good garden design starts with how you live outdoors — morning light, entry views, kids’ play, evening seating and maintenance reality.",
      "Greenly prepares layouts, planting plans and material directions so installation stays clear for homeowners, architects and site teams.",
      "Whether you need a compact city garden or an estate-scale landscape, we keep the plan practical for Delhi NCR climate and Indian site conditions.",
    ],
    faqs: [
      { q: "Do you provide 2D or 3D garden layouts?", a: "Yes. We share clear layout drawings and planting schedules; 3D views can be included where the scope needs them." },
      { q: "Can design be separate from installation?", a: "Yes. Many clients start with design-only, then continue to build and maintenance with the same team." },
    ],
    keywords: ["garden design India", "landscape planning Delhi", "garden landscape design"],
  },
  {
    slug: "lawn-care",
    title: "Lawn Care & Maintenance",
    text: "Healthy lawns, green spaces, always looking their best.",
    detail:
      "Mowing, feeding and seasonal care that keep the lawn dense, even and green without turning your weekends into chores.",
    image: "/images/service-lawn.jpg",
    seoTitle: "Lawn Care & Maintenance Services | Greenly Landscaping",
    seoDescription:
      "Professional lawn care, mowing, feeding and seasonal maintenance for homes and commercial properties in Delhi NCR and India.",
    body: [
      "Indian lawns struggle with heat stress, uneven watering and monsoon growth spurts. A fixed care calendar keeps turf dense and even.",
      "Our lawn programmes cover mowing height, feeding, aeration where needed, edge cleaning and seasonal resets.",
      "Ideal for villas, farmhouses, society common areas and hospitality lawns that must look ready every week.",
    ],
    faqs: [
      { q: "Which grass types do you work with?", a: "We advise based on light, water and use — including common warm-season lawns used across North India." },
      { q: "Is lawn AMC available?", a: "Yes. Scheduled visits keep mowing, feeding and seasonal tasks on track." },
    ],
    keywords: ["lawn care Delhi", "lawn maintenance India", "garden lawn services"],
  },
  {
    slug: "tree-care",
    title: "Tree & Plant Care",
    text: "Expert care for every plant and tree.",
    detail:
      "Pruning, feeding and health checks that help trees and shrubs stay strong, shaped and safe through every season.",
    image: "/images/service-trees.jpg",
    seoTitle: "Tree & Plant Care Services | Pruning & Health | Greenly",
    seoDescription:
      "Tree pruning, shrub shaping and plant health care for residential and commercial landscapes across Delhi NCR.",
    body: [
      "Trees and shrubs need structured pruning, soil care and pest watch — especially after monsoon and before peak summer.",
      "Greenly shapes hedges, palms and specimen plants so they stay safe near paths, façades and parking.",
      "We also plan replacement and enrichment planting when older beds need a reset.",
    ],
    faqs: [
      { q: "Do you prune large trees?", a: "We handle ornamental and landscape trees within safe site access. Very tall structural work may need specialist climbers we coordinate." },
    ],
    keywords: ["tree care Delhi", "plant pruning services", "hedge maintenance"],
  },
  {
    slug: "irrigation",
    title: "Irrigation Systems",
    text: "Smart watering for a greener tomorrow.",
    detail:
      "Efficient watering that reaches the roots and skips the waste, so beds stay lush even when you are away.",
    image: "/images/service-irrigation.jpg",
    seoTitle: "Garden Irrigation Systems India | Drip & Sprinkler | Greenly",
    seoDescription:
      "Design and installation of drip and sprinkler irrigation systems for gardens, lawns and commercial landscapes in India.",
    body: [
      "Irrigation should match plant zones — lawns, shrubs, pots and trees rarely need the same water schedule.",
      "We design drip, sprinkler and controller setups that reduce waste and keep beds alive through Delhi NCR summers.",
      "Systems are planned with maintenance access so AMC teams can service filters and valves without digging up the garden.",
    ],
    faqs: [
      { q: "Do you install drip irrigation for terrace gardens?", a: "Yes. Terrace and balcony systems are zoned for pots, planters and green walls." },
      { q: "Can irrigation connect to timers?", a: "Yes. Controllers and timers are part of most residential and commercial installs." },
    ],
    keywords: ["irrigation systems India", "drip irrigation garden", "sprinkler installation Delhi"],
  },
  {
    slug: "hardscaping",
    title: "Hardscaping & Patios",
    text: "Pathways, patios and functional outdoor living spaces.",
    detail:
      "Stone, steps and outdoor floors built to last, so the garden is as easy to walk as it is to look at.",
    image: "/images/service-hardscape.jpg",
    seoTitle: "Hardscaping & Patio Construction | Pathways & Outdoor Floors",
    seoDescription:
      "Hardscaping services for patios, pathways, steps and outdoor living areas — durable finishes for Indian weather.",
    body: [
      "Hardscape sets how you move through the garden — entries, dining decks, pool surrounds and quiet seating courts.",
      "We build with drainage, levels and material durability in mind so stone and pavers survive monsoon and heat.",
      "Softscape and lighting are coordinated so the finished outdoor room feels complete, not like separate vendors.",
    ],
    faqs: [
      { q: "What materials do you use?", a: "Natural stone, concrete pavers and site-suitable finishes chosen for slip resistance, colour and maintenance." },
    ],
    keywords: ["hardscaping India", "patio construction Delhi", "garden pathways"],
  },
  {
    slug: "lighting",
    title: "Outdoor Lighting",
    text: "Warm, soft and inviting evenings.",
    detail:
      "Warm, carefully placed light that opens the garden after dusk — safe paths, soft beds and a quieter kind of evening.",
    image: "/images/service-lighting.jpg",
    seoTitle: "Outdoor & Garden Lighting Design | Greenly",
    seoDescription:
      "Landscape lighting for pathways, trees, façades and seating areas — warm, safe and premium evening gardens.",
    body: [
      "Outdoor lighting should guide feet, show planting and avoid glare into windows or neighbours.",
      "We place path lights, uplights and soft wash fixtures so gardens feel usable after sunset.",
      "Wiring and fixture choices consider weather sealing and easy lamp maintenance.",
    ],
    faqs: [
      { q: "Do you use warm LED fixtures?", a: "Yes. Warm white LEDs are preferred for residential and hospitality gardens." },
    ],
    keywords: ["outdoor lighting Delhi", "garden lighting India", "landscape lighting"],
  },
  {
    slug: "seasonal-cleanup",
    title: "Seasonal Cleanups",
    text: "Keep your garden fresh all year round.",
    detail:
      "Leaf falls, spring tidy-ups and end-of-season resets so the garden never looks forgotten between visits.",
    image: "/images/service-cleanup.jpg",
    seoTitle: "Seasonal Garden Cleanup Services | Leaf & Monsoon Reset",
    seoDescription:
      "Seasonal garden cleanups, leaf removal, monsoon recovery and winter prep for homes and commercial landscapes.",
    body: [
      "Seasons change fast in North India — leaf fall, monsoon weeds and summer stress all need planned resets.",
      "Cleanup visits clear debris, edge beds, refresh mulch and prep lawns for the next growth cycle.",
      "Combine cleanup with maintenance AMC for gardens that stay presentable without last-minute panic before guests arrive.",
    ],
    faqs: [
      { q: "How often should seasonal cleanup happen?", a: "Most Delhi NCR gardens benefit from major resets around monsoon and late winter, plus lighter visits as needed." },
    ],
    keywords: ["seasonal garden cleanup", "leaf removal Delhi", "monsoon garden care"],
  },
  {
    slug: "terrace-garden",
    title: "Terrace Garden",
    text: "Green roofs and terrace planting that feel intentional.",
    detail: "Waterproofing-aware terrace gardens with planters, seating greenery and light irrigation for Indian apartments and homes.",
    image: "/images/service-design.jpg",
    seoTitle: "Terrace Garden Design & Installation India | Greenly",
    seoDescription:
      "Terrace garden design for apartments and homes — planters, lightweight soil mixes, irrigation and seating greenery.",
    body: [
      "Terrace gardens must respect waterproofing, load and wind. We plan planter layouts and plant lists that stay healthy without damaging the slab.",
      "Ideal for Delhi NCR apartments seeking privacy screens, herbs, flowering pots and compact seating gardens.",
    ],
    faqs: [
      { q: "Do you coordinate with waterproofing?", a: "We design above finished waterproofing and flag any concerns before planting begins." },
    ],
    keywords: ["terrace garden Delhi", "rooftop garden India", "balcony terrace landscaping"],
  },
  {
    slug: "vertical-garden",
    title: "Vertical Garden & Green Walls",
    text: "Living walls for façades, balconies and indoor atriums.",
    detail: "Vertical gardens and green walls with irrigation and plant mixes suited to Indian light and heat.",
    image: "/images/service-trees.jpg",
    seoTitle: "Vertical Garden & Green Wall Installation | Greenly",
    seoDescription:
      "Green walls and vertical gardens for homes, offices and commercial façades across Delhi NCR and India.",
    body: [
      "Vertical gardens need reliable irrigation and plant species that survive heat and reflected light.",
      "We build modular living walls for balconies, compound walls and lobby atriums with maintenance access in mind.",
    ],
    faqs: [
      { q: "Are green walls high maintenance?", a: "They need scheduled irrigation checks and plant replacement. We offer AMC for living walls we install." },
    ],
    keywords: ["vertical garden Delhi", "green wall India", "living wall installation"],
  },
  {
    slug: "landscape-maintenance-amc",
    title: "Landscape Maintenance AMC",
    text: "Scheduled care so gardens stay handover-ready.",
    detail: "Annual maintenance contracts for lawns, hedges, irrigation checks and seasonal tasks.",
    image: "/images/service-lawn.jpg",
    seoTitle: "Landscape Maintenance AMC Delhi NCR | Garden Care Contracts",
    seoDescription:
      "Landscape maintenance AMC for homes, societies and commercial sites — lawns, hedges, irrigation and seasonal care.",
    body: [
      "AMC keeps gardens consistent after installation — the difference between a photo-day landscape and one that lasts.",
      "Scopes include visit frequency, mowing, pruning, fertiliser windows, irrigation checks and replacement rules.",
    ],
    faqs: [
      { q: "Can AMC cover only lawns?", a: "Yes. We can scope lawn-only or full softscape and irrigation maintenance." },
    ],
    keywords: ["landscape maintenance AMC", "garden maintenance Delhi", "lawn AMC India"],
  },
  {
    slug: "farmhouse-landscaping",
    title: "Farmhouse Landscaping",
    text: "Estate-scale gardens for farmhouses and weekend homes.",
    detail: "Driveway avenues, lawns, orchard edges, seating courts and lighting for farmhouse properties.",
    image: "/images/work-farmhouse.jpg",
    seoTitle: "Farmhouse Landscaping Delhi NCR | Estate Garden Design",
    seoDescription:
      "Farmhouse landscaping in Delhi NCR — driveways, lawns, orchards edges, outdoor living and lighting for weekend homes.",
    body: [
      "Farmhouses need landscapes that feel generous yet maintainable when owners visit on weekends.",
      "We plan arrival avenues, lawns, water-wise beds, outdoor kitchens surrounds and soft night lighting.",
    ],
    faqs: [
      { q: "Do you landscape farmhouses outside Delhi?", a: "Yes across NCR and selected North India locations where crew logistics work." },
    ],
    keywords: ["farmhouse landscaping Delhi", "farmhouse garden design", "estate landscaping NCR"],
  },
];

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
  { icon: "/images/icon-years.png", value: 15, suffix: "+", label: "Years of Experience" },
  { icon: "/images/icon-clients.png", value: 500, suffix: "+", label: "Happy Clients" },
  { icon: "/images/icon-projects.png", value: 30, suffix: "+", label: "Projects Completed" },
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
      "We had two other landscapers quote before Greenly. Both sent vague proposals with no plant names and left us guessing on budget. Greenly visited, walked us through a clear zone-wise plan, and delivered exactly on time. Two monsoons later the garden still looks like handover day.",
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
      "We use Greenly for quarterly maintenance across two South Delhi properties. Same crew, same date each visit. They send a brief note after each session and replaced a failing hedge section last March before we even noticed the problem. Exactly what good maintenance should feel like.",
    name: "Deepak Srivastava",
    place: "Residential properties, South Delhi",
  },
] as const;

export const pages = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
