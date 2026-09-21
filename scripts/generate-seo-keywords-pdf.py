"""
Generate a client-facing SEO keyword PDF for Hind Landscape Co.
Output: docs/Hind-Landscape-SEO-Keywords.pdf
"""
from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUT = Path(r"C:\Users\lakha\Desktop\Garden\docs\Hind-Landscape-SEO-Keywords.pdf")
SITE = "https://hindlandscaping.com"

# ── Keyword data (mirrors src/lib/seoKeywords.ts + hubs) ──

PRIMARY = [
    "landscaping company Delhi NCR",
    "landscaping company Delhi",
    "landscaping company Gurgaon",
    "landscaping company Gurugram",
    "landscaping company Noida",
    "landscaping company India",
    "landscape contractor Delhi",
    "garden landscaping Delhi NCR",
    "Hind Landscape Co.",
]

SERVICES = {
    "Hardscape & Civil": [
        "Hardscaping and Hardscape Landscaping for Commercial Sites",
        "hardscape landscaping India",
        "commercial hardscaping Delhi NCR",
        "hardscape contractor Delhi",
        "outdoor paving landscaping Delhi",
        "plaza hardscape India",
    ],
    "Softscape & Horticulture": [
        "Softscape and Garden Landscaping Services in India",
        "softscape landscaping India",
        "garden landscaping services Delhi",
        "horticulture landscaping India",
        "planting design Delhi NCR",
        "garden softscape contractor",
    ],
    "Irrigation": [
        "Landscape Irrigation Services for Commercial Sites",
        "landscape irrigation services India",
        "commercial irrigation Delhi NCR",
        "drip irrigation landscaping",
        "sprinkler system landscaping Delhi",
        "garden irrigation contractor NCR",
    ],
    "Lighting": [
        "Landscape Lighting Services for Commercial Landscapes",
        "landscape lighting India",
        "commercial landscape lighting Delhi",
        "outdoor garden lighting India",
        "pathway lighting landscaping",
        "garden lighting contractor Delhi",
    ],
    "Landscape Maintenance AMC": [
        "Garden Maintenance Services and Landscape Maintenance AMC",
        "landscape maintenance AMC India",
        "garden maintenance Delhi NCR",
        "landscape AMC commercial",
        "garden AMC Gurugram",
        "society lawn maintenance Delhi",
    ],
    "Terrace & Podium Garden": [
        "Terrace Garden and Podium Landscaping Services",
        "terrace garden Delhi NCR",
        "podium landscaping India",
        "rooftop garden landscaping",
        "terrace garden Delhi",
        "podium garden Gurgaon",
    ],
    "Vertical Garden": [
        "Natural Vertical Garden in Delhi NCR",
        "vertical garden Delhi NCR",
        "greenwall India",
        "living wall installation Delhi",
        "vertical garden Gurgaon",
        "green wall contractor Noida",
    ],
    "Terrarium & Paludarium": [
        "Terrarium and Paludarium Service in India",
        "terrarium service India",
        "paludarium Delhi",
        "indoor terrarium landscaping",
        "lobby terrarium India",
    ],
    "Indoor Plantation": [
        "Indoor Planting and Office Landscaping Services",
        "indoor plantation India",
        "office landscaping Delhi",
        "indoor plant services India",
        "office plant maintenance AMC",
    ],
    "Swimming Pools / Surrounds": [
        "Pool Landscaping and Swimming Pool Surrounds",
        "swimming pool landscaping India",
        "pool surrounds Delhi NCR",
        "poolside garden design",
        "hotel pool landscaping Delhi",
    ],
    "Water Features": [
        "Water Feature Landscaping for Commercial Sites",
        "water feature landscaping India",
        "commercial fountain landscaping Delhi",
        "cascade water feature garden",
        "fountain landscaping contractor",
    ],
    "Trees & Plants Exporter": [
        "Trees and Plants Exporter in Delhi India",
        "trees and plants exporter Delhi",
        "plant exporter India",
        "specimen trees Delhi NCR",
    ],
    "Lawn Care": [
        "lawn care Delhi NCR",
        "lawn maintenance India",
        "garden lawn services",
        "lawn AMC Delhi",
    ],
    "Farmhouse Landscaping": [
        "farmhouse landscaping Delhi",
        "farmhouse garden design",
        "estate landscaping NCR",
        "farmhouse landscaping Chattarpur",
    ],
    "Balcony Garden": [
        "balcony garden Delhi NCR",
        "balcony garden design India",
        "apartment balcony landscaping",
        "small space garden Delhi",
    ],
    "Society Landscaping": [
        "society landscaping Delhi NCR",
        "apartment complex landscaping India",
        "RWA garden maintenance AMC",
        "society lawn maintenance Delhi",
    ],
    "Landscape Architecture": [
        "landscape architect Delhi NCR",
        "garden designer India",
        "landscape architecture Delhi",
        "outdoor master plan India",
    ],
}

