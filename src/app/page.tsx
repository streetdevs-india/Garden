import Link from "next/link";
import type { Metadata } from "next";
import { services, stats } from "@/lib/site";
import { galleryPhotos } from "@/lib/gallery";
import { business } from "@/lib/business";
import { Arrow, LeafDeco, ServiceGlyph, FeatureIcon } from "@/components/Icons";
import { VideoCard, WatchButton } from "@/components/SiteChrome";
import { buildMetadata } from "@/lib/seo";
import { CountUp, FadeUp, SplitText, ScrollHeaderClass } from "@/components/Animate";
import { TrustBar } from "@/components/PageSections";
import { processSteps } from "@/lib/psychology";
import { LeadForm } from "@/components/LeadForm";
import { GalleryReveal } from "@/components/GalleryReveal";
import { HeroMotion } from "@/components/HeroMotion";
import { HeroIntro } from "@/components/HeroIntro";
import { AboutSectionMotion } from "@/components/AboutSectionMotion";
import {
  ServicesStoryMotion,
  WhyUsMotion,
  ProcessMotion,
} from "@/components/HomeSectionMotions";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { LeadPopup } from "@/components/LeadPopup";

export const metadata: Metadata = buildMetadata({
  title: "Landscaping & Gardening in Delhi NCR & India",
  description:
    "Hind Landscape Co. designs, builds and maintains gardens, lawns and outdoor spaces for homes, farmhouses, hotels and commercial properties across Delhi NCR and India.",
  path: "/",
});

const trustSignals = [
  `Speak to ${business.contactName} · ${business.phone}`,
  "No-obligation site visit — free",
  "Named plant lists, not vague quotes",
  "Delhi NCR · pan-India for select scopes",
];

