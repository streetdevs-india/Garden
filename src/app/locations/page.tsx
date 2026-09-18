import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SeoCta } from "@/components/SeoCta";
import { FadeUp, Reveal, SplitText } from "@/components/Animate";
import { Arrow } from "@/components/Icons";
import { indianStatesCovered, locations, locationsByState } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Landscaping Locations Across India | Cities, States & Localities",
  description:
    "Hind Landscape Co. landscaping service map — Delhi NCR localities plus cities and states across India for garden design, lawn care, irrigation and maintenance.",
  path: "/locations",
});

export default function LocationsHubPage() {
  const primary = locations.filter((l) => l.primary);
  const localities = locations.filter((l) => l.locality);
  const byState = locationsByState();

  return (
    <main>
      <section className="page-hero" style={{ "--hero-img": "url('/images/gallery-path.jpg')" } as React.CSSProperties}>
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Locations" }]} />
          <div className="eyebrow">Locations</div>
          <SplitText as="h1" text="Landscaping across cities, localities and India" />
          <p>
            Delhi NCR is our primary region — including key localities. We also mobilise for
            selected projects across {indianStatesCovered.length}+ states and major cities where
            logistics support quality delivery.
          </p>
          <div className="hero-cta-row">
            <Link href="/quote" className="btn btn-green btn-pulse">Request a visit <Arrow /></Link>
            <Link href="/contact" className="btn btn-outline">Talk to the studio</Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <FadeUp>
            <h2>Primary · Delhi NCR</h2>
          </FadeUp>
          <div className="seo-link-grid">
            {primary.map((l, i) => (
              <Reveal key={l.slug} delay={i * 40}>
                <Link href={`/locations/${l.slug}`} className="seo-link-card">
                  <strong>{l.name}</strong>
                  <span>{l.state} · {l.description}</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <FadeUp>
            <h2 style={{ marginTop: 40 }}>Localities &amp; micro-areas</h2>
            <p style={{ color: "var(--muted)", maxWidth: 640, marginTop: 8 }}>
              Neighbourhood pages help people searching “landscaping near me” in specific pockets of Delhi NCR.
            </p>
          </FadeUp>
          <div className="seo-link-grid" style={{ marginTop: 18 }}>
            {localities.map((l, i) => (
              <Reveal key={l.slug} delay={Math.min(i, 8) * 30}>
                <Link href={`/locations/${l.slug}`} className="seo-link-card">
                  <strong>{l.name}</strong>
                  <span>{l.state}</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <FadeUp>
            <h2 style={{ marginTop: 48 }} id="states">All states &amp; cities we cover</h2>
            <p style={{ color: "var(--muted)", maxWidth: 640, marginTop: 8 }}>
              Browse by state. Each city page targets “landscaping company in [city]” with clear local copy,
              FAQs and a path to quote.
            </p>
          </FadeUp>

          <div className="geo-state-stack">
            {byState.map(([state, cities], i) => (
              <Reveal key={state} delay={Math.min(i, 6) * 40}>
                <div className="geo-state-block">
                  <h3>{state}</h3>
                  <div className="geo-city-chips">
                    {cities.map((c) => (
                      <Link key={c.slug} href={`/locations/${c.slug}`}>
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <SeoCta />
    </main>
  );
}
