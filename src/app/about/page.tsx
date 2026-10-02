import type { Metadata } from "next";
import Link from "next/link";
import { works } from "@/lib/site";
import { business } from "@/lib/business";
import { teamMembers } from "@/lib/team";
import { aboutValues, processSteps } from "@/lib/psychology";
import {
  aboutPageContent,
  companyMeta,
  companyPrinciples,
} from "@/lib/companyContent";
import { Arrow, FeatureIcon } from "@/components/Icons";
import { FadeUp, Reveal, SplitText } from "@/components/Animate";
import { MidCta } from "@/components/PageSections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { brandSearchKeywords } from "@/lib/seoKeywords";

export const metadata: Metadata = buildMetadata({
  title: "About Hind Landscape Co. | Our Story, Vision & Expertise",
  description: companyMeta.aboutDescription,
  path: "/about",
  keywords: [
    ...brandSearchKeywords,
    "About Hind Landscape Co.",
    "landscape company India",
    "landscape design company India",
  ],
});

const aboutWork = [
  { ...works[0], tag: "Hospitality", place: "Hotel campus" },
  { ...works[1], tag: "Farmhouse", place: "Weekend estate" },
  { ...works[2], tag: "Landscape", place: "Master plan" },
  { ...works[3], tag: "Care", place: "Seasonal beds" },
  { src: "/images/gallery-path.jpg", alt: "Garden path under arbor", tag: "Pathways", place: "Arbor walk" },
  { src: "/images/gallery-flowers.jpg", alt: "Seasonal flower border", tag: "Planting", place: "Colour border" },
  { src: "/images/service-lighting.jpg", alt: "Evening garden lighting", tag: "Lighting", place: "Night garden" },
  { src: "/images/gallery-patio-lights.png", alt: "Twilight patio with festoon lights", tag: "Outdoor living", place: "Lit deck" },
  { src: "/images/gallery-pavilion-night.png", alt: "Night pavilion with water features", tag: "Pavilion", place: "Evening garden" },
] as const;

