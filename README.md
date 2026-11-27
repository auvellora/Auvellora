# Auvellora - website

A small multi-page site for Auvellora (objects and interiors from reclaimed
wood), built with [Astro](https://astro.build). Static output - deploys free.

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

Everything in `dist/` is plain HTML/CSS/JS - no server required.

## Deploy (free)

Any of these host the `dist/` folder for €0:

- **Cloudflare Pages** - connect the repo, build command `npm run build`, output `dist`.
- **Netlify** - connect the repo (same settings), or drag the `dist/` folder onto app.netlify.com/drop.
- **Vercel** - import the repo; it detects Astro automatically.

Then point your domain (e.g. `auvellora.lv`) at the host. Update `site:` in
`astro.config.mjs` if the domain is different.

## Edit content - no code needed

Each Element is one Markdown file in **`src/content/elements/`** (`rise.md`,
`keeper.md`). To add a piece, copy a file, change the fields at the top, and
drop a photo in `public/images/`. The home page, the Elements page and the
piece's own page update on the next build. `roomImage` adds a second photo of
the piece in a room, and `note` adds a line such as "No electrical parts."

Elements 03-06 (`element-03.md` ... `element-06.md`) hold the placeholder
descriptions from the approved copy. They have `hidden: true`, so they appear
nowhere on the site. When a piece is made and photographed, give it a name and
a photo, and change `hidden: true` to `hidden: false`. Element 06 was replaced
by Keeper.

Copy rules from the approved copy: English only, short hyphens "-" (never long
dashes), no prices - every piece is "Price on request".

Page text (home, interiors, story, contact) lives in `src/pages/*.astro`.

The Interiors page has two frames reserved for project photos. To fill one, put
the photo in `public/images/` and add it to `projectPhotos` near the top of
`src/pages/interiors.astro` (the comment there shows how).

The six pieces from the first, Latvian version of the site are kept in
`archive/latvian-collection/`. The site doesn't read that folder.

## Contact details and the form

The email address is set once in **`src/site.ts`** and used everywhere.

A static site can't send email by itself. Until a form service is set,
**Send enquiry** opens the visitor's own email app with their message already
written out to that address, so no enquiry is lost. To receive enquiries
straight from the form instead, set `FORM_ENDPOINT` in `src/site.ts`:

- **Formspree** - create a free form at formspree.io and paste its URL.
- **Netlify Forms** - if the site is hosted on Netlify.

"Ask about this piece" opens the contact page with the topic chosen and
the message started.

## Policies and business details

- **Privacy Policy** (`src/pages/privacy.md`) and **Terms of Sale**
  (`src/pages/terms.md`, with the withdrawal form) are plain Markdown: edit
  the text there. Both are linked at the bottom of every page, and the
  contact form links to the Privacy Policy.
- The business details shown on both pages (legal name, registration number,
  registered address, VAT number) and the "Last updated" date are set once in
  **`src/site.ts`** (`COMPANY`, `POLICIES_UPDATED`). Empty ones show as
  "[to be added]".
- The site loads nothing from other companies: the fonts are served from
  `public/fonts/` (`src/styles/fonts.css`), and there are no cookies or
  analytics, so no cookie banner is needed. If analytics or embedded videos
  from other services are ever added, update the Privacy Policy and add a
  consent banner first.

## Still to check

- **Keeper's exact height** (`src/content/elements/keeper.md`): the copy says
  "around 170-180 cm", to be confirmed.
- **Photos**: the hero and story photos are small (about 330 px and 250 px
  wide). Swap in full-resolution files with the same names when you have them.
- **Interiors** has one photo and two empty frames. Real project photos will
  make that page much stronger.

## Type & colour

- Display: **Fraunces**. Body: **Hanken Grotesk**. Both served from the site itself, and
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
