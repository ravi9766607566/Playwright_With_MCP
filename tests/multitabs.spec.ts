import {test, expect} from 'playwright/test'

test("TC001 - multitabs test", async ({browser}) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const [page2] = await Promise.all([
        context.waitForEvent('page'),
        page1.getByRole('link', { name: 'OrangeHRM, Inc' }).click()
    ]);

    await page2.getByRole('textbox', { name: 'Your email address' }).fill('test@test.com');
    await page2.waitForTimeout(2000);

    await page1.bringToFront();
    await page1.getByRole('textbox', { name: 'username' }).fill('Admin');
    await page2.waitForTimeout(2000);
});