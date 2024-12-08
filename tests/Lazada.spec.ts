const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.lazada.co.th/');
});

test('Test_scenario Lazada Search', async ({ page }) => {
  await page.getByText('เปลี่ยนภาษา').click();
  await page.getByText('ภาษาอังกฤษ / English').click();
  await page.getByPlaceholder('Search in Lazada').click();
  await page.getByPlaceholder('Search in Lazada').fill('Baby toys');
  await page.getByRole('link', { name: 'SEARCH' }).click();
  await expect(page.locator('.ant-col.ant-col-20.ant-col-push-4 h1')).toHaveText(/Baby toys/i);
  const productItems = page.locator('[data-qa-locator="product-item"]');
  await expect(productItems).toHaveCount(40);
});