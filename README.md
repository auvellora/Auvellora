# Auvellora — Astro test site

A small multi-page site for Auvellora (lighting & functional objects from found
wood), built with [Astro](https://astro.build). Static output — deploys free.

## Run it locally

You need Node 18+ (this was built on Node 22).

```bash
npm install       # once
npm run dev        # dev server at http://localhost:4321
```

## Build for production

```bash
npm run build      # outputs a static site to  dist/
npm run preview    # preview that build locally
```

Everything in `dist/` is plain HTML/CSS/JS — no server required.

## Deploy (free)

Any of these host the `dist/` folder for €0:

- **Cloudflare Pages** — connect the repo, build command `npm run build`, output `dist`.
- **Netlify** — connect the repo (same settings), or drag the `dist/` folder onto app.netlify.com/drop.
- **Vercel** — import the repo; it detects Astro automatically.

Then point your domain (e.g. `auvellora.lv`) at the host. Update `site:` in
`astro.config.mjs` to the real domain first.

## Edit content — no code needed

Each product is one Markdown file in **`src/content/products/`**. To add a piece,
copy an existing file, change the front-matter fields, and drop a photo in
`public/images/`. The collection page, the homepage feature, and the product's
own page all update automatically on the next build. This is Astro's content
collections feature — text and photos stay separate from the layout code.

Page text (home, about, contact) lives directly in `src/pages/*.astro`.

## The contact form needs an endpoint

A static site can't process a form by itself. Open `src/pages/kontakti.astro` and
set `FORM_ENDPOINT` to a free service:

- **Formspree** — create a form at formspree.io, paste its URL.
- **Netlify Forms** — deploy on Netlify and add the `netlify` attribute (see the
  comment in that file).

Until then the form validates in the browser but submissions go nowhere.

## Placeholders to replace

- **Contact details** (phone, email, address, reg. nr.): `src/components/Footer.astro`
  and `src/pages/kontakti.astro`. Current values are placeholders.
- **Domain**: `site:` in `astro.config.mjs`.
- **Product photos**: the images in `public/images/` are cropped from the shared
  spec-sheet grids, so they're low-resolution. Swap in full-resolution photos
  (same filenames) when you have them — the hero especially will sharpen up.

## Type & Latvian

- Display: **Fraunces**. Body: **Hanken Grotesk**. Both loaded from Google Fonts
  and both cover the full Latvian set (ā č ē ģ ī ķ ļ ņ š ū ž).
- Palette sampled from your logo files: ink `#1E1A17`, bone `#E5DBCF`,
  amber `#C58A3D` (the 2700 K light). Tokens live in `src/styles/global.css`.

## Structure

```
src/
  content/products/     six .md files — the collection
  content.config.ts     collection schema
  layouts/Base.astro    <head>, fonts, nav + footer, scroll-reveal
  components/            Nav, Footer, BranchDivider, ProductCard
  pages/
    index.astro         home
    kolekcija/index.astro       collection list
    kolekcija/[slug].astro      one page per product (generated)
    stasts.astro        about + process
    kontakti.astro      contact + form
  styles/global.css     design tokens + base
public/images/          product photos, logos, branch marks
```
