import Link from "next/link";
import type { Metadata } from "next";
import { services, stats } from "@/lib/site";
import { galleryPhotos } from "@/lib/gallery";
import { business } from "@/lib/business";
import { Arrow, LeafDeco, ServiceGlyph } from "@/components/Icons";
import { VideoCard, WatchButton } from "@/components/SiteChrome";
import { buildMetadata } from "@/lib/seo";
import { CountUp, FadeUp, ScrollHeaderClass } from "@/components/Animate";
import { processSteps } from "@/lib/psychology";
import { LeadForm } from "@/components/LeadForm";
import { GalleryReveal } from "@/components/GalleryReveal";
import { HeroMotion } from "@/components/HeroMotion";
import { ProofBand } from "@/components/ProofBand";
import { LeadPopup } from "@/components/LeadPopup";

export const metadata: Metadata = buildMetadata({
  title: "Landscaping & Gardening in Delhi NCR & India",
  description:
    "Greenly designs, builds and maintains gardens, lawns and outdoor spaces for homes, farmhouses, hotels and commercial properties across Delhi NCR and India.",
  path: "/",
});

const trustSignals = [
  `Speak to ${business.contactName} · ${business.phone}`,
  "No-obligation site visit — free",
  "Named plant lists, not vague quotes",
  "Delhi NCR · pan-India for select scopes",
];

