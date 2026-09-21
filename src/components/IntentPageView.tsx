import Link from "next/link";
import { SeoLanding } from "@/components/SeoLanding";
import type { IntentPage } from "@/lib/intent";
import { getClientServices, getService } from "@/lib/site";
import { getLocation, primaryLocations } from "@/lib/locations";

export function IntentPageView({ page }: { page: IntentPage }) {
  const relatedServiceItems = (page.relatedServices ?? [])
    .map((slug) => getService(slug))
    .filter(Boolean);
  const relatedLocationItems = (page.relatedLocations ?? [])
    .map((slug) => getLocation(slug))
    .filter(Boolean);
  const serviceCards =
    relatedServiceItems.length > 0
      ? relatedServiceItems
      : getClientServices().slice(0, 8);

  return (
    <SeoLanding
      eyebrow={page.eyebrow}
      title={page.title}
      lede={page.intro}
      crumbs={[{ name: "Explore", href: "/" }, { name: page.title }]}
      faqs={page.faqs}
    >
      <p>{page.description}</p>
      <h2>What is included</h2>
      <ul>
        {page.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <h2>Explore services</h2>
      <div className="seo-link-grid">
        {serviceCards.map((s) =>
          s ? (
            <Link key={s.slug} href={`/services/${s.slug}`} className="seo-link-card">
              <strong>{s.title}</strong>
              <span>{s.seoTitle}</span>
            </Link>
          ) : null
        )}
      </div>
      <h2>Service areas</h2>
      <p>
        {(relatedLocationItems.length > 0
          ? relatedLocationItems
          : primaryLocations().slice(0, 16)
        ).map((l) =>
          l ? (
            <span key={l.slug}>
              <Link href={`/locations/${l.slug}`}>
                {l.h1.replace("Landscaping Company in ", "")}
              </Link>
              {" · "}
            </span>
          ) : null
        )}
        <Link href="/locations">All locations</Link>
      </p>
      <p>
        Related hubs:{" "}
        <Link href="/landscaping-services-delhi">Landscaping services Delhi</Link>
        {" · "}
        <Link href="/commercial-landscaping-india">Commercial landscaping India</Link>
        {" · "}
        <Link href="/garden-maintenance-delhi-ncr">Garden maintenance AMC</Link>
        {" · "}
        <Link href="/landscaping-cost-guide">Cost guide</Link>
      </p>
      <p>
        Read more on the <Link href="/blog">Hind Landscape Co. blog</Link> or{" "}
        <Link href="/quote">request a free quote</Link>.
      </p>
    </SeoLanding>
  );
}