export default function HomePage() {
  const homeServices = services.slice(0, 6);

  return (
    <main>
      <ScrollHeaderClass />

      {/* ══════════════════════ 1. HERO ══════════════════════ */}
      <div className="hero-wrap">
        <section className="hero">
          <video
            className="hero-bg-video"
            src={business.showreelVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          />
          <div className="hero-bg-frost" aria-hidden />
          <div className="hero-leaves" aria-hidden>
            <span className="hero-leaf hl-1" />
            <span className="hero-leaf hl-2" />
            <span className="hero-leaf hl-3" />
            <span className="hero-leaf hl-4" />
          </div>

          <HeroIntro>
            <div className="hero-kicker">
              <i />
              Delhi NCR gardens that last past handover
            </div>
            <SplitText as="h1" text="Outdoor space you actually want to sit in" manual />
            <p>
              {business.contactName} and the {business.shortName} studio design, plant and maintain
              landscapes that hold their beauty through Delhi heat, monsoon and winter — built
              for the way your family actually uses the space.
            </p>
            <div className="hero-actions">
              <Link href="/quote" className="btn btn-green btn-pulse">
                Book a free site visit <Arrow />
              </Link>
              <WatchButton title="Watch Our Story" subtitle="See how we bring nature to life" />
            </div>
            <HeroMotion />
          </HeroIntro>

          <div className="hero-scroll" aria-hidden>
            <div className="hero-scroll-mouse" />
          </div>
        </section>
      </div>

      <TrustBar />

      {/* ══════════════════════ 2. ABOUT ══════════════════════ */}
      <AboutSectionMotion>
        <div className="wrap about-grid">
          <div className="about-copy-anim">
            <div className="eyebrow">About Hind Landscape Co.</div>
            <h2>Three decades of crafting India&apos;s finest outdoor spaces</h2>
            <p className="lede">
              Led by {business.contactName}, our studio of landscape architects, horticulturists
              and engineers has designed master plans for homes, campuses, hotels and commercial
              sites across Delhi NCR and India.
            </p>
            <div className="about-cta-row">
              <Link href="/about" className="btn btn-green">
                Meet the Team <Arrow />
              </Link>
              <Link href="/quote" className="btn btn-outline">
                Free Site Visit
              </Link>
            </div>
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
          <div className="about-video-anim fill">
            <VideoCard />
          </div>
        </div>
      </AboutSectionMotion>

      {/* ══════════════════════ 4. SERVICES (story stack) ══════════════════════ */}
      <section className="services services-v3" id="services">
        <div className="wrap">
          <FadeUp>
            <div className="svc-story-head">
              <div className="eyebrow">Our Services</div>
              <h2>Everything your garden needs — scoped clearly</h2>
              <p className="lede">
                From first sketch to irrigation and evening light — six core services we deliver
                across Delhi NCR homes, farmhouses and commercial sites.
              </p>
            </div>
          </FadeUp>

          <ServicesStoryMotion>
            {homeServices.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`svc-story${i % 2 === 1 ? " is-flip" : ""}`}
              >
                <div className="svc-story-media">
                  <img src={service.image} alt={service.title} />
                  <span className="svc-story-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="svc-story-body">
                  <span className="svc-story-icon" aria-hidden>
                    <ServiceGlyph slug={service.slug} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.detail || service.text}</p>
                  <span className="svc-story-cta">
                    Explore this service <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </ServicesStoryMotion>

          <FadeUp>
            <div className="svc-story-foot">
              <p>Need something else — terrace, vertical garden, or AMC?</p>
              <Link href="/services" className="btn btn-green">
                View all services <Arrow />
              </Link>
            </div>
          </FadeUp>
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

      {/* ══════════════════════ 6. WHY US (bento) ══════════════════════ */}
      <WhyUsMotion>
        <div className="why-us-v2-bg" aria-hidden />
        <div className="wrap">
          <div className="why-us-head">
            <div className="eyebrow">Why Choose Us</div>
            <h2>A studio that stays with every project</h2>
            <p className="lede">From the first site walk to handover and AMC — named plants, clear scopes, no vague quotes.</p>
          </div>
          <div className="why-bento">
            {([
              { icon: "award",     title: "30+ Years of Practice",   text: "Three decades of Indian urban landscaping under Ajay Kumar's leadership.", lead: true },
              { icon: "weather",   title: "Climate-Aware Design",     text: "Every plan accounts for Delhi heat, monsoon stress and winter maintenance reality." },
              { icon: "clipboard", title: "Transparent Quoting",      text: "Named plant lists, zone-wise irrigation scope and line-by-line costs — always in writing.", accent: true },
              { icon: "tool",      title: "Post-Handover Support",    text: "Optional AMC keeps your garden green through every season, not just on handover day." },
              { icon: "map",       title: "Pan-India Capability",     text: "Delhi NCR primary — we mobilise across India for suitable project scopes." },
              { icon: "team",      title: "30+ Experts On-Site",      text: "Architects, horticulturists and engineers — not subcontracted labour.", wide: true },
            ] as const).map((item, i) => (
              <article
                key={item.title}
                className={[
                  "why-card",
                  "lead" in item && item.lead ? "why-card-lead" : "",
                  "accent" in item && item.accent ? "why-card-accent" : "",
                  "wide" in item && item.wide ? "why-card-wide" : "",
                ].filter(Boolean).join(" ")}
              >
                <span className="why-card-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="why-card-icon" aria-hidden>
                  <FeatureIcon name={item.icon} size={22} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </WhyUsMotion>

      {/* ══════════════════════ 8. PROCESS ══════════════════════ */}
      <ProcessMotion>
        <div className="wrap">
          <div className="process-head">
            <div className="eyebrow">How It Works</div>
            <h2>Simple, calm, clear</h2>
            <p className="lede">
              You always know what happens next — and what you&apos;re approving.
            </p>
          </div>
          <div className="process-timeline">
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
      </ProcessMotion>

      {/* ══════════════════════ 9. TESTIMONIALS ══════════════════════ */}
      <TestimonialSlider />

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
