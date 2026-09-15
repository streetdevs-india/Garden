/** Live NAP — keep identical on Google Business Profile and directories. */
export const business = {
  name: "Greenly",
  legalName: "Greenly Landscaping & Gardening",
  tagline: "Landscaping & Gardening",
  contactName: "Mohd Anas",
  description:
    "Greenly designs, builds and maintains gardens, lawns and outdoor spaces for homes, farmhouses, hotels and commercial properties across Delhi NCR and India. Speak with Mohd Anas for a free site visit.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://greenly.garden",
  email: "hello@greenly.garden",
  phone: "+91 97161 77107",
  phoneTel: "+919716177107",
  whatsapp: "919716177107",
  address: {
    street: "By appointment · Delhi NCR",
    locality: "New Delhi",
    region: "Delhi",
    postalCode: "110001",
    country: "IN",
  },
  geo: { lat: 28.6139, lng: 77.209 },
  hours: "Mo-Sa 08:00-18:00",
  priceRange: "₹₹₹",
  sameAs: [] as string[],
} as const;

export const proofStats = [
  { value: 15, suffix: "+", decimals: 0, label: "Years of Experience" },
  { value: 500, suffix: "+", decimals: 0, label: "Happy Clients" },
  { value: 30, suffix: "+", decimals: 0, label: "Projects Completed" },
  { value: 4.9, suffix: "", decimals: 1, label: "Average rating" },
] as const;
