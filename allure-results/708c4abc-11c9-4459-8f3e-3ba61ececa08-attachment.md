# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance\page-performance.spec.js >> Page Load and Performance >> Login page loads quickly
- Location: tests\performance\page-performance.spec.js:97:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/login", waiting until "networkidle"

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
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - generic: SpE3dm9BLW9VBNKBBZTRXRyaEuUOfqiYwAAMklyiNf1VyN9SUWiszcbRkSJAz5gf
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: SpE3dm9BLW9VBNKBBZTRXRyaEuUOfqiYwAAMklyiNf1VyN9SUWiszcbRkSJAz5gf
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - generic: signup
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e73]:
    - generic [ref=e76]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e78]: Discover more
      - link "API testing tools" [ref=e79] [cursor=pointer]:
        - generic "API testing tools" [ref=e80]
        - img [ref=e82]
      - link "Programming" [ref=e84] [cursor=pointer]:
        - generic "Programming" [ref=e85]
        - img [ref=e87]
      - link "API testing service" [ref=e89] [cursor=pointer]:
        - generic "API testing service" [ref=e90]
        - img [ref=e92]
  - insertion [ref=e94]:
    - iframe [ref=e97]:
      - iframe [ref=f8e1]:
        - generic [active]:
          - generic [ref=f11e1]:
            - generic [ref=f11e2]:
              - generic:
                - img [ref=f11e6] [cursor=pointer]
                - button [ref=f11e8] [cursor=pointer]:
                  - img [ref=f11e9]
            - insertion [ref=f11e17]:
              - generic [ref=f11e18]:
                - link "Click Here" [ref=f11e19]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CKa3G5ZxTav3OJsKV29gP--mVsQyLjuqtiAGPkMLfqRWhpvjz0B0QASD9tJ6VAWDlgoCAvA6gAYviiqAByAEJqAMByAObBKoEiQJP0BGw1CompnyFz0wFIcs-X4JcKrnzeBsaI_Et7NcOvIYZP38he4laDM1tpd0k9nZI6ZKF3y8RP-Yq1KkeeuffifJG75n0n7ewA0ClNiaEalRrSlBblyPQUwaoSJtFz9otDS5W-ihKUftiiXj2duVR8GWBaz-1CVwKCsnRTp14_wRvQ1ECf_YJNMHY-73JhZWAcPCuzy1H50bIGHq9SEKiWD35ysJKwWimHyJFVR7zCGakNWALTskXIYeYb3PxzxFd3VOMA7guA2S6WZc4tvvgTFWPpbz-7X_fVzFTGGMtsQyPpBafZXY2_oFPeww0CI3qGEG6Ff9RNyKaZSwy27wb61AI5vRsC8UNwATt9N3p8wTgBAOIBc-V8vRRkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYlpC6pqXNlQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCKbeu6alzZUDFcLKFgUd-3QlxvANAYgOCbAT84q2I9ATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRICnWMYTSIBANAZAQ&ae=1&num=1&cid=CAQSnwIAEQoqgeHD0yWVcgaNXwJ7BLV2N-Y9-Wuj5XjMKTr_H-nhOfOaN2rCkPfit-03TTbxjHX_WFfkLwGPsp7cAEdEDWT-KuzQMTLdnM55arBDGBWRxHOy37N6elen2Z796jonP0jPLOPl6KgUD0ODJGJP-r-GVV3tsr7jkOnR4D00XEU-LAHo02tBVzYYG_7EFn6F_tDnbAqjUQy6iGHXcCWe_1MVY06dh8YTNjdxVsq_oKtu4uCNQhLW117Vo3PmBCqMs572rzkwZQlaO4rM8uirSJafyX2yGjc1TlYKIJSea17CujWkN9ZBlA0Lv0BC1TWED63hqFqtGTCvHjOisimbuXMNk1D7HpAtyfn3VUARZLtCuap6GQB9qc3FQ6-YfxgB&sig=AOD64_2IrRFEVY9ulUUlmr9TXUCZxu_xtQ&client=ca-pub-1677597403311019&dbm_c=AKAmf-Aht9E5OAz_yUfMNrsEWE5gXF2sEUIm4BnHUx7An70OGsG1F5rnrcRDT-0l8w0DDusebu6SHcdVx95i115uHhVQ_NrJTNPF8de5-cq_fy-n6ne1u_FL5cR4CUCwsymCa6LLMupTFaxJB1PZsODN50YEiuBsA0cY8XsRfR1ScFxAiMB2u3lcVZwcPDb8yMjkbZy1L8BtZ0i9sANLx2tIK0fBja07qP5lW48YJR5eZ045Hm25EcsX6PfD2eiJjDdwcjBeoUq4PA4A0CZpew3Cd1CYuVZymrK8n98FPeNF-Kd1jKqEUb8mOV3S30eFnT6PdpqT_ur4&cry=1&dbm_d=AKAmf-BdQJV2D5Gnvmrc5fURdYbveXq3hwcM2k3ezKNPofCYWlISSpZjZhm78qQG9QbcSwjxgJUtnoNq4TgcuZ7CyVgKiORU489JHtjOISu7TOFjMdJHYukAATTyZs069lceay45k0QtOBhkxrNEMxQKihMTBHK7XEUy2gzSpNISMMr1v0mMBZ2cmM-6DdTjfiGVCpyBw6XAgT3MBnpNj2wW27ayFHzWIFM_yHBoFlMKbhCPbjnAjx0L7dt2ze2PeRqjMxskJUvqgo86ZuGFyYP0Sb9u6_GOO7MGyeKUeCQ-fMoKziflJa-ClKuZQEFMs07ok1WzjNvp_DmnWXTTpbXDUYh9vYBZjuljHvp6fDSos05o3Qyn_C7pL-sKFW60WM8QjF9bpQN_nJV1fJh2vw32Qa9Z52-6WoYkaNRst16Zlo9VKRNnHwkek37uvJuTXlKbMvulFU69e9ObxcAtN0JisAJiqNknfs1qNLSWvP6D0SXG-Wec5IB4hnPe8Q0cUljfqX70lM1-HN4yr8VzrkYJAkL2LCC1R9QaeLXqfrnNE4sPWP225pMehGqj1Y5cSj7UB6fsmzsaKjkMrKxhmCBKSAsMK0nb7DTkciAyd14_e_eEfB2d8_ey6RPH3EqEz0whBW0VN1OSM1tB1Sf-scZyZF6B48b3assek2Oypss1R9OxsJqQU8jRlx8NO1y8zYCVy4eEXfMRgBz7lRu4kyiYf8V30GHiX_RiqWTyLICtSyLCVaVBrgo&adurl=https://servedby.flashtalking.com/click/7/296969;10263616;6106266;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0hubjAyyRCC7z_vNCPuYSr4&ft_impID=266E4D9B-F007-B635-448B-0B1DBAB810AB&ft_section=21988412111&g=67678E3A4B0CD4&random=925108.8187900907&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                  - img "Click Here" [ref=f11e20]
                - link "AdChoices arrow" [ref=f11e22]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f11e23]
                - link "Privacy Notification" [ref=f11e25]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f11e26]
                - link "Privacy Notification" [ref=f11e28]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f11e29]
          - iframe
  - generic [ref=e98]:
    - generic [ref=e99] [cursor=pointer]:
      - img [ref=e101]
      - link "Go to shopping options for API testing service" [ref=e103]: API testing service
    - button "Close shopping anchor" [ref=e104]
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
> 101 |     await page.goto('https://automationexercise.com/login', { waitUntil: 'networkidle' });
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
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