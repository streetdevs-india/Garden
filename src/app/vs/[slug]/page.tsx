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
    title: `Hind Landscape Co. vs ${c.name} | Alternative in Delhi NCR`,
    description: `Comparing ${c.name}? Use this buyer checklist from Hind Landscape Co. — factual comparison for landscaping in Delhi NCR. No fake claims.`,
    path: `/vs/${c.slug}`,
    keywords: c.keywords,
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
          <SplitText as="h1" text={`Hind Landscape Co. vs ${c.name}`} />
          <p>
            Searching for {c.name}, a {c.name} alternative in Delhi, or how Hind Landscape Co. compares?
            Use this checklist to evaluate any landscaping company fairly before you appoint a team.
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
            <ul>
              {c.differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>When {c.name} may fit better</h2>
            <p>{c.whenTheyFit}</p>
            <p>
              Fair shortlisting beats brand loyalty. Ask every vendor — including Hind Landscape Co. — for scope clarity,
              plant lists, irrigation plans and AMC terms in writing.
            </p>

            <h2>Checklist for any shortlist</h2>
            <ul>
              {c.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Next steps with Hind Landscape Co.</h2>
            <p>
              Review Hind Landscape Co. <Link href="/services">services</Link>,{" "}
              <Link href="/locations/delhi-ncr">Delhi NCR coverage</Link>,{" "}
              <Link href="/landscaping-services-delhi">landscaping services in Delhi</Link>,{" "}
              <Link href="/commercial-landscaping-india">commercial landscaping in India</Link>, and{" "}
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
