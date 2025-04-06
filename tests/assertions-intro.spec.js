import { expect, test } from "@playwright/test";

test.describe("Test Group", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");

  // await expect(page).toHaveTitle("Practice")
  // expect(await page.title()).toBe("Practice"); 
  });

  test("Verify checkboxes are chechked", async ({ page }) => {
   await page.getByText("Checkboxes").click();
  let firstCheckBox = page.locator("input#box1");
  let secondCheckBox = page.locator("input#box2");

      await firstCheckBox.check();
      await secondCheckBox.check();

    await firstCheckBox.isChecked();
    await secondCheckBox.isChecked();

    expect(await firstCheckBox.isChecked()).toBeTruthy();
    expect(await secondCheckBox.isChecked()).toBeTruthy();
  });

  test("Verify checkboxes are unchechked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let firstCheckBox = page.locator("input#box1");
    let secondCheckBox = page.locator("input#box2");

    await firstCheckBox.uncheck();
    await secondCheckBox.uncheck();

    await expect(firstCheckBox).not.toBeChecked();
    await expect(secondCheckBox).not.toBeChecked();

    expect(await firstCheckBox.isChecked()).toBeFalsy();
    expect(await secondCheckBox.isChecked()).toBeFalsy();
  });

  test("Verify text of the element ", async ({ page }) => {
    let headerElement = page.locator("span.h1y");
    await expect(headerElement).toHaveText("Test Automation Practice");
    let actualText = await headerElement.innerText();

    expect(actualText).toEqual("Test Automation Practice");

  });

});



