import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";
import astroParser from "astro-eslint-parser";

export default [
  {
    files: ["**/*.js", "**/*.ts", "**/*.astro"],
    ignores: ["**/*.astro", "node_modules/", "dist/", "public/"],
    plugins: { astro, prettier },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    rules: { ...astro.configs.recommended.rules, "prettier/prettier": "error" },
  },
];
