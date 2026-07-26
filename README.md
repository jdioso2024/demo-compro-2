# DEN — PT Dayana Energi Nusantara

Company profile website for **PT Dayana Energi Nusantara**, an Indonesian civil construction and mechanical engineering company serving the energy sector (oil, gas & geothermal).

Built with Next.js App Router and exported as a fully static site — no server, no API, no database.

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, `output: 'export'`) |
| UI | React 19 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 3 + inline styles + global CSS |
| Icons | lucide-react |
| Fonts | Sora, Inter, JetBrains Mono (Google Fonts) |

---

## Getting Started

```bash
npm install
npm run dev          # http://localhost:3000
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build and export a static site to `out/` |
| `npm run start` | Serve the production build |
| `npm run lint` | Run `next lint` |

### Deploying

`next.config.js` sets `output: 'export'`, so `npm run build` writes plain HTML/CSS/JS into `out/`. Upload that folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel, S3).

Because of static export, `next/image` optimization is disabled (`images.unoptimized: true`) and images are rendered with plain `<img>` tags.

---

## Project Structure

```
app/
  layout.tsx          Root layout — metadata, Google Fonts, Navbar + Footer
  globals.css         CSS variables, utility classes, responsive helpers
  page.tsx            Home
  about/page.tsx      About Us
  services/page.tsx   Services
  projects/page.tsx   Projects
  hse/page.tsx        HSE & Safety
  contact/page.tsx    Contact Us

components/
  Navbar.tsx          Fixed header, desktop nav + mobile hamburger menu
  Footer.tsx          Brand, quick links, compliance links, HQ address
  ServiceCard.tsx     Image + category + title + description + tag chips
  ProjectCard.tsx     Image card with gradient overlay and contract-value badge
  TeamCard.tsx        Leadership profile card
  MetricBadge.tsx     Large stat with accent bar
  ComplianceBadge.tsx Certification chip (ISO codes)

public/
  hero.webm           Hero background video (used on several page heroes)
  construction(*).webp  Placeholder photography at various aspect ratios
```

### Pages

- **Home** — hero video + stats strip (Zero Accident / 100% On-Time / CSMS Certified), three service cards, featured projects, HSE & compliance section.
- **About Us** — company background, vision & mission, leadership, core values.
- **Services** — civil works, energy support (mechanical & piping), procurement & manpower, closing CTA.
- **Projects** — project grid, metrics strip, recent achievements.
- **HSE & Safety** — HSE principles and ISO certifications (9001:2015, 45001, 14001).
- **Contact Us** — contact details, inquiry form, map section, quote CTA.

---

## Design System

The visual language ("soft-industrial") is defined in two places, and both are kept in sync manually:

- [app/globals.css](app/globals.css) — CSS custom properties (`--primary`, `--surface-*`, `--outline-*`, …) plus utility classes such as `.btn-primary`, `.card-industrial`, `.input-blueprint`, and the `.grid-3col` / `.section-pad` responsive helpers.
- [tailwind.config.ts](tailwind.config.ts) — the same palette as Tailwind color tokens, plus font families, type scale (`display-xl`, `headline-lg`, `body-md`, `label-caps`), `max-w-container` (1280px), and radius scale.

Key tokens:

| Token | Value |
|---|---|
| Primary | `#a93200` (accent `#e84a1a`) |
| Secondary | `#bb0013` |
| Surface / background | `#fcf9f8` |
| Text | `#1c1b1b` / `#5a4139` |
| Outline variant | `#e2bfb4` |
| Default radius | `0.25rem` |
| Container width | `1280px`, `64px` gutters (`16px` on mobile) |

Typography: **Sora** for headings and CTAs, **Inter** for body/nav, **JetBrains Mono** for overlines, labels and technical metadata.

---

## Notes & Caveats

- **Styling is mostly inline.** Page and component styles are written as inline `style={{ … }}` objects rather than Tailwind classes. Tailwind is configured and loaded, but only a handful of class names (the responsive helpers in `globals.css`) do real work. Changing a color means editing it in the component, not just the config.
- **Responsive behaviour** relies on the `@media` blocks in [app/globals.css](app/globals.css) plus `styled-jsx` blocks inside `Navbar.tsx` and `Footer.tsx` — inline styles can't express media queries.
- **The contact form does not send anything.** `handleSubmit` in [app/contact/page.tsx:10](app/contact/page.tsx#L10) only calls `preventDefault()` and flips a `sent` flag to show the success state. Wiring it to a real endpoint (Formspree, a serverless function, an email API) is still to do — note that a static export has no API routes.
- **Content and imagery are placeholders.** Project cards use `construction(*).webp` stock images and `-` contract values; footer social icons link to `#`; the map links to `https://maps.google.com` rather than a pinned location. Footer links to `/privacy`, `/terms`, and `/careers` point at pages that don't exist yet.
- **Logo mark** currently renders the letter `O` in a circle in both [components/Navbar.tsx](components/Navbar.tsx) and [components/Footer.tsx](components/Footer.tsx).
- `build-error.txt` and `build.log` are leftover build output from an earlier run on a different machine and can be deleted.