INDUSTRIES = {
    "Hotel & Resort": [
        "Hotel Landscaping in Delhi",
        "hotel landscaping Delhi NCR",
        "hotel landscaping India",
        "resort landscaping Delhi",
        "hospitality landscaping India",
    ],
    "Commercial": [
        "Commercial Landscaping in Delhi",
        "commercial landscaping India",
        "commercial landscaping company India",
        "commercial garden landscaping Delhi NCR",
    ],
    "Residential": [
        "Residential Landscaping in Delhi",
        "residential landscaping Delhi NCR",
        "home garden landscaping Delhi",
        "villa landscaping Gurgaon",
    ],
    "Corporate": [
        "Corporate Landscaping in Delhi",
        "corporate landscaping Delhi NCR",
        "corporate campus landscaping India",
        "office campus landscaping Delhi",
    ],
    "Industrial": [
        "Industrial Landscaping in Delhi",
        "industrial landscaping India",
        "factory landscaping Delhi NCR",
        "warehouse landscaping Noida",
    ],
    "Developer": [
        "Developer Landscaping in Delhi",
        "developer landscaping India",
        "township landscaping Delhi NCR",
        "real estate landscaping India",
    ],
    "Hospital": [
        "Hospital Landscaping in Delhi",
        "hospital landscaping India",
        "healthcare campus landscaping",
        "healing garden Delhi",
    ],
    "Mall & Retail": [
        "Mall Landscaping in Delhi",
        "mall landscaping India",
        "retail landscaping Delhi NCR",
        "shopping mall garden design",
    ],
    "School & Institution": [
        "School Landscaping in Delhi",
        "school landscaping India",
        "institution landscaping Delhi NCR",
        "campus landscaping school",
    ],
    "Sports Campus": [
        "Sports Campus Landscaping in Delhi",
        "sports campus landscaping India",
        "stadium landscaping Delhi",
    ],
    "Embassy": [
        "Embassy Landscaping in Delhi",
        "embassy landscaping India",
        "diplomatic compound landscaping Delhi",
    ],
}

LOCATIONS = [
    "Delhi NCR",
    "Delhi",
    "Gurgaon",
    "Gurugram",
    "Noida",
    "Faridabad",
    "Ghaziabad",
    "Ludhiana Punjab",
    "Agra",
    "Mathura",
    "Vrindavan",
    "Mumbai",
    "Bengaluru",
    "Hyderabad",
    "Jaipur",
    "Pune",
    "Chennai",
    "Goa",
    "Greater Noida",
    "South Delhi",
    "Chattarpur",
    "Chandigarh",
    "Lucknow",
    "Ahmedabad",
    "Kolkata",
]

LOCATION_PATTERNS = [
    "Landscaping Company in {city}",
    "landscaping company {city}",
    "landscaping services {city}",
    "landscape contractor {city}",
    "garden landscaping {city}",
    "garden design {city}",
    "landscape maintenance {city}",
]

