import { locationSearchKeywords } from "@/lib/seoKeywords";

export type LocationPage = {
  slug: string;
  name: string;
  state: string;
  /** Browser/SERP title — client “After Click Title” when provided */
  title: string;
  /** On-page H1 — usually same as client After Click Title */
  h1: string;
  description: string;
  intro: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  primary?: boolean;
  locality?: boolean;
};

type CitySeed = {
  slug: string;
  name: string;
  state: string;
  primary?: boolean;
  locality?: boolean;
  climate?: string;
  /** Exact client After Click Title when specified */
  seoTitle?: string;
};

/** Client-priority location SEO titles (exact phrases). */
const CLIENT_LOCATION_TITLES: Record<string, string> = {
  "delhi-ncr": "Landscaping Company in Delhi NCR",
  delhi: "Landscaping Company in Delhi",
  gurgaon: "Landscaping Company in Gurgaon",
  gurugram: "Landscaping Company in Gurugram",
  noida: "Landscaping Company in Noida",
  faridabad: "Landscaping Company in Faridabad",
  ghaziabad: "Landscaping Company in Ghaziabad",
  "ludhiana-punjab": "Landscaping Company in Ludhiana Punjab",
  agra: "Landscaping Company in Agra",
  mathura: "Landscaping Company in Mathura",
  vrindavan: "Landscaping Company in Vrindavan",
  mumbai: "Landscaping Company in Mumbai",
  bengaluru: "Landscaping Company in Bengaluru",
  bangalore: "Landscaping Company in Bengaluru",
  hyderabad: "Landscaping Company in Hyderabad",
  jaipur: "Landscaping Company in Jaipur",
  pune: "Landscaping Company in Pune",
  chennai: "Landscaping Company in Chennai",
  goa: "Landscaping Company in Goa",
};

