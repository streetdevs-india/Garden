# Hind Landscape Co. — Live Deploy Guide

Use this checklist to push the site to GitHub and go live on Vercel (or any Next.js host).

## Before you push

1. **Build passes locally**
   ```bash
   npm install
   npm run build
   ```
2. **Never commit secrets** — `.env.local` stays on your machine only. Use `.env.example` as the template.
3. **Repo target:** `https://github.com/streetdevs-india/Garden` (branch `main`).

---

## Step 1 — Push to GitHub (manual)

Log in as **streetdevs-india** (not startupmitraa):

```bash
gh auth login
git remote -v
# should show: https://github.com/streetdevs-india/Garden.git

git add .
git status
git commit -m "Live-ready: Hind Landscape rebrand, forms, SEO"
git push origin main
```

This publishes the local `main` branch to `origin/main`.

---

## Step 2 — Connect Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import **streetdevs-india/Garden**
3. Framework: **Next.js** (auto-detected)
4. Build command: `npm run build`
5. Output: default (`.next`)

---

## Step 3 — Environment variables (Vercel → Settings → Environment Variables)

| Variable | Value |
|----------|--------|
| `RESEND_API_KEY` | Your key from [resend.com/api-keys](https://resend.com/api-keys) |
| `LEAD_TO_EMAIL` | `hindlandscaping@gmail.com` |
| `RESEND_FROM_EMAIL` | `Hind Landscape Website <notifications@hindlandscaping.com>` |
| `RESEND_FALLBACK_FROM` | `Hind Landscape Website <onboarding@resend.dev>` |
| `NEXT_PUBLIC_SITE_URL` | `https://hindlandscaping.com` (or your Vercel URL until domain is connected) |

Redeploy after saving env vars.

---

## Step 4 — Custom domain

1. Vercel → Project → **Domains** → add `hindlandscaping.com` and `www`
2. Update DNS at your registrar (A/CNAME records Vercel shows)
3. Set `NEXT_PUBLIC_SITE_URL=https://hindlandscaping.com` and redeploy

---

## Step 5 — Resend (email inbox, not spam)

1. [Resend](https://resend.com) → **Domains** → add `hindlandscaping.com`
2. Add SPF + DKIM DNS records Resend provides
3. Wait for verification (usually minutes)
4. Once verified, emails send from `notifications@hindlandscaping.com` instead of the fallback

Until DNS is verified, forms still work via `onboarding@resend.dev` fallback (may land in spam).

---

## Step 6 — Smoke test after deploy

Open your live URL and verify:

- [ ] Homepage loads, logo and hero look correct
- [ ] `/sitemap.xml` and `/robots.txt` load
- [ ] **Contact** page form submits without error
- [ ] **Quote** page form submits
- [ ] Popup appears after ~30 seconds (once per browser)
- [ ] Lead email arrives at `hindlandscaping@gmail.com`
- [ ] If user enters email, confirmation email is sent
- [ ] Phone / WhatsApp links work: `+91 99901 16281`
- [ ] Google Maps footer link opens correct address

Quick API check (replace domain):

```bash
curl -X POST https://YOUR-DOMAIN/api/lead \
  -H "Content-Type: application/json" \
  -d "{\"source\":\"homepage-popup\",\"name\":\"Test User\",\"phone\":\"9999912345\",\"service\":\"Garden Design\",\"honeypot\":\"\"}"
```

Expected: `{"ok":true}`

---

## What’s included (no extra setup)

- 212 static/SSG pages (services, locations, blog, SEO intent pages)
- Security headers (CSP, HSTS in production)
- Rate limiting + honeypot on lead API
- Site-wide lead popup (30 s delay)
- JSON-LD schema for SEO

---

## Post-launch SEO (see also `SEO-LAUNCH.md`)

- Google Search Console → submit sitemap
- Google Business Profile with same NAP as `src/lib/business.ts`
- Verify domain on Resend for inbox delivery
