import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { blogPosts } from "@/content/blog/posts";
import { locations } from "@/lib/locations";
import { testimonials, works } from "@/lib/site";
import {
  audienceCards,
  homeFaqs,
  processSteps,
  promises,
  trustPoints,
} from "@/lib/psychology";
import { FadeUp } from "@/components/Animate";

/* ── small inline SVG icons for audience cards ── */
function HomeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M5 18L20 5l15 13v17H5V18z" stroke="currentColor" strokeWidth="2.2" fill="rgba(255,255,255,0.15)" strokeLinejoin="round" strokeLinecap="round"/>
      <rect x="14" y="25" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="2" fill="rgba(255,255,255,0.12)"/>
      <rect x="17.5" y="29" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function FarmhouseIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M3 21L14 8 20 14 26 8 37 21v14H3V21z" stroke="currentColor" strokeWidth="2.2" fill="rgba(255,255,255,0.14)" strokeLinejoin="round"/>
      <path d="M16 35V26h8v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="11" r="5" stroke="currentColor" strokeWidth="1.8" fill="rgba(255,255,255,0.1)"/>
      <path d="M32 6v10M27 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function HotelIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="8" y="5" width="24" height="31" rx="2" stroke="currentColor" strokeWidth="2.2" fill="rgba(255,255,255,0.13)"/>
      <path d="M14 12h4M22 12h4M14 18h4M22 18h4M14 24h4M22 24h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <rect x="16" y="29" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="rgba(255,255,255,0.15)"/>
    </svg>
  );
}
function TerraceIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="6" y="28" width="28" height="5" rx="2.5" stroke="currentColor" strokeWidth="2.2" fill="rgba(255,255,255,0.15)"/>
      <path d="M13 28V20M20 28V18M27 28V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M20 18C20 18 14 14 14 10a6 6 0 0 1 12 0c0 4-6 8-6 8z" stroke="currentColor" strokeWidth="2" fill="rgba(255,255,255,0.12)"/>
    </svg>
  );
}

const audienceIcons = [<HomeIcon key="home" />, <FarmhouseIcon key="farm" />, <HotelIcon key="hotel" />, <TerraceIcon key="terrace" />];
const audienceBgs = [
  "/images/service-design.jpg",
  "/images/work-farmhouse.jpg",
  "/images/work-hotel.jpg",
  "/images/gallery-path.jpg",
];

