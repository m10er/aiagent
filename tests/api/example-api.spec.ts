import { test, expect } from '@playwright/test';

test.describe('API smoke @api', () => {
  test('GitHub API root responds', async ({ request }) => {
    const response = await request.get('https://api.github.com/');
    await expect(response).toBeOK();
    const body = await response.json();
    expect(body).toHaveProperty('current_user_url');
  });
});
