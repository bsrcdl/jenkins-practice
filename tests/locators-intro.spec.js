import { test } from "@playwright/test";

test("Simple google Test", async ({ page }) => {

    await page.goto("https://google.com");
    await page.waitForTimeout(3000);

    let searchBox = page.locator("//textarea[@class='gLFyf']");
    await page.waitForTimeout(3000);

     //await searchBox.type("CYDEO");
    await searchBox.fill("CYDEO");

    //await page.waitForTimeout(3000);
    searchBox.press("Enter");
   // await page.waitForTimeout(3000);

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