export default function HomePage() {
  const [featured, ...listServices] = services.slice(0, 6);

  return (
    <main>
      <ScrollHeaderClass />

      {/* ══════════════════════ 1. HERO ══════════════════════ */}
      <div className="hero-wrap">
        <section className="hero" style={{ backgroundImage: "url(/images/hero.jpg)" }}>
          <div className="hero-leaves" aria-hidden>
            <span className="hero-leaf hl-1" />
            <span className="hero-leaf hl-2" />
            <span className="hero-leaf hl-3" />
            <span className="hero-leaf hl-4" />
          </div>

          <div className="hero-copy">
            <div className="hero-kicker">
              <i />
              Delhi NCR gardens that last past handover
            </div>
            <h1>
              Outdoor space you
              <br />
              actually want to sit in
            </h1>
            <p>
              {business.contactName} and the Greenly crew design, plant and maintain gardens for
              Delhi heat, monsoon, and the way your family uses the lawn after dark — not a
              show plot that fades in May.
            </p>
            <div className="hero-actions">
              <Link href="/quote" className="btn btn-green btn-pulse">
                Book a free site visit <Arrow />
              </Link>
              <WatchButton title="Watch Our Story" subtitle="See how we bring nature to life" />
            </div>
            <HeroMotion />
          </div>

          <div className="hero-scroll" aria-hidden>
            <div className="hero-scroll-mouse" />
          </div>
        </section>
      </div>

      {/* ══════════════════════ 2. ABOUT (screenshot match) ══════════════════════ */}
      <section className="about">
        <div className="wrap about-grid">
          <FadeUp>
            <div>
              <div className="eyebrow">About Us</div>
              <h2>Our Passion for Greener Spaces</h2>
              <p className="lede">
                We are a team of passionate gardeners and landscape experts dedicated to creating
                beautiful, sustainable and functional outdoor spaces for homes, offices and
                commercial properties.
              </p>
              <Link href="/about" className="btn btn-green">
                Learn More <Arrow />
              </Link>
              <div className="stats">
                {stats.map((item) => (
                  <div className="stat" key={item.label}>
                    <img src={item.icon} alt="" />
                    <strong>
                      <CountUp value={item.value} suffix={item.suffix} />
                    </strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={90} className="fill">
            <VideoCard />
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════ 4. SERVICES (asymmetric) ══════════════════════ */}
      <section className="services" id="services">
        <div className="wrap">
          <FadeUp>
            <div className="section-header">
              <div>
                <div className="eyebrow">Our Services</div>
                <h2>Everything Your Garden Needs</h2>
              </div>
              <Link href="/services" className="btn btn-outline">
                All Services <Arrow />
              </Link>
            </div>
          </FadeUp>

          <div className="services-layout">
            <FadeUp>
              <Link href={`/services/${featured.slug}`} className="service-hero-card">
                <img src={featured.image} alt={featured.title} />
                <div className="service-hero-overlay">
                  <div className="service-hero-badge">
                    <ServiceGlyph slug={featured.slug} /> Featured
                  </div>
                  <h3>{featured.title}</h3>
                  <p>{featured.text}</p>
                  <span className="btn btn-ghost" style={{ display: "inline-flex", gap: 8, pointerEvents: "none" }}>
                    Explore <Arrow />
                  </span>
                </div>
              </Link>
            </FadeUp>

            <div className="service-list">
              {listServices.map((service, i) => (
                <FadeUp key={service.slug} delay={i * 55}>
                  <Link href={`/services/${service.slug}`} className="service-list-item">
                    <span className="service-list-badge">
                      <ServiceGlyph slug={service.slug} />
                    </span>
                    <div className="service-list-text">
                      <strong>{service.title}</strong>
                      <span>{service.text}</span>
                    </div>
                    <span className="service-list-arrow"><Arrow /></span>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ 5. GALLERY (full frames, no crop) ══════════════════════ */}
      <section className="gallery-section">
        <div className="wrap wrap-wide">
          <FadeUp>
            <div className="section-header">
              <div>
                <div className="eyebrow">Our Work</div>
                <h2>Gardens you can walk through</h2>
              </div>
              <Link href="/gallery" className="btn btn-outline">
                View Gallery <Arrow />
              </Link>
            </div>
          </FadeUp>
          <GalleryReveal items={galleryPhotos} href="/gallery" columns={4} />
        </div>
      </section>

      {/* ══════════════════════ 5b. FULL-WIDTH CTA ══════════════════════ */}
      <FadeUp>
        <section className="cta-bleed" aria-label="Get a free quote">
          <span className="leaf leaf-bl"><LeafDeco /></span>
          <span className="leaf leaf-br"><LeafDeco /></span>
          <div className="cta-bleed-inner">
            <div>
              <h2>Ready to Create Your Dream Garden?</h2>
              <p>Let&apos;s make your outdoor space beautiful, together.</p>
            </div>
            <Link href="/quote" className="btn btn-light btn-pulse">
              Get a Free Quote <Arrow />
            </Link>
          </div>
        </section>
      </FadeUp>

      {/* ══════════════════════ 6. COLLAGE + WHY US ══════════════════════ */}
      <section className="pair" style={{ paddingTop: 72 }}>
        <div className="wrap pair-grid">
          <FadeUp>
            <div className="collage">
              <img className="c-path" src="/images/gallery-path.jpg" alt="Garden path under arbor" />
              <img className="c-flowers" src="/images/gallery-flowers.jpg" alt="Flower border" />
              <div className="c-right">
                <img className="c-leaf" src="/images/gallery-leaf-ss.jpg" alt="Garden shrubs" />
                <div className="green-card">
                  <h3>Designing<br />Beautiful<br />Green Spaces</h3>
                  <p>From small gardens to large landscapes, we create spaces that inspire.</p>
                  <Link href="/gallery" className="btn btn-ghost">
                    View Gallery <Arrow />
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={160}>
            <div className="why-copy">
              <div className="why-kicker">Why Choose Us</div>
              <h2>Growing Beautiful<br />Spaces for Over Decade</h2>
              <p>
                We combine creativity, experience and quality materials to deliver
                outdoor spaces that last and stay beautiful.
              </p>
              <div className="reasons">
                {([
                  { icon: "/images/icon-team.png",      title: "Expert Team",       text: "Skilled & Professional" },
                  { icon: "/images/icon-materials.png",  title: "Quality Materials", text: "Long Lasting Results"   },
                  { icon: "/images/icon-time.png",       title: "On-Time Delivery",  text: "We Value Your Time"     },
                ] as const).map((item) => (
                  <article className="reason" key={item.title}>
                    <img src={item.icon} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════ 8. PROCESS ══════════════════════ */}
      <section className="psy-section psy-muted" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <FadeUp>
            <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto 52px" }}>
              <div className="eyebrow">How It Works</div>
              <h2>Simple, calm, clear</h2>
              <p className="lede">
                You always know what happens next — and what you&apos;re approving.
              </p>
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

      {/* ══════════════════════ 9. TESTIMONIALS ══════════════════════ */}
      <ProofBand />

      {/* ══════════════════════ 10. LEAD CAPTURE (above footer) ══════════════════════ */}
      <section className="lead-section lead-section-footer">
        <div className="wrap lead-grid">
          <FadeUp className="lead-visual-wrap">
            <div className="lead-visual">
              <img src="/images/work-farmhouse.jpg" alt="Transformed farmhouse garden" />
              <img src="/images/work-hotel.jpg" alt="Hotel garden at dusk" className="lead-visual-2" />
              <div className="lead-visual-tag">
                <span className="lead-star">★★★★★</span>
                <strong>500+ satisfied clients</strong>
                <span>Homes · Farmhouses · Hotels · Restaurants</span>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={120} className="lead-content-wrap">
            <div className="lead-content">
              <div className="eyebrow">Free Site Visit</div>
              <h2>
                Your farmhouse or venue deserves a garden people come back for
              </h2>
              <p>
                Share your property details and we&apos;ll visit, advise and quote — completely
                free. Most clients hear from us within 4 hours.
              </p>

              <div className="lead-trust-row">
                {trustSignals.map((t) => (
                  <div key={t} className="lead-trust-item">
                    <span className="lead-check">✓</span> {t}
                  </div>
                ))}
              </div>

              <LeadForm />
            </div>
          </FadeUp>
        </div>
      </section>

      <LeadPopup />
    </main>
  );
}
