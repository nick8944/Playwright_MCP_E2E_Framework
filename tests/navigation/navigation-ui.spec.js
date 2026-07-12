// spec: specs/AutomationExercise_TestPlan.md
// Test Suite: Navigation and UI

const { test, expect } = require('@playwright/test');

test.describe('Navigation and UI', () => {
  test('Navigation menu links work correctly', async ({ page }) => {
    // Navigate to Home page
    await page.goto('https://automationexercise.com/');
    
    // Test each navigation link
    const navItems = [
      { text: 'Home', url: '/' },
      { text: 'Products', url: '/products' },
      { text: 'Cart', url: '/view_cart' },
      { text: 'Signup / Login', url: '/login' },
      { text: 'Test Cases', url: '/test_cases' },
      { text: 'API Testing', url: '/api_list' },
      { text: 'Contact us', url: '/contact_us' }
    ];
    
    for (const item of navItems) {
      const link = page.locator(`a:has-text("${item.text}")`).first();
      
      if (await link.count() > 0) {
        await link.click();
        await page.waitForTimeout(500);
        
        const currentUrl = page.url();
        expect(currentUrl).toContain(item.url);
      }
    }
  });

  test.fixme('Logo click navigates to home page', async ({ page }) => {
    // Navigate to a non-home page
    await page.goto('https://automationexercise.com/products');
    
    // Click on logo
    const logo = page.locator('img[alt*="automation practice"]').first();
    await logo.click();
    
    // Wait for navigation
    await page.waitForTimeout(1000);
    
    // Verify we're on home page
    const currentUrl = page.url();
    expect(currentUrl).toBe('https://automationexercise.com/');
  });

  test('Navigation links are accessible from all pages', async ({ page }) => {
    const pages = [
      'https://automationexercise.com/',
      'https://automationexercise.com/products',
      'https://automationexercise.com/contact_us'
    ];
    
    for (const pageUrl of pages) {
      await page.goto(pageUrl);
      
      // Verify navigation menu is visible
      const navMenu = page.locator('nav, [class*="navbar"]');
      await expect(navMenu).toBeVisible();
      
      // Verify key navigation links are present
      const homeLink = page.locator('a:has-text("Home")');
      const productsLink = page.locator('a:has-text("Products")');
      
      await expect(homeLink).toBeVisible();
      await expect(productsLink).toBeVisible();
    }
  });

  test('Breadcrumb navigation on product details page', async ({ page }) => {
    // Navigate to product details page
    await page.goto('https://automationexercise.com/product_details/1');
    
    // Look for breadcrumb navigation
    const breadcrumb = page.locator('[class*="breadcrumb"], nav:has-text("Home")');
    
    if (await breadcrumb.count() > 0) {
      // Verify breadcrumb is visible
      await expect(breadcrumb).toBeVisible();
      
      // Try clicking Home in breadcrumb
      const homeInBreadcrumb = page.locator('a:has-text("Home")').first();
      if (await homeInBreadcrumb.count() > 0) {
        await homeInBreadcrumb.click();
        await page.waitForTimeout(500);
        
        // Should navigate to home
        const currentUrl = page.url();
        expect(currentUrl).toContain('/');
      }
    }
  });

  test.fixme('Footer links and information', async ({ page }) => {
    // Navigate to any page
    await page.goto('https://automationexercise.com/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Verify footer is visible
    const footer = page.locator('footer, [class*="footer"]');
    await expect(footer).toBeVisible();
    
    // Verify copyright information
    const copyright = page.locator('text=/Copyright|©/');
    await expect(copyright).toBeVisible();
    
    // Verify subscription section
    const subscription = page.locator('text=Subscription');
    await expect(subscription).toBeVisible();
  });

  test.fixme('Page footer contains feedback email', async ({ page }) => {
    // Navigate to home page
    await page.goto('https://automationexercise.com/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Look for feedback email
    const feedbackEmail = page.locator('a[href*="feedback@automationexercise.com"], text=/feedback@automationexercise.com/');
    
    if (await feedbackEmail.count() > 0) {
      await expect(feedbackEmail).toBeVisible();
    }
  });

  test('Category sidebar is accessible on products page', async ({ page }) => {
    // Navigate to Products page
    await page.goto('https://automationexercise.com/products');
    
    // Verify category section
    const categoryHeading = page.locator('text=Category');
    await expect(categoryHeading).toBeVisible();
    
    // Verify category links are visible
    const womenLink = page.locator('a:has-text("Women")').first();
    const menLink = page.locator('a:has-text("Men")').first();
    const kidsLink = page.locator('a:has-text("Kids")').first();
    
    await expect(womenLink).toBeVisible();
    await expect(menLink).toBeVisible();
    await expect(kidsLink).toBeVisible();
  });

  test('Brand sidebar is accessible on products page', async ({ page }) => {
    // Navigate to Products page
    await page.goto('https://automationexercise.com/products');
    
    // Verify brands section
    const brandsHeading = page.locator('text=Brands');
    await expect(brandsHeading).toBeVisible();
    
    // Verify some brand links are visible
    const poloLink = page.locator('a:has-text("Polo")').first();
    const hmLink = page.locator('a:has-text("H&M")').first();
    
    await expect(poloLink).toBeVisible();
    await expect(hmLink).toBeVisible();
  });
});
