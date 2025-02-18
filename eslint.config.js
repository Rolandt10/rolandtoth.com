import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.js", "**/*.ts", "**/*.astro"],
    ignores: ["node_modules/", "dist/", "public/"],
    plugins: { astro, prettier },
    languageOptions: {
      parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    },
    rules: {
      ...astro.configs.recommended.rules, // Astro recommended rules
      "prettier/prettier": "error", // Enforce Prettier formatting
    },
  },
];
