import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.js", "**/*.ts", "**/*.astro"],
    ignores: ["node_modules/", "dist/", "public/"],
    plugins: { astro, prettier },
    languageOptions: {
      parser: "astro-eslint-parser",
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