/* ────────────────────────────── COMPONENTS ────────────────────────────── */

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Trusted results">
      <div className="wrap trust-bar-grid">
        {trustPoints.map((item) => (
          <div className="trust-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section className="psy-section audience-section">
      <div className="wrap wrap-wide">
        <FadeUp>
          <div className="psy-head audience-head">
            <div className="eyebrow">Who we help</div>
            <h2>Outdoor spaces for how you live</h2>
            <p className="lede">
              A city villa, a weekend farmhouse, a hotel campus or a high-rise terrace —
              each property asks for a different garden. Pick the closest fit and we&apos;ll
              tailor planting, irrigation and upkeep to how the space is actually used.
            </p>
            <p className="audience-swipe-hint" aria-hidden>Swipe to browse →</p>
          </div>
        </FadeUp>
        <div className="audience-grid">
          {audienceCards.map((card, i) => (
            <FadeUp key={card.title} delay={i * 65} className="fill audience-card-wrap">
              <Link
                href={card.href}
                className="audience-card-v2"
                style={{ backgroundImage: `url(${audienceBgs[i]})` }}
              >
                <div className="audience-card-top">
                  <span className="audience-card-icon" aria-hidden>
                    {audienceIcons[i]}
                  </span>
                  <span className="audience-card-label">{card.label}</span>
                </div>
                <div className="audience-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className="audience-card-link">Explore <Arrow /></span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="psy-section psy-muted">
      <div className="wrap">
        <FadeUp>
          <div className="psy-head" style={{ textAlign: "center", maxWidth: 480, margin: "0 auto 48px" }}>
            <div className="eyebrow">How it works</div>
            <h2>A calm path from first visit to living garden</h2>
          </div>
        </FadeUp>
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
    </section>
  );
}

export function ProjectsTeaser() {
  return (
    <section className="psy-section psy-muted">
      <div className="wrap">
        <div className="psy-head row">
          <div>
            <div className="eyebrow">Selected work</div>
            <h2>Spaces people actually use</h2>
          </div>
          <Link href="/gallery" className="btn btn-outline">
            View gallery <Arrow />
          </Link>
        </div>
        <div className="projects-teaser">
          {works.map((item) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonialsImages = [
  "/images/service-design.jpg",
  "/images/work-farmhouse.jpg",
  "/images/work-hotel.jpg",
];

export function TestimonialsTeaser({ limit = 3 }: { limit?: number }) {
  return (
    <section className="psy-section">
      <div className="wrap">
        <FadeUp>
          <div className="psy-head row">
            <div>
              <div className="eyebrow">Client Stories</div>
              <h2>Gardens people stay in</h2>
            </div>
            <Link href="/testimonials" className="btn btn-outline">
              More stories <Arrow />
            </Link>
          </div>
        </FadeUp>
        <div className="t-grid">
          {testimonials.slice(0, limit).map((item, i) => (
            <FadeUp key={item.name} delay={i * 80}>
              <article
                className="t-card t-card-img"
                style={{ backgroundImage: `url(${testimonialsImages[i % testimonialsImages.length]})` }}
              >
                <div className="t-card-overlay" />
                <div className="t-card-inner">
                  <span className="t-card-stars">★★★★★</span>
                  <p>&ldquo;{item.quote}&rdquo;</p>
                  <strong>{item.name}</strong>
                  <span>{item.place}</span>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PromiseSection() {
  return (
    <section className="psy-section promise-section">
      <div className="wrap">
        <FadeUp>
          <div className="psy-head">
            <div className="eyebrow">Our promise</div>
            <h2>Peace of mind built into the work</h2>
            <p className="lede">
              Trust grows when risk feels managed. Every project comes with these commitments in writing.
            </p>
          </div>
        </FadeUp>
        <div className="promise-grid">
          {promises.map((item, i) => (
            <FadeUp key={item.title} delay={i * 80}>
              <article className="promise-card-v2">
                <div className="promise-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AreasTeaser() {
  const primary = locations.filter((l) => l.primary);
  return (
    <section className="psy-section psy-muted">
      <div className="wrap">
        <div className="psy-head row">
          <div>
            <div className="eyebrow">Service areas</div>
            <h2>Rooted in Delhi NCR — ready across India</h2>
          </div>
          <Link href="/locations" className="btn btn-outline">
            All locations <Arrow />
          </Link>
        </div>
        <div className="areas-row">
          {primary.map((loc) => (
            <Link key={loc.slug} href={`/locations/${loc.slug}`} className="area-chip">
              {loc.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFaqSection() {
  return (
    <section className="psy-section">
      <div className="wrap">
        <div className="psy-head">
          <div className="eyebrow">Questions</div>
          <h2>Answers before you commit</h2>
        </div>
        <div className="faq-list">
          {homeFaqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogTeaser() {
  const latest = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)).slice(0, 3);
  return (
    <section className="psy-section psy-muted">
      <div className="wrap">
        <div className="psy-head row">
          <div>
            <div className="eyebrow">From the blog</div>
            <h2>Ideas that make decisions easier</h2>
          </div>
          <Link href="/blog" className="btn btn-outline">
            All articles <Arrow />
          </Link>
        </div>
        <div className="seo-link-grid">
          {latest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="seo-link-card">
              <strong>{post.title}</strong>
              <span>{post.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MidCta({
  title = "Not sure where to start?",
  text = "Send a few photos and your locality. We'll suggest a sensible next step — design, install or maintenance.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mid-cta">
      <div className="wrap mid-cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="mid-cta-actions">
          <Link href="/quote" className="btn btn-light">
            Get a Free Quote <Arrow />
          </Link>
          <Link href="/contact" className="btn btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}>
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SeoCta({
  title = "Ready to create your dream garden?",
  text = "Tell us about your outdoor space — homes, farmhouses, hotels and commercial sites across Delhi NCR and India.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="seo-cta">
      <div className="wrap seo-cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link href="/quote" className="btn btn-green">
          Get a Free Quote <Arrow />
        </Link>
      </div>
    </section>
  );
}