HUBS = [
    ("Terrace Garden in Delhi", "/terrace-garden-delhi"),
    ("Vertical Garden in Gurgaon", "/vertical-garden-gurgaon"),
    ("Farmhouse Landscaping Chattarpur", "/farmhouse-landscaping-chattarpur"),
    ("Landscape AMC Gurugram", "/landscape-amc-gurugram"),
    ("Hardscape Landscaping Noida", "/hardscape-noida"),
    ("Softscape Delhi NCR", "/softscape-delhi-ncr"),
    ("Landscape Irrigation Delhi NCR", "/irrigation-delhi-ncr"),
    ("Lawn Care Delhi", "/lawn-care-delhi"),
    ("Society Landscaping Noida", "/society-landscaping-noida"),
    ("Garden Design Gurugram", "/garden-design-gurugram"),
    ("Balcony Garden Delhi", "/balcony-garden-delhi"),
    ("Landscape Lighting Delhi", "/landscape-lighting-delhi"),
    ("Commercial Landscaping Company India", "/commercial-landscaping-india"),
    ("Corporate Landscaping Delhi NCR", "/corporate-landscaping-delhi-ncr"),
    ("Hotel Landscaping India", "/hotel-landscaping-india"),
    ("Residential Landscaping Delhi NCR", "/residential-landscaping-delhi-ncr"),
    ("Developer Landscaping India", "/developer-landscaping-india"),
    ("Landscaping Services Delhi", "/landscaping-services-delhi"),
    ("Hotel Landscaping Delhi NCR", "/hotel-landscaping-delhi-ncr"),
    ("Hotel Landscaping Agra", "/hotel-landscaping-agra"),
    ("Resort Landscaping Agra", "/resort-landscaping-agra"),
    ("Resort Landscaping Goa", "/resort-landscaping-goa"),
    ("Garden Maintenance AMC Delhi NCR", "/garden-maintenance-delhi-ncr"),
    ("Landscape Contractor Delhi", "/landscape-contractor-delhi"),
    ("Landscaping Cost Guide India", "/landscaping-cost-guide"),
]

LONG_TAIL = [
    "landscape contractor Delhi NCR",
    "garden design company Delhi",
    "farmhouse landscaping Chattarpur",
    "society garden AMC Delhi",
    "landscaping cost India",
    "best landscaping company Delhi NCR",
    "outdoor garden design Noida",
    "terrace garden contractor Gurugram",
    "vertical garden installation Gurgaon",
    "landscape maintenance AMC Gurugram",
]

COMPETITORS = {
    "Four Leaf Landscape": [
        "Four Leaf Landscape",
        "Fourscape landscaping",
        "four leaf landscape Delhi",
        "Hind Landscape Co. vs Four Leaf Landscape",
        "Four Leaf Landscape alternative Delhi",
        "alternative to Four Leaf Landscape",
    ],
    "Greenstar Landscape": [
        "Greenstar Landscape",
        "greenstar landscape Delhi",
        "Greenstar landscaping",
        "Hind Landscape Co. vs Greenstar Landscape",
        "Greenstar Landscape alternative Delhi",
        "alternative to Greenstar Landscape",
    ],
    "Dilkhush Landscaping": [
        "Dilkhush Landscaping",
        "dilkhush landscape Delhi",
        "Dilkhush garden",
        "Hind Landscape Co. vs Dilkhush Landscaping",
        "Dilkhush Landscaping alternative Delhi",
        "alternative to Dilkhush Landscaping",
    ],
}

GREEN = colors.HexColor("#1f6b3a")
DARK = colors.HexColor("#1a2e22")
MUTED = colors.HexColor("#4a5c52")
LIGHT = colors.HexColor("#eef5f0")
LINE = colors.HexColor("#c5d6cb")