export default function AboutPage() {
  const lead = teamMembers.find((m) => m.featured)!;
  const directors = teamMembers.filter((m) => !m.featured && /director|chief/i.test(m.role));
  const architects = teamMembers.filter((m) => !m.featured && !/director|chief/i.test(m.role));

  return (
    <main>
      <section className="page-hero" style={{ "--hero-img": "url('/images/work-farmhouse.jpg')" } as React.CSSProperties}>
        <div className="wrap">
          <Breadcrumbs items={[{ name: "About Us" }]} />
          <div className="eyebrow">About Hind Landscape Co.</div>
          <SplitText as="h1" text="About Hind Landscape Co." />
          <p className="about-hero-sub">{aboutPageContent.subtitle}</p>
          <p>{aboutPageContent.opening}</p>
          <div className="hero-cta-row">
            <Link href="/quote" className="btn btn-green btn-pulse">
              Request a Free Consultation <Arrow />
            </Link>
            <Link href="/gallery" className="btn btn-outline">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section about-story-section">
        <div className="wrap about-story-grid">
          <Reveal variant="left" delay={80}>
            <figure className="owner-portrait">
              <video
                src="/videos/story.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${business.name} story`}
              />
            </figure>
          </Reveal>
          <Reveal variant="right">
            <div className="about-story-copy">
              <div className="eyebrow">{aboutPageContent.storyHeadline}</div>
              <h2>Rooted in passion. Grown through excellence.</h2>
              {aboutPageContent.story.map((para) => (
                <p key={para.slice(0, 40)} className={para === aboutPageContent.story[0] ? "lede" : undefined}>
                  {para}
                </p>
              ))}
              <p className="about-nap">
                <strong>Studio</strong>
                <span>{business.addressLine}</span>
                <a href={`tel:${business.phoneTel}`}>{business.phone}</a>
              </p>
              <Link href="/quote" className="btn btn-green">
                Request a Free Consultation <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section about-vm-section">
        <div className="wrap about-vm-grid">
          <FadeUp>
            <article className="about-vm-card">
              <div className="eyebrow">Our Vision</div>
              <h2>{aboutPageContent.visionHeadline}</h2>
              <p>{aboutPageContent.vision}</p>
            </article>
          </FadeUp>
          <FadeUp delay={80}>
            <article className="about-vm-card about-vm-card-alt">
              <div className="eyebrow">Our Mission</div>
              <h2>{aboutPageContent.missionHeadline}</h2>
              <p>{aboutPageContent.mission}</p>
            </article>
          </FadeUp>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <FadeUp>
            <div className="about-values-head" style={{ marginBottom: 36 }}>
              <div className="eyebrow">The Hind Landscape Difference</div>
              <h2>Built on three principles that never compromise</h2>
            </div>
          </FadeUp>
          <div className="about-principles-grid">
            {companyPrinciples.map((item, i) => (
              <FadeUp key={item.title} delay={i * 70}>
                <article className="about-principle-card">
                  <span className="about-principle-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="wrap">
          <FadeUp>
            <div className="team-head">
              <div>
                <div className="eyebrow">Our Team</div>
                <h2>{aboutPageContent.teamHeadline}</h2>
                <p>{aboutPageContent.teamIntro}</p>
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
                      <div className="team-mono" aria-hidden>
                        {member.initials}
                      </div>
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
                      <div className="team-mono" aria-hidden>
                        {member.initials}
                      </div>
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

      <section className="about-values-section">
        <div className="about-values-bg" aria-hidden />
        <div className="wrap">
          <FadeUp>
            <div className="about-values-head">
              <div className="eyebrow">Our Values</div>
              <h2>Built on principles that were never meant to be compromised</h2>
              <p className="lede">
                Not slogans on a wall — habits our teams follow from the first site walk to the last snag check.
              </p>
            </div>
          </FadeUp>
          <div className="about-values-grid about-values-grid-5">
            {aboutValues.map((item, i) => (
              <FadeUp key={item.title} delay={i * 70}>
                <article className={`about-value-card${i === 0 ? " is-lead" : ""}`}>
                  <div className="about-value-top">
                    <span className="about-value-icon" aria-hidden>
                      <FeatureIcon name={item.icon} size={24} />
                    </span>
                    <span className="about-value-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
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
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
              <div className="eyebrow">How We Work</div>
              <h2>A process built for results and relationships</h2>
            </div>
          </FadeUp>
          <div className="process-timeline process-timeline-5">
            <div className="process-line" aria-hidden />
            {processSteps.map((item) => (
              <div key={item.step} className="process-step-wrap">
                <div className="process-num">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section about-promise-section">
        <div className="wrap about-promise-card">
          <FadeUp>
            <div className="eyebrow">{aboutPageContent.promiseHeadline}</div>
            <h2>More than a landscaping company — a lasting partner</h2>
            <p className="lede">{aboutPageContent.promise}</p>
          </FadeUp>
        </div>
      </section>

      <section className="about-work-section">
        <div className="wrap wrap-wide">
          <FadeUp>
            <div className="about-work-head">
              <div>
                <div className="eyebrow">Our Work</div>
                <h2>Landscapes that hold their shape</h2>
                <p>
                  Homes, farmhouses, hotels and campuses — spaces built to look settled after monsoon,
                  not just on handover day.
                </p>
              </div>
              <Link href="/gallery" className="btn btn-outline">
                Open Gallery <Arrow />
              </Link>
            </div>
          </FadeUp>

          <div className="about-work-grid">
            {aboutWork.map((item, i) => (
              <FadeUp key={item.src} delay={(i % 4) * 60} className={i === 0 ? "about-work-lead-wrap" : ""}>
                <Link href="/gallery" className={`about-work-card${i === 0 ? " is-lead" : ""}`}>
                  <img src={item.src} alt={item.alt} />
                  <span className="about-work-shade" aria-hidden />
                  <span className="about-work-meta">
                    <em>{item.tag}</em>
                    <strong>{item.place}</strong>
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <MidCta title={aboutPageContent.closingHeadline} text={aboutPageContent.closing} />
      <div className="wrap" style={{ paddingBottom: 36, marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href="/quote" className="btn btn-green">
          Request a Free Consultation <Arrow />
        </Link>
        <Link href="/gallery" className="btn btn-outline">
          View Our Portfolio
        </Link>
      </div>
    </main>
  );
}
