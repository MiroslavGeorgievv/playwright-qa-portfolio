import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';


const invalidLoginData = [
  { title: 'empty username and password', username: '', password: '' },
  { title: 'empty username', username: '', password: 'secret_sauce' },
  { title: 'empty password', username: 'standard_user', password: '' },
  { title: 'invalid password', username: 'standard_user', password: 'wrong_password' },
  { title: 'invalid username', username: 'invalid_user', password: 'secret_sauce' },
  { title: 'locked out user', username: 'locked_out_user', password: 'secret_sauce' },
  { title: 'username contains only whitespace', username: '   ', password: 'secret_sauce' },
  { title: 'password contains only whitespace', username: 'standard_user', password: '   ' },
];

// ------------------------
// Successful Authentication (Smoke)
// ------------------------

test.describe('Successful authentication @smoke', () => {

  test('User can login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory\.html/);
  });

  test('User can login and inventory page loads successfully @smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});

  test('User stays logged in after page refresh', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    await page.reload();
    await expect(page).toHaveURL(/inventory\.html/);
  });

  test('Error message is not visible after successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page.locator(loginPage.errorMessage)).not.toBeVisible();
  });

});

// ------------------------
// Failed Authentication (Negative & Validation)
// ------------------------

test.describe('Failed authentication scenarios @regression', () => {

  for (const data of invalidLoginData) {
    test(`Login fails with ${data.title}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.open();
      await loginPage.login(data.username, data.password);

      await expect(page.locator(loginPage.errorMessage)).toBeVisible();
      await expect(page).toHaveURL('/');
    });
  }

});

// ------------------------
// Authentication State & Access Control
// ------------------------

test.describe('Authentication state & access control @regression', () => {

  test('Unauthenticated user cannot access inventory directly', async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page).toHaveURL('/');
  });

  test('User is redirected to login page after logout', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page).toHaveURL('/');
  });

  test('Session is cleared after logout and inventory is not accessible', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await page.goto('/inventory.html');
    await expect(page).toHaveURL('/');
  });

  test('Error message is cleared after successful login attempt', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    // First attempt - invalid
    await loginPage.login('standard_user', 'wrong_password');
    await expect(page.locator(loginPage.errorMessage)).toBeVisible();

    // Second attempt - valid
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
  });

});
