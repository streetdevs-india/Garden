import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SeoCta } from "@/components/SeoCta";
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
    title: `Greenly vs ${c.name} | How to Choose a Landscaper`,
    description: `Compare landscaping approaches when evaluating ${c.name}. A buyer checklist from Greenly — factual, practical, no fake claims.`,
    path: `/vs/${c.slug}`,
  });
}

export default async function VsPage({ params }: Props) {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Compare" }, { name: `vs ${c.name}` }]} />
          <div className="eyebrow">Buyer guide</div>
          <h1>Greenly and {c.name}</h1>
          <p>
            Searching for {c.name}? Use this checklist to compare any landscaping company fairly — including Greenly — before you appoint a team.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="wrap seo-prose">
          <h2>What {c.name} is known for</h2>
          <p>{c.focus}</p>
          <p>
            Their public site (external link):{" "}
            <a href={c.site} rel="noopener noreferrer nofollow" target="_blank">
              {c.site}
            </a>
          </p>
          <h2>When Greenly is a strong fit</h2>
          <p>{c.whenGreenlyFits}</p>
          <h2>Checklist for any shortlist</h2>
          <ul>
            {c.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Next step: review Greenly <Link href="/services">services</Link>,{" "}
            <Link href="/locations/delhi-ncr">Delhi NCR coverage</Link>, and{" "}
            <Link href="/gallery">gallery</Link> — then request a quote with your site details.
          </p>
          <Link href="/quote" className="btn btn-green">
            Get a Free Quote <Arrow />
          </Link>
        </div>
      </section>
      <SeoCta title="Compare with a free Greenly assessment" />
    </main>
  );
}
