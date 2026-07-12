# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance\page-performance.spec.js >> Page Load and Performance >> Cart page loads quickly
- Location: tests\performance\page-performance.spec.js:47:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/view_cart", waiting until "networkidle"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e38]:
    - list [ref=e40]:
      - listitem [ref=e41]:
        - link "Home" [ref=e42]:
          - /url: /
      - listitem [ref=e43]: Shopping Cart
    - paragraph [ref=e46]:
      - text: Cart is empty! Click
      - link "here" [ref=e47]:
        - /url: /products
      - text: to buy products.
      - link "Shipping & Logistics" [ref=e48] [cursor=pointer]:
        - img [ref=e50]
        - text: Shipping & Logistics
  - contentinfo [ref=e52]:
    - generic [ref=e57]:
      - heading "Subscription" [level=2] [ref=e58]
      - generic [ref=e59]:
        - textbox "Your email address" [ref=e60]
        - button "" [ref=e61] [cursor=pointer]:
          - generic [ref=e62]: 
        - paragraph [ref=e63]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e67]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e68]:
    - iframe [ref=e71]:
      - iframe [ref=f10e1]:
        - generic [active]:
          - generic [ref=f12e1]:
            - generic [ref=f12e2]:
              - generic:
                - img [ref=f12e6] [cursor=pointer]
                - button [ref=f12e8] [cursor=pointer]:
                  - img [ref=f12e9]
            - insertion [ref=f12e17]:
              - generic [ref=f12e18]:
                - link "Click Here" [ref=f12e19]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CVZ-U25xTar6yH6_js8IPg_jIuAuLjuqtiAGPkMLfqRWhpvjz0B0QASD9tJ6VAWDlgoCAvA6gAYviiqAByAEJqAMByAObBKoEiQJP0BzZgcTuUsNSMBOY34jt85vUQeRbOOPHAAFoJujEz4qeyrqQi0-wipPwxGxsp0zCmDFmL8BwMOzN9As6kWy4tJ_-IixCF1gY1A4XdfVnI6XbK0rxnwDMnkkKfNypZ-WToaIDET96gogX1APaoiIIUYlKUla64_hgqT_sf6KIMzzprJLRPyEAs2mKWVGy_Jnm-dl_Bfw0Fe2EpY-tGLlgjB5DsC3QQl6VvxCSfoeQC9dsSQLJeUbQi3F-fXqAnVc7JTtRt0LDtCMG-rki0ZagkS2Qgm6YNM4AJWDh_FFCCN9G4kbLvKSxbJwJr3T8inh5yLY_K_F0h21LyNHlGVlL0kp3FnFCSSIZwATt9N3p8wTgBAOIBc-V8vRRkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY8bfQoaXNlQNgAYAKAZgLAcgLAYAMAaIMDCoKCgiO37ECleKxAqoNAklO6g0TCMuU0qGlzZUDFa_xTAIdAzwSt_ANAYgOCbAT84q2I9ATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRICnWMYTSIBANAZAQ&ae=1&num=1&cid=CAQSngIAEQoqgWWsdEbL0PMw8CPlKDP8DsODY5uJm0i6yaBDzLmosn4e6e2cAT5YbWrqow1vi0KLjbAAA96CVUbOF70oHq24NoycJcENGbDA_3w3aBJvC0FBSfdskKp55lRO_iKBNWdAhOZu_8ewnJ-Cxc4M_iX62yNOJ66WI8_GyrdfvfO0Q3QnPUXAVU3eMvNWJj_0QxgPpk1nGSNIAXiC6bGHebYrosxGM1if6NhhHEPocojF0bzu4eiExNCEfV3PP76x45ch9gX0px8sr0MVresgxc7toSuIUJV_5hawOVH99qrSyhNEVCW37CHsAeyFcH18c8zanVOKXejL0ebFZfy9bS5c6PMbkaz_QTPlDrLJwHUZgstkOCInmJSWJ8-zGAE&sig=AOD64_1aI8EmQhgyaoPM08h1L0s67XqGYQ&client=ca-pub-1677597403311019&dbm_c=AKAmf-BFciTIqoT_rgVQrPR-RqribTYYF_O85SRie4eFIqWzecGBSQtoEJygsO-B-ysBu7uSDHrOghpKiIBKj8jOjekYYpeasBxcGVK8MMh8eYWvGlA89Hk1pbcojjX7CS520v42xqA9xNH2XFWFSpoAqd574BWSpF81HtisNHeaGKzN6TdhEwKWhiPp1Q27AvyTksqJMOavEdvTjuOei4VQdDRRK12jCkJo-5KjN6WKd6XOv4UkSiFUn3jVESAN4rkWh0TCdWvfHb3Jjzdq_1h96V8H65z0dqk9DnzEq-a8vM79yKZF3MDdendIrbLQ7oQjaXQK1_kK&cry=1&dbm_d=AKAmf-Avj_5IZy2ucq6E4IqukLKuRhYGt8PgX9zfPMHc22ZtuahllBPT-yn_-L1B729eRaEYaHcAM4Er2EAhi8mfI0EOoQuRajHvkCcNxe4A3OR82H_rpz7ulKuuu0NcK5HysCNtmaAsR-ClV10YFAYX_kiY3JZEo_lHmxTkfJJpu_HF08ghiOpiX57kno6uANm4T4bPKu9A2e2iaYc7fxjwnO7Gly7bY1qOBiSPvVjZIIICYd2txSTa9QjdHMJwghATdidNvgZMtzhp3-_QnJCDEcdGl5nu8PypjVw87ytBWIyaMJjgMobkFFkdfKd9BENlYfe22j5GU7cNE_6FsNWeaGRmeeiqgXYEF2XW7yQf5SzTFkCaZbz7VE5fHkOa0M1s59Ujt55VKAgOFia91g3hvl9Pxx_5pmaLCMJHfR048XWKdfxUcXm9FL0OiudEWmuIsTePSe-THAj9TyRNK_EoAUfVvaUdxDHLRW-LKZ9xTRGxgG50gmOYyusWhe6pJ0W2i1MlcAGUmU1vpKegWroJrSUl1gUX2bKYh5XaHoSXYsGsxqccvwjZuDrEKbfXvKFBdVRcMSt0m_xS9_kiU-VM-3j5rCYOkjWK1vntJAmtGQ67g_UwiIzH-frRQAGEJbf0gY4eZ-oVABzNtUiCWsrLKDCeOwv65Q55tG8ZvavV3KTR12jaK4lB8495JznTZCnWrWESydurxN1R-L-KxqImSl9QN0ul9ridOgQmPGs4ITwclOltyEc&adurl=https://servedby.flashtalking.com/click/7/296969;10263616;6077659;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0jVBaR5zU00vqpfJJ-09u99&ft_impID=05B1C937-6695-49C4-3F50-EF6980A3959C&ft_section=21988412111&g=6767EC0703025D&random=128477.1497346327&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                  - img "Click Here" [ref=f12e20]
                - link "AdChoices arrow" [ref=f12e22]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f12e23]
                - link "Privacy Notification" [ref=f12e25]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f12e26]
                - link "Privacy Notification" [ref=f12e28]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f12e29]
          - iframe
  - generic [ref=e72]:
    - generic [ref=e73] [cursor=pointer]:
      - img [ref=e75]
      - link "Go to shopping options for Software testing services" [ref=e77]: Software testing services
    - button "Close shopping anchor" [ref=e78]
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
> 51  |     await page.goto('https://automationexercise.com/view_cart', { waitUntil: 'networkidle' });
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
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
  65  |     await page.goto('https://automationexercise.com/product_details/1', { waitUntil: 'networkidle' });
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