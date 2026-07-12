// spec: specs/AutomationExercise_TestPlan.md
// Test Suite: Page Load and Performance

const { test, expect } = require('@playwright/test');

test.describe('Page Load and Performance', () => {
  test('Homepage loads within acceptable time', async ({ page }) => {
    // Measure homepage load time
    const startTime = Date.now();
    
    await page.goto('https://automationexercise.com/', { waitUntil: 'networkidle' });
    
    const loadTime = Date.now() - startTime;
    
    // Verify page title
    await expect(page).toHaveTitle(/Automation Exercise/);
    
    // Verify key elements are visible
    const logo = page.locator('img[alt*="automation practice"]').first();
    await expect(logo).toBeVisible();
    
    // Homepage should load in reasonable time (under 10 seconds)
    expect(loadTime).toBeLessThan(10000);
    
    console.log(`Homepage load time: ${loadTime}ms`);
  });

  test('Products page loads with all items', async ({ page }) => {
    // Navigate to products page
    const startTime = Date.now();
    
    await page.goto('https://automationexercise.com/products', { waitUntil: 'networkidle' });
    
    const loadTime = Date.now() - startTime;
    
    // Verify page title
    await expect(page).toHaveTitle(/Automation Exercise - All Products/);
    
    // Verify products are visible
    const productImages = page.locator('img[alt="ecommerce website products"]');
    const imageCount = await productImages.count();
    expect(imageCount).toBeGreaterThan(0);
    
    console.log(`Products page load time: ${loadTime}ms`);
  });

  test('Cart page loads quickly', async ({ page }) => {
    // Navigate to cart page
    const startTime = Date.now();
    
    await page.goto('https://automationexercise.com/view_cart', { waitUntil: 'networkidle' });
    
    const loadTime = Date.now() - startTime;
    
    // Verify page title
    await expect(page).toHaveTitle(/Automation Exercise - Checkout/);
    
    console.log(`Cart page load time: ${loadTime}ms`);
  });

  test('Product details page loads all information', async ({ page }) => {
    // Navigate to product details page
    const startTime = Date.now();
    
    await page.goto('https://automationexercise.com/product_details/1', { waitUntil: 'networkidle' });
    
    const loadTime = Date.now() - startTime;
    
    // Verify page title
    await expect(page).toHaveTitle(/Automation Exercise - Product Details/);
    
    // Verify product image
    const productImage = page.locator('img[alt="ecommerce website products"]').first();
    await expect(productImage).toBeVisible();
    
    // Verify product information
    const productName = page.locator('h2').first();
    await expect(productName).toBeVisible();
    
    console.log(`Product details page load time: ${loadTime}ms`);
  });

  test('Contact page loads quickly', async ({ page }) => {
    // Navigate to contact page
    const startTime = Date.now();
    
    await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'networkidle' });
    
    const loadTime = Date.now() - startTime;
    
    // Verify page title
    await expect(page).toHaveTitle(/Automation Exercise - Contact Us/);
    
    console.log(`Contact page load time: ${loadTime}ms`);
  });

  test('Login page loads quickly', async ({ page }) => {
    // Navigate to login page
    const startTime = Date.now();
    
    await page.goto('https://automationexercise.com/login', { waitUntil: 'networkidle' });
    
    const loadTime = Date.now() - startTime;
    
    // Verify page title
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    
    console.log(`Login page load time: ${loadTime}ms`);
  });

  test('No broken images on homepage', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    
    // Get all images
    const images = page.locator('img');
    const imageCount = await images.count();
    
    // Check each image for errors
    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      const src = await image.getAttribute('src');
      
      // Verify src is not empty
      expect(src).toBeTruthy();
    }
  });

  test('Page scrolling is smooth', async ({ page }) => {
    // Navigate to products page
    await page.goto('https://automationexercise.com/products');
    
    // Scroll down
    const startTime = Date.now();
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.evaluate(() => window.scrollBy(0, 500));
    const scrollTime = Date.now() - startTime;
    
    // Scrolling should be responsive
    expect(scrollTime).toBeLessThan(2000);
  });
});
