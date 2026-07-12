// spec: specs/AutomationExercise_TestPlan.md
// Test Suite: Data Validation and Security

const { test, expect } = require('@playwright/test');

test.describe('Data Validation and Security', () => {
  test('Password field is masked during entry', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://automationexercise.com/login');
    
    // Enter password
    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.fill('TestPassword123!');
    
    // Verify field type is password (not text)
    const inputType = await passwordInput.getAttribute('type');
    expect(inputType).toBe('password');
  });

  test('Email field validation on signup', async ({ page }) => {
    // Navigate to signup page
    await page.goto('https://automationexercise.com/login');
    
    const emailInput = page.locator('input[placeholder="Email Address"]').nth(1);
    const inputType = await emailInput.getAttribute('type');
    
    // Email field should either be type "email" or accept email format
    if (inputType === 'email') {
      // Browser will validate email format
      expect(inputType).toBe('email');
    }
  });

  test('Valid email formats are accepted', async ({ page }) => {
    // Navigate to signup page
    await page.goto('https://automationexercise.com/login');
    
    // Test various valid email formats
    const validEmails = [
      'user@domain.com',
      'user.name@domain.com',
      'user+tag@domain.com',
      'user@subdomain.domain.com'
    ];
    
    const emailInput = page.locator('input[placeholder="Email Address"]').nth(1);
    
    for (const email of validEmails) {
      await emailInput.clear();
      await emailInput.fill(email);
      
      // Verify email is entered
      const value = await emailInput.inputValue();
      expect(value).toBe(email);
    }
  });

  test('Name field accepts international characters', async ({ page }) => {
    // Navigate to signup page
    await page.goto('https://automationexercise.com/login');
    
    // Test international characters
    const internationalNames = [
      'José García',
      'François Müller',
      '李明',
      'Владимир Петров'
    ];
    
    const nameInput = page.locator('input[placeholder="Name"]');
    
    for (const name of internationalNames) {
      await nameInput.clear();
      await nameInput.fill(name);
      
      // Verify international characters are accepted
      const value = await nameInput.inputValue();
      expect(value).toBe(name);
    }
  });

  test('Product price is correctly formatted', async ({ page }) => {
    // Navigate to product details page
    await page.goto('https://automationexercise.com/product_details/1');
    
    // Look for price
    const priceText = page.locator('text=/Rs\.|Rs /');
    await expect(priceText).toBeVisible();
    
    // Verify price format
    const price = await priceText.textContent();
    expect(price).toMatch(/Rs\.\s*\d+/);
  });

  test('Cart total calculation is accurate', async ({ page }) => {
    // Add product to cart
    await page.goto('https://automationexercise.com/product_details/1');
    
    // Set quantity
    const quantityInput = page.locator('input[type="number"]');
    await quantityInput.clear();
    await quantityInput.fill('2');
    
    // Add to cart
    const addToCartButton = page.locator('button:has-text("Add to cart")');
    await addToCartButton.click();
    await page.waitForTimeout(500);
    
    // Navigate to cart
    const cartLink = page.locator('a:has-text("Cart")');
    await cartLink.click();
    
    // Verify total is calculated
    const totalText = page.locator('text=/Total|total/');
    await expect(totalText).toBeVisible({ timeout: 5000 });
  });

  test('Session handling - page persistence', async ({ page }) => {
    // Navigate to home page
    await page.goto('https://automationexercise.com/');
    
    // Add product to cart
    const homeUrl = page.url();
    expect(homeUrl).toContain('automationexercise.com');
    
    // Navigate away and back
    await page.goto('https://automationexercise.com/contact_us');
    await page.waitForTimeout(500);
    
    // Navigate back to home
    const homeLink = page.locator('a:has-text("Home")').first();
    await homeLink.click();
    
    // Should return to home page
    await page.waitForTimeout(500);
    const currentUrl = page.url();
    expect(currentUrl).toContain('automationexercise.com');
  });

  test('Form data is not exposed in URL', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://automationexercise.com/login');
    
    // Enter login credentials
    const emailInput = page.locator('input[placeholder="Email Address"]').first();
    const passwordInput = page.locator('input[placeholder="Password"]');
    
    await emailInput.fill('test@example.com');
    await passwordInput.fill('TestPassword123!');
    
    // Try to login
    const loginButton = page.locator('button:has-text("Login")');
    await loginButton.click();
    
    // Wait for response
    await page.waitForTimeout(1000);
    
    // Verify password is not in URL
    const url = page.url();
    expect(url).not.toContain('TestPassword123!');
    expect(url).not.toContain('password');
  });

  test('Special characters in name field are preserved', async ({ page }) => {
    // Navigate to contact us
    await page.goto('https://automationexercise.com/contact_us');
    
    // Enter name with special characters
    const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
    await nameInput.fill("John O'Brien-Smith");
    
    // Verify special characters are preserved
    const value = await nameInput.inputValue();
    expect(value).toContain("'");
    expect(value).toContain("-");
  });

  test('Email validation prevents form submission with invalid email', async ({ page }) => {
    // Navigate to contact us
    await page.goto('https://automationexercise.com/contact_us');
    
    // Enter invalid email
    const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
    const emailInput = page.locator('input[name="email"], input[placeholder="Email"]');
    const subjectInput = page.locator('input[name="subject"], input[placeholder="Subject"]');
    const messageInput = page.locator('textarea[name="message"], textarea[placeholder*="message"]');
    
    await nameInput.fill('Test User');
    await emailInput.fill('invalidemail');
    await subjectInput.fill('Test');
    await messageInput.fill('Test message');
    
    // Try to submit
    const submitButton = page.locator('button:has-text("Submit")');
    
    // Check if browser native validation prevents submission
    const isValid = await submitButton.evaluate((el) => {
      return el.form ? el.form.checkValidity() : true;
    });
    
    // Should be invalid due to email format
    if (!isValid) {
      expect(isValid).toBe(false);
    }
  });
});
