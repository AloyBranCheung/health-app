import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page
    .locator("section")
    .filter({
      hasText:
        "consequat nisl vellorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
    })
    .getByRole("button", { name: "Login" })
    .click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(process.env.TEST_USER!);
  await page.getByPlaceholder("Email").press("Tab");
  await page.getByPlaceholder("Password").fill(process.env.TEST_USER_PASS!);
  await page.getByPlaceholder("Password").press("Enter");
  // assert
  await expect(page.getByText("Welcome Admin.")).toContainText(
    "Welcome Admin."
  );
  // action
  await page.getByRole("heading", { name: "My Health" }).click();
  // assert
  await expect(page.getByText("Hello, Jabba.")).toContainText("Hello, Jabba.");
  await expect(
    page.getByRole("heading", { name: "admin@admin.com" })
  ).toContainText(process.env.TEST_USER!);
  await expect(
    page.getByRole("heading", { name: "Preferred Name: Jabba" })
  ).toContainText("Preferred Name: Jabba");
  await expect(
    page.getByRole("heading", { name: "Nickname: Meemaw" })
  ).toContainText("Nickname: Meemaw");
  // action
  await page.locator("div:nth-child(3)").first().click();
  // assert
  await expect(page.getByText("Prescriptions Dashboard")).toContainText(
    "Prescriptions Dashboard"
  );
  // action
  await page.getByRole("heading", { name: "Results" }).click();
  // assert
  await expect(page.getByText("Results").nth(1)).toContainText("Results");
  // action
  await page.getByRole("heading", { name: "Find a doctor" }).click();
  // assert
  await expect(page.getByText("Search")).toContainText("Search");
  await expect(page.getByText("Appointments")).toContainText("Appointments");
  // action
  await page.locator("div:nth-child(9)").click();
  // assert
  await expect(page.getByText("Messages").nth(1)).toContainText("Messages");
  // action
  await page.getByText("Logout").click();
  // assert
  await expect(
    page
      .locator("section")
      .filter({
        hasText:
          "consequat nisl vellorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
      })
      .getByRole("button", { name: "Login" })
  ).toContainText(
    "consequat nisl vellorem ipsum dolor sit amet, consectetur adipiscing elit, sed d"
  );
});
