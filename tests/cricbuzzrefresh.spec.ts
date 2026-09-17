import {test, expect} from '@playwright/test'

test.setTimeout(40000)
test ('refresh cricbuzz every 5 seconds for 30 seconds', async ({page}) => {
await page.goto('https://www.cricbuzz.com/');

for (let i=0; i<5; i++) {
    await page.waitForTimeout(5000);
    await page.reload();}
    await page.waitForTimeout(5000);
})