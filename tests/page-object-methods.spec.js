import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
  // pause for 3 seconds
  //await page.waitForTimeout(3000);

  // print the actual title

  let actualTitle = await page.title();

  console.log(actualTitle);
});

test("Getting the current url of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
  // pause for 3 seconds
  //await page.waitForTimeout(3000);

  let actualURL = await page.url();
  console.log(actualURL);
});


test("Set the window size", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
   // pause for 3 seconds
  //await page.waitForTimeout(3000);

 // await page.setViewportSize({ width: 1512, height: 982});
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