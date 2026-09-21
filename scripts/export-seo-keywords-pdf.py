"""Export all website SEO keywords into a client-facing PDF."""
from __future__ import annotations

import re
from datetime import date
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "Hind-Landscape-SEO-Keywords.pdf"
SITE = "https://hindlandscaping.com"


def strip_ts(text: str) -> str:
    return text


def extract_quoted(pattern: str, text: str) -> list[str]:
    return re.findall(pattern, text)


def load_locations() -> list[tuple[str, str, str]]:
    text = (ROOT / "src/lib/locations.ts").read_text(encoding="utf-8")
    client = dict(
        re.findall(
            r'"([^"]+)":\s*"(Landscaping Company in [^"]+)"',
            text,
        )
    )
    seeds = re.findall(
        r'\{\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)"',
        text,
    )
    rows = []
    for slug, name in seeds:
        title = client.get(slug) or f"Landscaping Company in {name}"
        rows.append((title, f"/locations/{slug}", name))
    return rows


def load_intent() -> list[tuple[str, str]]:
    text = (ROOT / "src/lib/intent.ts").read_text(encoding="utf-8")
    rows: list[tuple[str, str]] = []

    # Full page objects with path + title
    for m in re.finditer(
        r'path:\s*"(/[^"]+)"[\s\S]*?title:\s*"([^"]+)"',
        text,
    ):
        rows.append((m.group(2), m.group(1)))

    # industryPage(slug, eyebrow, title, ...)
    for m in re.finditer(
        r'industryPage\(\s*"([^"]+)"\s*,\s*"[^"]+"\s*,\s*"([^"]+)"',
        text,
    ):
        slug, title = m.group(1), m.group(2)
        path = f"/{slug}"
        if not any(p == path for _, p in rows):
            rows.append((title, path))

    # de-dupe by path keeping first title
    seen = set()
    out = []
    for title, path in rows:
        if path in seen:
            continue
        seen.add(path)
        out.append((title, path))
    return out


def load_services() -> list[tuple[str, str]]:
    text = (ROOT / "src/lib/site.ts").read_text(encoding="utf-8")
    # Match service objects: slug then later seoTitle within same object-ish
    blocks = re.split(r"\n\s*\{\s*\n", text)
    rows = []
    for block in blocks:
        slug_m = re.search(r'slug:\s*"([^"]+)"', block)
        seo_m = re.search(r'seoTitle:\s*"([^"]+)"', block)
        if slug_m and seo_m:
            rows.append((seo_m.group(1), f"/services/{slug_m.group(1)}"))
    # de-dupe
    seen = set()
    out = []
    for t, p in rows:
        if p in seen:
            continue
        seen.add(p)
        out.append((t, p))
    return out


def load_competitors() -> list[tuple[str, str]]:
    path = ROOT / "src/lib/competitors.ts"
    if not path.exists():
        return []
    text = path.read_text(encoding="utf-8")
    rows = []
    for m in re.finditer(
        r'slug:\s*"([^"]+)"[\s\S]*?(?:name|competitor|title):\s*"([^"]+)"',
        text,
    ):
        slug, name = m.group(1), m.group(2)
        title = f"Hind Landscape Co. vs {name} | How to Choose a Landscaper"
        rows.append((title, f"/vs/{slug}"))
    if not rows:
        # fallback common pattern
        for m in re.finditer(r'slug:\s*"([^"]+)"', text):
            slug = m.group(1)
            nice = slug.replace("-", " ").title()
            rows.append(
                (
                    f"Hind Landscape Co. vs {nice} | How to Choose a Landscaper",
                    f"/vs/{slug}",
                )
            )
    seen = set()
    out = []
    for t, p in rows:
        if p in seen:
            continue
        seen.add(p)
        out.append((t, p))
    return out


def load_blog() -> list[tuple[str, str]]:
    text = (ROOT / "src/content/blog/posts.ts").read_text(encoding="utf-8")
    # posts may be objects with slug + title
    blocks = re.split(r"\n\s*\{\s*\n", text)
    rows = []
    for block in blocks:
        slug_m = re.search(r'slug:\s*"([^"]+)"', block)
        title_m = re.search(r'title:\s*"([^"]+)"', block)
        if slug_m and title_m:
            rows.append((title_m.group(1), f"/blog/{slug_m.group(1)}"))
    seen = set()
    out = []
    for t, p in rows:
        if p in seen:
            continue
        seen.add(p)
        out.append((t, p))
    return out


