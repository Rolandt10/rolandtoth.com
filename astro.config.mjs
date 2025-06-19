import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import mdx from "@astrojs/mdx";
import remarkSlug from "remark-slug";
import remarkAutolinkHeadings from "remark-autolink-headings";

// https://astro.build/config
export default defineConfig({
  site: "https://rolandtoth.com" || "localhost:4321",
  integrations: [tailwind(), react(), mdx()],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      remarkSlug,
      [remarkAutolinkHeadings, { behavior: "wrap" }],
    ],
  },
});
