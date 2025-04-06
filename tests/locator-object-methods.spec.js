import { test } from "@playwright/test";

test.describe("Test Group", () => {
 
    // create beforeEach that navigate to https://practice.cydeo.com/
    test.beforeEach(async({page}) => {
        await page.goto("https://practice.cydeo.com");
    });


     test("Check(): checks the radio button and check boxes if they  haven't been chekced yet", async ({ page }) => {
   //let checkboxesLink = page.locator("text='Checkboxes'");
    let checkboxesLink =page.getByText("Checkboxes");
    await checkboxesLink.click();
    // pause for 3 seconds
    // await page.waitForTimeout(3000);

    let checkbox1 = page.locator("//input[@id='box1']");
     await checkbox1.check();
   //   await page.waitForTimeout(3000);
  });



  test("Uncheck: unchecks the radio button and check boxes if thet haven't been unchekced yet", async ({  page,}) => {

 let checkboxesLink = page.getByText("Checkboxes");
 await checkboxesLink.click();

 let checkbox2 = page.locator("//input[@id='box2']");
 await checkbox2.uncheck();
 //await page.waitForTimeout(3000);
  });



  test("SelectOption(): used for dropdown boxes with select tagName", async ({ page }) => {
    let dropdownLink = page.getByText("Dropdown");
   // await page.waitForTimeout(3000);
    await dropdownLink.click();

    let simpleDropdown = page.locator("//select[@id='dropdown']");
   // await simpleDropdown.selectOption("1");
   // await simpleDropdown.selectOption({label:"Option 1"})
   await simpleDropdown.selectOption({index:1});

  //  await page.waitForTimeout(3000);
  

});


});

/*
Methods-Actions:
click()
fill()
type()
press()
check()
uncheck()
selectOption()


Methods-Retrieval:
textContent()
innerText()
inputValue()
getAttribute()



Methods-State:
isVisible()
isEnabled()
isDisabled()
isChecked()


*/
