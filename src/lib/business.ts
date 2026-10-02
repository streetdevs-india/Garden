/** Live NAP — keep identical on Google Business Profile and directories. */
export const business = {
  name: "Hind Landscape Co.",
  shortName: "Hind",
  legalName: "Hind Landscape Co.",
  tagline: "Rooted in Nature. Driven by Design.",
  description:
    "Hind Landscape Co. is India's trusted landscape design and development company — residential and commercial landscaping, rooftop gardens, vertical green walls, water features and maintenance AMC across India. Call +91 99901 16281.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://hindlandscaping.com",
  email: "hindlandscaping@gmail.com",
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
  aboutVideo: "/videos/story.mp4",
  storyVideo: "/videos/story.mp4",
} as const;

export const proofStats = [
  { value: 150, suffix: "+", decimals: 0, label: "Projects Completed" },
  { value: 100, suffix: "%", decimals: 0, label: "Satisfied Clients" },
  { value: 15, suffix: "+", decimals: 0, label: "Years of Excellence" },
  { value: 1, suffix: "", decimals: 0, label: "Pan-India Presence" },
] as const;
