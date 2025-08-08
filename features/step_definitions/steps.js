const { Before, After, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const LoginPage     = require('../../pages/loginPage');
const InventoryPage = require('../../pages/inventoryPage');
const CartPage      = require('../../pages/cartPage');

setDefaultTimeout(30000);

let browser, context, page;
let loginPage, inventoryPage, cartPage;

Before(async () => {
  browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  context = await browser.newContext();
  page    = await context.newPage();
  loginPage     = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  cartPage      = new CartPage(page);
});

After(async () => {
  if (browser) {
    await browser.close();
  }
});

Given('I open the login page', async () => {
  await loginPage.goto();
});

Given('I log in as {string} with {string}', async (user, pass) => {
  await loginPage.goto();
  await loginPage.login(user, pass);
});

Given('I am logged in as {string} with {string}', async (user, pass) => {
  await loginPage.goto();
  await loginPage.login(user, pass);
  await expect(page).toHaveURL(/inventory/);
});

When('I add the first product to the cart', async () => {
  await inventoryPage.addFirstItemToCart();
});

Then('the cart icon should show {string}', async (count) => {
  const badgeText = await inventoryPage.getCartBadge();
  expect(badgeText).toBe(count);
});

When('I open the menu', async () => {
  await inventoryPage.openMenu();
});

When('I click logout', async () => {
  await inventoryPage.logout();
});

Then('I should see the inventory page', async () => {
  await expect(page).toHaveURL(/inventory/);
});

Then('I should see the login page again', async () => {
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});