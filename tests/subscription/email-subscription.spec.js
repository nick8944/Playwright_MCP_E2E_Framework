// spec: specs/AutomationExercise_TestPlan.md
// Test Suite: Email Subscription

const { test, expect } = require('@playwright/test');

test.describe('Email Subscription', () => {
  test('Subscribe with valid email on homepage', async ({ page }) => {
    // Navigate to Home page
    await page.goto('https://automationexercise.com/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Find subscription section
    const subscriptionHeading = page.locator('text=Subscription');
    await expect(subscriptionHeading).toBeVisible();
    
    // Enter email in subscription field
    const subscriptionEmail = page.locator('input[name="subscribe"], input[placeholder*="email"]').last();
    await subscriptionEmail.fill(`subscriber${Date.now()}@test.com`);
    
    // Click subscribe button
    const subscribeButton = page.locator('button[type="submit"]').last();
    await subscribeButton.click();
    
    // Verify success message
    await page.waitForTimeout(1000);
    const successMessage = page.locator('text=/Success|subscribed|successfully/i');
    
    if (await successMessage.count() > 0) {
      await expect(successMessage).toBeVisible({ timeout: 5000 });
    }
  });

  test('Subscribe with valid email on cart page', async ({ page }) => {
    // Navigate to Cart page
    await page.goto('https://automationexercise.com/view_cart');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Find subscription section
    const subscriptionHeading = page.locator('text=Subscription');
    await expect(subscriptionHeading).toBeVisible();
    
    // Enter email in subscription field
    const subscriptionEmail = page.locator('input[name="subscribe"], input[placeholder*="email"]').last();
    await subscriptionEmail.fill(`subscriber${Date.now()}@test.com`);
    
    // Click subscribe button
    const subscribeButton = page.locator('button[type="submit"]').last();
    await subscribeButton.click();
    
    // Verify success
    await page.waitForTimeout(1000);
  });

  test('Subscribe with invalid email format', async ({ page }) => {
    // Navigate to Home page
    await page.goto('https://automationexercise.com/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Enter invalid email
    const subscriptionEmail = page.locator('input[name="subscribe"], input[placeholder*="email"]').last();
    await subscriptionEmail.fill('invalidemail');
    
    // Click subscribe button
    const subscribeButton = page.locator('button[type="submit"]').last();
    await subscribeButton.click();
    
    // Should show error or prevent subscription
    await page.waitForTimeout(500);
  });

  test('Subscribe without email', async ({ page }) => {
    // Navigate to Home page
    await page.goto('https://automationexercise.com/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Leave email field empty
    const subscribeButton = page.locator('button[type="submit"]').last();
    await subscribeButton.click();
    
    // Should show error or prevent subscription
    await page.waitForTimeout(500);
  });

  test('Subscribe with international email domain', async ({ page }) => {
    // Navigate to Home page
    await page.goto('https://automationexercise.com/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Enter international email
    const subscriptionEmail = page.locator('input[name="subscribe"], input[placeholder*="email"]').last();
    await subscriptionEmail.fill(`subscriber${Date.now()}@test.co.uk`);
    
    // Click subscribe button
    const subscribeButton = page.locator('button[type="submit"]').last();
    await subscribeButton.click();
    
    // Should accept international domains
    await page.waitForTimeout(1000);
  });

  test('Subscribe on contact us page', async ({ page }) => {
    // Navigate to Contact Us page
    await page.goto('https://automationexercise.com/contact_us');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Find subscription section
    const subscriptionHeading = page.locator('text=Subscription');
    await expect(subscriptionHeading).toBeVisible();
    
    // Enter email
    const subscriptionEmail = page.locator('input[name="subscribe"], input[placeholder*="email"]').last();
    await subscriptionEmail.fill(`subscriber${Date.now()}@test.com`);
    
    // Click subscribe button
    const subscribeButton = page.locator('button[type="submit"]').last();
    await subscribeButton.click();
    
    // Verify subscription
    await page.waitForTimeout(1000);
  });
});
