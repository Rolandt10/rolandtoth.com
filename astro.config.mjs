import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://rolandtoth.com" || "localhost:4321",
  integrations: [tailwind(), react()],
  output: "server",
  markdown: { remarkPlugins: [remarkReadingTime] },
});
