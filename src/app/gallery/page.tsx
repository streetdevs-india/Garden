import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeUp, SplitText } from "@/components/Animate";
import { MidCta } from "@/components/PageSections";
import { GalleryReveal } from "@/components/GalleryReveal";
import { galleryPhotos } from "@/lib/gallery";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery | Beautiful Green Spaces by Hind Landscape Co.",
  description:
    "Browse Hind Landscape Co. landscaping gallery — hotel gardens, farmhouses, paths, lighting and planted courts across Delhi NCR and India.",
  path: "/gallery",
});

const categories = [
  { label: "Hotel & hospitality", href: "/hotel-landscaping" },
  { label: "Farmhouse gardens", href: "/services/farmhouse-landscaping" },
  { label: "Hardscape & patios", href: "/services/hardscaping" },
  { label: "Outdoor lighting", href: "/services/lighting" },
  { label: "Lawn care", href: "/services/lawn-care" },
];

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero" style={{ "--hero-img": "url('/images/gallery-right.jpg')" } as React.CSSProperties}>
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Gallery" }]} />
          <div className="eyebrow">Gallery</div>
          <SplitText as="h1" text="Designing beautiful green spaces" />
          <p>Hotels, farmhouses, planted courts and the quieter work of keeping a garden well — full frames, nothing cropped away.</p>
          <div className="hero-cta-row">
            <Link href="/quote" className="btn btn-green btn-pulse">Start your garden <Arrow /></Link>
            <Link href="/contact" className="btn btn-outline">Ask about a project</Link>
          </div>
        </div>
      </section>

      <div className="wrap" style={{ padding: "28px 0 8px" }}>
        <FadeUp>
          <div className="areas-row">
            {categories.map((c) => (
              <Link key={c.label} href={c.href} className="area-chip">
                {c.label}
              </Link>
            ))}
          </div>
        </FadeUp>
      </div>

      <section className="gal-page">
        <div className="wrap wrap-wide">
          <GalleryReveal items={galleryPhotos} />
        </div>
      </section>

      <MidCta
        title="Like what you see?"
        text="Tell us which mood fits your property — we'll map a scope and timeline."
      />
      <div className="wrap" style={{ paddingBottom: 36, marginTop: 20 }}>
        <Link href="/quote" className="btn btn-green">
          Start your garden <Arrow />
        </Link>
      </div>
    </main>
  );
}
