import {test} from "@playwright/test";

test.describe("Test Group @smoke", () =>{

    test.beforeEach(async({page}) =>{
        await page.goto("https://practice.cydeo.com/javascript_alerts");
         
    });

    test("Regular Alert", async ({ page }) => {
        page.on("dialog", async (alert) => {
            console.log(`Alert Message: ${alert.message()}`);
         //   await page.waitForTimeout(3000);
            await alert.accept();
        });
        
        let clickForJsAlertButton = page.locator("//button[.='Click for JS Alert']");

        await clickForJsAlertButton.click();

      //  await page.waitForTimeout(3000);
    });

    test("Confirmation Alert",async({page}) =>{
let clickForJSConfirmAlertButton = page.locator("button.btn.btn-primary[onclick='jsConfirm()']");

 page.on("dialog", async (alert) => {
   console.log(`Alert Message: ${alert.message()}`);
  // await page.waitForTimeout(3000);
   await alert.dismiss();
 });

await clickForJSConfirmAlertButton.click();
//await page.waitForTimeout(3000);
    });

    test("Prompt Alert",async ({page}) => {

 page.on("dialog", async (alert) => {
   console.log(`Alert Message: ${alert.message()}`);
  // await page.waitForTimeout(3000);
   await alert.accept("CYDEO");
 });

let clickForPromptAlertButton = page.locator("//button[.='Click for JS Prompt']");
await clickForPromptAlertButton.click();
//await page.waitForTimeout(3000);
    });

})