def load_layout_keywords() -> list[str]:
    layout = ROOT / "src/app/layout.tsx"
    if not layout.exists():
        return []
    text = layout.read_text(encoding="utf-8")
    m = re.search(r"keywords:\s*\[([\s\S]*?)\]", text)
    if not m:
        return []
    return re.findall(r'"([^"]+)"', m.group(1))


STATIC_PAGES = [
    ("Landscaping & Gardening in Delhi NCR & India", "/"),
    ("Landscaping Services in India | Hardscape, Softscape, Irrigation & AMC", "/services"),
    ("Landscaping Locations Across India | Cities, States & Localities", "/locations"),
    ("Landscaping Guides & Local Knowledge | India Cities & States", "/blog"),
    ("About Hind Landscape Co. | Our Story, Team & Values", "/about"),
    ("Contact Hind Landscape Co. | Free Site Visit Delhi NCR", "/contact"),
    ("Get a Free Quote | Dream Garden Assessment", "/quote"),
    ("Gallery | Beautiful Green Spaces by Hind Landscape Co.", "/gallery"),
    ("Testimonials | Gardens People Stay In", "/testimonials"),
    ("Landscaping FAQs | Hind Landscape Co.", "/faq"),
]


def make_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="CoverTitle",
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=28,
            textColor=colors.HexColor("#1B4D2E"),
            alignment=TA_CENTER,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="CoverSub",
            fontName="Helvetica",
            fontSize=11,
            leading=15,
            textColor=colors.HexColor("#444444"),
            alignment=TA_CENTER,
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="SecHead",
            fontName="Helvetica-Bold",
            fontSize=13,
            leading=17,
            textColor=colors.HexColor("#1B4D2E"),
            spaceBefore=14,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="BodySmall",
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=colors.HexColor("#222222"),
            alignment=TA_LEFT,
        )
    )
    styles.add(
        ParagraphStyle(
            name="CellKw",
            fontName="Helvetica",
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor("#111111"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="CellUrl",
            fontName="Helvetica",
            fontSize=7.5,
            leading=10,
            textColor=colors.HexColor("#555555"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="Foot",
            fontName="Helvetica",
            fontSize=8,
            textColor=colors.HexColor("#777777"),
            alignment=TA_CENTER,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Summary",
            fontName="Helvetica",
            fontSize=10,
            leading=14,
            textColor=colors.HexColor("#222222"),
            spaceAfter=3,
        )
    )
    return styles


def keyword_table(rows: list[tuple[str, str]], styles) -> Table:
    data = [
        [
            Paragraph("<b>#</b>", styles["CellKw"]),
            Paragraph("<b>Keyword / SEO Title</b>", styles["CellKw"]),
            Paragraph("<b>Page URL</b>", styles["CellKw"]),
        ]
    ]
    for i, (kw, path) in enumerate(rows, 1):
        data.append(
            [
                Paragraph(str(i), styles["CellKw"]),
                Paragraph(kw.replace("&", "&amp;"), styles["CellKw"]),
                Paragraph(f"{SITE}{path}", styles["CellUrl"]),
            ]
        )
    table = Table(data, colWidths=[12 * mm, 105 * mm, 65 * mm], repeatRows=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1B4D2E")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("BACKGROUND", (0, 1), (-1, -1), colors.white),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F4F8F4")]),
                ("GRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#D0DCD0")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    return table


