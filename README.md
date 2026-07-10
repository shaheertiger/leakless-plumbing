# Leakless Plumbing — GTA Plumbing Website

A world-class, modern, SEO-optimized and LLM-optimized website for **Leakless Plumbing**, a professional plumbing company serving the Greater Toronto Area (GTA), Ontario, Canada.

The site is **conversion-focused for phone calls only** — there are no contact forms, quote forms, email capture, or booking forms anywhere. Every section drives visitors to call **437-996-1996** (`tel:4379961996`).

## Tech

- **Static HTML/CSS/JS** — no build step, no framework, no external dependencies (except the Inter web font). Fast-loading and easy to host anywhere (Netlify, Vercel, GitHub Pages, S3, any static host).
- Mobile-first, responsive, accessible, theme-color set.
- Self-contained SVG icons and illustrations (no heavy stock images).

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Homepage — all 12 required sections |
| `services.html` | Full services overview |
| `emergency-plumbing.html` | Emergency Plumbing GTA landing page |
| `drain-cleaning.html` | Drain Cleaning GTA landing page |
| `leak-detection-repair.html` | Leak Detection & Repair landing page |
| `sump-pump-services.html` | Sump Pump Services landing page |
| `commercial-plumbing.html` | Commercial Plumbing GTA landing page |
| `residential-plumbing.html` | Residential Plumbing GTA landing page |
| `service-areas.html` | Service Areas (cities + regions) |
| `about.html` | About Us |
| `call.html` | Call Now / Contact (phone, hours, service area, map placeholder) |

## Assets

- `assets/css/styles.css` — full design system (deep navy, steel blue, water blue, warm accent)
- `assets/js/main.js` — mobile nav toggle, active-link highlighting, footer year
- `sitemap.xml`, `robots.txt`, `llms.txt` — technical SEO & AI/answer-engine optimization

## Conversion features

- **Sticky mobile call bar** fixed to the bottom of every page.
- **Desktop floating call button** (top-right) with pulse animation.
- **Click-to-call CTAs** in every major section using `tel:4379961996`.
- Varied call-to-action copy (Call Now, Tap to Call, Emergency? Call Now, Speak With a Local Plumber, etc.).

## SEO & LLM optimization (2026 Google + Bing guidelines)

- Unique meta titles (≤60 chars) and meta descriptions (≤160 chars) on every page, tuned for SERP snippet display.
- Full **Open Graph + Twitter Card** tags on every page, including a real 1200×630 share image (`assets/img/og-cover.jpg`) with width/height/alt for rich link previews on Facebook, LinkedIn, X, Slack, and Bing/Google chat surfaces.
- Consistent `geo.region` / `geo.placename` meta on every page for local relevance signals.
- **Structured data (JSON-LD):** `Plumber`/`LocalBusiness`, `Service`/`ItemList`, `FAQPage`, `Review`/`AggregateRating`, `BreadcrumbList` on inner pages, and a `SpeakableSpecification` on the homepage for voice/AI-answer surfaces.
- Entity-based headings, location-specific phrasing, concise answer-style FAQ content.
- `sitemap.xml` includes `<lastmod>` dates so Google/Bing can prioritize re-crawls.
- `robots.txt` explicitly allows Googlebot and Bingbot, welcomes AI/answer-engine crawlers, and declares an **IndexNow** key for instant-indexing pings to Bing (and other participating engines) on publish/update.
- `llms.txt` gives AI search engines (ChatGPT, Gemini, Perplexity, Google AI Overviews, Copilot) a clean, citable summary of services, cities, hours, and the phone-only contact model.
- Strong internal linking between services, service areas, and CTAs.

## Customization notes

- Replace the domain `https://www.leaklessplumbing.ca/` in canonical/OG/schema/sitemap URLs with the real domain when known.
- Add a real Google Maps embed in `call.html` where the placeholder is marked.
- The site is structured for **future per-city landing pages** (e.g. `plumber-toronto.html`, `plumber-mississauga.html`) — follow the existing service-page template.
- Update business hours and any licensing/insurance details to match the real business.

## Contact

**Call 437-996-1996** — the fastest (and only) way to reach a GTA plumber.
