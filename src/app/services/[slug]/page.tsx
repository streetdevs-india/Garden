import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SeoCta } from "@/components/SeoCta";
import { Arrow, ServiceGlyph } from "@/components/Icons";
import { FadeUp, Reveal, SplitText, ZoomImage } from "@/components/Animate";
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
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.seoTitle,
    alternateName: service.title,
    description: service.seoDescription,
    provider: {
      "@type": "LandscapingBusiness",
      name: "Hind Landscape Co.",
      url: absoluteUrl("/"),
      email: "Info@Hindlandscape.com",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "AdministrativeArea", name: "Delhi NCR" },
    ],
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.image),
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      <section
        className="page-hero"
        style={{ "--hero-img": `url('${service.image}')` } as React.CSSProperties}
      >
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: service.title },
            ]}
          />
          <div className="eyebrow">Service</div>
          <SplitText as="h1" text={service.seoTitle} />
          <p>{service.seoDescription}</p>
          <div className="hero-cta-row">
            <Link href="/quote" className="btn btn-green btn-pulse">Get a Free Quote <Arrow /></Link>
            <Link href="/contact" className="btn btn-outline">Talk to the studio</Link>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="wrap service-detail-page">
          <FadeUp>
            <ZoomImage src={service.image} alt={`${service.title} — Hind Landscape Co. landscaping project photo`} />
          </FadeUp>
          <Reveal variant="right" delay={80}>
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
          </Reveal>
        </div>
      </section>
      {service.faqs.length > 0 && (
        <section className="page-section seo-faq">
          <div className="wrap">
            <FadeUp>
              <h2>FAQs about {service.title}</h2>
            </FadeUp>
            <div className="faq-list">
              {service.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 55}>
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
      <section className="page-section">
        <div className="wrap">
          <FadeUp>
            <h2>Related services</h2>
          </FadeUp>
          <div className="seo-link-grid">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 6)
              .map((s, i) => (
                <FadeUp key={s.slug} delay={i * 45}>
                  <Link href={`/services/${s.slug}`} className="seo-link-card">
                    <strong>{s.title}</strong>
                    <span>{s.text}</span>
                  </Link>
                </FadeUp>
              ))}
          </div>
        </div>
      </section>
      <SeoCta />
    </main>
  );
}
