/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    globals: true, // Enable global test functions like `describe`, `it`, etc.
    environment: "happy-dom", // A lightweight DOM environment (alternative to jsdom)
    include: ["src/**/*.{test,spec}.{ts,js}"], // Define test file patterns
  },
});
