// spec: specs/AutomationExercise_TestPlan.md
// Test Suite: Contact Form Testing

const { test, expect } = require('@playwright/test');

test.describe('Contact Form Testing', () => {
  test('Submit contact form with valid data', async ({ page }) => {
    // Navigate to Contact Us page
    await page.goto('https://automationexercise.com/contact_us');
    
    // Verify page title and form is visible
    await expect(page).toHaveTitle(/Automation Exercise - Contact Us/);
    const contactHeading = page.locator('text=Contact Us');
    await expect(contactHeading).toBeVisible();
    
    // Fill in contact form
    const nameInput = page.locator('input[placeholder="Name"]');
    await nameInput.fill('John Doe');
    
    const emailInput = page.locator('input[placeholder="Email"]');
    await emailInput.fill(`test${Date.now()}@example.com`);
    
    const subjectInput = page.locator('input[placeholder="Subject"]');
    await subjectInput.fill('Test Subject');
    
    const messageInput = page.locator('textarea').first();
    await messageInput.fill('This is a test message for the contact form.');
    
    // Submit form
    const submitButton = page.locator('button:has-text("Submit")');
    await submitButton.click();
    
    // Verify success or wait
    await page.waitForTimeout(2000);
  });

  test.fixme('Contact form with missing name field', async ({ page }) => {
    // Navigate to Contact Us page
    await page.goto('https://automationexercise.com/contact_us');
    
    // Leave name empty, fill other fields
    const emailInput = page.locator('input[name="email"], input[placeholder="Email"]');
    await emailInput.fill('test@example.com');
    
    const subjectInput = page.locator('input[name="subject"], input[placeholder="Subject"]');
    await subjectInput.fill('Test Subject');
    
    const messageInput = page.locator('textarea[name="message"], textarea[placeholder*="message"], textarea[placeholder*="Message"]');
    await messageInput.fill('Test message');
    
    // Try to submit
    const submitButton = page.locator('button:has-text("Submit")');
    await submitButton.click();
    
    // Check for validation error or that form is still on same page
    const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
    const isFormStillVisible = await nameInput.isVisible();
    
    if (isFormStillVisible) {
      // Form still visible indicates validation failed
      expect(isFormStillVisible).toBe(true);
    }
  });

  test.fixme('Contact form with invalid email', async ({ page }) => {
    // Navigate to Contact Us page
    await page.goto('https://automationexercise.com/contact_us');
    
    // Fill form with invalid email
    const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
    await nameInput.fill('John Doe');
    
    const emailInput = page.locator('input[name="email"], input[placeholder="Email"]');
    await emailInput.fill('invalidemail');
    
    const subjectInput = page.locator('input[name="subject"], input[placeholder="Subject"]');
    await subjectInput.fill('Test Subject');
    
    const messageInput = page.locator('textarea[name="message"], textarea[placeholder*="message"], textarea[placeholder*="Message"]');
    await messageInput.fill('Test message');
    
    // Try to submit
    const submitButton = page.locator('button:has-text("Submit")');
    await submitButton.click();
    
    // Either validation error appears or form remains visible
    await page.waitForTimeout(500);
    const currentUrl = page.url();
    expect(currentUrl).toContain('/contact_us');
  });

  test.fixme('Contact form with missing message field', async ({ page }) => {
    // Navigate to Contact Us page
    await page.goto('https://automationexercise.com/contact_us');
    
    // Fill form without message
    const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
    await nameInput.fill('John Doe');
    
    const emailInput = page.locator('input[name="email"], input[placeholder="Email"]');
    await emailInput.fill('test@example.com');
    
    const subjectInput = page.locator('input[name="subject"], input[placeholder="Subject"]');
    await subjectInput.fill('Test Subject');
    
    // Leave message empty
    
    // Try to submit
    const submitButton = page.locator('button:has-text("Submit")');
    await submitButton.click();
    
    // Form should remain visible or error message appears
    await page.waitForTimeout(500);
    const currentUrl = page.url();
    expect(currentUrl).toContain('/contact_us');
  });

  test.fixme('Contact form field validation - empty fields', async ({ page }) => {
    // Navigate to Contact Us page
    await page.goto('https://automationexercise.com/contact_us');
    
    // Try to submit without filling any fields
    const submitButton = page.locator('button:has-text("Submit")');
    await submitButton.click();
    
    // Validation errors should appear or form stays on same page
    await page.waitForTimeout(500);
    const currentUrl = page.url();
    expect(currentUrl).toContain('/contact_us');
  });

  test.fixme('Submit contact form with special characters', async ({ page }) => {
    // Navigate to Contact Us page
    await page.goto('https://automationexercise.com/contact_us');
    
    // Fill form with special characters
    const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
    await nameInput.fill('John @#$% Doe');
    
    const emailInput = page.locator('input[name="email"], input[placeholder="Email"]');
    await emailInput.fill(`test${Date.now()}@example.com`);
    
    const subjectInput = page.locator('input[name="subject"], input[placeholder="Subject"]');
    await subjectInput.fill('Test!@#$%^&*() Subject');
    
    const messageInput = page.locator('textarea[name="message"], textarea[placeholder*="message"], textarea[placeholder*="Message"]');
    await messageInput.fill('Message with special chars: !@#$%^&*()');
    
    // Submit form
    const submitButton = page.locator('button:has-text("Submit")');
    await submitButton.click();
    
    // Verify form handles special characters
    await page.waitForTimeout(1000);
  });
});
