from pathlib import Path
from datetime import date, timedelta
import json

out = Path(r"C:\Users\lakha\Desktop\Garden\src\content\blog")
out.mkdir(parents=True, exist_ok=True)

posts_meta = []
seen = set()

cities = [
    ("delhi", "Delhi"),
    ("gurugram", "Gurugram"),
    ("noida", "Noida"),
    ("faridabad", "Faridabad"),
    ("delhi-ncr", "Delhi NCR"),
]

city_topics = [
    ("landscaping-company", "Landscaping Company Guide", "garden-design"),
    ("garden-design-ideas", "Garden Design Ideas", "garden-design"),
    ("lawn-care-tips", "Lawn Care Tips", "lawn-care"),
    ("terrace-garden-ideas", "Terrace Garden Ideas", "terrace-garden"),
    ("irrigation-cost", "Irrigation Cost Guide", "irrigation"),
    ("farmhouse-landscaping", "Farmhouse Landscaping", "farmhouse-landscaping"),
    ("outdoor-lighting-ideas", "Outdoor Lighting Ideas", "lighting"),
    ("garden-maintenance-amc", "Garden Maintenance AMC", "landscape-maintenance-amc"),
]

for city_slug, city_name in cities:
    for topic_slug, topic_title, service in city_topics:
        slug = f"{topic_slug}-{city_slug}"
        if slug in seen:
            continue
        seen.add(slug)
        posts_meta.append(
            {
                "slug": slug,
                "title": f"{topic_title} in {city_name} (2026)",
                "category": "Delhi NCR Guides",
                "description": f"{topic_title} for homes and commercial properties in {city_name}. Practical landscaping advice from Greenly.",
                "service": service,
                "location": city_slug,
                "hook": topic_title,
            }
        )

