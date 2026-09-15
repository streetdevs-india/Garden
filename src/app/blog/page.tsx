import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SeoCta } from "@/components/SeoCta";
import { FadeUp } from "@/components/Animate";
import { blogCategories, blogPosts } from "@/content/blog/posts";
import { getBlogCoverImage } from "@/lib/blogImages";
import { buildMetadata } from "@/lib/seo";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Landscaping Blog | Garden Design, Lawn Care & Delhi NCR Guides",
  description:
    "Greenly landscaping blog — garden design, lawn care, irrigation, terrace gardens, Delhi NCR guides and commercial outdoor tips.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  const latest  = sorted.slice(0, 6);

  return (
    <main>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Blog" }]} />
          <div className="eyebrow">Blog</div>
          <h1>Landscaping guides for India</h1>
          <p>
            Practical articles on garden design, lawn care, irrigation and Delhi NCR
            landscaping — written to help you make clearer decisions.
          </p>
        </div>
      </section>

      {/* ── LATEST ARTICLES ── */}
      <section className="page-section">
        <div className="wrap">
          <FadeUp>
            <div className="section-header" style={{ marginBottom: 28 }}>
              <h2 style={{ margin: 0, fontSize: 30 }}>Latest Articles</h2>
              <div className="blog-cats" style={{ margin: 0 }}>
                {blogCategories.slice(0, 5).map((cat) => (
                  <a
                    key={cat}
                    href={`#cat-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                    className="blog-cat-chip"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>

          <div className="blog-grid">
            {latest.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 60}>
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-img">
                    <img src={getBlogCoverImage(post)} alt={post.title} />
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
        </div>
      </section>

      {/* ── BY CATEGORY ── */}
      {blogCategories.map((cat) => {
        const items = sorted.filter((p) => p.category === cat);
        return (
          <section
            key={cat}
            id={`cat-${cat.replace(/\s+/g, "-").toLowerCase()}`}
            className="page-section"
            style={{ paddingTop: 0, paddingBottom: 48 }}
          >
            <div className="wrap">
              <FadeUp>
                <h2
                  style={{
                    fontSize: 26,
                    marginBottom: 20,
                    paddingTop: 32,
                    borderTop: "1px solid var(--line)",
                  }}
                >
                  {cat}
                </h2>
              </FadeUp>
              <div className="blog-grid">
                {items.slice(0, 6).map((post, i) => (
                  <FadeUp key={post.slug} delay={i * 50}>
                    <Link href={`/blog/${post.slug}`} className="blog-card">
                      <div className="blog-card-img">
                        <img src={getBlogCoverImage(post)} alt={post.title} />
                      </div>
                      <div className="blog-card-body">
                        <span className="blog-cat-badge">{post.category}</span>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <span className="blog-card-meta">
                          {post.publishedAt} · {post.readingMinutes} min
                        </span>
                      </div>
                    </Link>
                  </FadeUp>
                ))}
              </div>

              {items.length > 6 && (
                <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {items.slice(6).map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="blog-cat-chip"
                      style={{ textDecoration: "none", padding: "7px 14px" }}
                    >
                      {post.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      <SeoCta />
    </main>
  );
}
