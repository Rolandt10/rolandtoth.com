// eslint.config.js
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,

  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: {
        // Node.js globals
        process: "readonly",
        __dirname: "readonly",
        module: "readonly",
        require: "readonly",
      },
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.dev.json"],
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: importPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      quotes: "off",
      "import/no-unresolved": "off",
      indent: ["error", 2],
    },
  },

  {
    ignores: ["lib/**/*", "generated/**/*"],
  },
];
