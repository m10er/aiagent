import { test, expect } from '@playwright/test';

test('renders local data page @ui', async ({ page }) => {
  const html = `
    <html>
      <head><title>Local Data Page</title></head>
      <body>
        <h1>Local Smoke</h1>
        <p id="message">This is a local data: URL test.</p>
      </body>
    </html>
  `;

  await page.goto(`data:text/html,${encodeURIComponent(html)}`);

  await expect(page.getByRole('heading', { name: 'Local Smoke' })).toBeVisible();
  await expect(page.locator('#message')).toHaveText('This is a local data: URL test.');
});