general = [
    ("how-to-choose-landscape-contractor-india", "How to Choose a Landscape Contractor in India", "Cost & Planning", "A practical checklist to compare landscaping companies, BOQs, AMC and site capability in India.", "garden-design", None),
    ("landscaping-cost-guide-india-2026", "Landscaping Cost Guide India 2026", "Cost & Planning", "What drives garden and landscape project cost in India — design, hardscape, softscape, irrigation and AMC.", "garden-design", None),
    ("terrace-garden-ideas-indian-apartments", "Terrace Garden Ideas for Indian Apartments", "Design", "Lightweight terrace garden ideas, planters, privacy screens and irrigation for Indian apartments.", "terrace-garden", None),
    ("vertical-garden-green-wall-guide-india", "Vertical Garden & Green Wall Guide for India", "Design", "How to plan living walls that survive Indian heat — irrigation, plant mix and maintenance.", "vertical-garden", None),
    ("lawn-care-calendar-north-india", "Lawn Care Calendar for North India", "Lawn Care", "Month-by-month lawn care for Delhi NCR and North India heat, monsoon and winter.", "lawn-care", "delhi-ncr"),
    ("monsoon-garden-care-checklist", "Monsoon Garden Care Checklist", "Maintenance", "Protect lawns, beds and irrigation during Indian monsoon — drainage, fungus and cleanup.", "seasonal-cleanup", "delhi-ncr"),
    ("winter-garden-prep-delhi-ncr", "Winter Garden Prep in Delhi NCR", "Maintenance", "Prepare hedges, lawns and pots for Delhi NCR winter fog and cooler growth.", "seasonal-cleanup", "delhi-ncr"),
    ("summer-proof-your-garden-india", "Summer-Proof Your Garden in India", "Maintenance", "Water-wise planting, mulching and irrigation tips for harsh Indian summers.", "irrigation", None),
    ("outdoor-lighting-ideas-for-gardens", "Outdoor Lighting Ideas for Gardens", "Design", "Warm path lights, uplights and seating glow for safe, premium evening gardens.", "lighting", None),
    ("hardscaping-materials-for-indian-weather", "Hardscaping Materials for Indian Weather", "Design", "Choose patio and path materials that handle heat, monsoon and daily use.", "hardscaping", None),
    ("drip-vs-sprinkler-irrigation-india", "Drip vs Sprinkler Irrigation in India", "Irrigation", "When to use drip, sprinklers or mixed zones for lawns, beds and terrace pots.", "irrigation", None),
    ("hotel-landscaping-checklist-india", "Hotel Landscaping Checklist for India", "Commercial", "Arrival courts, pool surrounds, night lighting and AMC for hospitality landscapes.", "garden-design", None),
    ("corporate-campus-landscaping-india", "Corporate Campus Landscaping in India", "Commercial", "Campus arrival, shade trees, irrigation and FM-ready maintenance for office landscapes.", "landscape-maintenance-amc", None),
    ("society-common-area-landscaping", "Society Common Area Landscaping", "Commercial", "Practical landscaping for RWA common lawns, edges and entry gardens.", "lawn-care", None),
    ("farmhouse-garden-layout-ideas", "Farmhouse Garden Layout Ideas", "Design", "Driveways, lawns, orchards edges and outdoor living for Indian farmhouses.", "farmhouse-landscaping", "delhi-ncr"),
    ("balcony-garden-plants-delhi", "Best Balcony Garden Plants for Delhi", "Design", "Heat-tolerant balcony plants and potting tips for Delhi apartments.", "terrace-garden", "delhi"),
    ("hedge-and-privacy-screen-plants-india", "Hedge & Privacy Screen Plants for India", "Design", "Plant picks for privacy screens along compound walls and terraces.", "tree-care", None),
    ("garden-maintenance-amc-what-to-include", "What to Include in a Garden Maintenance AMC", "Cost & Planning", "Visit frequency, lawn tasks, irrigation checks and replacement rules for AMC contracts.", "landscape-maintenance-amc", None),
    ("how-to-compare-landscaping-quotations", "How to Compare Landscaping Quotations", "Cost & Planning", "Read BOQ lines, exclusions and AMC so quotations are comparable.", "garden-design", None),
    ("eco-friendly-landscaping-practices-india", "Eco-Friendly Landscaping Practices in India", "Design", "Native-leaning plants, water savings and soil care for sustainable gardens.", "garden-design", None),
    ("pool-surround-landscaping-ideas", "Pool Surround Landscaping Ideas", "Design", "Safe paving, planting and lighting around residential and hotel pools.", "hardscaping", None),
    ("outdoor-living-patio-design-india", "Outdoor Living Patio Design in India", "Design", "Patio layouts for dining, lounging and monsoon-aware drainage.", "hardscaping", None),
    ("tree-pruning-best-practices-india", "Tree Pruning Best Practices in India", "Maintenance", "When and how to prune landscape trees for safety and shape.", "tree-care", None),
    ("seasonal-flower-beds-north-india", "Seasonal Flower Beds for North India", "Design", "Colour calendars for winter annuals and monsoon beds in North India.", "garden-design", "delhi-ncr"),
    ("irrigation-controller-basics-homeowners", "Irrigation Controller Basics for Homeowners", "Irrigation", "Simple controller schedules for busy homeowners.", "irrigation", None),
    ("landscape-lighting-safety-tips", "Landscape Lighting Safety Tips", "Design", "Cable routes, glare control and fixture IP ratings for outdoor lighting.", "lighting", None),
    ("gurugram-podium-garden-tips", "Gurugram Podium Garden Tips", "Delhi NCR Guides", "Load, wind and irrigation notes for podium gardens in Gurugram towers.", "terrace-garden", "gurugram"),
    ("noida-villa-garden-ideas", "Noida Villa Garden Ideas", "Delhi NCR Guides", "Front lawn, side beds and backyard living ideas for Noida villas.", "garden-design", "noida"),
    ("faridabad-lawn-care-guide", "Faridabad Lawn Care Guide", "Delhi NCR Guides", "Lawn watering, mowing and monsoon care for Faridabad homes.", "lawn-care", "faridabad"),
    ("delhi-farmhouse-landscaping-trends", "Delhi Farmhouse Landscaping Trends", "Delhi NCR Guides", "Arrival avenues, lawns and outdoor kitchens for Delhi farmhouses.", "farmhouse-landscaping", "delhi"),
    ("commercial-landscaping-vs-residential", "Commercial vs Residential Landscaping", "Commercial", "How scope, documentation and AMC differ for commercial vs home gardens.", "garden-design", None),
    ("water-features-and-fountains-care", "Water Features and Fountains Care", "Maintenance", "Keep small water features clean without algae takeover.", "hardscaping", None),
    ("mulching-benefits-indian-gardens", "Mulching Benefits for Indian Gardens", "Maintenance", "How mulch cuts water use and protects roots in Indian heat.", "landscape-maintenance-amc", None),
    ("soil-preparation-before-lawn-install", "Soil Preparation Before Lawn Install", "Lawn Care", "Soil leveling, drainage and prep before new lawns.", "lawn-care", None),
    ("native-and-adaptive-plants-delhi-ncr", "Native & Adaptive Plants for Delhi NCR", "Design", "Plant palette ideas that cope with NCR heat and water limits.", "garden-design", "delhi-ncr"),
    ("kids-friendly-garden-design-ideas", "Kids-Friendly Garden Design Ideas", "Design", "Safe lawns, soft edges and shaded play corners for family gardens.", "garden-design", None),
    ("pet-friendly-garden-plants", "Pet-Friendly Garden Planting Tips", "Design", "Practical planting notes for homes with pets.", "garden-design", None),
    ("entrance-garden-ideas-indian-homes", "Entrance Garden Ideas for Indian Homes", "Design", "First-impression beds, pots and lighting for home entries.", "garden-design", None),
    ("compound-wall-climbers-and-screens", "Compound Wall Climbers and Screens", "Design", "Climbers and screens that soften compound walls.", "vertical-garden", None),
    ("after-handover-garden-care-first-90-days", "After Handover Garden Care: First 90 Days", "Maintenance", "What new landscape owners should watch in the first three months.", "landscape-maintenance-amc", None),
    ("landscape-contractor-red-flags", "Landscape Contractor Red Flags", "Cost & Planning", "Warning signs when hiring a landscaping company in India.", "garden-design", None),
    ("questions-to-ask-before-garden-renovation", "Questions to Ask Before a Garden Renovation", "Cost & Planning", "Budget, access, irrigation and maintenance questions before you renovate.", "garden-design", None),
    ("small-garden-design-tips-india", "Small Garden Design Tips for India", "Design", "Make compact city gardens feel larger with layout and plant choices.", "garden-design", None),
    ("shade-garden-ideas-under-trees", "Shade Garden Ideas Under Trees", "Design", "Under-canopy planting that still looks finished.", "tree-care", None),
    ("drought-tolerant-garden-design", "Drought-Tolerant Garden Design", "Design", "Lower-water garden strategies without looking sparse.", "irrigation", None),
    ("rainwater-and-garden-irrigation", "Rainwater Ideas for Garden Irrigation", "Irrigation", "Simple ways to think about rainwater with garden irrigation plans.", "irrigation", None),
    ("hospitality-landscape-night-look", "Hospitality Landscape Night Look", "Commercial", "How hotels use lighting and planting for evening guest experience.", "lighting", None),
    ("school-and-campus-softscape-basics", "School and Campus Softscape Basics", "Commercial", "Safe planting and lawn care notes for institutional campuses.", "lawn-care", None),
    ("retail-plaza-landscaping-basics", "Retail Plaza Landscaping Basics", "Commercial", "Durable planting and paving for high-footfall plazas.", "hardscaping", None),
    ("why-garden-documentation-matters", "Why Garden Documentation Matters", "Cost & Planning", "Plant lists, irrigation maps and AMC notes that save money later.", "garden-design", None),
]

