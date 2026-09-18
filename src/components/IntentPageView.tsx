import Link from "next/link";
import { SeoLanding } from "@/components/SeoLanding";
import type { IntentPage } from "@/lib/intent";
import { services } from "@/lib/site";
import { locations } from "@/lib/locations";

export function IntentPageView({ page }: { page: IntentPage }) {
  return (
    <SeoLanding
      eyebrow={page.eyebrow}
      title={page.title.replace(/ \| Hind Landscape Co.$/, "").replace(/ \| .*$/, "")}
      lede={page.intro}
      crumbs={[{ name: page.eyebrow }, { name: page.title.split("|")[0].trim() }]}
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
        {services.slice(0, 6).map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="seo-link-card">
            <strong>{s.title}</strong>
            <span>{s.text}</span>
          </Link>
        ))}
      </div>
      <h2>Service areas</h2>
      <p>
        {locations
          .filter((l) => l.primary)
          .map((l) => (
            <span key={l.slug}>
              <Link href={`/locations/${l.slug}`}>{l.name}</Link>
              {" · "}
            </span>
          ))}
        <Link href="/locations">All locations</Link>
      </p>
      <p>
        Read more on the <Link href="/blog">Hind Landscape Co. blog</Link> or{" "}
        <Link href="/quote">request a free quote</Link>.
      </p>
    </SeoLanding>
  );
}
