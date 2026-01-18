import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';

const invalidLoginData = [
  {
    title: 'empty username and password',
    username: '',
    password: '',
  },
  {
    title: 'empty username',
    username: '',
    password: 'secret_sauce',
  },
  {
    title: 'empty password',
    username: 'standard_user',
    password: '',
  },
  {
    title: 'invalid password',
    username: 'standard_user',
    password: 'wrong_password',
  },
  {
    title: 'locked out user',
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
];

test.describe('Login tests', () => {

  test('User can login with valid credentials @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventoryFAIL/);
  });

  test.describe('Negative login scenarios (data-driven) @regression', () => {
    for (const data of invalidLoginData) {
      test(`Login fails with ${data.title}`, async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.login(data.username, data.password);

        await expect(page.locator(loginPage.errorMessage)).toBeVisible();
      });
    }
  });

  test.describe('Login state transition tests @regression', () => {

    test('Error message is not visible after successful login', async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.open();

      // First attempt - invalid login
      await loginPage.login('standard_user', 'wrong_password');
      await expect(page.locator(loginPage.errorMessage)).toBeVisible();

      // Second attempt - valid login
      await loginPage.login('standard_user', 'secret_sauce');
      await expect(page.locator(loginPage.errorMessage)).not.toBeVisible();
      await expect(page).toHaveURL(/inventory/);
    });

  });

});
