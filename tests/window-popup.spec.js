import { expect,test } from "@playwright/test";

test("Window pop-up practice", async ({ page }) => {

//creating event listenr for monitoring window pop-ups

let promisedNewPageEvent = page.waitForEvent("popup");

await page.goto("https://practice.cydeo.com/windows");
await page.click("text=Click Here");
//await page.waitForTimeout(3000);

let newPage = await promisedNewPageEvent; // await for the prose to be resolved

//await page.waitForTimeout(3000);

await expect(newPage).toHaveTitle("New Window");
await expect(page).toHaveTitle("Windows");

//wait page.waitForTimeout(3000);

await page.bringToFront();
let firstWindowElement= page.getByText("Opening a new window");
await expect(firstWindowElement).toBeVisible();

//await page.waitForTimeout(3000);


await newPage.bringToFront();
let secondWindowElement = newPage.getByText("New Window");
await expect(secondWindowElement).toBeVisible();

//await page.waitForTimeout(3000);
});
