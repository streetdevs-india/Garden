/** Shared copy for conversion / psychology sections — static, no CMS. */

export const trustPoints = [
  { value: "150+", label: "Projects completed" },
  { value: "100%", label: "Satisfied clients" },
  { value: "15+", label: "Years of excellence" },
  { value: "India", label: "Pan-India project presence" },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Consultation & Discovery",
    text: "Every project begins with a conversation. We understand your vision, assess the site, evaluate conditions and align on objectives before a single line is drawn.",
  },
  {
    step: "02",
    title: "Concept Design & Planning",
    text: "Our design team translates your vision into concepts, mood boards, plant palettes, materials and layout plans — a clear picture of what your space will become.",
  },
  {
    step: "03",
    title: "Approval & Refinement",
    text: "We walk you through the design, listen to feedback and refine until every detail is right. Your satisfaction with the plan comes before execution.",
  },
  {
    step: "04",
    title: "Installation & Execution",
    text: "Skilled on-ground teams execute with precision — from soil preparation and plant sourcing to hardscape construction and irrigation setup.",
  },
  {
    step: "05",
    title: "Handover & Maintenance",
    text: "We provide handover documentation, care guidance and ongoing AMC services so your landscape thrives for years to come.",
  },
] as const;

export const painPoints = [
  {
    title: "Gardens that look unfinished",
    text: "Sparse beds, paths that lead nowhere and evenings too dark to enjoy — common when scope wasn't written clearly.",
  },
  {
    title: "Maintenance without a plan",
    text: "Lawns brown in May, monsoon weeds take over and the garden looks forgotten. It doesn't have to be this way.",
  },
  {
    title: "Quotations impossible to compare",
    text: "No plant names, no zone breakdown, no exclusions. Vague proposals always hide surprises after work starts.",
  },
] as const;

export const promises = [
  {
    title: "Named plant lists, not guesswork",
    text: "Every proposal includes species names, quantities and zone-wise cost — so you can compare quotations properly.",
  },
  {
    title: "NCR climate in every plan",
    text: "Delhi summers, monsoon bursts and winter fog are built into plant selection, drainage and irrigation scheduling.",
  },
  {
    title: "Maintenance that holds the standard",
    text: "Optional AMC: scheduled lawn, hedge and irrigation visits so the garden looks the same in month 18 as at handover.",
  },
] as const;

export const homeFaqs = [
  {
    q: "How long does a typical garden project take?",
    a: "Small terrace and balcony projects can complete in 3–7 days. Full villa or farmhouse landscapes are typically phased over 6–14 weeks. We share a timeline with the first proposal.",
  },
  {
    q: "Do you work outside Delhi NCR?",
    a: "Delhi NCR is our primary region. We also mobilise for suitable residential and commercial projects elsewhere in India — tell us your location and scope.",
  },
  {
    q: "What does a maintenance AMC include?",
    a: "Scheduled lawn mowing, hedge trimming, fertiliser application, irrigation checks and seasonal bed resets. Scope and visit frequency are fixed in writing.",
  },
  {
    q: "Is the site visit and quote free?",
    a: "Yes. Share photos and your locality on the quote form. We review within two business days and arrange a site visit at no charge.",
  },
] as const;

export const audienceCards = [
  {
    title: "Homes & villas",
    label: "Everyday living",
    text: "Front gardens, backyard dining, kids’ lawns and evening seating — planned around how your family actually uses the house, not a show plot.",
    href: "/residential-landscaping",
  },
  {
    title: "Farmhouses",
    label: "Weekend estates",
    text: "Arrival avenues, orchard edges, outdoor kitchens and lawns that stay photo-ready between visits — generous, but still maintainable.",
    href: "/services/farmhouse-landscaping",
  },
  {
    title: "Hotels & campuses",
    label: "Hospitality & institutions",
    text: "Arrival courts, seasonal colour, night lighting and AMC-ready upkeep so guests and staff always see a finished property.",
    href: "/commercial-landscaping",
  },
  {
    title: "Terrace & balconies",
    label: "Apartments & rooftops",
    text: "Lightweight greenery that respects waterproofing, slab load and wind — planters, seating gardens and irrigation for high-rise living.",
    href: "/services/terrace-garden",
  },
] as const;

export const aboutValues = [
  {
    icon: "clipboard" as const,
    title: "Integrity",
    text: "We say what we mean and deliver what we promise. Our clients trust us completely — and we take that trust seriously in everything we do.",
  },
  {
    icon: "award" as const,
    title: "Excellence",
    text: "Good is never good enough. We pursue a higher standard in every design decision, installation detail and client interaction.",
  },
  {
    icon: "team" as const,
    title: "Partnership",
    text: "We do not work for our clients — we work with them. Your goals become our goals. That collaborative spirit defines every project.",
  },
  {
    icon: "leaf" as const,
    title: "Sustainability",
    text: "We design landscapes that are beautiful today and responsible tomorrow. Environmental stewardship is embedded into our practice.",
  },
  {
    icon: "bolt" as const,
    title: "Innovation",
    text: "We continuously explore new techniques, materials and design approaches to deliver solutions that are fresh, relevant and future-ready.",
  },
] as const;

export const quoteAssurances = [
  "No-obligation — a visit and quote cost nothing",
  "Response within 2 working days",
  "Residential, farmhouse and commercial scopes welcome",
  "Delhi NCR primary · pan-India for suitable projects",
] as const;
