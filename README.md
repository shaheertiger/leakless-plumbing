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
| `water-heater-repair.html` | Water Heater Repair & Installation landing page |
| `toilet-repair-installation.html` | Toilet & Fixture Repair landing page |
| `sewer-backup-repair.html` | Sewer Backup & Sewer Line Repair landing page |
| `sump-pump-services.html` | Sump Pump Services landing page |
| `commercial-plumbing.html` | Commercial Plumbing GTA landing page |
| `residential-plumbing.html` | Residential Plumbing GTA landing page |
| `service-areas.html` | Service Areas (cities + regions) |
| `<city>-plumbing.html` | 17 per-city landing pages (Toronto, Mississauga, Brampton, etc.) |
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

## SEO & LLM optimization

- Unique meta titles/descriptions + Open Graph per page.
- **Structured data (JSON-LD):** `Plumber`/`LocalBusiness`, `Service`/`ItemList`, `FAQPage`, `Review`/`AggregateRating`, and `BreadcrumbList` on inner pages.
- Entity-based headings, location-specific phrasing, concise answer-style FAQ content.
- `llms.txt` gives AI search engines (ChatGPT, Gemini, Perplexity, Google AI Overviews) a clean, citable summary of services, cities, hours, and the phone-only contact model.
- Strong internal linking between services, service areas, and CTAs.

## Customization notes

- Replace the domain `https://www.leaklessplumbing.ca/` in canonical/OG/schema/sitemap URLs with the real domain when known.
- Add a real Google Maps embed in `call.html` where the placeholder is marked.
- Update business hours and any licensing/insurance details to match the real business.

## Contact

**Call 437-996-1996** — the fastest (and only) way to reach a GTA plumber.
