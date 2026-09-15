import {test, expect} from "@playwright/test";

test ("TC001 - Login test with invalid credentials", async ({page}) => {
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('admin1234');
   await page.getByRole('button').click();

   await page.waitForTimeout(3000);
  // await expect (page.getByText('Invalid credentials')).toBeVisible();

  const errorMessage= await page.locator('div.oxd-alert-content.oxd-alert-content--error').textContent();
  console.log(errorMessage);

  //console.log ("=================== before assertion ===================");
  //await expect(errorMessage).toBe("Bad credentials"); // Hard Assertions
  //await expect(errorMessage).toBe("Invalid credentials"); // Hard Assertions
  //console.log ("=================== after assertion ===================");

  console.log ("=================== before soft assertion ===================");
  await expect.soft(errorMessage).toBe("Bad credentials"); // Soft Assertions
  console.log ("=================== after soft assertion ===================");
})