import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, test, expect } from "vitest";
import App from "~/app.vue";

describe("Routing", () => {
  for (let i = 1; i <= 100; i++) {
    test("foo", async () => {
      const component = await mountSuspended(App, { route: "/foo" });

      expect(component.html()).toContain("foo page");
    });
  }

  test('setup middleware', async () => {
    const component = await mountSuspended(App, { route: "/middleware/from" });

    expect(component.html()).toContain("to page");
  })
});
