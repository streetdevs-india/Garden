import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";
import { Arrow } from "@/components/Icons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeUp, SplitText } from "@/components/Animate";
import {
  AudienceSection,
  HomeFaqSection,
  ProcessSection,
  PromiseSection,
  TestimonialsTeaser,
} from "@/components/PageSections";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Landscaping Services | Garden Design, Lawn Care & More",
  description:
    "Complete landscaping services from Hind Landscape Co. — garden design, lawn care, irrigation, hardscaping, lighting, terrace gardens and maintenance AMC across Delhi NCR and India.",
  path: "/services",
});

export default function ServicesPage() {
  const core   = services.slice(0, 7);  // core 7 services
  const extras = services.slice(7);     // additional services

  return (
    <main>
      <section className="page-hero" style={{ "--hero-img": "url('/images/service-design.jpg')" } as React.CSSProperties}>
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Services" }]} />
          <div className="eyebrow">Our Services</div>
          <SplitText as="h1" text="Complete landscaping services for every garden dream" />
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

      {/* Who we help */}
      <AudienceSection />

      {/* Core services — image cards */}
      <section className="page-section">
        <div className="wrap wrap-wide">
          <FadeUp>
            <div className="section-header" style={{ marginBottom: 28 }}>
              <div>
                <div className="eyebrow">Core services</div>
                <h2>What we do</h2>
              </div>
            </div>
          </FadeUp>
          <div className="services-hub-grid-v2">
            {core.map((service, i) => (
              <FadeUp key={service.slug} delay={i * 55}>
                <Link href={`/services/${service.slug}`} className="svc-hub-card">
                  <div className="svc-hub-img">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="svc-hub-body">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <span className="svc-hub-link">Learn more <Arrow /></span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Additional speciality services */}
      {extras.length > 0 && (
        <section className="page-section svc-extras-section">
          <div className="wrap wrap-wide">
            <FadeUp>
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
            </FadeUp>
            <div className="svc-extras-grid">
              {extras.map((service, i) => (
                <FadeUp key={service.slug} delay={i * 50} className="fill">
                  <Link href={`/services/${service.slug}`} className="svc-extra-card">
                    <div className="svc-extra-img">
                      <img src={service.image} alt="" />
                    </div>
                    <div className="svc-extra-body">
                      <h3>{service.title}</h3>
                      <p>{service.detail}</p>
                      <span className="svc-hub-link">Explore <Arrow /></span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      <ProcessSection />
      <PromiseSection />
      <TestimonialsTeaser />
      <HomeFaqSection />
    </main>
  );
}
