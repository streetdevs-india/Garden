export type LocationPage = {
  slug: string;
  name: string;
  state: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
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
};

const seeds: CitySeed[] = [
  // Delhi NCR core
  { slug: "delhi-ncr", name: "Delhi NCR", state: "Delhi NCR", primary: true, climate: "heat, dust, monsoon and winter fog" },
  { slug: "delhi", name: "Delhi", state: "Delhi", primary: true, climate: "extreme summers and monsoon bursts" },
  { slug: "gurugram", name: "Gurugram", state: "Haryana", primary: true, climate: "heat, wind and podium logistics" },
  { slug: "noida", name: "Noida", state: "Uttar Pradesh", primary: true, climate: "expressway dust and varied soils" },
  { slug: "faridabad", name: "Faridabad", state: "Haryana", primary: true, climate: "hot summers and dense residential sites" },
  { slug: "greater-noida", name: "Greater Noida", state: "Uttar Pradesh", primary: true, climate: "open plots and new-society landscapes" },
  { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh", primary: true, climate: "urban dust and monsoon drainage needs" },
  // Delhi localities (SEO)
  { slug: "south-delhi", name: "South Delhi", state: "Delhi", locality: true, primary: true, climate: "mature plots, farmhouses and villa gardens" },
  { slug: "vasant-kunj", name: "Vasant Kunj", state: "Delhi", locality: true, climate: "residential gardens and society greens" },
  { slug: "defence-colony", name: "Defence Colony", state: "Delhi", locality: true, climate: "compact premium home gardens" },
  { slug: "chattarpur", name: "Chattarpur", state: "Delhi", locality: true, primary: true, climate: "farmhouse avenues and weekend estates" },
  { slug: "dwarka", name: "Dwarka", state: "Delhi", locality: true, climate: "society lawns and terrace planting" },
  { slug: "rohini", name: "Rohini", state: "Delhi", locality: true, climate: "home gardens and park-facing plots" },
  { slug: "saket", name: "Saket", state: "Delhi", locality: true, climate: "villa courts and balcony greenery" },
  // Gurugram localities
  { slug: "dlf-gurugram", name: "DLF Gurugram", state: "Haryana", locality: true, climate: "villa and society landscaping" },
  { slug: "golf-course-road", name: "Golf Course Road", state: "Haryana", locality: true, climate: "premium residential outdoor spaces" },
  { slug: "sohna-road", name: "Sohna Road", state: "Haryana", locality: true, climate: "new societies and podium planting" },
  // Noida localities
  { slug: "sector-62-noida", name: "Sector 62 Noida", state: "Uttar Pradesh", locality: true, climate: "commercial and residential greens" },
  { slug: "noida-extension", name: "Noida Extension", state: "Uttar Pradesh", locality: true, climate: "new township lawns and parks" },
  // North India
  { slug: "chandigarh", name: "Chandigarh", state: "Chandigarh", climate: "clean lawns and structured planting" },
  { slug: "mohali", name: "Mohali", state: "Punjab", climate: "villa gardens and society greens" },
  { slug: "panchkula", name: "Panchkula", state: "Haryana", climate: "residential gardens and hedges" },
  { slug: "ambala", name: "Ambala", state: "Haryana", climate: "home and institutional landscapes" },
  { slug: "karnal", name: "Karnal", state: "Haryana", climate: "farmhouse and home gardens" },
  { slug: "rohtak", name: "Rohtak", state: "Haryana", climate: "residential outdoor spaces" },
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan", climate: "heat and water-wise planting" },
  { slug: "udaipur", name: "Udaipur", state: "Rajasthan", climate: "villa and hospitality gardens" },
  { slug: "jodhpur", name: "Jodhpur", state: "Rajasthan", climate: "arid-aware landscapes" },
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", climate: "lawn culture and monsoon care" },
  { slug: "kanpur", name: "Kanpur", state: "Uttar Pradesh", climate: "home and campus greens" },
  { slug: "agra", name: "Agra", state: "Uttar Pradesh", climate: "heat-tolerant planting" },
  { slug: "dehradun", name: "Dehradun", state: "Uttarakhand", climate: "hill-edge gardens and lawns" },
  { slug: "shimla", name: "Shimla", state: "Himachal Pradesh", climate: "cool-climate planting" },
  // West
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", climate: "humidity, terrace and podium planting" },
  { slug: "navi-mumbai", name: "Navi Mumbai", state: "Maharashtra", climate: "society and villa gardens" },
  { slug: "thane", name: "Thane", state: "Maharashtra", climate: "residential outdoor spaces" },
  { slug: "pune", name: "Pune", state: "Maharashtra", climate: "villa gardens and campus softscape" },
  { slug: "nagpur", name: "Nagpur", state: "Maharashtra", climate: "heat-aware lawns and hedges" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", climate: "dry heat and irrigation planning" },
  { slug: "surat", name: "Surat", state: "Gujarat", climate: "home and commercial gardens" },
  { slug: "vadodara", name: "Vadodara", state: "Gujarat", climate: "lawn and planting programmes" },
  { slug: "indore", name: "Indore", state: "Madhya Pradesh", climate: "residential landscaping" },
  { slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh", climate: "garden design and lawn care" },
  { slug: "goa", name: "Goa", state: "Goa", climate: "tropical villa and resort gardens" },
  // South
  { slug: "bangalore", name: "Bangalore", state: "Karnataka", climate: "rich planting and lawn culture" },
  { slug: "mysore", name: "Mysore", state: "Karnataka", climate: "heritage gardens and home lawns" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", climate: "heat, rockery and lawn programmes" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", climate: "coastal humidity and terrace gardens" },
  { slug: "coimbatore", name: "Coimbatore", state: "Tamil Nadu", climate: "villa gardens and hedges" },
  { slug: "kochi", name: "Kochi", state: "Kerala", climate: "tropical planting and moisture" },
  { slug: "trivandrum", name: "Trivandrum", state: "Kerala", climate: "lush tropical gardens" },
  { slug: "visakhapatnam", name: "Visakhapatnam", state: "Andhra Pradesh", climate: "coastal residential landscapes" },
  { slug: "vijayawada", name: "Vijayawada", state: "Andhra Pradesh", climate: "home and campus greens" },
  // East & Central
  { slug: "kolkata", name: "Kolkata", state: "West Bengal", climate: "humidity and monsoon-heavy gardens" },
  { slug: "howrah", name: "Howrah", state: "West Bengal", climate: "home gardens and courtyards" },
  { slug: "bhubaneswar", name: "Bhubaneswar", state: "Odisha", climate: "residential and institutional greens" },
  { slug: "patna", name: "Patna", state: "Bihar", climate: "home gardens and lawn care" },
  { slug: "ranchi", name: "Ranchi", state: "Jharkhand", climate: "climate-aware planting" },
  { slug: "raipur", name: "Raipur", state: "Chhattisgarh", climate: "lawn and outdoor living spaces" },
  // Northeast select
  { slug: "guwahati", name: "Guwahati", state: "Assam", climate: "humid planting and drainage" },
];

function buildLocation(seed: CitySeed): LocationPage {
  const region = seed.locality ? `${seed.name}, ${seed.state}` : seed.name;
  const climate = seed.climate ?? "local climate and site conditions";
  return {
    slug: seed.slug,
    name: seed.name,
    state: seed.state,
    primary: seed.primary,
    locality: seed.locality,
    title: `Landscaping Company in ${seed.name} | Garden Design & Maintenance | Hind Landscape Co.`,
    description: `Hind Landscape Co. landscaping in ${region} — garden design, lawn care, irrigation, hardscaping, terrace gardens and maintenance for homes, farmhouses and commercial properties.`,
    intro: `Looking for a landscaping company in ${region}? Hind Landscape Co. designs, builds and maintains outdoor spaces that handle ${climate}. We plan planting, irrigation and upkeep so gardens stay usable — not just photo-ready on handover day.`,
    highlights: [
      `Garden design & planning for ${seed.name} homes and properties`,
      "Lawn care, hedges and seasonal planting",
      "Irrigation, hardscaping and outdoor lighting",
      "Terrace gardens and optional maintenance AMC",
    ],
    faqs: [
      {
        q: `Do you provide landscaping services in ${seed.name}?`,
        a: seed.primary
          ? `Yes. ${seed.name} is in our active service region — we visit sites, quote clearly and execute design-build and maintenance scopes.`
          : `Yes for suitable projects in ${seed.name} and ${seed.state}. Share photos and locality on the quote form so we can confirm mobilisation and timeline.`,
      },
      {
        q: `What landscaping work is popular in ${seed.name}?`,
        a: "Garden design, lawns, terrace planting, irrigation, outdoor lighting, hardscape paths and annual maintenance contracts are the most requested scopes.",
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
