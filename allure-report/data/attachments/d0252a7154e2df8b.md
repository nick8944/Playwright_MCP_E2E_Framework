# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact\contact-form.spec.js >> Contact Form Testing >> Submit contact form with valid data
- Location: tests\contact\contact-form.spec.js:7:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Contact Us')
Expected: visible
Error: strict mode violation: locator('text=Contact Us') resolved to 2 elements:
    1) <a href="/contact_us">…</a> aka getByRole('link', { name: ' Contact us' })
    2) <h2 class="title text-center">…</h2> aka getByRole('heading', { name: 'Contact Us' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Contact Us')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e37]:
    - heading "Contact Us" [level=2] [ref=e41]:
      - text: Contact
      - strong [ref=e42]: Us
    - generic [ref=e43]:
      - generic [ref=e45]:
        - generic [ref=e46]:
          - text: "Note: Below contact form is for testing purpose."
          - link "Development Tools" [ref=e47] [cursor=pointer]:
            - img [ref=e49]
            - text: Development Tools
        - heading "Get In Touch" [level=2] [ref=e51]
        - generic [ref=e53]:
          - textbox "Name" [ref=e55]
          - textbox "Email" [ref=e57]
          - textbox "Subject" [ref=e59]
          - textbox "Your Message Here" [ref=e61]
          - button "Choose File" [ref=e63]
          - button "Submit" [ref=e65] [cursor=pointer]
      - generic [ref=e67]:
        - heading "Feedback For Us" [level=2] [ref=e68]
        - generic [ref=e69]:
          - paragraph [ref=e70]: We really appreciate your response to our website.
          - paragraph [ref=e71]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=e72] [cursor=pointer]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=e73]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e74]: Thank you
  - insertion [ref=e76]:
    - generic [ref=e79]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e81]: Discover more
      - link "Automation training courses" [ref=e82] [cursor=pointer]:
        - generic "Automation training courses" [ref=e83]
        - img [ref=e85]
      - link "Automated testing tools" [ref=e87] [cursor=pointer]:
        - generic "Automated testing tools" [ref=e88]
        - img [ref=e90]
      - link "Test case templates" [ref=e92] [cursor=pointer]:
        - generic "Test case templates" [ref=e93]
        - img [ref=e95]
  - contentinfo [ref=e97]:
    - generic [ref=e102]:
      - heading "Subscription" [level=2] [ref=e103]
      - generic [ref=e104]:
        - textbox "Your email address" [ref=e105]
        - button "" [ref=e106] [cursor=pointer]:
          - generic [ref=e107]: 
        - paragraph [ref=e108]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e112]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1   | // spec: specs/AutomationExercise_TestPlan.md
  2   | // Test Suite: Contact Form Testing
  3   | 
  4   | const { test, expect } = require('@playwright/test');
  5   | 
  6   | test.describe('Contact Form Testing', () => {
  7   |   test('Submit contact form with valid data', async ({ page }) => {
  8   |     // Navigate to Contact Us page
  9   |     await page.goto('https://automationexercise.com/contact_us');
  10  |     
  11  |     // Verify page title and form is visible
  12  |     await expect(page).toHaveTitle(/Automation Exercise - Contact Us/);
  13  |     const contactHeading = page.locator('text=Contact Us');
> 14  |     await expect(contactHeading).toBeVisible();
      |                                  ^ Error: expect(locator).toBeVisible() failed
  15  |     
  16  |     // Fill in contact form
  17  |     const nameInput = page.locator('input[placeholder="Name"]');
  18  |     await nameInput.fill('John Doe');
  19  |     
  20  |     const emailInput = page.locator('input[placeholder="Email"]');
  21  |     await emailInput.fill(`test${Date.now()}@example.com`);
  22  |     
  23  |     const subjectInput = page.locator('input[placeholder="Subject"]');
  24  |     await subjectInput.fill('Test Subject');
  25  |     
  26  |     const messageInput = page.locator('textarea').first();
  27  |     await messageInput.fill('This is a test message for the contact form.');
  28  |     
  29  |     // Submit form
  30  |     const submitButton = page.locator('button:has-text("Submit")');
  31  |     await submitButton.click();
  32  |     
  33  |     // Verify success or wait
  34  |     await page.waitForTimeout(2000);
  35  |   });
  36  | 
  37  |   test.fixme('Contact form with missing name field', async ({ page }) => {
  38  |     // Navigate to Contact Us page
  39  |     await page.goto('https://automationexercise.com/contact_us');
  40  |     
  41  |     // Leave name empty, fill other fields
  42  |     const emailInput = page.locator('input[name="email"], input[placeholder="Email"]');
  43  |     await emailInput.fill('test@example.com');
  44  |     
  45  |     const subjectInput = page.locator('input[name="subject"], input[placeholder="Subject"]');
  46  |     await subjectInput.fill('Test Subject');
  47  |     
  48  |     const messageInput = page.locator('textarea[name="message"], textarea[placeholder*="message"], textarea[placeholder*="Message"]');
  49  |     await messageInput.fill('Test message');
  50  |     
  51  |     // Try to submit
  52  |     const submitButton = page.locator('button:has-text("Submit")');
  53  |     await submitButton.click();
  54  |     
  55  |     // Check for validation error or that form is still on same page
  56  |     const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
  57  |     const isFormStillVisible = await nameInput.isVisible();
  58  |     
  59  |     if (isFormStillVisible) {
  60  |       // Form still visible indicates validation failed
  61  |       expect(isFormStillVisible).toBe(true);
  62  |     }
  63  |   });
  64  | 
  65  |   test.fixme('Contact form with invalid email', async ({ page }) => {
  66  |     // Navigate to Contact Us page
  67  |     await page.goto('https://automationexercise.com/contact_us');
  68  |     
  69  |     // Fill form with invalid email
  70  |     const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
  71  |     await nameInput.fill('John Doe');
  72  |     
  73  |     const emailInput = page.locator('input[name="email"], input[placeholder="Email"]');
  74  |     await emailInput.fill('invalidemail');
  75  |     
  76  |     const subjectInput = page.locator('input[name="subject"], input[placeholder="Subject"]');
  77  |     await subjectInput.fill('Test Subject');
  78  |     
  79  |     const messageInput = page.locator('textarea[name="message"], textarea[placeholder*="message"], textarea[placeholder*="Message"]');
  80  |     await messageInput.fill('Test message');
  81  |     
  82  |     // Try to submit
  83  |     const submitButton = page.locator('button:has-text("Submit")');
  84  |     await submitButton.click();
  85  |     
  86  |     // Either validation error appears or form remains visible
  87  |     await page.waitForTimeout(500);
  88  |     const currentUrl = page.url();
  89  |     expect(currentUrl).toContain('/contact_us');
  90  |   });
  91  | 
  92  |   test.fixme('Contact form with missing message field', async ({ page }) => {
  93  |     // Navigate to Contact Us page
  94  |     await page.goto('https://automationexercise.com/contact_us');
  95  |     
  96  |     // Fill form without message
  97  |     const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
  98  |     await nameInput.fill('John Doe');
  99  |     
  100 |     const emailInput = page.locator('input[name="email"], input[placeholder="Email"]');
  101 |     await emailInput.fill('test@example.com');
  102 |     
  103 |     const subjectInput = page.locator('input[name="subject"], input[placeholder="Subject"]');
  104 |     await subjectInput.fill('Test Subject');
  105 |     
  106 |     // Leave message empty
  107 |     
  108 |     // Try to submit
  109 |     const submitButton = page.locator('button:has-text("Submit")');
  110 |     await submitButton.click();
  111 |     
  112 |     // Form should remain visible or error message appears
  113 |     await page.waitForTimeout(500);
  114 |     const currentUrl = page.url();
```