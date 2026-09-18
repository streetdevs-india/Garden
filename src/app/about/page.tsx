import type { Metadata } from "next";
import Link from "next/link";
import { works } from "@/lib/site";
import { business } from "@/lib/business";
import { teamMembers } from "@/lib/team";
import { aboutValues, processSteps } from "@/lib/psychology";
import { Arrow } from "@/components/Icons";
import { FadeUp, Reveal, SplitText } from "@/components/Animate";
import { MidCta } from "@/components/PageSections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `About ${business.name} | Our Story, Team & Values`,
  description: `Meet ${business.contactName} and the ${business.name} team — landscape architects and designers crafting calm outdoor spaces across Delhi NCR and India.`,
  path: "/about",
});

export default function AboutPage() {
  const lead = teamMembers.find((m) => m.featured)!;
  const directors = teamMembers.filter((m) => !m.featured && /director|chief/i.test(m.role));
  const architects = teamMembers.filter((m) => !m.featured && !/director|chief/i.test(m.role));

  return (
    <main>
      <section className="page-hero" style={{ "--hero-img": "url('/images/work-farmhouse.jpg')" } as React.CSSProperties}>
        <div className="wrap">
          <Breadcrumbs items={[{ name: "About Us" }]} />
          <div className="eyebrow">About Us</div>
          <SplitText as="h1" text="Our passion for greener spaces" />
          <p>
            A studio of landscape architects, horticulturists and site leads dedicated to outdoor
            spaces that feel calm, useful and alive — for homes, campuses and cities.
          </p>
          <div className="hero-cta-row">
            <Link href="/quote" className="btn btn-green btn-pulse">Start Your Garden <Arrow /></Link>
            <Link href="/contact" className="btn btn-outline">Talk to Ajay</Link>
          </div>
        </div>
      </section>

      <section className="page-section about-story-section">
        <div className="wrap about-story-grid">
          <Reveal variant="left" delay={80}>
            <figure className="owner-portrait">
              <img
                src={lead.photo}
                alt={`${lead.name}, ${lead.role} at ${business.name}`}
              />
              <figcaption>
                <strong>{lead.name}</strong>
                <span>Director · {business.name}</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal variant="right">
            <div className="about-story-copy">
              <div className="eyebrow">Our Story</div>
              <h2>Beautiful spaces start with the right care</h2>
              <p className="lede">
                {business.name} is led by {lead.name}. Every project starts with the site itself —
                light, soil, how people move through it, and what the evenings should feel like.
                Then we plan, design and build landscapes that hold their shape across Delhi NCR
                and India.
              </p>
              <p className="about-story-extra">
                From the first site walk to master-plan handover, Ajay and the studio keep
                proposals clear — climate-aware planting, zone-wise scope, and outdoor spaces that
                still look settled after monsoon.
              </p>
              <p className="about-nap">
                <strong>Studio</strong>
                <span>{business.addressLine}</span>
                <a href={`tel:${business.phoneTel}`}>{business.phone}</a>
              </p>
              <Link href="/quote" className="btn btn-green">
                Start Your Garden <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="team-section">
        <div className="wrap">
          <FadeUp>
            <div className="team-head">
              <div>
                <div className="eyebrow">The studio</div>
                <h2>People behind the landscapes</h2>
                <p>
                  Directors, architects, horticulturists and engineers — the minds and hands
                  behind every {business.name} project.
                </p>
              </div>
              <div className="team-head-stat">
                <strong>{teamMembers.length}</strong>
                <span>specialists · one standard</span>
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <article className="team-lead team-lead-wide">
              <div className="team-lead-media">
                <img src={lead.photo} alt={lead.name} />
                <span className="team-years">{lead.years}</span>
              </div>
              <div className="team-lead-body">
                <span className="team-role-chip">{lead.role}</span>
                <h3>{lead.name}</h3>
                <p>{lead.bio ?? lead.focus}</p>
                <a href={`tel:${business.phoneTel}`} className="team-call">
                  Talk to Ajay · {business.phone}
                </a>
              </div>
            </article>
          </FadeUp>

          <FadeUp>
            <div className="team-band-label">
              <span>Leadership</span>
              <em>Design directors &amp; chiefs</em>
            </div>
          </FadeUp>
          <div className="team-portrait-grid">
            {directors.map((member, i) => (
              <FadeUp key={member.name} delay={i * 55}>
                <article className="team-portrait">
                  <div className="team-portrait-media">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} />
                    ) : (
                      <div className="team-mono" aria-hidden>{member.initials}</div>
                    )}
                    <span className="team-portrait-badge">{member.years}</span>
                  </div>
                  <div className="team-portrait-body">
                    <h3>{member.name}</h3>
                    <strong>{member.role}</strong>
                    <p>{member.focus}</p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="team-band-label">
              <span>Practice</span>
              <em>Architects &amp; engineers</em>
            </div>
          </FadeUp>
          <div className="team-portrait-grid team-portrait-grid-sm">
            {architects.map((member, i) => (
              <FadeUp key={member.name} delay={i * 55}>
                <article className="team-portrait">
                  <div className="team-portrait-media">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} />
                    ) : (
                      <div className="team-mono" aria-hidden>{member.initials}</div>
                    )}
                    <span className="team-portrait-badge">{member.years}</span>
                  </div>
                  <div className="team-portrait-body">
                    <h3>{member.name}</h3>
                    <strong>{member.role}</strong>
                    <p>{member.focus}</p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

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

      <section className="psy-section">
        <div className="wrap">
          <FadeUp>
            <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto 48px" }}>
              <div className="eyebrow">How we work</div>
              <h2>From first walk to living landscape</h2>
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

      <section className="psy-section psy-muted">
        <div className="wrap">
          <FadeUp>
            <div className="section-header" style={{ marginBottom: 28 }}>
              <div>
                <div className="eyebrow">Our Work</div>
                <h2>Landscapes that hold their shape</h2>
              </div>
              <Link href="/gallery" className="btn btn-outline">
                Open Gallery <Arrow />
              </Link>
            </div>
          </FadeUp>
          <div className="gallery-masonry">
            {[
              ...works,
              { src: "/images/gallery-path.jpg", alt: "Garden path under arbor" },
              { src: "/images/gallery-flowers.jpg", alt: "Seasonal flower border" },
              { src: "/images/service-lighting.jpg", alt: "Evening garden lighting" },
              { src: "/images/service-hardscape.jpg", alt: "Stone patio and steps" },
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
      <div className="wrap" style={{ paddingBottom: 36, marginTop: 20 }}>
        <Link href="/quote" className="btn btn-green">
          Get a Free Quote <Arrow />
        </Link>
      </div>
    </main>
  );
}
