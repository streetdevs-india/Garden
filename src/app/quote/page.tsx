import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/SiteChrome";
import { quoteAssurances, processSteps, homeFaqs } from "@/lib/psychology";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Arrow } from "@/components/Icons";
import { FadeUp, Reveal, SplitText } from "@/components/Animate";
import { testimonials } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Get a Free Quote | Dream Garden Assessment",
  description:
    "Request a free Hind Landscape Co. landscaping quote. Share your locality and photos — we reply with a clear next step for design, install or maintenance.",
  path: "/quote",
});

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>;
}) {
  const { sent } = await searchParams;

  return (
    <main>
      <section className="page-hero" style={{ "--hero-img": "url('/images/service-design.jpg')" } as React.CSSProperties}>
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Get a Quote" }]} />
          <div className="eyebrow">Free Quote</div>
          <SplitText as="h1" text="Ready to create your dream garden?" />
          <p>Tell us about the space — design, lawn, lighting or a full landscape. We reply with a clear next step.</p>
          <div className="hero-cta-row">
            <Link href="#quote-form" className="btn btn-green btn-pulse">Start the form <Arrow /></Link>
            <Link href="/contact" className="btn btn-outline">Talk to the studio</Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap quote-page-grid">
          <Reveal variant="left">
            <div id="quote-form">
              {sent && (
                <div className="note" style={{ marginBottom: 20, borderRadius: 16 }}>
                  ✓ Thank you — we have your request and will be in touch about the garden.
                </div>
              )}
              <QuoteForm />
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div>
              {/* Steps */}
              <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 20, padding: "24px 22px", marginBottom: 16 }}>
                <h3 style={{ margin: "0 0 18px", fontSize: 17 }}>What happens next</h3>
                <ol style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 14 }}>
                  {processSteps.slice(0, 3).map((s) => (
                    <li key={s.step} style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.5 }}>
                      <strong style={{ display: "block", color: "var(--ink)", marginBottom: 2 }}>{s.title}</strong>
                      {s.text}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Assurances */}
              <div style={{ background: "var(--green-light)", borderRadius: 18, padding: "20px 22px", marginBottom: 16 }}>
                <h3 style={{ margin: "0 0 14px", fontSize: 15, color: "var(--green-deep)" }}>Safe to ask</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {quoteAssurances.map((item) => (
                    <li key={item} style={{ color: "var(--green-deep)", fontSize: 13.5, display: "flex", gap: 8 }}>
                      <span style={{ color: "var(--green)", fontWeight: 700 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial snippet */}
              <div style={{ background: "var(--ink)", borderRadius: 18, padding: "20px 22px", color: "#fff" }}>
                <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.82)", fontStyle: "italic", margin: "0 0 12px", lineHeight: 1.65 }}>
                  &ldquo;{testimonials[0].quote}&rdquo;
                </p>
                <strong style={{ display: "block", color: "#fff", fontSize: 13 }}>{testimonials[0].name}</strong>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>{testimonials[0].place}</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* FAQ */}
        <div className="wrap" style={{ marginTop: 48 }}>
          <FadeUp>
            <h2 style={{ marginBottom: 20 }}>Before you hit send</h2>
          </FadeUp>
          <div className="faq-list">
            {homeFaqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <details className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
