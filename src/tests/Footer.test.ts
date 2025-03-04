// src/tests/Footer.test.ts
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Footer from "../components/Footer/Footer.astro"; // Adjust the path if needed

test("Footer renders correctly", async () => {
  const container = await AstroContainer.create();

  const result = await container.renderToString(Footer);

  // Check for expected content in the rendered output
  expect(result).toContain("Browse");
  expect(result).toContain("Contact");
  expect(result).toContain("GitHub");
  expect(result).toContain("Colophon");

  // Optionally check the hover class presence (if you care about the styling too)
  expect(result).toContain("hover:text-light-600");
});
