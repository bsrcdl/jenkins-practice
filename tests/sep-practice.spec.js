import{test,expect} from '@playwright/test';


test('SEP Practice', async ({page})=>{
  //1ST WAY => const code= Buffer.from("automation-user:123abc").toString('base64');

  const code = Buffer.from( `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}` ).toString("base64");

  await page.setExtraHTTPHeaders({ Authorization: `Basic ${code}` });

  //1ST WAY => await page.goto("https://qa.sep.tdtm.cydeo.com/taws");
  await page.goto(process.env.SEP_QA_URL);
  await page.waitForTimeout(3000);

  // STEP 1 : Start application
  let firstNameInputBox = page.locator("//input[@formcontrolname='firstName']");
  await firstNameInputBox.fill("Busra");

  let lastNameInputBox = page.locator("//input[@formcontrolname='lastName']");
  await lastNameInputBox.fill("Cudal");

  let emailInputBox = page.locator("//input[@formcontrolname='email']");
  await emailInputBox.fill("busra.cudal@sep.tdtm.cydeo.com");
  await page.waitForTimeout(3000);

  let phoneNumberInputBox = page.locator(
    "//input[@formcontrolname='phoneNumber']"
  );
  await phoneNumberInputBox.fill("120034564");
  await page.waitForTimeout(3000);

  let howDidYouHearDropDown = page.locator(
    "//mat-label[.='How did you hear about us?']"
  );
  await howDidYouHearDropDown.click();

  page.click("//mat-option[@id='mat-option-1']");
  await page.waitForTimeout(3000);

  let nextButton1 = page.locator("//button[.=' Next']");
  nextButton1.click();
  await page.waitForTimeout(3000);

  //STEP 2: Payment Plan Automation
  let upFrontPaymentPlan = page.locator("#mat-expansion-panel-header-0");
  await upFrontPaymentPlan.click();

  let nextButton2 = page.locator(
    "//button[@class='next-button' and text()='Next']"
  );
  await nextButton2.click();

  // Setp3: Review

  let paymentFrame = page.frameLocator(
    "//iframe[@title='Secure payment input frame']"
  );

  let cardNumberInputBox = paymentFrame.locator(
    "//input[@id='Field-numberInput']"
  );
  //await cardNumberInputBox.click("5555555555554444");
  await cardNumberInputBox.fill(process.env.SEP_MASTER_CARD_NUMBER);
  await page.waitForTimeout(3000);

  let expirationDateInputBox = paymentFrame.locator(
    "//input[@id='Field-expiryInput']"
  );
  //await expirationDateInputBox.fill("12/30 ");
  await expirationDateInputBox.fill(
    process.env.SEP_MASTER_CARD_EXPIRATION_DATE
  );  //settings.json

  let securityCodeInputBox = paymentFrame.locator(
    "//input[@id='Field-cvcInput']"
  );
  //await securityCodeInputBox.fill("123");
  await securityCodeInputBox.fill(process.env.SEP_MASTER_CARD_CVV);

  let zipCodeInputBox = paymentFrame.locator("//input[@id='Field-postalCodeInput']");
  //await zipCodeInputBox.fill("12345"); 
  await zipCodeInputBox.fill(process.env.SEP_MASTER_CARD_ZIP_CODE);



  let termsConditionsCheckBox = page.locator("//input[@id='defaultCheck2']");
  await termsConditionsCheckBox.check();
  await page.waitForTimeout(3000);

  let payButton = page.locator("//span[@class='mdc-button__label']");
  await payButton.click();
  await page.waitForTimeout(3000);
});