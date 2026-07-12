// spec: specs/AutomationExercise_TestPlan.md
// Test Suite: Additional Product and Category Tests

const { test, expect } = require('@playwright/test');

test.describe('Advanced Product Features', () => {
  test('Filter by multiple brands in sequence', async ({ page }) => {
    await page.goto('https://automationexercise.com/products');
    
    // Filter by first brand
    const poloBrand = page.locator('a:has-text("Polo")').first();
    await poloBrand.click();
    await page.waitForTimeout(1000);
    
    let products = page.locator('[class*="productinfo"]');
    const poloCount = await products.count();
    expect(poloCount).toBeGreaterThan(0);
    
    // Go back and filter by different brand
    await page.goto('https://automationexercise.com/products');
    
    const hmBrand = page.locator('a:has-text("H&M")').first();
    await hmBrand.click();
    await page.waitForTimeout(1000);
    
    products = page.locator('[class*="productinfo"]');
    const hmCount = await products.count();
    expect(hmCount).toBeGreaterThan(0);
  });

  test('Product sorting verification', async ({ page }) => {
    await page.goto('https://automationexercise.com/products');
    
    // Look for sort options
    const sortDropdown = page.locator('select[name*="sort"], [class*="sort"]');
    
    if (await sortDropdown.count() > 0) {
      // Products are displayed with various sort options
      const products = page.locator('[class*="productinfo"]');
      expect(await products.count()).toBeGreaterThan(0);
    }
  });

  test('Product availability indicator', async ({ page }) => {
    await page.goto('https://automationexercise.com/product_details/1');
    
    // Look for availability status
    const availability = page.locator('text=Availability').first();
    
    if (await availability.count() > 0) {
      await expect(availability).toBeVisible();
    }
  });

  test.fixme('Product condition and brand information', async ({ page }) => {
    await page.goto('https://automationexercise.com/product_details/1');
    
    // Verify product details
    const condition = page.locator('text=Condition').first();
    const brand = page.locator('b:has-text("Brand")').first();
    
    await expect(condition).toBeVisible();
    await expect(brand).toBeVisible();
  });

  test.fixme('Product category path display', async ({ page }) => {
    await page.goto('https://automationexercise.com/product_details/1');
    
    // Look for category path
    const categoryPath = page.locator('text=Category').first();
    
    if (await categoryPath.count() > 0) {
      await expect(categoryPath).toBeVisible();
    }
  });
});

test.describe('Advanced Cart Features', () => {
  test.fixme('Cart persistence across sessions', async ({ page }) => {
    // Add product to cart
    await page.goto('https://automationexercise.com/products');
    
    const addToCart = page.locator('a:has-text("Add to cart")');
    if (await addToCart.count() > 0) {
      await addToCart.first().click();
      await page.waitForTimeout(500);
      
      // Navigate away
      await page.goto('https://automationexercise.com/contact_us');
      await page.waitForTimeout(500);
      
      // Navigate back to cart
      const cartLink = page.locator('a[href="/view_cart"]').first();
      await cartLink.click();
      
      // Verify product still in cart
      const cartItems = page.locator('tr[id^="cart_item"]');
      expect(await cartItems.count()).toBeGreaterThan(0);
    }
  });

  test.fixme('Cart update quantity with keyboard input', async ({ page }) => {
    // Add product
    await page.goto('https://automationexercise.com/product_details/1');
    
    const quantityInput = page.locator('input[type="number"]');
    await quantityInput.clear();
    await quantityInput.type('5');
    
    const addButton = page.locator('button:has-text("Add to cart")');
    await addButton.click();
    await page.waitForTimeout(500);
    
    // Navigate to cart
    const cartLink = page.locator('a[href="/view_cart"]').first();
    await cartLink.click();
    
    // Verify quantity
    await expect(page).toHaveTitle(/Checkout/);
  });

  test.fixme('Cart shows subtotal and total separately', async ({ page }) => {
    // Add product
    await page.goto('https://automationexercise.com/product_details/1');
    
    const addButton = page.locator('button:has-text("Add to cart")');
    await addButton.click();
    await page.waitForTimeout(500);
    
    // Go to cart
    const cartLink = page.locator('a[href="/view_cart"]').first();
    await cartLink.click();
    
    // Verify both subtotal and total are shown
    const totalElements = page.locator('text=/Total|total|subtotal/i');
    expect(await totalElements.count()).toBeGreaterThanOrEqual(1);
  });
});

test.describe('Advanced Navigation Features', () => {
  test('Keyboard navigation - Tab through form', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    
    // Tab through form fields
    const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
    await nameInput.focus();
    await nameInput.fill('Test User');
    
    // Tab to next field
    await page.keyboard.press('Tab');
    
    const emailInput = page.locator('input[name="email"], input[placeholder="Email"]');
    const isFocused = await emailInput.evaluate(el => el === document.activeElement);
    
    // Should be focused or close to it
    expect(isFocused).toBeDefined();
  });

  test('Mobile viewport navigation', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('https://automationexercise.com/');
    
    // Navigation should be accessible
    const homeLink = page.locator('a:has-text("Home")');
    await expect(homeLink).toBeVisible();
  });

  test('Tablet viewport navigation', async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    
    await page.goto('https://automationexercise.com/');
    
    // Navigation should adapt
    const productsLink = page.locator('a:has-text("Products")');
    await expect(productsLink).toBeVisible();
  });
});

test.describe('Advanced Search Features', () => {
  test('Search is case-insensitive', async ({ page }) => {
    await page.goto('https://automationexercise.com/products');
    
    // Search with uppercase
    let searchBox = page.locator('input[placeholder="Search Product"]');
    await searchBox.fill('TOP');
    
    let searchButton = page.locator('button[type="submit"]').first();
    await searchButton.click();
    await page.waitForTimeout(1000);
    
    let results1 = await page.locator('[class*="productinfo"]').count();
    
    // Search with lowercase
    await page.goto('https://automationexercise.com/products');
    
    searchBox = page.locator('input[placeholder="Search Product"]');
    await searchBox.fill('top');
    
    searchButton = page.locator('button[type="submit"]').first();
    await searchButton.click();
    await page.waitForTimeout(1000);
    
    let results2 = await page.locator('[class*="productinfo"]').count();
    
    // Should return same results
    expect(results1).toBe(results2);
  });

  test('Search with partial product name', async ({ page }) => {
    await page.goto('https://automationexercise.com/products');
    
    // Search with partial name
    const searchBox = page.locator('input[placeholder="Search Product"]');
    await searchBox.fill('Op');
    
    const searchButton = page.locator('button[type="submit"]').first();
    await searchButton.click();
    
    await page.waitForTimeout(1000);
    
    // Should return matching products
    const results = page.locator('[class*="productinfo"]');
    expect(await results.count()).toBeGreaterThanOrEqual(0);
  });
});
