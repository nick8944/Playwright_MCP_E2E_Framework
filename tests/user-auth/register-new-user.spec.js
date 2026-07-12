// spec: specs/AutomationExercise_TestPlan.md
// Test Suite: User Registration and Login
// Test: Register new user successfully

const { test, expect } = require('@playwright/test');

test.describe('User Registration and Login', () => {
  test.fixme('Register new user successfully', async ({ page }) => {
    // Navigate to the Signup/Login page
    await page.goto('https://automationexercise.com/login');
    
    // Verify page loaded
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    
    // Verify both Login and Signup sections are visible
    const loginHeading = page.locator('text=Login to your account');
    const signupHeading = page.locator('text=New User Signup!');
    await expect(loginHeading).toBeVisible();
    await expect(signupHeading).toBeVisible();
    
    // Generate unique email with timestamp
    const timestamp = Date.now();
    const uniqueEmail = `testuser${timestamp}@test.com`;
    
    // Enter a valid name in the Name field
    const nameInput = page.locator('input[placeholder="Name"]');
    await nameInput.fill('John Doe');
    
    // Enter email in the Email field
    const emailInput = page.locator('input[placeholder="Email Address"]').nth(1);
    await emailInput.fill(uniqueEmail);
    
    // Click the Signup button
    const signupButton = page.locator('button:has-text("Signup")');
    await signupButton.click();
    
    // Wait for navigation to registration details page
    await page.waitForNavigation();
    
    // Verify registration details page loads
    await page.waitForSelector('input[name="password"]', { timeout: 5000 });
    
    // Fill in all required registration fields
    await page.locator('input[name="password"]').fill('TestPassword123!');
    
    // Fill optional fields if they exist
    const firstNameInput = page.locator('input[name="first_name"]');
    if (await firstNameInput.count() > 0) {
      await firstNameInput.fill('John');
    }
    
    const lastNameInput = page.locator('input[name="last_name"]');
    if (await lastNameInput.count() > 0) {
      await lastNameInput.fill('Doe');
    }
    
    const addressInput = page.locator('textarea[name="address1"]');
    if (await addressInput.count() > 0) {
      await addressInput.fill('123 Test Street');
    }
    
    const countrySelect = page.locator('select[name="country"]');
    if (await countrySelect.count() > 0) {
      await countrySelect.selectOption('United States');
    }
    
    const stateInput = page.locator('input[name="state"]');
    if (await stateInput.count() > 0) {
      await stateInput.fill('California');
    }
    
    const cityInput = page.locator('input[name="city"]');
    if (await cityInput.count() > 0) {
      await cityInput.fill('San Francisco');
    }
    
    const zipInput = page.locator('input[name="zipcode"]');
    if (await zipInput.count() > 0) {
      await zipInput.fill('94105');
    }
    
    const mobileInput = page.locator('input[name="mobile_number"]');
    if (await mobileInput.count() > 0) {
      await mobileInput.fill('+1-555-0100');
    }
    
    // Submit the registration form
    const submitButton = page.locator('button:has-text("Create Account")');
    await submitButton.click();
    
    // Verify success - user is redirected and logged in
    await page.waitForNavigation();
    
    // Check for success message
    const successMessage = page.locator('text=Account Created Successfully');
    await expect(successMessage).toBeVisible({ timeout: 5000 });
  });
});
