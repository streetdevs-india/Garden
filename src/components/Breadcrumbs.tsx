import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/seo";

export type Crumb = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const list = [{ name: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        {list.map((item, i) => (
          <span key={`${item.name}-${i}`}>
            {i > 0 && <span className="bc-sep">/</span>}
            {item.href && i < list.length - 1 ? (
              <Link href={item.href}>{item.name}</Link>
            ) : (
              <span aria-current={i === list.length - 1 ? "page" : undefined}>{item.name}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
