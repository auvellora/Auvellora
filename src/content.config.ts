import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Each Element is one Markdown file in src/content/elements/.
// To add a piece to the site, copy a file, change the front-matter, drop in a
// photo. The home page, the Elements page and the piece's own page all update
// on the next build.
const elements = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/elements" }),
  schema: z.object({
    name: z.string(),
    type: z.string(), // e.g. "Floor lamp"
    order: z.number(), // display order
    // Main photo: used on the cards and first on the piece's page.
    // The room photo works best here; it blends with the rest of the site.
    image: z.string(),
    alt: z.string(),
    tagline: z.string(), // one line under the name on cards
    lead: z.string(), // one-paragraph intro on the piece's own page
    size: z.string().optional(), // left out = no size row
    materials: z.array(z.string()),
    light: z.string().optional(),
    finishes: z.array(z.string()).optional(),
    note: z.string().optional(), // e.g. "No electrical parts."
    // Further photos on the piece's page, in order (studio shot, close-ups).
    morePhotos: z.array(z.object({ src: z.string(), alt: z.string() })).optional(),
    // true = kept ready but not shown anywhere on the site.
    hidden: z.boolean().default(false),
  }),
});

export const collections = { elements };
