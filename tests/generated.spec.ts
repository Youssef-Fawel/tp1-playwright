import { test, expect } from '@playwright/test';

test('ajout d’une tâche TODO', async ({ page }) => {

  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByRole('textbox', { name: 'What needs to be done?' })
           .fill('Faire les courses');

  await page.keyboard.press('Enter');

  await expect(page.getByText('Faire les courses')).toBeVisible();
});
