import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { InventoryPage } from '../../../pages/InventoryPage';

test('User can add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addFirstProductToCart();

  await expect(page.locator(inventoryPage.cartBadge)).toHaveText('1');
});
