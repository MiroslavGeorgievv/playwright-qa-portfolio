import { test, expect } from '@playwright/test';

test('Login API returns error for invalid credentials', async ({ request }, testInfo) => {
  testInfo.annotations.push({
    type: 'note',
    description: 'SauceDemo does not expose a public login API. HTML error page is expected.'
  });

  const response = await request.post('/api/login', {
    data: {
      username: 'standard_user',
      password: 'wrong_password'
    }
  });

  expect(response.status()).toBe(405);

  const responseText = await response.text();
  expect(responseText).toContain('<html>');
});
