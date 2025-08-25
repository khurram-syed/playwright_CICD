import {test, expect} from '@playwright/test';
// npx playwright codegen demo.playwright.dev/todomvc -- to record the steps quickly
test('Testing the CodeGen tool for TodoMVC', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toBeVisible();
  await expect(page.getByText('This is just a demo of')).toBeVisible();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toBeVisible();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('this is to do list');
  await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toHaveValue('this is to do list');
});
  
   