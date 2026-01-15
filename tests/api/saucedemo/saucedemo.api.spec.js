import { test, expect } from '@playwright/test';

test('SauceDemo inventory is NOT accessible without authentication @api @regression', async ({ request }) => {
  const response = await request.get('https://www.saucedemo.com/inventory.html');

  expect(response.status()).toBe(404);

  const responseText = await response.text();
  expect(responseText).toContain('404');
});
