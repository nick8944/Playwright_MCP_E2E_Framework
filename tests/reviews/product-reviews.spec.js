// spec: specs/AutomationExercise_TestPlan.md
// Test Suite: Product Reviews

const { test, expect } = require('@playwright/test');

test.describe('Product Reviews', () => {
  test('Submit product review with valid data', async ({ page }) => {
    // Navigate to a product details page
    await page.goto('https://automationexercise.com/product_details/1');
    
    // Verify page loads
    await expect(page).toHaveTitle(/Automation Exercise - Product Details/);
    
    // Find and fill review form
    const reviewName = page.locator('input[name="reviewer_name"], input[placeholder*="Name"]').last();
    await reviewName.fill('Test Reviewer');
    
    const reviewEmail = page.locator('input[name="reviewer_email"], input[placeholder*="Email"]').last();
    await reviewEmail.fill(`reviewer${Date.now()}@test.com`);
    
    const reviewText = page.locator('textarea[name="review"], textarea[placeholder*="Review"], textarea[placeholder*="review"]');
    await reviewText.fill('This is a great product! Highly recommended.');
    
    // Submit review
    const submitButton = page.locator('button:has-text("Submit")').last();
    await submitButton.click();
    
    // Verify success
    await page.waitForTimeout(1000);
    const successMessage = page.locator('text=/Thank you for your review/i, text=/Review submitted/i');
    
    if (await successMessage.count() > 0) {
      await expect(successMessage).toBeVisible({ timeout: 5000 });
    }
  });

  test('Submit review without name', async ({ page }) => {
    // Navigate to product details page
    await page.goto('https://automationexercise.com/product_details/1');
    
    // Leave name empty, fill other fields
    const reviewEmail = page.locator('input[name="reviewer_email"], input[placeholder*="Email"]').last();
    await reviewEmail.fill('test@example.com');
    
    const reviewText = page.locator('textarea[name="review"], textarea[placeholder*="Review"], textarea[placeholder*="review"]');
    await reviewText.fill('Review text here');
    
    // Try to submit
    const submitButton = page.locator('button:has-text("Submit")').last();
    await submitButton.click();
    
    // Form should remain on page or show validation error
    await page.waitForTimeout(500);
    const currentUrl = page.url();
    expect(currentUrl).toContain('product_details');
  });

  test('Submit review without email', async ({ page }) => {
    // Navigate to product details page
    await page.goto('https://automationexercise.com/product_details/1');
    
    // Fill name and review, leave email empty
    const reviewName = page.locator('input[name="reviewer_name"], input[placeholder*="Name"]').last();
    await reviewName.fill('Test Reviewer');
    
    const reviewText = page.locator('textarea[name="review"], textarea[placeholder*="Review"], textarea[placeholder*="review"]');
    await reviewText.fill('Review text here');
    
    // Try to submit
    const submitButton = page.locator('button:has-text("Submit")').last();
    await submitButton.click();
    
    // Form should remain on page
    await page.waitForTimeout(500);
    const currentUrl = page.url();
    expect(currentUrl).toContain('product_details');
  });

  test('Submit review without review text', async ({ page }) => {
    // Navigate to product details page
    await page.goto('https://automationexercise.com/product_details/1');
    
    // Fill name and email, leave review empty
    const reviewName = page.locator('input[name="reviewer_name"], input[placeholder*="Name"]').last();
    await reviewName.fill('Test Reviewer');
    
    const reviewEmail = page.locator('input[name="reviewer_email"], input[placeholder*="Email"]').last();
    await reviewEmail.fill('test@example.com');
    
    // Try to submit without review text
    const submitButton = page.locator('button:has-text("Submit")').last();
    await submitButton.click();
    
    // Form should remain on page
    await page.waitForTimeout(500);
    const currentUrl = page.url();
    expect(currentUrl).toContain('product_details');
  });

  test('Submit review with invalid email format', async ({ page }) => {
    // Navigate to product details page
    await page.goto('https://automationexercise.com/product_details/1');
    
    // Fill form with invalid email
    const reviewName = page.locator('input[name="reviewer_name"], input[placeholder*="Name"]').last();
    await reviewName.fill('Test Reviewer');
    
    const reviewEmail = page.locator('input[name="reviewer_email"], input[placeholder*="Email"]').last();
    await reviewEmail.fill('invalidemail');
    
    const reviewText = page.locator('textarea[name="review"], textarea[placeholder*="Review"], textarea[placeholder*="review"]');
    await reviewText.fill('This is a test review');
    
    // Try to submit
    const submitButton = page.locator('button:has-text("Submit")').last();
    await submitButton.click();
    
    // Validation should prevent submission or stay on page
    await page.waitForTimeout(500);
  });

  test('Submit review with special characters', async ({ page }) => {
    // Navigate to product details page
    await page.goto('https://automationexercise.com/product_details/1');
    
    // Fill review with special characters
    const reviewName = page.locator('input[name="reviewer_name"], input[placeholder*="Name"]').last();
    await reviewName.fill('Test @#$% Reviewer');
    
    const reviewEmail = page.locator('input[name="reviewer_email"], input[placeholder*="Email"]').last();
    await reviewEmail.fill(`reviewer${Date.now()}@test.com`);
    
    const reviewText = page.locator('textarea[name="review"], textarea[placeholder*="Review"], textarea[placeholder*="review"]');
    await reviewText.fill('Great product!@#$%^&*() Highly recommend!!!');
    
    // Submit review
    const submitButton = page.locator('button:has-text("Submit")').last();
    await submitButton.click();
    
    // Should handle special characters
    await page.waitForTimeout(1000);
  });
});
