export type GalleryPhoto = {
  src: string;
  alt: string;
};

/** User-provided project photos — shown first on home + gallery */
export const featuredGalleryPhotos: GalleryPhoto[] = [
  { src: "/images/gallery-patio-lights.png", alt: "Twilight patio with festoon lights and wooden deck seating" },
  { src: "/images/gallery-pavilion-night.png", alt: "Night pavilion with outdoor kitchen and reflecting pools" },
  { src: "/images/gallery-modern-lawn.png", alt: "Modern glass pavilion overlooking a manicured lawn" },
  { src: "/images/gallery-evening-lounge.png", alt: "Evening garden with dining patio and lounge seating" },
  { src: "/images/gallery-garden-cabin.png", alt: "Wooden garden cabin with outdoor lounge and flower beds" },
  { src: "/images/gallery-vertical-garden.png", alt: "Twilight garden path with vertical green wall and deck" },
];

const legacyGalleryPhotos: GalleryPhoto[] = [
  { src: "/images/hero.jpg", alt: "Luxury evening garden with warm lighting" },
  { src: "/images/work-hotel.jpg", alt: "Hotel garden at dusk" },
  { src: "/images/gallery-path.jpg", alt: "Garden pathway under a wooden arbor" },
  { src: "/images/service-hardscape.jpg", alt: "Stone patio with LED step lighting" },
  { src: "/images/work-farmhouse.jpg", alt: "Farmhouse arrival avenue" },
  { src: "/images/gallery-flowers.jpg", alt: "Seasonal flower border beside a lawn" },
  { src: "/images/service-lighting.jpg", alt: "Bollard lights on garden path at dusk" },
  { src: "/images/service-design.jpg", alt: "Modern patio with pergola and seating" },
  { src: "/images/service-lawn.jpg", alt: "Freshly mowed bright green lawn" },
  { src: "/images/gallery-leaf-ss.jpg", alt: "Garden shrubs in front of wooden screen" },
  { src: "/images/service-trees.jpg", alt: "Mature trees and ornamental garden border" },
  { src: "/images/service-irrigation.jpg", alt: "Sprinkler head watering a garden lawn" },
  { src: "/images/service-cleanup.jpg", alt: "Autumn leaf removal from garden beds" },
  { src: "/images/work-landscape.jpg", alt: "Landscape design with water feature" },
  { src: "/images/work-maintenance.jpg", alt: "Garden maintenance planting seasonal beds" },
];

export const galleryPhotos: GalleryPhoto[] = [
  ...featuredGalleryPhotos,
  ...legacyGalleryPhotos,
];

/** Home “Our Work” — first 4 user photos only */
export const homeGalleryPhotos = featuredGalleryPhotos.slice(0, 4);
