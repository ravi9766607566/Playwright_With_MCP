import {test, expect} from '@playwright/test'

test("TC001 - Form check", async ({page}) => {
    //Open the URL
    await page.goto("https://demo.guru99.com/selenium/newtours/index.php");

    //Link navigation
    await page.getByRole('link', { name: 'Flights' }).click();
    await page.waitForTimeout(2000);

    // Radio button selection
    await page.locator("input[value='oneway']").click();
    await page.waitForTimeout(2000);

    // Dropdown selection with value, label and index
    await page.locator('select[name="fromPort"]').selectOption({value: "Paris"});
    await page.waitForTimeout(2000);
    await page.locator('select[name="fromPort"]').selectOption({label: "London"});
    await page.waitForTimeout(2000);
    await page.locator('select[name="fromPort"]').selectOption({index: 3});
    await page.waitForTimeout(2000);
})
