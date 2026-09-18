import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SeoCta } from "@/components/SeoCta";
import { FadeUp } from "@/components/Animate";
import { blogCategories, blogPosts } from "@/content/blog/posts";
import { getBlogCoverImage } from "@/lib/blogImages";
import { indianStatesCovered, locations, locationsByState } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";
import { Arrow, FeatureIcon, MapIcon } from "@/components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Landscaping Guides & Local Knowledge | India Cities & States",
  description:
    "Hind Landscape Co. guides on garden design, lawn care, irrigation and city-specific landscaping for 60+ Indian cities across 25+ states — practical, local, clear.",
  path: "/blog",
});

function catId(cat: string) {
  return `cat-${cat.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase()}`;
}

const catIcons: Record<string, string> = {
  "Delhi NCR Guides": "map",
  "Design":           "design",
  "Lawn Care":        "lawn",
  "Irrigation":       "irrigation",
  "Maintenance":      "tool",
  "Cost & Planning":  "clipboard",
  "Commercial":       "team",
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  const [hero, second, third, ...rest] = sorted;
  const sideTwo = [second, third];
  const latestMore = rest.slice(0, 4);
  const byState = locationsByState();
  const topCities = locations.filter((l) => l.primary || l.locality).slice(0, 12);

  return (
    <main>
      {/* ══════ HERO ══════ */}
      <section className="blog-hero">
        <div className="blog-hero-bg" aria-hidden />
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Blogs" }]} />
          <div className="eyebrow" style={{ color: "#9be0a8" }}>Guides &amp; Insights</div>
          <h1 className="blog-hero-h1">Landscaping knowledge<br />for every Indian city</h1>
          <p className="blog-hero-sub">
            Garden design, lawn care, irrigation — plus deep local guides for{" "}
            {indianStatesCovered.length}+ states and {locations.length}+ cities across India.
          </p>
          <div className="hero-cta-row">
            <Link href="/quote" className="btn btn-green btn-pulse">Plan a garden <Arrow /></Link>
            <Link href="/locations" className="btn btn-outline">Browse cities</Link>
          </div>
          <div className="blog-hero-stats">
            <span><strong>{blogPosts.length}+</strong> Articles</span>
            <span className="blog-hero-stat-sep" aria-hidden>·</span>
            <span><strong>{locations.length}+</strong> Cities</span>
            <span className="blog-hero-stat-sep" aria-hidden>·</span>
            <span><strong>{indianStatesCovered.length}+</strong> States covered</span>
          </div>
          <nav className="blog-cat-nav" aria-label="Article categories">
            {blogCategories.map((cat) => (
              <a key={cat} href={`#${catId(cat)}`} className="blog-cat-pill">
                <FeatureIcon name={catIcons[cat] ?? "leaf"} size={14} /> {cat}
              </a>
            ))}
            <a href="#india-coverage" className="blog-cat-pill blog-cat-pill-geo">
              <MapIcon size={14} /> India Map
            </a>
          </nav>
        </div>
      </section>

      {/* ══════ EDITORIAL LEAD ══════ */}
      <section className="page-section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <FadeUp>
            <div className="blog-editorial-label">
              <div className="eyebrow">Featured Article</div>
              <Link href="/blog" className="blog-see-all-link">
                View all articles <Arrow />
              </Link>
            </div>
          </FadeUp>

          {/* Big feature + 2 side */}
          <div className="blog-editorial-row">
            <FadeUp>
              <Link href={`/blog/${hero.slug}`} className="blog-feature-card">
                <div className="blog-feature-img">
                  <img src={getBlogCoverImage(hero)} alt={hero.title} />
                  <div className="blog-feature-overlay" />
                  <span className="blog-feature-num">01</span>
                </div>
                <div className="blog-feature-body">
                  <span className="blog-cat-badge">{hero.category}</span>
                  <h2 className="blog-feature-title">{hero.title}</h2>
                  <p className="blog-feature-desc">{hero.description}</p>
                  <div className="blog-feature-foot">
                    <span className="blog-card-meta">{hero.publishedAt} · {hero.readingMinutes} min read</span>
                    <span className="blog-read-cta">Read article <Arrow /></span>
                  </div>
                </div>
              </Link>
            </FadeUp>

            <div className="blog-editorial-side">
              {sideTwo.map((post, i) => (
                <FadeUp key={post.slug} delay={(i + 1) * 80}>
                  <Link href={`/blog/${post.slug}`} className="blog-side-card">
                    <div className="blog-side-img">
                      <img src={getBlogCoverImage(post)} alt={post.title} />
                      <span className="blog-side-num">0{i + 2}</span>
                    </div>
                    <div className="blog-side-body">
                      <span className="blog-cat-badge">{post.category}</span>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                      <span className="blog-card-meta">{post.publishedAt} · {post.readingMinutes} min</span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ MORE LATEST ══════ */}
      <section className="page-section">
        <div className="wrap">
          <FadeUp>
            <h2 className="blog-section-h">More Recent</h2>
          </FadeUp>
          <div className="blog-strip-grid">
            {latestMore.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 55}>
                <Link href={`/blog/${post.slug}`} className="blog-strip-card">
                  <div className="blog-strip-img">
                    <img src={getBlogCoverImage(post)} alt={post.title} />
                  </div>
                  <div className="blog-strip-body">
                    <span className="blog-cat-badge">{post.category}</span>
                    <h3>{post.title}</h3>
                    <span className="blog-card-meta">{post.publishedAt} · {post.readingMinutes} min</span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ INDIA COVERAGE HUB ══════ */}
      <section id="india-coverage" className="blog-india-hub">
        <div className="wrap">
          <FadeUp>
            <div className="blog-india-top">
              <div>
                <div className="eyebrow" style={{ color: "#9be0a8" }}>India Coverage Hub</div>
                <h2>Find guides for your city</h2>
                <p>
                  {locations.length}+ location pages covering every major Indian city, district and state — so anyone searching landscaping in their area finds the right guide.
                </p>
              </div>
              <div className="blog-india-kpis">
                <div className="blog-india-kpi">
                  <strong>{locations.length}+</strong>
                  <span>Locations</span>
                </div>
                <div className="blog-india-kpi">
                  <strong>{indianStatesCovered.length}+</strong>
                  <span>States</span>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="blog-india-quicklinks">
              <Link href="/locations">All cities &amp; localities</Link>
              <Link href="/locations#states">Browse by state</Link>
              <Link href="/landscaping-company-india">Pan-India landscaping</Link>
              <Link href="/landscaping-cost-guide">Cost guide</Link>
              {topCities.slice(0, 6).map((c) => (
                <Link key={c.slug} href={`/locations/${c.slug}`}>{c.name}</Link>
              ))}
            </div>
          </FadeUp>

          <div className="blog-state-grid">
            {byState.slice(0, 8).map(([state, cities]) => (
              <FadeUp key={state}>
                <div className="blog-state-card">
                  <h3 className="blog-state-name">{state}</h3>
                  <div className="blog-state-cities">
                    {cities.map((c) => (
                      <Link key={c.slug} href={`/locations/${c.slug}`}>{c.name}</Link>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div style={{ marginTop: 28 }}>
              <Link href="/locations#states" className="btn btn-ghost">
                Browse all states &amp; cities <Arrow />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════ CATEGORY SECTIONS ══════ */}
      {blogCategories.map((cat, catIdx) => {
        const items = sorted.filter((p) => p.category === cat);
        const hero3 = items.slice(0, 3);
        const chips = items.slice(3);
        const bgAlt = catIdx % 2 === 1;
        return (
          <section
            key={cat}
            id={catId(cat)}
            className={`blog-cat-section${bgAlt ? " blog-cat-alt" : ""}`}
          >
            <div className="wrap">
              <FadeUp>
                <div className="blog-cat-hdr">
                  <div>
                    <span className="blog-cat-icon" aria-hidden>
                      <FeatureIcon name={catIcons[cat] ?? "leaf"} size={20} />
                    </span>
                    <h2 className="blog-cat-title">{cat}</h2>
                  </div>
                  <span className="blog-cat-count">{items.length} articles</span>
                </div>
              </FadeUp>

              <div className="blog-grid">
                {hero3.map((post, i) => (
                  <FadeUp key={post.slug} delay={i * 60}>
                    <Link href={`/blog/${post.slug}`} className="blog-card">
                      <div className="blog-card-img">
                        <img src={getBlogCoverImage(post)} alt={post.title} loading="lazy" />
                      </div>
                      <div className="blog-card-body">
                        <span className="blog-cat-badge">{post.category}</span>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <span className="blog-card-meta">
                          {post.publishedAt} · {post.readingMinutes} min read
                        </span>
                      </div>
                    </Link>
                  </FadeUp>
                ))}
              </div>

              {chips.length > 0 && (
                <FadeUp>
                  <div className="blog-chips-row">
                    <span className="blog-chips-label">More in {cat}:</span>
                    {chips.slice(0, 12).map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-chip">
                        {post.title}
                      </Link>
                    ))}
                    {chips.length > 12 && (
                      <span className="blog-chip blog-chip-muted">+{chips.length - 12} more</span>
                    )}
                  </div>
                </FadeUp>
              )}
            </div>
          </section>
        );
      })}

      <SeoCta />
    </main>
  );
}
