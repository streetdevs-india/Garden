from pathlib import Path

root = Path(r"C:\Users\lakha\Desktop\Garden\src\app")
pages = [
    "landscaping-company-india",
    "commercial-landscaping",
    "hotel-landscaping",
    "corporate-campus-landscaping",
    "residential-landscaping",
    "garden-maintenance-delhi-ncr",
    "landscape-contractor-delhi",
    "landscaping-cost-guide",
    "faq",
]

tpl = """import type {{ Metadata }} from \"next\";
import {{ notFound }} from \"next/navigation\";
import {{ IntentPageView }} from \"@/components/IntentPageView\";
import {{ intentPages }} from \"@/lib/intent\";
import {{ buildMetadata }} from \"@/lib/seo\";

const page = intentPages.find((p) => p.slug === \"{slug}\");

export const metadata: Metadata = page
  ? buildMetadata({{ title: page.title, description: page.description, path: page.path }})
  : {{}};

export default function Page() {{
  if (!page) notFound();
  return <IntentPageView page={{page}} />;
}}
"""

for slug in pages:
    d = root / slug
    d.mkdir(parents=True, exist_ok=True)
    (d / "page.tsx").write_text(tpl.format(slug=slug), encoding="utf-8")
    print("wrote", slug)
