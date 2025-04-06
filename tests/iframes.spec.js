import { test,expect } from "@playwright/test";

test("iframe test", async ({page}) => {
  await page.goto("https://practice.cydeo.com/iframe");
  let myFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");
  let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");

 // await page.waitForTimeout(3000);
  //await elementInsideTheFrame.press("Control+A", "Backspace");
  //await elementInsideTheFrame.press("Control+A", "delete");
  await elementInsideTheFrame.clear();

  //await page.waitForTimeout(3000);

  await elementInsideTheFrame.fill("Hello, I'm an iframe!");
 // await page.waitForTimeout(3000);

  await expect(elementInsideTheFrame).toHaveText("Hello, I'm an iframe!");

  await page.waitForTimeout(3000);
});