const seeds: CitySeed[] = [
  // Client priority cities first
  { slug: "delhi-ncr", name: "Delhi NCR", state: "Delhi NCR", primary: true, climate: "heat, dust, monsoon and winter fog" },
  { slug: "delhi", name: "Delhi", state: "Delhi", primary: true, climate: "extreme summers and monsoon bursts" },
  { slug: "gurgaon", name: "Gurgaon", state: "Haryana", primary: true, climate: "heat, wind and podium logistics" },
  { slug: "gurugram", name: "Gurugram", state: "Haryana", primary: true, climate: "heat, wind and podium logistics" },
  { slug: "noida", name: "Noida", state: "Uttar Pradesh", primary: true, climate: "expressway dust and varied soils" },
  { slug: "faridabad", name: "Faridabad", state: "Haryana", primary: true, climate: "hot summers and dense residential sites" },
  { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh", primary: true, climate: "urban dust and monsoon drainage needs" },
  { slug: "ludhiana-punjab", name: "Ludhiana", state: "Punjab", primary: true, climate: "north Indian heat and monsoon" },
  { slug: "agra", name: "Agra", state: "Uttar Pradesh", primary: true, climate: "heat-tolerant planting and hospitality gardens" },
  { slug: "mathura", name: "Mathura", state: "Uttar Pradesh", primary: true, climate: "heat and pilgrimage-city outdoor spaces" },
  { slug: "vrindavan", name: "Vrindavan", state: "Uttar Pradesh", primary: true, climate: "temple towns and hospitality gardens" },
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", primary: true, climate: "humidity, terrace and podium planting" },
  { slug: "bengaluru", name: "Bengaluru", state: "Karnataka", primary: true, climate: "rich planting and lawn culture" },
  { slug: "bangalore", name: "Bangalore", state: "Karnataka", primary: true, climate: "rich planting and lawn culture" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", primary: true, climate: "heat, rockery and lawn programmes" },
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan", primary: true, climate: "heat and water-wise planting" },
  { slug: "pune", name: "Pune", state: "Maharashtra", primary: true, climate: "villa gardens and campus softscape" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", primary: true, climate: "coastal humidity and terrace gardens" },
  { slug: "goa", name: "Goa", state: "Goa", primary: true, climate: "tropical villa and resort gardens" },
  // Delhi NCR extended
  { slug: "greater-noida", name: "Greater Noida", state: "Uttar Pradesh", primary: true, climate: "open plots and new-society landscapes" },
  { slug: "south-delhi", name: "South Delhi", state: "Delhi", locality: true, primary: true, climate: "mature plots, farmhouses and villa gardens" },
  { slug: "vasant-kunj", name: "Vasant Kunj", state: "Delhi", locality: true, climate: "residential gardens and society greens" },
  { slug: "defence-colony", name: "Defence Colony", state: "Delhi", locality: true, climate: "compact premium home gardens" },
  { slug: "chattarpur", name: "Chattarpur", state: "Delhi", locality: true, primary: true, climate: "farmhouse avenues and weekend estates" },
  { slug: "dwarka", name: "Dwarka", state: "Delhi", locality: true, climate: "society lawns and terrace planting" },
  { slug: "rohini", name: "Rohini", state: "Delhi", locality: true, climate: "home gardens and park-facing plots" },
  { slug: "saket", name: "Saket", state: "Delhi", locality: true, climate: "villa courts and balcony greenery" },
  { slug: "dlf-gurugram", name: "DLF Gurugram", state: "Haryana", locality: true, climate: "villa and society landscaping" },
  { slug: "golf-course-road", name: "Golf Course Road", state: "Haryana", locality: true, climate: "premium residential outdoor spaces" },
  { slug: "sohna-road", name: "Sohna Road", state: "Haryana", locality: true, climate: "new societies and podium planting" },
  { slug: "sector-62-noida", name: "Sector 62 Noida", state: "Uttar Pradesh", locality: true, climate: "commercial and residential greens" },
  { slug: "noida-extension", name: "Noida Extension", state: "Uttar Pradesh", locality: true, climate: "new township lawns and parks" },
  // Pan-India coverage
  { slug: "chandigarh", name: "Chandigarh", state: "Chandigarh", climate: "clean lawns and structured planting" },
  { slug: "mohali", name: "Mohali", state: "Punjab", climate: "villa gardens and society greens" },
  { slug: "panchkula", name: "Panchkula", state: "Haryana", climate: "residential gardens and hedges" },
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", climate: "lawn culture and monsoon care" },
  { slug: "dehradun", name: "Dehradun", state: "Uttarakhand", climate: "hill-edge gardens and lawns" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", climate: "dry heat and irrigation planning" },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal", climate: "humidity and monsoon-heavy gardens" },
  { slug: "indore", name: "Indore", state: "Madhya Pradesh", climate: "residential landscaping" },
  { slug: "navi-mumbai", name: "Navi Mumbai", state: "Maharashtra", climate: "society and villa gardens" },
  { slug: "thane", name: "Thane", state: "Maharashtra", climate: "residential outdoor spaces" },
];

function buildLocation(seed: CitySeed): LocationPage {
  const region = seed.locality ? `${seed.name}, ${seed.state}` : seed.name;
  const climate = seed.climate ?? "local climate and site conditions";
  const h1 =
    seed.seoTitle ||
    CLIENT_LOCATION_TITLES[seed.slug] ||
    `Landscaping Company in ${seed.name}`;
  const title = h1;
  return {
    slug: seed.slug,
    name: seed.name,
    state: seed.state,
    primary: seed.primary,
    locality: seed.locality,
    h1,
    title,
    description:
      seed.slug === "delhi" || seed.slug === "delhi-ncr"
        ? `Best landscaping company in Delhi — Hind Landscape Co. in Okhla. ${h1}: garden design, hardscape, terrace gardens and AMC across ${region}.`
        : seed.slug === "noida" || seed.slug === "greater-noida"
          ? `Best landscaping company in Noida — Hind Landscape Co. ${h1}: society greens, villa gardens, hardscape and AMC in ${region}.`
          : `${h1} — Hind Landscape Co. delivers garden design, hardscape, softscape, irrigation, lighting, terrace gardens and maintenance AMC for homes, hotels and commercial sites in ${region}, India.`,
    intro: `Searching for a ${h1.toLowerCase()}? Hind Landscape Co. designs, builds and maintains outdoor spaces that handle ${climate}. Named plant lists, clear scopes and optional AMC — so landscapes stay usable long after handover.`,
    highlights: [
      `${h1} for homes, societies and commercial sites`,
      "Hardscape, softscape, irrigation and outdoor lighting",
      "Terrace, podium and vertical garden expertise",
      "Landscape maintenance AMC after handover",
      "Free site visit for serious Delhi NCR and pan-India enquiries",
    ],
    keywords: locationSearchKeywords(seed.name, seed.state, h1),
    faqs: [
      {
        q: `Do you provide landscaping services in ${seed.name}?`,
        a: seed.primary
          ? `Yes. ${seed.name} is a priority service area — we visit sites, quote clearly and execute design-build and maintenance scopes.`
          : `Yes for suitable projects in ${seed.name} and ${seed.state}. Share photos and locality on the quote form so we can confirm mobilisation and timeline.`,
      },
      {
        q: `What does a landscaping company in ${seed.name} typically deliver?`,
        a: "Garden design, softscape and hardscape, irrigation, outdoor lighting, terrace/podium gardens and annual maintenance contracts are the most requested scopes.",
      },
      {
        q: "Is the site visit free?",
        a: "Yes for serious residential and commercial enquiries. We review your brief and schedule a free assessment where logistics allow.",
      },
    ],
  };
}

export const locations: LocationPage[] = seeds.map(buildLocation);

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export function primaryLocations() {
  return locations.filter((l) => l.primary && !l.locality);
}

export function locationsByState() {
  const map = new Map<string, LocationPage[]>();
  for (const loc of locations) {
    const list = map.get(loc.state) ?? [];
    list.push(loc);
    map.set(loc.state, list);
  }
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}

export const indianStatesCovered = [...new Set(locations.map((l) => l.state))].sort();
