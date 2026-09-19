import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";
import { Arrow } from "@/components/Icons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SplitText } from "@/components/Animate";
import {
  AudienceSection,
  HomeFaqSection,
  ProcessSection,
  PromiseSection,
  TestimonialsTeaser,
} from "@/components/PageSections";
import { ServicesPageMotion } from "@/components/ServicesPageMotion";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Landscaping Services | Garden Design, Lawn Care & More",
  description:
    "Complete landscaping services from Hind Landscape Co. — garden design, lawn care, irrigation, hardscaping, lighting, terrace gardens and maintenance AMC across Delhi NCR and India.",
  path: "/services",
});

export default function ServicesPage() {
  const core = services.slice(0, 7);
  const extras = services.slice(7);

  return (
    <main>
      <ServicesPageMotion>
        <section
          className="page-hero svc-page-hero"
          style={{ "--hero-img": "url('/images/service-design.jpg')" } as React.CSSProperties}
        >
          <div className="wrap">
            <Breadcrumbs items={[{ name: "Services" }]} />
            <div className="eyebrow">Our Services</div>
            <SplitText as="h1" text="Complete landscaping services for every garden dream" manual />
            <p>
              Garden design, lawn care, irrigation, hardscaping, lighting and maintenance AMC — covering
              residential, farmhouse and commercial outdoor spaces across Delhi NCR and India.
            </p>
            <div className="hero-cta-row">
              <Link href="/quote" className="btn btn-green btn-pulse">Get a Free Quote <Arrow /></Link>
              <Link href="/contact" className="btn btn-outline">Talk to the studio</Link>
            </div>
          </div>
        </section>

        <AudienceSection />

        <section className="page-section core-services-section">
          <div className="wrap wrap-wide">
            <div className="section-header core-services-head" style={{ marginBottom: 28 }}>
              <div>
                <div className="eyebrow">Core services</div>
                <h2>What we do</h2>
                <p>
                  Seven core scopes — from first sketch and planting to irrigation, hardscape and evening light.
                </p>
              </div>
            </div>
            <div className="services-hub-grid-v2">
              {core.map((service, i) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`svc-hub-card${i === 0 ? " is-featured" : ""}`}
                >
                  <div className="svc-hub-img">
                    <img src={service.image} alt={service.title} />
                    <span className="svc-hub-num" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="svc-hub-body">
                    {i === 0 ? (
                      <>
                        <span className="svc-hub-kicker">Flagship scope</span>
                        <div className="svc-hub-featured-main">
                          <div className="svc-hub-featured-copy">
                            <h3>{service.title}</h3>
                            <p>{service.detail}</p>
                            <span className="svc-hub-link">Learn more <Arrow /></span>
                          </div>
                          <ul className="svc-hub-points">
                            <li>Layouts &amp; planting plans</li>
                            <li>Homes to commercial sites</li>
                            <li>Climate-aware for Delhi NCR</li>
                          </ul>
                        </div>
                      </>
                    ) : (
                      <>
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                        <span className="svc-hub-link">Learn more <Arrow /></span>
                      </>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {extras.length > 0 && (
          <section className="page-section svc-extras-section">
            <div className="wrap wrap-wide">
              <div className="section-header svc-extras-head">
                <div>
                  <div className="eyebrow">Speciality services</div>
                  <h2>Additional scopes</h2>
                  <p>
                    Terrace gardens, living walls, farmhouse estates and maintenance AMC —
                    the specialised work that sits alongside a full landscape build.
                  </p>
                </div>
              </div>
              <div className="svc-extras-grid">
                {extras.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="svc-extra-card">
                    <div className="svc-extra-img">
                      <img src={service.image} alt="" />
                    </div>
                    <div className="svc-extra-body">
                      <h3>{service.title}</h3>
                      <p>{service.detail}</p>
                      <span className="svc-hub-link">Explore <Arrow /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <ProcessSection />
        <PromiseSection />
        <TestimonialsTeaser />
        <HomeFaqSection />
      </ServicesPageMotion>
    </main>
  );
}
