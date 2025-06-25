// const {test, expect} = require('@playwright/test')
import { test, expect } from '@playwright/test'

test('Locators', async ({ page }) => {

    await page.goto("https://demoblaze.com/");
    await page.locator('id=login2').click();
    await page.locator('id=loginusername').fill("jebin");
    await page.locator('id=loginpassword').fill("jebin");
    await page.locator('//button[normalize-space()="Log in"]').click();
    const logoutlink = await page.locator("#nameofuser");
    await expect(logoutlink).toBeVisible();
    await page.locator('//*[@id="logout2"]').click();
    await page.close();

})

