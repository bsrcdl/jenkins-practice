import { expect,test } from "@playwright/test";



  test("Web Table Practice", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables") ;

   let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
  
   let rows = await table.locator("//tr").all();

   let columns= await table.locator("//th").all();

   let cells = await table.locator("//td").all();

   await page.waitForTimeout(3000);

 expect(rows.length).toBe(9);
    //await page.waitForTimeout(3000);
 expect(columns.length).toBe(13);
   // await page.waitForTimeout(3000);
 expect(cells.length).toBe(104);
  // await page.waitForTimeout(3000);
for(let cell of cells){
  console.log(await cell.textContent());
}

  });

  test("Web Table Practice 2", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/web-tables");

    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

    let rows = await table.locator("//tr").all();

    //create a loop that can print each cell's data of each row.
 for (let row of rows) {
   let cells = await row.locator("//td").all();
   for (let i = 1; i < cells.length - 1; i++) {
     console.log(await cells[i].textContent());
   }
 }

  });
  test("Web Table Practice3",async({page}) =>{
    await page.goto("https://practice.cydeo.com/web-tables");

    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    let checkboxes = await table.locator("//input[@type='checkbox']").all();
  
    for(let checkbox of checkboxes) {
     await  checkbox.check();
    expect(checkbox).toBeChecked();
    }
  });