for slug, title, cat, desc, service, loc in general:
    if slug in seen:
        continue
    seen.add(slug)
    posts_meta.append(
        {
            "slug": slug,
            "title": title,
            "category": cat,
            "description": desc,
            "service": service,
            "location": loc,
            "hook": title,
        }
    )

posts_meta = posts_meta[:90]
i = 1
while len(posts_meta) < 90:
    slug = f"garden-tips-india-{i}"
    if slug not in seen:
        seen.add(slug)
        posts_meta.append(
            {
                "slug": slug,
                "title": f"Garden Tips for Indian Homes #{i}",
                "category": "Design",
                "description": "Practical landscaping and garden care tips for Indian homes from Greenly.",
                "service": "garden-design",
                "location": "delhi-ncr",
                "hook": "Garden tips",
            }
        )
    i += 1

start = date(2026, 1, 1)
lines = [
    "export type BlogPost = {",
    "  slug: string;",
    "  title: string;",
    "  description: string;",
    "  category: string;",
    "  publishedAt: string;",
    "  readingMinutes: number;",
    "  serviceSlug?: string;",
    "  locationSlug?: string;",
    "  faqs: { q: string; a: string }[];",
    "  sections: { heading: string; paragraphs: string[] }[];",
    "};",
    "",
    "export const blogPosts: BlogPost[] = [",
]

