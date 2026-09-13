import{expect, test} from '@playwright/test'

test("TC001 -Login test", async ({page}) => {

   await page.goto("https://www.saucedemo.com/");
   await page.getByPlaceholder('Username').fill('standard_user');
   await page.getByPlaceholder('Password').fill('secret_sauce');
   await page.getByRole('button').click();
})

test ("TC002 - Login test with valid credentials", async ({page}) => {
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('admin123');
   await page.getByRole('button').click();

   await page.waitForTimeout(5000);
   await expect (page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
   await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

})

test ("TC003 - Login test with invalid credentials", async ({page}) => {
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('admin1234');
   await page.getByRole('button').click();

   await page.waitForTimeout(3000);
  // await expect (page.getByText('Invalid credentials')).toBeVisible();

  const errorMessage= await page.locator('div.oxd-alert-content.oxd-alert-content--error').textContent();
  console.log(errorMessage);
  //await expect(errorMessage).toBe("Bad credentials");
  await expect(errorMessage).toBe("Invalid credentials");
})