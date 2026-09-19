/** Shared copy for conversion / psychology sections — static, no CMS. */

export const trustPoints = [
  { value: "30+",  label: "Years of landscape practice"      },
  { value: "500+", label: "Homes, farms & commercial sites"  },
  { value: "4h",   label: "Typical first reply window"       },
  { value: "NCR",  label: "Delhi NCR · pan-India scopes"     },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Free site visit",
    text: "We visit, measure, photograph and discuss how you use the space — light, drainage, access and evening habits.",
  },
  {
    step: "02",
    title: "Written design & quote",
    text: "You receive named plant lists, zone-wise irrigation scope, material options and a clear line-by-line cost. No guessing.",
  },
  {
    step: "03",
    title: "Phased installation",
    text: "Hardscape first, then softscape — work phased so your property access, neighbours and existing plants stay protected.",
  },
  {
    step: "04",
    title: "Settled handover + AMC",
    text: "We walk you through the finished garden, hand over care notes and offer optional maintenance AMC from the first month.",
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
    icon: "leaf" as const,
    title: "Listen before we sketch",
    text: "Light, soil, how you move outdoors and what you want evenings to feel like. We design for your reality, not a show garden.",
  },
  {
    icon: "clipboard" as const,
    title: "Materials that last beyond handover",
    text: "Plant species, hardscape finishes and irrigation components chosen for Indian heat, monsoon and long-term maintenance ease.",
  },
  {
    icon: "award" as const,
    title: "Clean site, clean handover",
    text: "Crews respect your home and neighbours. Handover includes a walkthrough, written care notes and a final snag check.",
  },
] as const;

export const quoteAssurances = [
  "No-obligation — a visit and quote cost nothing",
  "Response within 2 working days",
  "Residential, farmhouse and commercial scopes welcome",
  "Delhi NCR primary · pan-India for suitable projects",
] as const;