def styles():
    base = getSampleStyleSheet()
    return {
        "cover_title": ParagraphStyle(
            "cover_title",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=26,
            textColor=GREEN,
            alignment=TA_CENTER,
            spaceAfter=8,
            leading=32,
        ),
        "cover_sub": ParagraphStyle(
            "cover_sub",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=12,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=6,
            leading=16,
        ),
        "h1": ParagraphStyle(
            "h1",
            parent=base["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=16,
            textColor=GREEN,
            spaceBefore=14,
            spaceAfter=8,
            leading=20,
        ),
        "h2": ParagraphStyle(
            "h2",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=12,
            textColor=DARK,
            spaceBefore=10,
            spaceAfter=4,
            leading=15,
        ),
        "body": ParagraphStyle(
            "body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            textColor=DARK,
            leading=13,
            spaceAfter=4,
        ),
        "note": ParagraphStyle(
            "note",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=8.5,
            textColor=MUTED,
            leading=12,
            spaceAfter=8,
        ),
        "kw": ParagraphStyle(
            "kw",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            textColor=DARK,
            leading=12,
        ),
        "footer": ParagraphStyle(
            "footer",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8,
            textColor=MUTED,
            alignment=TA_CENTER,
        ),
    }


def bullet_list(items: list[str], s) -> ListFlowable:
    return ListFlowable(
        [ListItem(Paragraph(i.replace("&", "&amp;"), s["kw"]), leftIndent=8, bulletColor=GREEN) for i in items],
        bulletType="bullet",
        start="•",
        leftIndent=12,
        bulletFontSize=8,
        spaceBefore=2,
        spaceAfter=6,
    )


def count_all() -> int:
    n = len(PRIMARY) + len(LONG_TAIL)
    for v in SERVICES.values():
        n += len(v)
    for v in INDUSTRIES.values():
        n += len(v)
    n += len(LOCATIONS) * len(LOCATION_PATTERNS)
    n += len(HUBS)
    for v in COMPETITORS.values():
        n += len(v)
    return n


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 14 * mm, A4[0] - 18 * mm, 14 * mm)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 8 * mm, "Hind Landscape Co. — SEO Keyword Report (Confidential)")
    canvas.drawRightString(A4[0] - 18 * mm, 8 * mm, f"Page {doc.page}")
    canvas.restoreState()


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    s = styles()
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=16 * mm,
        bottomMargin=20 * mm,
        title="Hind Landscape Co. — SEO Keyword Report",
        author="Hind Landscape Co.",
    )
    story = []
    total = count_all()

    # Cover
    story.append(Spacer(1, 40 * mm))
    story.append(Paragraph("Hind Landscape Co.", s["cover_title"]))
    story.append(Paragraph("SEO Keyword Strategy Report", s["cover_title"]))
    story.append(Spacer(1, 6 * mm))
    story.append(Paragraph("Client deliverable — on-site keyword coverage", s["cover_sub"]))
    story.append(Paragraph(f"Website: {SITE}", s["cover_sub"]))
    story.append(Paragraph("Prepared for client review", s["cover_sub"]))
    story.append(Spacer(1, 10 * mm))

    summary = [
        ["Metric", "Coverage"],
        ["Total keyword phrases (approx.)", str(total)],
        ["Primary money keywords", str(len(PRIMARY))],
        ["Service keyword clusters", str(len(SERVICES))],
        ["Industry keyword clusters", str(len(INDUSTRIES))],
        ["Location cities / areas", str(len(LOCATIONS))],
        ["Strategic intent / hub pages", str(len(HUBS))],
        ["Competitor comparison sets", str(len(COMPETITORS))],
    ]
    t = Table(summary, colWidths=[95 * mm, 70 * mm])
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), GREEN),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 9),
                ("BACKGROUND", (0, 1), (-1, -1), LIGHT),
                ("TEXTCOLOR", (0, 1), (-1, -1), DARK),
                ("GRID", (0, 0), (-1, -1), 0.4, LINE),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    story.append(t)
    story.append(Spacer(1, 8 * mm))
    story.append(
        Paragraph(
            "Note: Keywords are implemented as dedicated pages (title, H1, body, FAQ) — "
            "not only as meta tags. Google ranks useful pages, not keyword lists alone. "
            "Competitors covered: Four Leaf Landscape, Greenstar Landscape, Dilkhush Landscaping.",
            s["note"],
        )
    )
    story.append(PageBreak())

    # 1 Primary
    story.append(Paragraph("1. Primary Money Keywords", s["h1"]))
    story.append(
        Paragraph(
            "Highest-intent searches for landscaping company / contractor in Delhi NCR and India.",
            s["body"],
        )
    )
    story.append(bullet_list(PRIMARY, s))

    # 2 Services
    story.append(Paragraph("2. Service Keywords", s["h1"]))
    story.append(
        Paragraph(
            "Each service has an approved SEO title (client “After Click” phrase) plus short and long-tail variants.",
            s["body"],
        )
    )
    for name, kws in SERVICES.items():
        story.append(Paragraph(name, s["h2"]))
        story.append(bullet_list(kws, s))

    story.append(PageBreak())

    # 3 Industries
    story.append(Paragraph("3. Industry Keywords", s["h1"]))
    story.append(
        Paragraph(
            "Commercial buyer intents — hotels, campuses, developers, hospitals, malls, schools, embassies, etc.",
            s["body"],
        )
    )
    for name, kws in INDUSTRIES.items():
        story.append(Paragraph(name, s["h2"]))
        story.append(bullet_list(kws, s))

    # 4 Locations
    story.append(Paragraph("4. Location Keywords", s["h1"]))
    story.append(
        Paragraph(
            "For every city / area below, the site targets these search patterns "
            "(example: “Landscaping Company in Gurugram”, “landscaping services Noida”).",
            s["body"],
        )
    )
    story.append(Paragraph("Cities & areas covered", s["h2"]))
    story.append(bullet_list(LOCATIONS, s))
    story.append(Paragraph("Keyword patterns per city", s["h2"]))
    story.append(bullet_list(LOCATION_PATTERNS, s))
    story.append(
        Paragraph(
            f"Approx. location phrases: {len(LOCATIONS) * len(LOCATION_PATTERNS)} "
            f"({len(LOCATIONS)} places × {len(LOCATION_PATTERNS)} patterns).",
            s["note"],
        )
    )

    story.append(PageBreak())

    # 5 Hubs
    story.append(Paragraph("5. Strategic Intent / Combination Hubs", s["h1"]))
    story.append(
        Paragraph(
            "High-value service × city and national industry pages (smart combinations — not every possible combo). "
            "Each URL is a live money page on the website.",
            s["body"],
        )
    )
    hub_rows = [["Page / Keyword Focus", "Live URL"]]
    for title, path in HUBS:
        hub_rows.append([title, f"{SITE}{path}"])
    ht = Table(hub_rows, colWidths=[75 * mm, 95 * mm])
    ht.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), GREEN),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 8),
                ("TEXTCOLOR", (0, 1), (-1, -1), DARK),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, LIGHT]),
                ("GRID", (0, 0), (-1, -1), 0.35, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    story.append(ht)

    story.append(PageBreak())

    # 6 Long-tail
    story.append(Paragraph("6. Long-Tail Keywords", s["h1"]))
    story.append(
        Paragraph(
            "Specific searches with clearer buyer intent (cost, farmhouse, AMC, contractor, etc.).",
            s["body"],
        )
    )
    story.append(bullet_list(LONG_TAIL, s))

    # 7 Competitors
    story.append(Paragraph("7. Competitor Comparison Keywords", s["h1"]))
    story.append(
        Paragraph(
            "Brand and “alternative / vs” searches — covered on /vs/* pages with fair buyer checklists "
            "(no fake claims).",
            s["body"],
        )
    )
    for name, kws in COMPETITORS.items():
        story.append(Paragraph(name, s["h2"]))
        story.append(bullet_list(kws, s))
        slug = {
            "Four Leaf Landscape": "four-leaf-landscape",
            "Greenstar Landscape": "greenstar-landscape",
            "Dilkhush Landscaping": "dilkhush-landscaping",
        }[name]
        story.append(Paragraph(f"Page: {SITE}/vs/{slug}", s["note"]))

    # Closing
    story.append(Paragraph("8. What This Means for the Client", s["h1"]))
    story.append(
        bullet_list(
            [
                "Client-approved service, city and industry phrases each have a dedicated page (title + H1 match).",
                "Competitors (Four Leaf, Greenstar, Dilkhush) are covered with comparison pages.",
                "Top NCR service × city intents have dedicated hubs — without thin spam pages.",
                "Sitemap, internal links and metadata are wired to these keywords.",
                "Next for stronger rankings (off-site): Google Business Profile, reviews, citations and quality backlinks.",
            ],
            s,
        )
    )
    story.append(
        Paragraph(
            "This document is a keyword coverage report for Hind Landscape Co. "
            "Rankings depend on Google, domain authority, reviews and ongoing content — "
            "no agency can guarantee #1 for every keyword.",
            s["note"],
        )
    )

    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(f"Wrote {OUT}")
    print(f"Approx keyword phrases: {total}")


if __name__ == "__main__":
    build()
