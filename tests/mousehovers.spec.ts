import {test, expect} from '@playwright/test'

test("TC001 - mouse hover test", async ({page}) => {
    await page.goto("https://www.nike.in/");
    await page.locator("(//span[@role='button'][normalize-space()='Men'])[1]").hover();
    await page.waitForTimeout(2000);
    await page.locator('a').filter({ hasText: 'All Shoes' }).first().click();
    await page.waitForTimeout(2000);
})