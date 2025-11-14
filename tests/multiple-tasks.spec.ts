import { test, expect } from '@playwright/test';

test('ajout et suppression de plusieurs tâches (pas à pas)', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.pause();

  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Acheter du pain');
  await page.keyboard.press('Enter');
  await page.pause();

  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Aller courir');
  await page.keyboard.press('Enter');
  await page.pause();

  const taskToDelete = page.locator('li', { hasText: 'Acheter du pain' });
  await taskToDelete.hover();
  await taskToDelete.locator('button.destroy').click();
  await page.pause();

  await expect(page.getByText('Aller courir')).toBeVisible();
  await expect(page.getByText('Acheter du pain')).toHaveCount(0);
  await page.pause();
});
