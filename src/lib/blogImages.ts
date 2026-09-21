import type { BlogPost } from "@/content/blog/posts";

const serviceImages: Record<string, string> = {
  "softscape-horticulture":     "/images/service-design.jpg",
  "lawn-care":                  "/images/service-lawn.jpg",
  "trees-plants-exporter":      "/images/service-trees.jpg",
  "irrigation":                 "/images/service-irrigation.jpg",
  "hardscaping":                "/images/service-hardscape.jpg",
  "lighting":                   "/images/service-lighting.jpg",
  "seasonal-cleanup":           "/images/service-cleanup.jpg",
  "terrace-garden":             "/images/gallery-path.jpg",
  "vertical-garden":            "/images/gallery-leaf-ss.jpg",
  "landscape-maintenance-amc":  "/images/work-maintenance.jpg",
  "farmhouse-landscaping":      "/images/work-farmhouse.jpg",
  "terrarium-paludarium":       "/images/service-trees.jpg",
  "indoor-plantation":          "/images/service-design.jpg",
  "swimming-pools":             "/images/work-landscape.jpg",
  "water-features":             "/images/work-landscape.jpg",
  "balcony-garden":             "/images/service-design.jpg",
  "society-landscaping":        "/images/work-maintenance.jpg",
  "landscape-architecture":     "/images/service-design.jpg",
};

const categoryImages: Record<string, string> = {
  "Delhi NCR Guides": "/images/hero.jpg",
  "Design":           "/images/service-design.jpg",
  "Lawn Care":        "/images/service-lawn.jpg",
  "Irrigation":       "/images/service-irrigation.jpg",
  "Maintenance":      "/images/work-maintenance.jpg",
  "Cost & Planning":  "/images/gallery-path.jpg",
  "Commercial":       "/images/work-hotel.jpg",
};

const locationImages: Record<string, string> = {
  "delhi":     "/images/gallery-flowers.jpg",
  "gurugram":  "/images/service-hardscape.jpg",
  "noida":     "/images/gallery-path.jpg",
  "faridabad": "/images/service-lawn.jpg",
  "delhi-ncr": "/images/hero.jpg",
};

// Pool of images to cycle through when there is no specific match
const fallbackPool = [
  "/images/service-design.jpg",
  "/images/gallery-path.jpg",
  "/images/service-lawn.jpg",
  "/images/service-hardscape.jpg",
  "/images/gallery-flowers.jpg",
  "/images/service-lighting.jpg",
  "/images/work-hotel.jpg",
  "/images/work-farmhouse.jpg",
  "/images/service-trees.jpg",
  "/images/service-irrigation.jpg",
  "/images/service-cleanup.jpg",
  "/images/gallery-leaf-ss.jpg",
];

export function getBlogCoverImage(post: BlogPost): string {
  if (post.serviceSlug && serviceImages[post.serviceSlug])  return serviceImages[post.serviceSlug];
  if (post.locationSlug && locationImages[post.locationSlug]) return locationImages[post.locationSlug];
  if (categoryImages[post.category]) return categoryImages[post.category];
  // stable fallback by hashing the slug
  const hash = post.slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return fallbackPool[hash % fallbackPool.length];
}
