// spec: specs/AutomationExercise_TestPlan.md
// Test Suite: Checkout and Order Placement

const { test, expect } = require('@playwright/test');

test.describe('Checkout and Order Placement', () => {
  test.fixme('Proceed to checkout from cart', async ({ page }) => {
    // Add product to cart
    await page.goto('https://automationexercise.com/products');
    const addToCartButtons = page.locator('a:has-text("Add to cart")');
    await addToCartButtons.first().click();
    await page.waitForTimeout(500);
    
    // Navigate to Cart page
    const cartLink = page.locator('a[href="/view_cart"]').first();
    await cartLink.click();
    
    // Look for Checkout button
    const checkoutButton = page.locator('a:has-text("Proceed To Checkout"), button:has-text("Checkout")').first();
    
    if (await checkoutButton.count() > 0) {
      await checkoutButton.click();
      
      // Wait for navigation
      await page.waitForTimeout(1000);
      
      // Verify checkout page or login page appears
      const pageUrl = page.url();
      expect(pageUrl).toMatch(/checkout|login/i);
    }
  });

  test.fixme('Checkout without login redirects to login', async ({ page }) => {
    // Clear cookies for fresh session
    await page.context().clearCookies();
    
    // Add product to cart
    await page.goto('https://automationexercise.com/products');
    const addToCartButtons = page.locator('a:has-text("Add to cart")');
    await addToCartButtons.first().click();
    await page.waitForTimeout(500);
    
    // Navigate to Cart page
    const cartLink = page.locator('a[href="/view_cart"]').first();
    await cartLink.click();
    
    // Look for Checkout button and click
    const checkoutButton = page.locator('a:has-text("Proceed To Checkout"), button:has-text("Checkout")').first();
    
    if (await checkoutButton.count() > 0) {
      await checkoutButton.click();
      
      // Wait for navigation
      await page.waitForTimeout(1000);
      
      // Verify redirected to login
      const pageUrl = page.url();
      expect(pageUrl).toContain('/login');
    }
  });

  test.fixme('Verify order summary on checkout page', async ({ page }) => {
    // Add multiple products with known details
    await page.goto('https://automationexercise.com/product_details/1');
    
    const quantityInput = page.locator('input[type="number"]');
    await quantityInput.clear();
    await quantityInput.fill('2');
    
    const addToCartButton = page.locator('button:has-text("Add to cart")');
    await addToCartButton.click();
    await page.waitForTimeout(500);
    
    // Navigate to Cart
    const cartLink = page.locator('a[href="/view_cart"]').first();
    await cartLink.click();
    
    // Verify order summary is displayed
    const cartTable = page.locator('table');
    await expect(cartTable).toBeVisible();
    
    // Verify product details in summary
    const productName = page.locator('td');
    expect(await productName.count()).toBeGreaterThan(0);
  });

  test.fixme('Verify cart total price on checkout', async ({ page }) => {
    // Add product to cart
    await page.goto('https://automationexercise.com/product_details/1');
    
    const addToCartButton = page.locator('button:has-text("Add to cart")');
    await addToCartButton.click();
    await page.waitForTimeout(500);
    
    // Navigate to Cart
    const cartLink = page.locator('a[href="/view_cart"]').first();
    await cartLink.click();
    
    // Verify total price is displayed
    const totalText = page.locator('text=/Total|total/i, td:has-text(Rs.)');
    await expect(totalText).toBeVisible({ timeout: 5000 });
  });
});
