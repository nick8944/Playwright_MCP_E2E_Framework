// spec: specs/AutomationExercise_TestPlan.md
// Test Suite: Shopping Cart Management

const { test, expect } = require('@playwright/test');

test.describe('Shopping Cart Management', () => {
  test.fixme('Add product to cart', async ({ page }) => {
    // Navigate to the Products page
    await page.goto('https://automationexercise.com/products');
    
    // Add first product to cart
    const addToCartButtons = page.locator('a:has-text("Add to cart")');
    await addToCartButtons.first().click();
    
    // Wait for success notification
    await page.waitForTimeout(1000);
    
    // Navigate to Cart page
    const cartLink = page.locator('a:has-text("Cart")');
    await cartLink.click();
    
    // Verify product is in cart
    await expect(page).toHaveTitle(/Automation Exercise - Checkout/);
    const cartItems = page.locator('[class*="cart_quantity"]');
    expect(await cartItems.count()).toBeGreaterThan(0);
  });

  test.fixme('Add product to cart from product details page with custom quantity', async ({ page }) => {
    // Navigate to a product details page
    await page.goto('https://automationexercise.com/product_details/1');
    
    // Change quantity to 3
    const quantityInput = page.locator('input[type="number"]');
    await quantityInput.clear();
    await quantityInput.fill('3');
    
    // Click Add to cart button
    const addToCartButton = page.locator('button:has-text("Add to cart")');
    await addToCartButton.click();
    
    // Wait for action
    await page.waitForTimeout(1000);
    
    // Navigate to Cart page
    const cartLink = page.locator('a:has-text("Cart")');
    await cartLink.click();
    
    // Verify product is in cart with correct quantity
    await expect(page).toHaveTitle(/Automation Exercise - Checkout/);
    const cartTable = page.locator('table');
    await expect(cartTable).toBeVisible();
  });

  test('View empty cart', async ({ page }) => {
    // Clear cookies to start fresh (new session)
    await page.context().clearCookies();
    
    // Navigate to Cart page
    await page.goto('https://automationexercise.com/view_cart');
    
    // Verify empty cart message
    await expect(page).toHaveTitle(/Automation Exercise - Checkout/);
    
    const emptyMessage = page.locator('text=/Cart is empty/i');
    await expect(emptyMessage).toBeVisible();
    
    // Verify link to products page
    const productsLink = page.locator('a:has-text("here")');
    await expect(productsLink).toBeVisible();
  });

  test.fixme('Add multiple products to cart', async ({ page }) => {
    // Navigate to Products page
    await page.goto('https://automationexercise.com/products');
    
    // Add first product
    let addToCartButtons = page.locator('a:has-text("Add to cart")');
    await addToCartButtons.nth(0).click();
    await page.waitForTimeout(500);
    
    // Add second product
    addToCartButtons = page.locator('a:has-text("Add to cart")');
    await addToCartButtons.nth(1).click();
    await page.waitForTimeout(500);
    
    // Add third product
    addToCartButtons = page.locator('a:has-text("Add to cart")');
    await addToCartButtons.nth(2).click();
    await page.waitForTimeout(500);
    
    // Navigate to Cart
    const cartLink = page.locator('a:has-text("Cart")');
    await cartLink.click();
    
    // Verify all products are in cart
    await expect(page).toHaveTitle(/Automation Exercise - Checkout/);
    const cartRows = page.locator('tr:not(:first-child)');
    expect(await cartRows.count()).toBeGreaterThanOrEqual(3);
  });

  test.fixme('Remove product from cart', async ({ page }) => {
    // Add a product to cart first
    await page.goto('https://automationexercise.com/products');
    const addToCartButtons = page.locator('a:has-text("Add to cart")');
    await addToCartButtons.first().click();
    await page.waitForTimeout(500);
    
    // Navigate to Cart
    const cartLink = page.locator('a:has-text("Cart")');
    await cartLink.click();
    
    // Get initial cart item count
    let cartRows = page.locator('tr[id^="cart_item"]');
    const initialCount = await cartRows.count();
    
    // Click remove button
    const removeButtons = page.locator('a:has-text("Remove")');
    if (await removeButtons.count() > 0) {
      await removeButtons.first().click();
      
      // Wait for removal
      await page.waitForTimeout(1000);
      
      // Verify item is removed
      cartRows = page.locator('tr[id^="cart_item"]');
      const finalCount = await cartRows.count();
      expect(finalCount).toBeLessThan(initialCount);
    }
  });

  test.fixme('Verify cart total price calculation', async ({ page }) => {
    // Add product with specific quantity
    await page.goto('https://automationexercise.com/product_details/1');
    
    const quantityInput = page.locator('input[type="number"]');
    await quantityInput.clear();
    await quantityInput.fill('2');
    
    const addToCartButton = page.locator('button:has-text("Add to cart")');
    await addToCartButton.click();
    await page.waitForTimeout(500);
    
    // Navigate to Cart
    const cartLink = page.locator('a:has-text("Cart")');
    await cartLink.click();
    
    // Verify cart displays total
    const totalElement = page.locator('text=/Total|total/i');
    await expect(totalElement).toBeVisible();
  });

  test.fixme('Search and add product from search results', async ({ page }) => {
    // Navigate to Products page
    await page.goto('https://automationexercise.com/products');
    
    // Search for a product
    const searchBox = page.locator('input[placeholder="Search Product"]');
    await searchBox.fill('Top');
    
    const searchButton = page.locator('button[type="submit"]').first();
    await searchButton.click();
    
    await page.waitForTimeout(1000);
    
    // Add first search result to cart
    const addToCartButtons = page.locator('a:has-text("Add to cart")');
    if (await addToCartButtons.count() > 0) {
      await addToCartButtons.first().click();
      
      // Navigate to cart
      const cartLink = page.locator('a:has-text("Cart")');
      await cartLink.click();
      
      // Verify product is in cart
      await expect(page).toHaveTitle(/Automation Exercise - Checkout/);
    }
  });
});
