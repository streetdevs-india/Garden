# Greenly SEO Launch Checklist

On-site SEO (technical + pages + ~90 blogs) is already in the codebase.
Complete these off-site steps so rankings can move:

## 1. Domain & env
- Set production domain
- Set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` before build/deploy
- Update NAP in `src/lib/business.ts` (name, phone, email, address)

## 2. Search consoles
- Google Search Console → add property → submit `/sitemap.xml`
- Bing Webmaster Tools → import from GSC or submit sitemap

## 3. Google Business Profile
- Create/claim GBP with **exact same** name, address, phone as the website
- Categories: Landscaper / Garden center (as fit)
- Service areas: Delhi, Gurugram, Noida, Faridabad, Delhi NCR
- Weekly photos + review requests

## 4. Citations
- IndiaMART, Justdial, Sulekha, and local directories
- Keep NAP identical everywhere

## 5. Content cadence (after this 3-month pack)
- Optional: 4–8 new blog posts per month
- Refresh cost guide and top city pages quarterly

## 6. Architecture reminder (static & fast)
- No database
- No Cloudinary
- All content is local TypeScript under `src/content` and `src/lib`
- Images only from `/public/images`
- Pages are statically generated via App Router

## Key URLs to verify after deploy
- `/sitemap.xml`
- `/robots.txt`
- `/blog`
- `/services/garden-design`
- `/locations/delhi-ncr`
- `/landscaping-company-india`
- `/vs/four-leaf-landscape`
