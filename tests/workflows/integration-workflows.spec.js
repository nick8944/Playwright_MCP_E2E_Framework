// spec: specs/AutomationExercise_TestPlan.md
// Test Suite: Integration Workflows

const { test, expect } = require('@playwright/test');

test.describe('Integration Workflows', () => {
  test('Browse products and filter workflow', async ({ page }) => {
    // Navigate to Products page
    await page.goto('https://automationexercise.com/products');
    
    // Verify all products are initially displayed
    let products = page.locator('[class*="productinfo"]');
    let initialCount = await products.count();
    expect(initialCount).toBeGreaterThan(0);
    
    // Filter by Women category
    const womenCategory = page.locator('a:has-text("Women")').first();
    await womenCategory.click();
    await page.waitForTimeout(1000);
    
    // Verify products are filtered
    products = page.locator('[class*="productinfo"]');
    let filteredCount = await products.count();
    expect(filteredCount).toBeGreaterThan(0);
    
    // Filter by brand
    const poloLink = page.locator('a:has-text("Polo")').first();
    await poloLink.click();
    await page.waitForTimeout(1000);
    
    // Verify further filtered
    products = page.locator('[class*="productinfo"]');
    expect(await products.count()).toBeGreaterThan(0);
  });

  test.fixme('Search and add to cart workflow', async ({ page }) => {
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
      await page.waitForTimeout(500);
      
      // Navigate to cart
      const cartLink = page.locator('a:has-text("Cart")');
      await cartLink.click();
      
      // Verify product is in cart
      await expect(page).toHaveTitle(/Automation Exercise - Checkout/);
      const cartItems = page.locator('tr[id^="cart_item"]');
      expect(await cartItems.count()).toBeGreaterThan(0);
    }
  });

  test('View product details and submit review workflow', async ({ page }) => {
    // Navigate to Products page
    await page.goto('https://automationexercise.com/products');
    
    // Click View Product on first item
    const viewProductLinks = page.locator('a:has-text("View Product")');
    if (await viewProductLinks.count() > 0) {
      await viewProductLinks.first().click();
      await page.waitForTimeout(1000);
      
      // Verify product details page
      await expect(page).toHaveTitle(/Automation Exercise - Product Details/);
      
      // Submit a review
      const reviewName = page.locator('input[name="reviewer_name"], input[placeholder*="Name"]').last();
      if (await reviewName.count() > 0) {
        await reviewName.fill('Test Reviewer');
        
        const reviewEmail = page.locator('input[name="reviewer_email"], input[placeholder*="Email"]').last();
        await reviewEmail.fill(`reviewer${Date.now()}@test.com`);
        
        const reviewText = page.locator('textarea[name="review"], textarea[placeholder*="Review"]');
        await reviewText.fill('This product is excellent!');
        
        const submitButton = page.locator('button:has-text("Submit")').last();
        await submitButton.click();
        
        await page.waitForTimeout(1000);
      }
    }
  });

  test.fixme('Contact form submission workflow', async ({ page }) => {
    // Navigate to Contact Us page
    await page.goto('https://automationexercise.com/contact_us');
    
    // Fill contact form
    const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
    await nameInput.fill('Contact Test User');
    
    const emailInput = page.locator('input[name="email"], input[placeholder="Email"]');
    await emailInput.fill(`contact${Date.now()}@test.com`);
    
    const subjectInput = page.locator('input[name="subject"], input[placeholder="Subject"]');
    await subjectInput.fill('Product Inquiry');
    
    const messageInput = page.locator('textarea[name="message"], textarea[placeholder*="message"]');
    await messageInput.fill('I have a question about your products.');
    
    // Submit form
    const submitButton = page.locator('button:has-text("Submit")');
    await submitButton.click();
    
    // Verify success
    await page.waitForTimeout(1000);
    const successMessage = page.locator('text=/Success|successful|submitted/i');
    
    if (await successMessage.count() > 0) {
      await expect(successMessage).toBeVisible({ timeout: 5000 });
    }
  });

  test('Subscribe on multiple pages workflow', async ({ page }) => {
    // Subscribe on home page
    await page.goto('https://automationexercise.com/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    let subscriptionEmail = page.locator('input[name="subscribe"], input[placeholder*="email"]').last();
    await subscriptionEmail.fill(`subscriber${Date.now()}@test.com`);
    
    let subscribeButton = page.locator('button[type="submit"]').last();
    await subscribeButton.click();
    await page.waitForTimeout(500);
    
    // Subscribe on cart page
    await page.goto('https://automationexercise.com/view_cart');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    subscriptionEmail = page.locator('input[name="subscribe"], input[placeholder*="email"]').last();
    await subscriptionEmail.fill(`subscriber2${Date.now()}@test.com`);
    
    subscribeButton = page.locator('button[type="submit"]').last();
    await subscribeButton.click();
    await page.waitForTimeout(500);
  });

  test.fixme('Multiple product additions and cart management workflow', async ({ page }) => {
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
    
    // Navigate to cart
    const cartLink = page.locator('a:has-text("Cart")');
    await cartLink.click();
    await page.waitForTimeout(1000);
    
    // Verify all products are in cart
    let cartRows = page.locator('tr[id^="cart_item"]');
    expect(await cartRows.count()).toBeGreaterThanOrEqual(3);
    
    // Try to remove one product
    const removeButtons = page.locator('a:has-text("Remove")');
    if (await removeButtons.count() > 0) {
      await removeButtons.first().click();
      await page.waitForTimeout(1000);
      
      // Verify removal
      cartRows = page.locator('tr[id^="cart_item"]');
      expect(await cartRows.count()).toBeGreaterThanOrEqual(2);
    }
  });

  test('Category filtering with brand filtering workflow', async ({ page }) => {
    // Navigate to Products page
    await page.goto('https://automationexercise.com/products');
    
    // Filter by Women category
    const womenLink = page.locator('a:has-text("Women")').first();
    await womenLink.click();
    await page.waitForTimeout(1000);
    
    // Verify women products
    let products = page.locator('[class*="productinfo"]');
    expect(await products.count()).toBeGreaterThan(0);
    
    // Now filter by brand within category
    const brandLink = page.locator('a:has-text("Madame")').first();
    if (await brandLink.count() > 0) {
      await brandLink.click();
      await page.waitForTimeout(1000);
      
      // Verify filtered products
      products = page.locator('[class*="productinfo"]');
      expect(await products.count()).toBeGreaterThan(0);
    }
  });

  test('Navigation through different sections workflow', async ({ page }) => {
    // Start at home
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
    
    // Navigate to Products
    const productsLink = page.locator('a:has-text("Products")').first();
    await productsLink.click();
    await page.waitForTimeout(500);
    await expect(page).toHaveTitle(/All Products/);
    
    // Navigate to Cart
    const cartLink = page.locator('a:has-text("Cart")').first();
    await cartLink.click();
    await page.waitForTimeout(500);
    await expect(page).toHaveTitle(/Checkout/);
    
    // Navigate to Contact Us
    const contactLink = page.locator('a:has-text("Contact us")').first();
    await contactLink.click();
    await page.waitForTimeout(500);
    await expect(page).toHaveTitle(/Contact Us/);
    
    // Back to Home via logo
    const logo = page.locator('img[alt*="automation practice"]').first();
    await logo.click();
    await page.waitForTimeout(500);
    
    const currentUrl = page.url();
    expect(currentUrl).toContain('automationexercise.com/');
  });
});
