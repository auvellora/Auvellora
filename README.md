# Auvellora — website

A small multi-page site for Auvellora (objects and interiors from reclaimed
wood), built with [Astro](https://astro.build). Static output — deploys free.

The text and photos come from the English pages made in October 2026
(home, story, contact), plus an Elements page, a page per Element and an
Interiors page built from the same wording.

## Run it locally

You need Node 18+.

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
`astro.config.mjs` if the domain is different.

## Edit content — no code needed

Each Element is one Markdown file in **`src/content/elements/`** (`rise.md`,
`keeper.md`). To add a piece, copy a file, change the fields at the top, and
drop a photo in `public/images/`. The home page, the Elements page and the
piece's own page update on the next build. Leave out `size` and the page says
"Made to fit your space". `roomImage` adds a second photo of the piece in a room.

Page text (home, interiors, story, contact) lives in `src/pages/*.astro`.

The six pieces from the first, Latvian version of the site are kept in
`archive/latvian-collection/`. The site doesn't read that folder.

## Contact details and the form

The email address is set once in **`src/site.ts`** and used everywhere.

A static site can't send email by itself. Until a form service is set,
**Send enquiry** opens the visitor's own email app with their message already
written out to that address, so no enquiry is lost. To receive enquiries
straight from the form instead, set `FORM_ENDPOINT` in `src/site.ts`:

- **Formspree** — create a free form at formspree.io and paste its URL.
- **Netlify Forms** — if the site is hosted on Netlify.

Links like "Ask about Rise" open the contact page with the topic chosen and
the message started.

## Still to check

- **Rise sizes and light** (`src/content/elements/rise.md`) are carried over
  from the earlier lamp "Svece", which has the same design. Keeper has no size
  yet. Confirm or correct both.
- **Photos**: the hero and story photos are small (about 330 px and 250 px
  wide). Swap in full-resolution files with the same names when you have them.
- **Interiors** has one photo so far. Real projects will make that page much
  stronger.

## Type & colour

- Display: **Fraunces**. Body: **Hanken Grotesk**. Both from Google Fonts, and
  both cover the full Latvian set (ā č ē ģ ī ķ ļ ņ š ū ž) for a later Latvian version.
- Palette sampled from the logo files: ink `#1E1A17`, bone `#E5DBCF`,
  amber `#C58A3D` (the 2700 K light). Tokens live in `src/styles/global.css`.

## Structure

```
src/
  site.ts               email address + contact form setting
  content/elements/     one .md file per Element
  content.config.ts     Element fields
  layouts/Base.astro    <head>, fonts, menu + footer, scroll-reveal
  components/           Nav (with phone menu), Footer, BranchDivider, ElementCard
  pages/
    index.astro         home
    elements/index.astro        all Elements
    elements/[slug].astro       one page per Element (generated)
    interiors.astro     commissions at any scale
    story.astro         story + how it's made
    contact.astro       contact + form
  styles/global.css     design tokens, base, shared page parts
public/images/          photos, logos, branch marks
archive/                the first, Latvian collection
```
