import { describe, test, expect } from "vitest";
import { setup, createPage } from "@nuxt/test-utils/e2e";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import App from "~/app.vue";

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

  test('setup middleware', async () => {
    const page = await createPage("/middleware/from");
    const text = await page.getByText("to page").textContent();

    expect(text).toContain("to page");

    await page.close();
  })
});
