import { describe, test, expect } from "vitest";
import { setup, createPage } from "@nuxt/test-utils/e2e";

await setup({
  browser: true,
});

describe("Routing", () => {
  for (let i = 1; i <= 100; i++) {
    test("foo", async () => {
      const page = await createPage("/foo");
      const text = await page.getByText("foo page").textContent();

      expect(text).toContain("foo page");

      await page.close();
    });
  }
});
