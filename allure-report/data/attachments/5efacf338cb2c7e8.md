# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance\page-performance.spec.js >> Page Load and Performance >> Product details page loads all information
- Location: tests\performance\page-performance.spec.js:61:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/product_details/1", waiting until "networkidle"

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
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Category" [level=2] [ref=e42]
      - generic [ref=e43]:
        - heading " Women" [level=4] [ref=e46]:
          - link " Women" [ref=e47] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e49]: 
            - text: Women
        - heading " Men" [level=4] [ref=e52]:
          - link " Men" [ref=e53] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e55]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e58]:
          - link " Kids" [ref=e59] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e61]: 
            - text: Kids
      - generic [ref=e62]:
        - heading "Brands" [level=2] [ref=e63]
        - list [ref=e65]:
          - listitem [ref=e66]:
            - link "(6) Polo" [ref=e67] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e68]: (6)
              - text: Polo
          - listitem [ref=e69]:
            - link "(5) H&M" [ref=e70] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e71]: (5)
              - text: H&M
          - listitem [ref=e72]:
            - link "(5) Madame" [ref=e73] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e74]: (5)
              - text: Madame
          - listitem [ref=e75]:
            - link "(3) Mast & Harbour" [ref=e76] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e77]: (3)
              - text: Mast & Harbour
          - listitem [ref=e78]:
            - link "(4) Babyhug" [ref=e79] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e80]: (4)
              - text: Babyhug
          - listitem [ref=e81]:
            - link "(3) Allen Solly Junior" [ref=e82] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e83]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e84]:
            - link "(3) Kookie Kids" [ref=e85] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e86]: (3)
              - text: Kookie Kids
          - listitem [ref=e87]:
            - link "(5) Biba" [ref=e88] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e89]: (5)
              - text: Biba
    - generic [ref=e90]:
      - generic [ref=e91]:
        - img "ecommerce website products" [ref=e94]
        - generic [ref=e96]:
          - img "ecommerce website products" [ref=e97]
          - heading "Blue Top" [level=2] [ref=e98]
          - paragraph [ref=e99]: "Category: Women > Tops"
          - img "ecommerce website products" [ref=e100]
          - generic [ref=e101]:
            - generic [ref=e102]: Rs. 500
            - generic [ref=e103]: "Quantity:"
            - spinbutton [ref=e104]: "1"
            - button " Add to cart" [ref=e105] [cursor=pointer]:
              - generic [ref=e106]: 
              - text: Add to cart
          - paragraph [ref=e107]: "Availability: In Stock"
          - paragraph [ref=e108]: "Condition: New"
          - paragraph [ref=e109]: "Brand: Polo"
      - generic [ref=e110]:
        - list [ref=e112]:
          - listitem [ref=e113]:
            - link "Write Your Review" [ref=e114]:
              - /url: "#reviews"
        - generic [ref=e116]:
          - generic [ref=e117]:
            - textbox "Your Name" [ref=e118]
            - textbox "Email Address" [ref=e119]
          - textbox "Add Review Here!" [ref=e120]
          - button "Submit" [ref=e121] [cursor=pointer]
  - generic:
    - insertion:
      - generic:
        - iframe
  - contentinfo [ref=e122]:
    - generic [ref=e127]:
      - heading "Subscription" [level=2] [ref=e128]
      - generic [ref=e129]:
        - textbox "Your email address" [ref=e130]
        - button "" [ref=e131] [cursor=pointer]:
          - generic [ref=e132]: 
        - paragraph [ref=e133]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e137]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e138]:
    - iframe [ref=e141]:
      - generic [ref=f8e3]:
        - button [ref=f8e4]:
          - img [ref=f8e5]
        - generic [ref=f8e7]:
          - button "Replay" [ref=f8e15]:
            - img [ref=f8e17] [cursor=pointer]
          - button "Learn more" [ref=f8e24] [cursor=pointer]
