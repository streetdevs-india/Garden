import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SeoCta } from "@/components/SeoCta";
import { FadeUp, Reveal, SplitText } from "@/components/Animate";
import { Arrow } from "@/components/Icons";
import { getClientServices } from "@/lib/site";
import { getLocation, locations } from "@/lib/locations";
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
    keywords: loc.keywords,
  });
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: loc.h1,
    description: loc.description,
    areaServed: [loc.name, loc.state, "India", "Delhi NCR"],
    provider: {
      "@type": "LandscapingBusiness",
      name: "Hind Landscape Co.",
      url: absoluteUrl("/"),
      email: "hindlandscaping@gmail.com",
    },
    url: absoluteUrl(`/locations/${loc.slug}`),
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      <section
        className="page-hero"
        style={{ "--hero-img": "url('/images/gallery-path.jpg')" } as React.CSSProperties}
      >
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Locations", href: "/locations" }, { name: loc.name }]} />
          <div className="eyebrow">Service area · {loc.state}</div>
          <SplitText as="h1" text={loc.h1} />
          <p>{loc.intro}</p>
          <div className="hero-cta-row">
            <Link href="/quote" className="btn btn-green btn-pulse">Free site visit in {loc.name} <Arrow /></Link>
            <Link href="/contact" className="btn btn-outline">Talk to the studio</Link>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="wrap seo-prose">
          <FadeUp>
            <h2>Why choose Hind Landscape Co. in {loc.name}</h2>
            <ul>
              {loc.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={80}>
            <h2>Popular services in {loc.name}</h2>
          </FadeUp>
          <div className="seo-link-grid">
            {getClientServices().slice(0, 8).map((s, i) => (
              <Reveal key={s.slug} delay={i * 40}>
                <Link href={`/services/${s.slug}`} className="seo-link-card">
                  <strong>{s.title}</strong>
                  <span>{s.seoTitle}</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <FadeUp delay={60}>
            <h2>Related local hubs</h2>
            <p>
              Explore intent pages that match common searches near {loc.name}:
            </p>
            <div className="seo-link-grid" style={{ marginBottom: 18 }}>
              <Link href="/landscaping-services-delhi" className="seo-link-card">
                <strong>Landscaping services Delhi</strong>
                <span>Design, build and AMC</span>
              </Link>
              <Link href="/terrace-garden-delhi" className="seo-link-card">
                <strong>Terrace garden Delhi</strong>
                <span>Rooftop and podium planting</span>
              </Link>
              <Link href="/garden-maintenance-delhi-ncr" className="seo-link-card">
                <strong>Garden maintenance AMC</strong>
                <span>Delhi NCR care programmes</span>
              </Link>
              <Link href="/commercial-landscaping-india" className="seo-link-card">
                <strong>Commercial landscaping India</strong>
                <span>Campuses, hotels and developers</span>
              </Link>
              {(loc.slug === "gurgaon" || loc.slug === "gurugram" || loc.slug.includes("gurugram") || loc.slug === "golf-course-road" || loc.slug === "dlf-gurugram") && (
                <>
                  <Link href="/vertical-garden-gurgaon" className="seo-link-card">
                    <strong>Vertical garden Gurgaon</strong>
                    <span>Greenwall installation</span>
                  </Link>
                  <Link href="/landscape-amc-gurugram" className="seo-link-card">
                    <strong>Landscape AMC Gurugram</strong>
                    <span>Villa and campus care</span>
                  </Link>
                  <Link href="/garden-design-gurugram" className="seo-link-card">
                    <strong>Garden design Gurugram</strong>
                    <span>Layouts and planting plans</span>
                  </Link>
                </>
              )}
              {(loc.slug === "delhi" || loc.slug === "delhi-ncr" || loc.slug === "south-delhi") && (
                <Link href="/best-landscaping-company-delhi" className="seo-link-card">
                  <strong>Best landscaping company in Delhi</strong>
                  <span>Hind Landscape Co. · Okhla</span>
                </Link>
              )}
              {(loc.slug === "noida" || loc.slug === "greater-noida" || loc.slug === "noida-extension") && (
                <>
                  <Link href="/best-landscaping-company-noida" className="seo-link-card">
                    <strong>Best landscaping company in Noida</strong>
                    <span>Societies, villas and AMC</span>
                  </Link>
                  <Link href="/hardscape-noida" className="seo-link-card">
                    <strong>Hardscape Noida</strong>
                    <span>Pathways and plazas</span>
                  </Link>
                  <Link href="/society-landscaping-noida" className="seo-link-card">
                    <strong>Society landscaping Noida</strong>
                    <span>RWA common-area AMC</span>
                  </Link>
                </>
              )}
              {(loc.slug === "chattarpur" || loc.slug === "south-delhi") && (
                <Link href="/farmhouse-landscaping-chattarpur" className="seo-link-card">
                  <strong>Farmhouse landscaping Chattarpur</strong>
                  <span>Estate gardens and avenues</span>
                </Link>
              )}
            </div>
            <p style={{ marginTop: 22 }}>
              Looking for a landscaping company in {loc.name}, {loc.state}?{" "}
              <Link href="/quote">Request a free quote</Link> or explore{" "}
              <Link href="/blog#india-coverage">city &amp; state blogs</Link>.
            </p>
            <div className="geo-city-chips" style={{ marginTop: 18 }}>
              {locations
                .filter((l) => l.state === loc.state && l.slug !== loc.slug)
                .slice(0, 10)
                .map((l) => (
                  <Link key={l.slug} href={`/locations/${l.slug}`}>
                    {l.name}
                  </Link>
                ))}
            </div>
            <Link href="/quote" className="btn btn-green" style={{ marginTop: 8 }}>
              Get a Free Quote <Arrow />
            </Link>
          </FadeUp>
        </div>
      </section>
      {loc.faqs.length > 0 && (
        <section className="page-section seo-faq">
          <div className="wrap">
            <FadeUp>
              <h2>FAQs — {loc.name}</h2>
            </FadeUp>
            <div className="faq-list">
              {loc.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 50}>
                  <details className="faq-item">
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
      <SeoCta title={`Start your ${loc.name} garden project`} />
    </main>
  );
}
