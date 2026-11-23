import { getCollection } from "astro:content";

/** The Elements shown on the site, in display order. Pieces with
 *  `hidden: true` (not yet made or photographed) are left out everywhere. */
export async function getElements() {
  return (await getCollection("elements", ({ data }) => !data.hidden)).sort(
    (a, b) => a.data.order - b.data.order
  );
}
