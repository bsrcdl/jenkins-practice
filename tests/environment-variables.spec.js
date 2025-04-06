import { test } from "@playwright/test";

test("@env-test Testing environment variables", async ({ page }) => {
  console.log(process.env.PRACTICE_USERNAME);
  console.log(process.env.PRACTICE_PASSWORD);

  console.log(`Username is ${process.env.PRACTICE_USERNAME}`);
  console.log(`Password is ${process.env.PRACTICE_PASSWORD}`);
});

test("Bypass authentication by encoding the credetials base64 format", async ({
  page,
}) => {
  let encodedCredantial = Buffer.from(
    `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`
  ).toString("base64");

  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredantial}`,
  });

  await page.goto("https://practice.cydeo.com/basic_auth");

 // await page.waitForTimeout(3000);
});
