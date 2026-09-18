/** Live NAP — keep identical on Google Business Profile and directories. */
export const business = {
  name: "Hind Landscape Co.",
  shortName: "Hind",
  legalName: "Hind Landscape Co.",
  tagline: "Landscape Architecture & Urban Design",
  contactName: "Ajay Kumar",
  description:
    "Hind Landscape Co. plans, designs and executes landscape master plans for residential, commercial, campus and urban projects across Delhi NCR and India. Speak with Ajay Kumar for a free site visit.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://hindlandscape.co",
  email: "hello@hindlandscape.co",
  phone: "+91 99901 16281",
  phoneTel: "+919990116281",
  whatsapp: "919990116281",
  address: {
    street: "D-51, Abul Fazal Enclave, Jamia Nagar, Okhla",
    locality: "New Delhi",
    region: "Delhi",
    postalCode: "110025",
    country: "IN",
  },
  addressLine:
    "D-51, Abul Fazal Enclave, Jamia Nagar, Okhla, New Delhi, Delhi 110025",
  geo: { lat: 28.5616, lng: 77.2948 },
  hours: "Mo-Sa 08:00-18:00",
  priceRange: "₹₹₹",
  sameAs: [] as string[],
  showreelVideo: "/videos/gwr-showreel.mp4",
  aboutVideo: "/videos/sss-gwr-showreel.mp4",
} as const;

export const proofStats = [
  { value: 30, suffix: "+", decimals: 0, label: "Years of Practice" },
  { value: 500, suffix: "+", decimals: 0, label: "Happy Clients" },
  { value: 120, suffix: "+", decimals: 0, label: "Projects Delivered" },
  { value: 4.9, suffix: "", decimals: 1, label: "Average rating" },
] as const;
