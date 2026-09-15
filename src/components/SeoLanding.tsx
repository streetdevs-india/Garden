import Link from "next/link";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { SeoCta } from "@/components/SeoCta";
import { JsonLd } from "@/components/JsonLd";
import { Arrow } from "@/components/Icons";

export function SeoLanding({
  eyebrow,
  title,
  lede,
  crumbs,
  children,
  faqs,
  jsonLd,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  crumbs: Crumb[];
  children: React.ReactNode;
  faqs?: { q: string; a: string }[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}) {
  const faqLd =
    faqs && faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <main>
      {jsonLd && <JsonLd data={jsonLd} />}
      {faqLd && <JsonLd data={faqLd} />}
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={crumbs} />
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{lede}</p>
        </div>
      </section>
      <section className="page-section">
        <div className="wrap seo-prose">{children}</div>
      </section>
      {faqs && faqs.length > 0 && (
        <section className="page-section seo-faq">
          <div className="wrap">
            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              {faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
      <div className="wrap" style={{ paddingBottom: 28 }}>
        <Link href="/quote" className="btn btn-green">
          Get a Free Quote <Arrow />
        </Link>
      </div>
      <SeoCta />
    </main>
  );
}
