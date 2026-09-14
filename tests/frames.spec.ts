import {test, expect} from '@playwright/test'

test("TC001 - Frames Test", async ({page}) => {
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");
    await page.frameLocator('[name="packageListFrame"]').getByText('java.lang', { exact: true }).click
    await page.waitForTimeout(2000);
    await page.frameLocator('[name="packageFrame"]').locator(':text-is("Class")').click();
    await page.waitForTimeout(4000);

} )