def build():
    locations = load_locations()
    intent = load_intent()
    services = load_services()
    competitors = load_competitors()
    blog = load_blog()
    layout_kw = load_layout_keywords()

    loc_rows = [(t, p) for t, p, _ in locations]
    styles = make_styles()

    total = (
        len(loc_rows)
        + len(intent)
        + len(services)
        + len(competitors)
        + len(blog)
        + len(STATIC_PAGES)
    )

    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=14 * mm,
        rightMargin=14 * mm,
        topMargin=14 * mm,
        bottomMargin=16 * mm,
        title="Hind Landscape Co. — SEO Keywords List",
        author="Hind Landscape Co.",
    )

    story = []

    # Cover
    story.append(Spacer(1, 28 * mm))
    story.append(Paragraph("Hind Landscape Co.", styles["CoverTitle"]))
    story.append(Paragraph("Complete SEO Keywords Report", styles["CoverTitle"]))
    story.append(Spacer(1, 6 * mm))
    story.append(
        Paragraph(
            "Client review document — all target keywords / page titles added on the website",
            styles["CoverSub"],
        )
    )
    story.append(Paragraph(f"Website: {SITE}", styles["CoverSub"]))
    story.append(Paragraph(f"Generated: {date.today().isoformat()}", styles["CoverSub"]))
    story.append(Spacer(1, 12 * mm))

    summary_items = [
        f"Location / city pages: <b>{len(loc_rows)}</b>",
        f"Industry / intent pages: <b>{len(intent)}</b>",
        f"Service pages: <b>{len(services)}</b>",
        f"Comparison (vs) pages: <b>{len(competitors)}</b>",
        f"Blog posts: <b>{len(blog)}</b>",
        f"Core / supporting pages: <b>{len(STATIC_PAGES)}</b>",
        f"<b>Total SEO pages listed: {total}</b>",
    ]
    for line in summary_items:
        story.append(Paragraph("• " + line, styles["Summary"]))

    story.append(Spacer(1, 8 * mm))
    story.append(
        Paragraph(
            "Note: Each row is a live SEO target on the site (page title / primary keyword + URL).",
            styles["BodySmall"],
        )
    )
    story.append(PageBreak())

    sections = [
        ("1. Location / City Keywords", loc_rows),
        ("2. Industry / Intent Keywords", intent),
        ("3. Service Keywords", services),
        ("4. Comparison / Vs Keywords", competitors),
        ("5. Blog Keywords / Guides", blog),
        ("6. Core & Supporting Pages", STATIC_PAGES),
    ]

    for i, (heading, rows) in enumerate(sections):
        block = [
            Paragraph(f"{heading}  ({len(rows)})", styles["SecHead"]),
            keyword_table(rows, styles),
        ]
        story.append(KeepTogether(block[:1]))
        story.append(block[1])
        if i < len(sections) - 1:
            story.append(Spacer(1, 6 * mm))

    if layout_kw:
        story.append(PageBreak())
        story.append(
            Paragraph(
                f"7. Sitewide Meta Keywords ({len(set(layout_kw))})",
                styles["SecHead"],
            )
        )
        story.append(
            Paragraph(
                "These phrases are also injected in the global site metadata:",
                styles["BodySmall"],
            )
        )
        story.append(Spacer(1, 3 * mm))
        seen: set[str] = set()
        unique: list[str] = []
        for k in layout_kw:
            if k not in seen:
                seen.add(k)
                unique.append(k)
        data = [
            [
                Paragraph("<b>#</b>", styles["CellKw"]),
                Paragraph("<b>Keyword</b>", styles["CellKw"]),
            ]
        ]
        for i, k in enumerate(unique, 1):
            data.append(
                [
                    Paragraph(str(i), styles["CellKw"]),
                    Paragraph(k.replace("&", "&amp;"), styles["CellKw"]),
                ]
            )
        t = Table(data, colWidths=[12 * mm, 170 * mm], repeatRows=1)
        t.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1B4D2E")),
                    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                    (
                        "ROWBACKGROUNDS",
                        (0, 1),
                        (-1, -1),
                        [colors.white, colors.HexColor("#F4F8F4")],
                    ),
                    ("GRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#D0DCD0")),
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 5),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                    ("TOPPADDING", (0, 0), (-1, -1), 3),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                ]
            )
        )
        story.append(t)

    def footer(canvas, doc_):
        canvas.saveState()
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(colors.HexColor("#777777"))
        canvas.drawCentredString(
            A4[0] / 2,
            10 * mm,
            f"Hind Landscape Co. — SEO Keywords  |  Page {doc_.page}",
        )
        canvas.restoreState()

    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(f"Wrote {OUT}")
    print(
        f"Counts: loc={len(loc_rows)} intent={len(intent)} services={len(services)} "
        f"vs={len(competitors)} blog={len(blog)} static={len(STATIC_PAGES)} layout={len(layout_kw)}"
    )


if __name__ == "__main__":
    build()
