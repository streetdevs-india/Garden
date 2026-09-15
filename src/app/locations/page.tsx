import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SeoCta } from "@/components/SeoCta";
import { locations } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Landscaping Locations | Delhi NCR & India",
  description:
    "Greenly landscaping service areas — Delhi, Gurugram, Noida, Faridabad, Delhi NCR and selected cities across India.",
  path: "/locations",
});

export default function LocationsHubPage() {
  const primary = locations.filter((l) => l.primary);
  const other = locations.filter((l) => !l.primary);

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Locations" }]} />
          <div className="eyebrow">Locations</div>
          <h1>Where Greenly works</h1>
          <p>
            Delhi NCR is our primary service region. We also mobilise for selected landscaping projects across India where logistics support quality delivery.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="wrap">
          <h2>Delhi NCR</h2>
          <div className="seo-link-grid">
            {primary.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="seo-link-card">
                <strong>{l.name}</strong>
                <span>{l.description}</span>
              </Link>
            ))}
          </div>
          <h2 style={{ marginTop: 36 }}>Pan-India mobilisation</h2>
          <div className="seo-link-grid">
            {other.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="seo-link-card">
                <strong>{l.name}</strong>
                <span>{l.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SeoCta />
    </main>
  );
}
