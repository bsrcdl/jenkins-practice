import { test } from "@playwright/test";

test.describe("Test Group @smoke", () => {
   // let elements;
    test.beforeEach(async ({page}) =>{
        await page.goto("https://practice.cydeo.com/");
        await page.waitForTimeout(3000);
    });
     test.afterEach(async ({page}) => {
       await page.waitForTimeout(3000);

     });

  test("Left Click", async ({ page }) => {
  await page.click("text='A/B Testing'");
  });

  test("Right Click", async ({ page }) => {
  await page.click("text='A/B Testing'", {button: "right"});
  });

  test("Hover", async ({ page }) => {
   await page.click("text='Hovers'");
   //await page.waitForTimeout(3000);
   //await page.hover("//img[@alt='User Avatar']");

   let elements = await page.locator("//img[@alt='User Avatar']").all();
   for (let each of elements) {
     await page.waitForTimeout(1000);
     await each.hover();
   }
  });

    test("Mouse wheel scrolling", async ({ page }) => {
//up and down
   await  page.mouse.wheel(0,6000);

    });

    test("Scrolling to specific element", async ({ page }) => {
  // scroll to input
  let inputsLink = page.getByText("Inputs");
 // await inputsLink.scrollIntoViewIfNeeded(); 
  await page.waitForTimeout(3000);
  await inputsLink.click();
    });

    test("Drag and Drop", async ({ page }) => {
      await page.goto("https://practice.cydeo.com/drag_and_drop");
  //await page.waitForTimeout(3000);
  await page.click("text='Drag and Drop'");
  //await page.waitForTimeout(3000);
   await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");
   //2nd way
  // let squareA = page.locator("//div[@id='column-a");
   //let squareB = page.locator("//div[@id='column-b']");

  // await squareA.dragTo(squareB);

});
  });

