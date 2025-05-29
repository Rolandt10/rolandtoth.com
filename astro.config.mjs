import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import mdx from "@astrojs/mdx";
import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  site: "https://rolandtoth.com" || "localhost:4321",
  integrations: [tailwind(), react(), mdx()],
  markdown: { remarkPlugins: [remarkReadingTime] },
});
