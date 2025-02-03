import { expect, test } from "@nuxt/test-utils/playwright";

test.describe("Routing", () => {
  for (let i = 1; i <= 100; i++) {
    test(`foo ${i}`, async ({ page, goto }) => {
      await goto("/foo", { waitUntil: "hydration" });

      await expect(page.getByText("foo page")).toBeVisible();
    });
  }
});
