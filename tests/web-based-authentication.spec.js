import { test } from "@playwright/test";

// it is not the safe way 
test("Bypass authentication by embedding the credetials in the URL", async ({ page }) => {
await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
    await page.waitForTimeout(3000);
});


//best way to test
test("Bypass authentication by encoding the credetials base64 format", async ({ page }) => {

let encodedCredantial = Buffer.from("admin:admin").toString("base64");

await page.setExtraHTTPHeaders({ Authorization: `Basic ${encodedCredantial}` });

await page.goto("https://practice.cydeo.com/basic_auth");

//await page.waitForTimeout(3000);

});

