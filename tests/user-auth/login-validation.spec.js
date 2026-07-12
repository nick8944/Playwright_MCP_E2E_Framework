// spec: specs/AutomationExercise_TestPlan.md
// Test Suite: User Registration and Login
// Test: Login with valid credentials

const { test, expect } = require('@playwright/test');

test.describe('User Registration and Login', () => {
  test.fixme('Login with valid credentials', async ({ page }) => {
    // Navigate to the Signup/Login page
    await page.goto('https://automationexercise.com/login');
    
    // Verify page loads successfully with Login section
    const loginHeading = page.locator('text=Login to your account');
    await expect(loginHeading).toBeVisible();
    
    // Enter a valid registered email address
    const emailInput = page.locator('input[placeholder="Email Address"]').first();
    await emailInput.fill('test@example.com');
    
    // Enter the correct password
    const passwordInput = page.locator('input[placeholder="Password"]');
    await passwordInput.fill('TestPassword123!');
    
    // Click the Login button
    const loginButton = page.locator('button:has-text("Login")');
    await loginButton.click();
    
    // Wait for navigation after login
    await page.waitForNavigation({ timeout: 5000 });
    
    // Verify user is logged in
    const logoutLink = page.locator('a:has-text("Logout")');
    await expect(logoutLink).toBeVisible({ timeout: 5000 });
    
    // Verify we're on home page or account page
    const pageUrl = page.url();
    expect(pageUrl).not.toContain('/login');
  });

  test('Login with invalid email should show error', async ({ page }) => {
    // Navigate to the Signup/Login page
    await page.goto('https://automationexercise.com/login');
    
    // Verify page loads successfully
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    
    // Enter an invalid/non-existent email address
    const emailInput = page.locator('input[placeholder="Email Address"]').first();
    await emailInput.fill('nonexistent@example.com');
    
    // Enter any password
    const passwordInput = page.locator('input[placeholder="Password"]');
    await passwordInput.fill('anypassword');
    
    // Click the Login button
    const loginButton = page.locator('button:has-text("Login")');
    await loginButton.click();
    
    // Verify error message is displayed
    const errorMessage = page.locator('text=/Your email or password is incorrect/i');
    await expect(errorMessage).toBeVisible({ timeout: 5000 });
    
    // Verify user is not logged in and remains on login page
    const currentUrl = page.url();
    expect(currentUrl).toContain('/login');
  });

  test('Login with incorrect password should show error', async ({ page }) => {
    // Navigate to the Signup/Login page
    await page.goto('https://automationexercise.com/login');
    
    // Verify page loads successfully
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    
    // Enter a valid registered email address
    const emailInput = page.locator('input[placeholder="Email Address"]').first();
    await emailInput.fill('test@example.com');
    
    // Enter an incorrect password
    const passwordInput = page.locator('input[placeholder="Password"]');
    await passwordInput.fill('WrongPassword123!');
    
    // Click the Login button
    const loginButton = page.locator('button:has-text("Login")');
    await loginButton.click();
    
    // Verify error message is displayed
    const errorMessage = page.locator('text=/Your email or password is incorrect/i');
    await expect(errorMessage).toBeVisible({ timeout: 5000 });
    
    // Verify user remains on login page
    const currentUrl = page.url();
    expect(currentUrl).toContain('/login');
  });

  test.fixme('Logout user successfully', async ({ page }) => {
    // Login with valid credentials first
    await page.goto('https://automationexercise.com/login');
    
    const emailInput = page.locator('input[placeholder="Email Address"]').first();
    await emailInput.fill('test@example.com');
    
    const passwordInput = page.locator('input[placeholder="Password"]');
    await passwordInput.fill('TestPassword123!');
    
    const loginButton = page.locator('button:has-text("Login")');
    await loginButton.click();
    
    // Wait for login to complete
    await page.waitForNavigation({ timeout: 5000 });
    
    // Look for the Logout link in the navigation menu
    const logoutLink = page.locator('a:has-text("Logout")');
    await expect(logoutLink).toBeVisible();
    
    // Click the Logout link
    await logoutLink.click();
    
    // Wait for navigation after logout
    await page.waitForNavigation({ timeout: 5000 });
    
    // Verify user is logged out
    const loginLink = page.locator('a:has-text("Signup / Login")');
    await expect(loginLink).toBeVisible({ timeout: 5000 });
    
    // Verify user is on home page
    const currentUrl = page.url();
    expect(currentUrl).toContain('/');
  });

  test.fixme('Register with existing email should show error', async ({ page }) => {
    // Navigate to the Signup/Login page
    await page.goto('https://automationexercise.com/login');
    
    // Verify page loads successfully
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    
    // Enter a valid name
    const nameInput = page.locator('input[placeholder="Name"]');
    await nameInput.fill('Existing User');
    
    // Enter an email that already exists
    const emailInput = page.locator('input[placeholder="Email Address"]').nth(1);
    await emailInput.fill('test@example.com');
    
    // Click the Signup button
    const signupButton = page.locator('button:has-text("Signup")');
    await signupButton.click();
    
    // Verify error message is displayed
    const errorMessage = page.locator('text=/Email Address already exist/i');
    await expect(errorMessage).toBeVisible({ timeout: 5000 });
    
    // Verify user remains on signup page
    const currentUrl = page.url();
    expect(currentUrl).toContain('/login');
  });
});
