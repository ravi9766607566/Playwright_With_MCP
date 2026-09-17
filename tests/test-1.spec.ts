import { test, expect } from '@playwright/test';

//https://playwright.dev/docs/getting-started-vscode
// add extension "Playwright Test for VS Code" to run tests from VS Code >> right side click on below the extension click on tesrting and click on record new
test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});