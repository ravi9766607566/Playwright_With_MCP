import { test, expect } from '@playwright/test';

test.describe('SauceDemo login scenarios from test plan', () => {
  test('Successful login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('Login attempt with invalid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('wrong_password');
    await page.locator('#login-button').click();

    const error = page.locator('[data-test="error"]');
    await expect(error).toContainText('Username and password do not match any user in this service');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Locked-out user login attempt', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('locked_out_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    const error = page.locator('[data-test="error"]');
    await expect(error).toContainText('Epic sadface: Sorry, this user has been locked out.');
    //await expect(error).toContainText('Epic sadface: Sorry, this user has been locked1234.');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});
