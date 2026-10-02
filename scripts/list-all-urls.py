import re
from pathlib import Path

root = Path(r"C:\Users\lakha\Desktop\Garden")
base = "https://hindlandscaping.com"
out = root / "docs" / "gsc-all-urls.txt"

site = (root / "src/lib/site.ts").read_text(encoding="utf-8")
services = []
for m in re.finditer(r'slug:\s*"([^"]+)"', site):
    if m.group(1) not in services:
        services.append(m.group(1))

loc = (root / "src/lib/locations.ts").read_text(encoding="utf-8")
locations = []
for m in re.finditer(r'slug:\s*"([^"]+)"', loc):
    if m.group(1) not in locations:
        locations.append(m.group(1))

intent = (root / "src/lib/intent.ts").read_text(encoding="utf-8")
intents = []
for m in re.finditer(r'(?:slug:\s*"|industryPage\(\s*")([^"]+)"', intent):
    if m.group(1) not in intents:
        intents.append(m.group(1))

blog = (root / "src/content/blog/posts.ts").read_text(encoding="utf-8")
posts = []
for m in re.finditer(r'slug:\s*"([^"]+)"', blog):
    if m.group(1) not in posts:
        posts.append(m.group(1))

vs = ["four-leaf-landscape", "greenstar-landscape", "dilkhush-landscaping"]
static = ["/", "/about", "/services", "/gallery", "/testimonials", "/contact", "/quote", "/blog", "/locations"]

urls = []
for p in static:
    urls.append(base + ("/" if p == "/" else p))
for s in intents:
    urls.append(f"{base}/{s}")
for s in services:
    urls.append(f"{base}/services/{s}")
for s in locations:
    urls.append(f"{base}/locations/{s}")
for s in vs:
    urls.append(f"{base}/vs/{s}")
for s in posts:
    urls.append(f"{base}/blog/{s}")

# dedupe preserve
seen = set()
final = []
for u in urls:
    if u not in seen:
        seen.add(u)
        final.append(u)

lines = [
    f"TOTAL {len(final)}",
    f"static {len(static)} intent {len(intents)} services {len(services)} locations {len(locations)} vs {len(vs)} blog {len(posts)}",
    "",
]
lines.extend(final)
out.write_text("\n".join(lines), encoding="utf-8")
print("\n".join(lines[:5]))
print("wrote", out, "count", len(final))
