import type { Metadata } from "next";
import Link from "next/link";
import { works } from "@/lib/site";
import { business } from "@/lib/business";
import { aboutValues, processSteps } from "@/lib/psychology";
import { Arrow } from "@/components/Icons";
import { FadeUp } from "@/components/Animate";
import { MidCta } from "@/components/PageSections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Greenly | Passion for Greener Spaces",
  description:
    "Meet Greenly — landscapers and gardeners crafting calm, useful outdoor spaces for homes, farmhouses and commercial properties across Delhi NCR and India.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "About Us" }]} />
          <div className="eyebrow">About Us</div>
          <h1>Our passion for greener spaces</h1>
          <p>
            A team of gardeners and landscape experts dedicated to outdoor spaces that
            feel calm, useful and alive — for homes, offices and commercial properties.
          </p>
        </div>
      </section>

      {/* STORY + OWNER */}
      <section className="page-section about-story-section">
        <div className="wrap about-story-grid">
          <FadeUp delay={80}>
            <figure className="owner-portrait">
              <img
                src="/images/owner-anas.jpg"
                alt={`${business.contactName}, founder of Greenly`}
              />
              <figcaption>
                <strong>{business.contactName}</strong>
                <span>Founder · Greenly Landscaping</span>
              </figcaption>
            </figure>
          </FadeUp>
          <FadeUp>
            <div className="about-story-copy">
              <div className="eyebrow">Our Story</div>
              <h2>Beautiful spaces start with the right care</h2>
              <p className="lede">
                Greenly is led by {business.contactName}. Every garden starts with the site itself —
                light, soil, how you move through it, and what you want the evenings to feel like.
                Then we design, build and stay with it across Delhi NCR.
              </p>
              <p className="about-story-extra">
                From the first site walk to handover and optional AMC, Anas and the crew keep
                proposals clear — named plants, zone-wise scope, and gardens that still look
                settled after monsoon.
              </p>
              <Link href="/quote" className="btn btn-green">
                Start Your Garden <Arrow />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* VALUES */}
      <section className="psy-section psy-muted">
        <div className="wrap">
          <FadeUp>
            <div className="psy-head">
              <div className="eyebrow">What we stand for</div>
              <h2>Values you can feel on site</h2>
            </div>
          </FadeUp>
          <div className="promise-grid">
            {aboutValues.map((item, i) => (
              <FadeUp key={item.title} delay={i * 80}>
                <article className="promise-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="psy-section">
        <div className="wrap">
          <FadeUp>
            <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto 48px" }}>
              <div className="eyebrow">How we work</div>
              <h2>From first walk to living garden</h2>
            </div>
          </FadeUp>
          <div className="process-timeline">
            {processSteps.map((item, i) => (
              <FadeUp key={item.step} delay={i * 90}>
                <div className="process-step-wrap">
                  <div className="process-num">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY OF WORK */}
      <section className="psy-section psy-muted">
        <div className="wrap">
          <FadeUp>
            <div className="section-header" style={{ marginBottom: 28 }}>
              <div>
                <div className="eyebrow">Our Work</div>
                <h2>Gardens that hold their shape</h2>
              </div>
              <Link href="/gallery" className="btn btn-outline">
                Open Gallery <Arrow />
              </Link>
            </div>
          </FadeUp>
          <div className="gallery-masonry">
            {[...works,
              { src: "/images/gallery-path.jpg",      alt: "Garden path under arbor"         },
              { src: "/images/gallery-flowers.jpg",   alt: "Seasonal flower border"           },
              { src: "/images/service-lighting.jpg",  alt: "Evening garden lighting"          },
              { src: "/images/service-hardscape.jpg", alt: "Stone patio and steps"            },
            ].map((item) => (
              <figure key={item.src} className="gallery-masonry-item">
                <img src={item.src} alt={item.alt} />
                <div className="gallery-item-label">{item.alt}</div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <MidCta
        title="Want to know if we're a fit?"
        text="Tell us about your property. We'll reply with an honest next step — even if that means a smaller scope first."
      />
    </main>
  );
}
