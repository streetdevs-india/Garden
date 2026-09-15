import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SeoCta } from "@/components/SeoCta";
import { Arrow, ServiceGlyph } from "@/components/Icons";
import { getService, services } from "@/lib/site";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    provider: { "@type": "LandscapingBusiness", name: "Greenly", url: absoluteUrl("/") },
    areaServed: "IN",
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.image),
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: service.title },
            ]}
          />
          <div className="eyebrow">Service</div>
          <h1>{service.title}</h1>
          <p>{service.seoDescription}</p>
        </div>
      </section>
      <section className="page-section">
        <div className="wrap service-detail-page">
          <img src={service.image} alt={`${service.title} — Greenly landscaping project photo`} />
          <div>
            <span className="service-badge"><ServiceGlyph slug={service.slug} /></span>
            {service.body.map((p) => (
              <p key={p.slice(0, 24)} className="lede">{p}</p>
            ))}
            <p className="lede">{service.detail}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <Link href="/quote" className="btn btn-green">Get a Free Quote <Arrow /></Link>
              <Link href="/locations/delhi-ncr" className="btn btn-outline">Delhi NCR coverage</Link>
            </div>
          </div>
        </div>
      </section>
      {service.faqs.length > 0 && (
        <section className="page-section seo-faq">
          <div className="wrap">
            <h2>FAQs about {service.title}</h2>
            <div className="faq-list">
              {service.faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="page-section">
        <div className="wrap">
          <h2>Related services</h2>
          <div className="seo-link-grid">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 6)
              .map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="seo-link-card">
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <SeoCta />
    </main>
  );
}
