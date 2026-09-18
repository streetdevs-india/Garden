import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SeoCta } from "@/components/SeoCta";
import { FadeUp, SplitText } from "@/components/Animate";
import { Arrow } from "@/components/Icons";
import { competitors, getCompetitor } from "@/lib/competitors";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) return {};
  return buildMetadata({
    title: `Hind Landscape Co. vs ${c.name} | How to Choose a Landscaper`,
    description: `Compare landscaping approaches when evaluating ${c.name}. A buyer checklist from Hind Landscape Co. — factual, practical, no fake claims.`,
    path: `/vs/${c.slug}`,
  });
}

export default async function VsPage({ params }: Props) {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) notFound();

  return (
    <main>
      <section className="page-hero" style={{ "--hero-img": "url('/images/work-landscape.jpg')" } as React.CSSProperties}>
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Compare" }, { name: `vs ${c.name}` }]} />
          <div className="eyebrow">Buyer guide</div>
          <SplitText as="h1" text={`Hind Landscape Co. and ${c.name}`} />
          <p>
            Searching for {c.name}? Use this checklist to compare any landscaping company fairly — including Hind Landscape Co. — before you appoint a team.
          </p>
          <div className="hero-cta-row">
            <Link href="/quote" className="btn btn-green btn-pulse">Get a Free Quote <Arrow /></Link>
            <Link href="/contact" className="btn btn-outline">Talk to the studio</Link>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="wrap seo-prose">
          <FadeUp>
            <h2>What {c.name} is known for</h2>
            <p>{c.focus}</p>
            <p>
              Their public site (external link):{" "}
              <a href={c.site} rel="noopener noreferrer nofollow" target="_blank">
                {c.site}
              </a>
            </p>
            <h2>When Hind Landscape Co. is a strong fit</h2>
            <p>{c.whenHindFits}</p>
            <h2>Checklist for any shortlist</h2>
            <ul>
              {c.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Next step: review Hind Landscape Co. <Link href="/services">services</Link>,{" "}
              <Link href="/locations/delhi-ncr">Delhi NCR coverage</Link>, and{" "}
              <Link href="/gallery">gallery</Link> — then request a quote with your site details.
            </p>
            <Link href="/quote" className="btn btn-green">
              Get a Free Quote <Arrow />
            </Link>
          </FadeUp>
        </div>
      </section>
      <SeoCta title="Compare with a free Hind Landscape Co. assessment" />
    </main>
  );
}