for idx, p in enumerate(posts_meta):
    d = start + timedelta(days=idx)
    service = p.get("service") or "garden-design"
    loc = p.get("location")
    hook = p.get("hook") or p["title"]
    sections = [
        (
            "Why this matters",
            [
                f"{p['title']} is a common search for homeowners and facility teams who want outdoor spaces that look finished and stay maintainable.",
                f"Greenly approaches {hook.lower()} with climate-aware planting, clear irrigation thinking and maintenance reality — especially across Delhi NCR and India.",
            ],
        ),
        (
            "Practical planning steps",
            [
                "Start with how the space is used: entry, lawn play, seating, service access and night movement.",
                "Map sun, shade, water source and drainage before choosing plants or hardscape finishes.",
                "Agree a simple maintenance plan so the garden still looks good ninety days after handover.",
            ],
        ),
        (
            "What Greenly recommends",
            [
                f"For {hook.lower()}, combine design clarity with install quality and an optional AMC so watering, pruning and seasonal resets stay on schedule.",
                "Ask for plant lists, irrigation zones and exclusions in writing so quotations are easy to compare.",
            ],
        ),
    ]
    faqs = [
        {
            "q": f"Who should read this guide on {hook.lower()}?",
            "a": "Homeowners, farmhouse owners, RWAs and commercial buyers comparing landscaping options in India.",
        },
        {
            "q": "Can Greenly help after I read this?",
            "a": "Yes — share site photos and locality on the quote page for a free assessment.",
        },
    ]

    lines.append("  {")
    lines.append(f"    slug: {json.dumps(p['slug'])},")
    lines.append(f"    title: {json.dumps(p['title'])},")
    lines.append(f"    description: {json.dumps(p['description'])},")
    lines.append(f"    category: {json.dumps(p['category'])},")
    lines.append(f"    publishedAt: {json.dumps(d.isoformat())},")
    lines.append("    readingMinutes: 6,")
    lines.append(f"    serviceSlug: {json.dumps(service)},")
    if loc:
        lines.append(f"    locationSlug: {json.dumps(loc)},")
    lines.append("    faqs: [")
    for f in faqs:
        lines.append(f"      {{ q: {json.dumps(f['q'])}, a: {json.dumps(f['a'])} }},")
    lines.append("    ],")
    lines.append("    sections: [")
    for h, paras in sections:
        lines.append("      {")
        lines.append(f"        heading: {json.dumps(h)},")
        lines.append("        paragraphs: [")
        for para in paras:
            lines.append(f"          {json.dumps(para)},")
        lines.append("        ],")
        lines.append("      },")
    lines.append("    ],")
    lines.append("  },")

lines.extend(
    [
        "];",
        "",
        "export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));",
        "",
        "export function getPost(slug: string) {",
        "  return blogPosts.find((p) => p.slug === slug);",
        "}",
        "",
        "export function postsByCategory(category?: string) {",
        "  if (!category) return blogPosts;",
        "  return blogPosts.filter((p) => p.category === category);",
        "}",
        "",
    ]
)

path = out / "posts.ts"
path.write_text("\n".join(lines), encoding="utf-8")
print("posts", len(posts_meta), "bytes", path.stat().st_size)