```

# Test source

```ts
  1   | // spec: specs/AutomationExercise_TestPlan.md
  2   | // Test Suite: Page Load and Performance
  3   | 
  4   | const { test, expect } = require('@playwright/test');
  5   | 
  6   | test.describe('Page Load and Performance', () => {
  7   |   test('Homepage loads within acceptable time', async ({ page }) => {
  8   |     // Measure homepage load time
  9   |     const startTime = Date.now();
  10  |     
  11  |     await page.goto('https://automationexercise.com/', { waitUntil: 'networkidle' });
  12  |     
  13  |     const loadTime = Date.now() - startTime;
  14  |     
  15  |     // Verify page title
  16  |     await expect(page).toHaveTitle(/Automation Exercise/);
  17  |     
  18  |     // Verify key elements are visible
  19  |     const logo = page.locator('img[alt*="automation practice"]').first();
  20  |     await expect(logo).toBeVisible();
  21  |     
  22  |     // Homepage should load in reasonable time (under 10 seconds)
  23  |     expect(loadTime).toBeLessThan(10000);
  24  |     
  25  |     console.log(`Homepage load time: ${loadTime}ms`);
  26  |   });
  27  | 
  28  |   test('Products page loads with all items', async ({ page }) => {
  29  |     // Navigate to products page
  30  |     const startTime = Date.now();
  31  |     
  32  |     await page.goto('https://automationexercise.com/products', { waitUntil: 'networkidle' });
  33  |     
  34  |     const loadTime = Date.now() - startTime;
  35  |     
  36  |     // Verify page title
  37  |     await expect(page).toHaveTitle(/Automation Exercise - All Products/);
  38  |     
  39  |     // Verify products are visible
  40  |     const productImages = page.locator('img[alt="ecommerce website products"]');
  41  |     const imageCount = await productImages.count();
  42  |     expect(imageCount).toBeGreaterThan(0);
  43  |     
  44  |     console.log(`Products page load time: ${loadTime}ms`);
  45  |   });
  46  | 
  47  |   test('Cart page loads quickly', async ({ page }) => {
  48  |     // Navigate to cart page
  49  |     const startTime = Date.now();
  50  |     
  51  |     await page.goto('https://automationexercise.com/view_cart', { waitUntil: 'networkidle' });
  52  |     
  53  |     const loadTime = Date.now() - startTime;
  54  |     
  55  |     // Verify page title
  56  |     await expect(page).toHaveTitle(/Automation Exercise - Checkout/);
  57  |     
  58  |     console.log(`Cart page load time: ${loadTime}ms`);
  59  |   });
  60  | 
  61  |   test('Product details page loads all information', async ({ page }) => {
  62  |     // Navigate to product details page
  63  |     const startTime = Date.now();
  64  |     
> 65  |     await page.goto('https://automationexercise.com/product_details/1', { waitUntil: 'networkidle' });
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  66  |     
  67  |     const loadTime = Date.now() - startTime;
  68  |     
  69  |     // Verify page title
  70  |     await expect(page).toHaveTitle(/Automation Exercise - Product Details/);
  71  |     
  72  |     // Verify product image
  73  |     const productImage = page.locator('img[alt="ecommerce website products"]').first();
  74  |     await expect(productImage).toBeVisible();
  75  |     
  76  |     // Verify product information
  77  |     const productName = page.locator('h2').first();
  78  |     await expect(productName).toBeVisible();
  79  |     
  80  |     console.log(`Product details page load time: ${loadTime}ms`);
  81  |   });
  82  | 
  83  |   test('Contact page loads quickly', async ({ page }) => {
  84  |     // Navigate to contact page
  85  |     const startTime = Date.now();
  86  |     
  87  |     await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'networkidle' });
  88  |     
  89  |     const loadTime = Date.now() - startTime;
  90  |     
  91  |     // Verify page title
  92  |     await expect(page).toHaveTitle(/Automation Exercise - Contact Us/);
  93  |     
  94  |     console.log(`Contact page load time: ${loadTime}ms`);
  95  |   });
  96  | 
  97  |   test('Login page loads quickly', async ({ page }) => {
  98  |     // Navigate to login page
  99  |     const startTime = Date.now();
  100 |     
  101 |     await page.goto('https://automationexercise.com/login', { waitUntil: 'networkidle' });
  102 |     
  103 |     const loadTime = Date.now() - startTime;
  104 |     
  105 |     // Verify page title
  106 |     await expect(page).toHaveTitle(/Automation Exercise - Signup/);
  107 |     
  108 |     console.log(`Login page load time: ${loadTime}ms`);
  109 |   });
  110 | 
  111 |   test('No broken images on homepage', async ({ page }) => {
  112 |     await page.goto('https://automationexercise.com/');
  113 |     
  114 |     // Get all images
  115 |     const images = page.locator('img');
  116 |     const imageCount = await images.count();
  117 |     
  118 |     // Check each image for errors
  119 |     for (let i = 0; i < imageCount; i++) {
  120 |       const image = images.nth(i);
  121 |       const src = await image.getAttribute('src');
  122 |       
  123 |       // Verify src is not empty
  124 |       expect(src).toBeTruthy();
  125 |     }
  126 |   });
  127 | 
  128 |   test('Page scrolling is smooth', async ({ page }) => {
  129 |     // Navigate to products page
  130 |     await page.goto('https://automationexercise.com/products');
  131 |     
  132 |     // Scroll down
  133 |     const startTime = Date.now();
  134 |     await page.evaluate(() => window.scrollBy(0, 500));
  135 |     await page.evaluate(() => window.scrollBy(0, 500));
  136 |     await page.evaluate(() => window.scrollBy(0, 500));
  137 |     const scrollTime = Date.now() - startTime;
  138 |     
  139 |     // Scrolling should be responsive
  140 |     expect(scrollTime).toBeLessThan(2000);
  141 |   });
  142 | });
  143 | 
```