import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SeoCta } from "@/components/SeoCta";
import { Arrow } from "@/components/Icons";
import { getLocation, locations } from "@/lib/locations";
import { services } from "@/lib/site";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};
  return buildMetadata({
    title: loc.title,
    description: loc.description,
    path: `/locations/${loc.slug}`,
  });
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Landscaping services in ${loc.name}`,
    description: loc.description,
    areaServed: loc.name,
    provider: { "@type": "LandscapingBusiness", name: "Greenly", url: absoluteUrl("/") },
    url: absoluteUrl(`/locations/${loc.slug}`),
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Locations", href: "/locations" }, { name: loc.name }]} />
          <div className="eyebrow">Locations</div>
          <h1>Landscaping in {loc.name}</h1>
          <p>{loc.intro}</p>
        </div>
      </section>
      <section className="page-section">
        <div className="wrap seo-prose">
          <h2>Why choose Greenly in {loc.name}</h2>
          <ul>
            {loc.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <h2>Popular services in {loc.name}</h2>
          <div className="seo-link-grid">
            {services.slice(0, 8).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="seo-link-card">
                <strong>{s.title}</strong>
                <span>{s.text}</span>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 22 }}>
            Looking for a landscaping company in {loc.name}?{" "}
            <Link href="/quote">Request a free quote</Link> or read our{" "}
            <Link href="/blog">landscaping guides</Link>.
          </p>
          <Link href="/quote" className="btn btn-green" style={{ marginTop: 8 }}>
            Get a Free Quote <Arrow />
          </Link>
        </div>
      </section>
      {loc.faqs.length > 0 && (
        <section className="page-section seo-faq">
          <div className="wrap">
            <h2>FAQs — {loc.name}</h2>
            <div className="faq-list">
              {loc.faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
      <SeoCta title={`Start your ${loc.name} garden project`} />
    </main>
  );
}
