import {test} from "@playwright/test";

test.describe("User story", () => {

test.beforeAll(async() => {
  console.log("Before All Test cases");
});

test.afterAll(async () => {
  console.log("After All Test cases");
});

    test.beforeEach(async() => {
        console.log("Before each test case");
    });

      test.afterEach(async () => {
        console.log("After each test case");
      });

test("Test Case 1" , async () => {
console.log("Test Case 1 is expected");

});

test("Test Case 2" , async () => {
console.log("Test Case 2 is expected");
    
});

test("Test Case 3" , async () => {
console.log("Test Case 3 is expected");
    
});


});