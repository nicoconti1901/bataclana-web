import { expect, test } from "@playwright/test";

const concepts = [
  "/lab/editorial-night",
  "/lab/urban-milonga",
  "/lab/contemporary-stage",
  "/lab/archivo-vivo",
] as const;

test.describe("Design Lab", () => {
  test("lab index lists four concepts", async ({ page }) => {
    await page.goto("/lab");
    await expect(page.getByRole("heading", { name: "Design Lab" })).toBeVisible();
    for (const href of concepts) {
      await expect(page.locator(`a[href="${href}"]`).first()).toBeVisible();
    }
  });

  for (const route of concepts) {
    test(`${route} renders brand and key sections`, async ({ page }) => {
      await page.goto(route);
      await expect(page.getByText(/Casa Meridiana/i).first()).toBeVisible();
      await expect(page.locator("footer").first()).toBeVisible();
    });
  }
});
