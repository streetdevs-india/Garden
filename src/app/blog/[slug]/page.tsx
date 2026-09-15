import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { FadeUp } from "@/components/Animate";
import { Arrow } from "@/components/Icons";
import { blogPosts, getPost } from "@/content/blog/posts";
import { getBlogCoverImage } from "@/lib/blogImages";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: getBlogCoverImage(post),
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const coverImg = getBlogCoverImage(post);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: absoluteUrl(coverImg),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: "Greenly" },
    publisher: { "@type": "Organization", name: "Greenly", url: absoluteUrl("/") },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <JsonLd data={articleLd} />
      <JsonLd data={faqLd} />

      {/* ── HERO IMAGE BANNER ── */}
      <div
        className="blog-post-hero"
        style={{ backgroundImage: `url(${coverImg})` }}
      >
        <div className="wrap blog-post-hero-copy">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: post.title }]} />
          <div className="blog-cat-badge" style={{ marginTop: 12 }}>{post.category}</div>
          <h1
            style={{
              margin: "10px 0 10px",
              fontSize: "clamp(26px, 4vw, 44px)",
              color: "#fff",
              maxWidth: 700,
              lineHeight: 1.15,
            }}
          >
            {post.title}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", margin: 0, fontSize: 13.5 }}>
            {post.publishedAt} · {post.readingMinutes} min read
          </p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <article>
        <section className="page-section">
          <div className="wrap blog-post-layout">
            {/* Main prose */}
            <div className="blog-prose">
              <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.75, marginBottom: 32, borderLeft: "4px solid var(--green)", paddingLeft: 20 }}>
                {post.description}
              </p>

              {post.sections.map((section) => (
                <FadeUp key={section.heading}>
                  <section style={{ marginBottom: 36 }}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((p) => (
                      <p key={p.slice(0, 32)}>{p}</p>
                    ))}
                  </section>
                </FadeUp>
              ))}

              {/* Quick links */}
              <div
                style={{
                  background: "var(--green-light)",
                  borderRadius: 16,
                  padding: "20px 22px",
                  marginTop: 36,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: 700, color: "var(--green-deep)" }}>Related:</span>
                {post.serviceSlug && (
                  <Link href={`/services/${post.serviceSlug}`} className="btn btn-green" style={{ padding: "7px 14px", fontSize: 13 }}>
                    Our service <Arrow />
                  </Link>
                )}
                {post.locationSlug && (
                  <Link href={`/locations/${post.locationSlug}`} className="btn btn-outline" style={{ padding: "7px 14px", fontSize: 13 }}>
                    Service area <Arrow />
                  </Link>
                )}
                <Link href="/quote" className="btn btn-outline" style={{ padding: "7px 14px", fontSize: 13 }}>
                  Free quote <Arrow />
                </Link>
              </div>

              {/* FAQs */}
              <div style={{ marginTop: 40 }}>
                <h2>FAQs</h2>
                <div className="faq-list">
                  {post.faqs.map((f) => (
                    <details key={f.q} className="faq-item">
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* CTA card */}
              <div
                className="blog-sidebar-card"
                style={{ background: "linear-gradient(135deg, #062312 0%, #0e3d1f 100%)", border: "none", color: "#fff" }}
              >
                <h4 style={{ color: "#fff", marginBottom: 10 }}>Ready to start your garden?</h4>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 13.5, lineHeight: 1.55, margin: "0 0 16px" }}>
                  Share photos of your space — we reply with a practical next step.
                </p>
                <Link href="/quote" className="btn btn-green" style={{ width: "100%", justifyContent: "center" }}>
                  Get a Free Quote <Arrow />
                </Link>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div className="blog-sidebar-card">
                  <h4>More in {post.category}</h4>
                  {related.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-sidebar-link">
                      <img src={getBlogCoverImage(p)} alt={p.title} />
                      <span>{p.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </section>
      </article>

      {/* ── RELATED CARDS (bottom) ── */}
      {related.length > 0 && (
        <section className="page-section" style={{ paddingTop: 0, background: "var(--bg-2)" }}>
          <div className="wrap">
            <h2 style={{ marginBottom: 24 }}>More from our blog</h2>
            <div className="blog-grid">
              {related.map((p, i) => (
                <FadeUp key={p.slug} delay={i * 70}>
                  <Link href={`/blog/${p.slug}`} className="blog-card">
                    <div className="blog-card-img">
                      <img src={getBlogCoverImage(p)} alt={p.title} />
                    </div>
                    <div className="blog-card-body">
                      <span className="blog-cat-badge">{p.category}</span>
                      <h3>{p.title}</h3>
                      <p>{p.description}</p>
                      <span className="blog-card-meta">
                        {p.publishedAt} · {p.readingMinutes} min
                      </span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
