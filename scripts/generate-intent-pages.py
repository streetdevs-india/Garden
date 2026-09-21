from pathlib import Path

root = Path(r"C:\Users\lakha\Desktop\Garden\src\app")

# Keep in sync with INTENT_ROUTE_SLUGS in src/lib/intent.ts
pages = [
    "landscaping-company-india",
    "commercial-landscaping",
    "hotel-landscaping",
    "corporate-landscaping",
    "corporate-campus-landscaping",
    "residential-landscaping",
    "industrial-landscaping",
    "developer-landscaping",
    "hospital-landscaping",
    "mall-retail-landscaping",
    "school-institution-landscaping",
    "sports-campus-landscaping",
    "embassy-landscaping",
    "hotel-landscaping-delhi-ncr",
    "hotel-landscaping-agra",
    "resort-landscaping-agra",
    "resort-landscaping-goa",
    "garden-maintenance-delhi-ncr",
    "landscape-contractor-delhi",
    "landscaping-cost-guide",
    "faq",
    # High-value service x city hubs
    "terrace-garden-delhi",
    "vertical-garden-gurgaon",
    "farmhouse-landscaping-chattarpur",
    "landscape-amc-gurugram",
    "hardscape-noida",
    "softscape-delhi-ncr",
    "irrigation-delhi-ncr",
    "lawn-care-delhi",
    "society-landscaping-noida",
    "garden-design-gurugram",
    "balcony-garden-delhi",
    "landscape-lighting-delhi",
    # National / NCR industry hubs
    "commercial-landscaping-india",
    "corporate-landscaping-delhi-ncr",
    "hotel-landscaping-india",
    "residential-landscaping-delhi-ncr",
    "developer-landscaping-india",
    "landscaping-services-delhi",
]

tpl = '''import type {{ Metadata }} from "next";
import {{ notFound }} from "next/navigation";
import {{ IntentPageView }} from "@/components/IntentPageView";
import {{ intentPages }} from "@/lib/intent";
import {{ buildMetadata }} from "@/lib/seo";

const page = intentPages.find((p) => p.slug === "{slug}");

export const metadata: Metadata = page
  ? buildMetadata({{
      title: page.title,
      description: page.description,
      path: page.path,
      keywords: page.keywords,
    }})
  : {{}};

export default function Page() {{
  if (!page) notFound();
  return <IntentPageView page={{page}} />;
}}
'''

for slug in pages:
    d = root / slug
    d.mkdir(parents=True, exist_ok=True)
    (d / "page.tsx").write_text(tpl.format(slug=slug), encoding="utf-8")
    print("wrote", slug)

print(f"done: {len(pages)} routes")
