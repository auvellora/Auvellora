import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Each product is one Markdown file in src/content/products/.
// To add a piece to the site, copy a file, change the front-matter, drop in a
// photo — no code, no rebuild-by-hand. That is the whole point of collections.
const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    name: z.string(),
    type: z.string(), // e.g. "Grīdas lampa"
    order: z.number(), // display order in the collection
    image: z.string(),
    alt: z.string(),
    tagline: z.string(),
    size: z.string(),
    materials: z.array(z.string()),
    light: z.string().optional(),
    finishes: z.array(z.string()).optional(),
    lead: z.string(), // one-paragraph intro shown on the detail page
  }),
});

export const collections = { products };
