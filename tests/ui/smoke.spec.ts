import { test, expect } from '@playwright/test';

test.describe('UI smoke @ui', () => {
  test('Playwright site loads and shows docs link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect(page).toHaveTitle(/Playwright/);
  });
});
