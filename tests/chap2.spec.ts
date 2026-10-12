import { test, expect } from '@playwright/test';

test('has tittle', async ({ page }) => {
  await page.goto('https://qestit.com/');
  await page.getByRole('button', { name: 'Accept' }).click();

  // assertion vérification que le titre de la page contient le mot "Qestit" (sans tenir compte de la casse)
  await expect(page).toHaveTitle(/Qestit/i);
});