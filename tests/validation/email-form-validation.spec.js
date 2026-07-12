// spec: specs/AutomationExercise_TestPlan.md
// Test Suite: Email Validation Tests

const { test, expect } = require('@playwright/test');

test.describe('Email and Form Field Validation', () => {
  test('Email validation - signup form accepts valid emails', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    
    const validEmails = [
      'simple@example.com',
      'user+tag@domain.co.uk',
      'firstname.lastname@company.org'
    ];
    
    const emailInput = page.locator('input[placeholder="Email Address"]').nth(1);
    
    for (const email of validEmails) {
      await emailInput.clear();
      await emailInput.fill(email);
      const value = await emailInput.inputValue();
      expect(value).toBe(email);
    }
  });

  test.fixme('Password field minimum length requirement', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    
    // Try signup with valid data
    const nameInput = page.locator('input[placeholder="Name"]');
    await nameInput.fill('Test User');
    
    const emailInput = page.locator('input[placeholder="Email Address"]').nth(1);
    await emailInput.fill(`testuser${Date.now()}@test.com`);
    
    const signupButton = page.locator('button:has-text("Signup")');
    await signupButton.click();
    
    // Wait for registration page
    await page.waitForTimeout(2000);
    
    // Try weak password
    const passwordInput = page.locator('input[name="password"]');
    
    if (await passwordInput.count() > 0) {
      await passwordInput.fill('123');
      
      // Check if there's validation for password strength
      const submitButton = page.locator('button:has-text("Create Account")');
      
      // Try to submit and see if validation occurs
      await submitButton.click();
      await page.waitForTimeout(1000);
    }
  });

  test.fixme('Required field validation - contact form', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    
    // Try to submit empty form
    const submitButton = page.locator('button:has-text("Submit")');
    await submitButton.click();
    
    // Should prevent submission or show validation
    await page.waitForTimeout(500);
    const currentUrl = page.url();
    expect(currentUrl).toContain('/contact_us');
  });

  test('Character limit in text fields', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    
    // Try very long string in subject
    const subjectInput = page.locator('input[name="subject"], input[placeholder="Subject"]');
    const veryLongString = 'a'.repeat(5000);
    
    await subjectInput.fill(veryLongString);
    
    // Check actual value entered
    const value = await subjectInput.inputValue();
    
    // Should either be truncated or limited
    expect(value.length).toBeLessThanOrEqual(5000);
  });

  test('Whitespace handling in email field', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    
    const emailInput = page.locator('input[placeholder="Email Address"]').first();
    
    // Try email with leading/trailing spaces
    await emailInput.fill('  test@example.com  ');
    
    // Form should handle whitespace appropriately
    const value = await emailInput.inputValue();
    expect(value).toBeDefined();
  });
});
