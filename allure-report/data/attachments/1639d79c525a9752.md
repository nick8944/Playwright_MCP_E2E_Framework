# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: security\data-validation-security.spec.js >> Data Validation and Security >> Email validation prevents form submission with invalid email
- Location: tests\security\data-validation-security.spec.js:178:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.evaluate: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button:has-text("Submit")')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
  - generic [ref=e37]:
    - heading "Contact Us" [level=2] [ref=e41]:
      - text: Contact
      - strong [ref=e42]: Us
    - generic [ref=e43]:
      - generic [ref=e45]:
        - generic [ref=e46]: "Note: Below contact form is for testing purpose."
        - heading "Get In Touch" [level=2] [ref=e47]
        - generic [ref=e49]:
          - textbox "Name" [ref=e51]: Test User
          - textbox "Email" [ref=e53]: invalidemail
          - textbox "Subject" [ref=e55]: Test
          - textbox "Your Message Here" [active] [ref=e57]: Test message
          - button "Choose File" [ref=e59]
          - button "Submit" [ref=e61] [cursor=pointer]
      - generic [ref=e63]:
        - heading "Feedback For Us" [level=2] [ref=e64]
        - generic [ref=e65]:
          - paragraph [ref=e66]: We really appreciate your response to our website.
          - paragraph [ref=e67]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=e68]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=e69]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e70]: Thank you
  - contentinfo [ref=e71]:
    - generic [ref=e76]:
      - heading "Subscription" [level=2] [ref=e77]
      - generic [ref=e78]:
        - textbox "Your email address" [ref=e79]
        - button "" [ref=e80] [cursor=pointer]:
          - generic [ref=e81]: 
        - paragraph [ref=e82]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - generic [ref=e83]:
      - generic:
        - insertion:
          - generic:
            - iframe
      - paragraph [ref=e86]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e87]:
    - iframe [ref=e90]:
      - iframe [ref=f9e1]:
        - generic [ref=f12e2]:
          - link "Advertisement" [ref=f12e4]:
            - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssJglfVwdG88Mkz9fJYC2cwBhyTJbY9FWS0IkG1WZBhj-3mYzDpofpTi_oQMmpgUOwTBfOWVOYuJ0953G9GRIRTffibc3QU_7FtNWQqeeRD4IjywaEdLxB_mNuSQobFFgELaymvfuONFTmqxaT83HTaue_TJCbYcUOlYH9_W4IBqTs70nHne7E0Vc4RGSrlzotopJM0s1QQuSY_2VsXLqUiz7HBDHhoIH9xEq_yW-Gzn9juoyX74BUAFvEKsFmVGxRaanUmAyzEWl-qZ__n34IcpdQpx5CuBdEFF6nEPm_c354Yh8NmjIpiyGJUnvjHyXxdsJJOJT_3VieU__zFU6jycvEjbfVq8jyAWH_-cMoDkCACX81V2IxEe9P2TA2opoD0bl5vKhd_KS5fnZ3pPf0eYmCLd2MBus0iX9mvFVG-xJ_8ubrvTtU7fogMQ-97mAw-G7vmZIvT6UkLjjZfrcz-GW95rCqPKxJEwYSv-MdeE9Ss2WkdU1RHdMhtXyaoySWapyGmUhVjrVAr5uAm9BFGy-i_ypSky1LtxDJrkcDd10c6lbvx4FDWz0_WN1Y9fXoFPPx5qKT6Dmv46faMq3U-kqNyzIe0ZUQVCpl7EqxRKh4_INABKvlR-lfgyMQzJjuRE7SjbsHOfAtZnfAABDp8YvBJyiw5CpS3A1vALkJ-By_8Ee3p2H9u3-C46k5H7O36_krv86Jhi--Rpv58Md5ZQYp8_e5XB6XKFmEyt1B46UGZWgwx2OTjWn6vI_MKfrH3VONZxzAcvb7kJqxnoLXbGPSdsacxZOds1-OHSPuXUi6bvg1aMOC7hQs3YLk6glfcG1eUi0bk2wks0GIETkqz5EF-E2Il3i1V44GoAi_dwwGLUsiT2RPA8oBjI4PmRLJjegh708fW3uy2nCSwWau3qjMw9DgswHIX99oEFss4Bh8ymkv-X3QRwd7wNZxD456akbH3d7ZAT78tgaheLwN2dYJOM_eRrt5v9e-8gSfmesRYdPZo2yZT8DRssPOTyLG734q4xvMPK1h26ej9KPAx7O_tRhlZYYcb7KyuTGvbHUXk2esz4ES4QYs_oSAQiumpWtFhnjHJei8AvLWav_FqmxBZ72YML2kqinNKksiL62yY-fBZhxgyyXC4sM-eQ_hu-hL4XzMcNoZFT6uZJrj9k5MeH9oee8-k30_vvoS9kqgGoJiQk2IO-znJ4NH4-SrzkZV1ONdl9Dlv9Gh9EAsemetCex4nQn-Zf_Q_iYTYJjGUR59ZlavknA3uSMAuiNsudOAvEg1jcMWXsAdoU2CEfLGEd8USw_u-dIQyxQ65Fm5ycbvknZzTd15iIuni8ayuIEVj581ViXItL7z042R0Se9mc5FLp5cUPj1EFOE__MLQwDISSW0f4s5lGKisotTWYGKDU9DAD0uUTGV33AbcIgOyXm0AQtVmruydslUklzsYdUN015dKKkPE0qB-sSN23YHW96N9TKu5dviPHjiGp90UNcnPqm2_hWaraYZEqE2_uGf4zEy5_Gpyfrjt3yYJabPBy5o9jB2IrcOOtbQs6yRAHOAbm3yCDbNDIMTFVloMeTREBz3TshWU0FyCf2WS80AhuIYf9xfXe78I8uPvt7XNoQ2gxkcVOEGhN7bhZjMDB-qgA2IjBpu1_Nnsq-UXdQ&sai=AMfl-YQHJ2IxW2kayO-hogow1GqvE_XM3F_eI9RaIrxQp5bOjA4a1s-wQ7Ox0L3H6C9625PZKWcLwBWeETPyzoQwfGD3yKjihu0_HnCr1QHsuyp7xrSE8dV5rNykKG-QbJ1vlzzEV8gV5y6VtkeZIG_2427QRGa35dg_dLPvA2ZInE83VN8cw9vSYQOq-cRREOBrPw1ppzaYdEyaz4qPHFIA9IyNK50t2_20TQK6-Iy2wJnM1gOD0GP7M9lbYzYLLPMHH-vicZvJNoPNMHhQLmKToWA9v8Z3GiLOqprWQjeCnnocKIc4JSfDsVejxwNFEon-9q_fVhU_fY0cmW68bBiJY-S7Pf01PL_sLCGHq1186lLd45SpeX31UCGGIeD9mVUm-XAt8bHoKUthk7MsH3_1cx41wtKabG7f8osneF0o-A8LDjvfD3Nbaqcb08fHZFX2tX7MQ-5KI3mnkeSXHY8c3zAJzz8F1ZndoCzUBG4xvST-2B8dl_yXAcF4QvJ1sQUtX6jQFuIAURSzmqs8ckuKqkGMhBbms-xxn-uS43vkff6yS2lHidrlLzOMhf07Qa5t6vgN1_JCF9WLZWyEYn360xIEiPeCLAMUU-SHCB3pY5z3PIWDI-q_hQl4T-2ZeRb6Xb40Ln7bWWQFWW9dLrFqUa4rzOiF2wUsQ5TMdFoJiUmiFyLBIJKY5525afur08XiNf-3HKRMGh-1Xt-WBJxKgC9H8z1PXmvpxmnHip6MYKfyfJEwm5zO1ftikxiOBtuQfWbHDEUjqWJp_iXjEpmMQAcft3efS_fcq2Bd_PtOVGy8EJNnsNVHgso_A0W6hFIr7MHW4C2hf5pFufbz7dMHUZNR3ku3B7WRJbTO_mEhglUZWL6VTmjqo9-W5qTa-M3j5z3nsp1bzPyxhlSS9Rq2TPD3xPY8cyax6EiqtWVxNmyQOhOZTgHZccl-GBaO_2T26nxo8b6eqWHRVEKUBNeKpeigCt7jer9iEQ&sig=Cg0ArKJSzAh4snbgypFY&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://www.flipkart.com/oppo-reno16c-5g-ads-store%3Focmpid%3DBrandAd_OPPO_Reno16C_media_DV360Packs
            - img "Advertisement" [ref=f12e5]
          - generic [ref=f12e6]:
            - generic:
              - img [ref=f12e10] [cursor=pointer]
              - button [ref=f12e12] [cursor=pointer]:
                - img [ref=f12e13]
```

# Test source

```ts
  97  |     await page.goto('https://automationexercise.com/product_details/1');
  98  |     
  99  |     // Set quantity
  100 |     const quantityInput = page.locator('input[type="number"]');
  101 |     await quantityInput.clear();
  102 |     await quantityInput.fill('2');
  103 |     
  104 |     // Add to cart
  105 |     const addToCartButton = page.locator('button:has-text("Add to cart")');
  106 |     await addToCartButton.click();
  107 |     await page.waitForTimeout(500);
  108 |     
  109 |     // Navigate to cart
  110 |     const cartLink = page.locator('a:has-text("Cart")');
  111 |     await cartLink.click();
  112 |     
  113 |     // Verify total is calculated
  114 |     const totalText = page.locator('text=/Total|total/');
  115 |     await expect(totalText).toBeVisible({ timeout: 5000 });
  116 |   });
  117 | 
  118 |   test('Session handling - page persistence', async ({ page }) => {
  119 |     // Navigate to home page
  120 |     await page.goto('https://automationexercise.com/');
  121 |     
  122 |     // Add product to cart
  123 |     const homeUrl = page.url();
  124 |     expect(homeUrl).toContain('automationexercise.com');
  125 |     
  126 |     // Navigate away and back
  127 |     await page.goto('https://automationexercise.com/contact_us');
  128 |     await page.waitForTimeout(500);
  129 |     
  130 |     // Navigate back to home
  131 |     const homeLink = page.locator('a:has-text("Home")').first();
  132 |     await homeLink.click();
  133 |     
  134 |     // Should return to home page
  135 |     await page.waitForTimeout(500);
  136 |     const currentUrl = page.url();
  137 |     expect(currentUrl).toContain('automationexercise.com');
  138 |   });
  139 | 
  140 |   test('Form data is not exposed in URL', async ({ page }) => {
  141 |     // Navigate to login page
  142 |     await page.goto('https://automationexercise.com/login');
  143 |     
  144 |     // Enter login credentials
  145 |     const emailInput = page.locator('input[placeholder="Email Address"]').first();
  146 |     const passwordInput = page.locator('input[placeholder="Password"]');
  147 |     
  148 |     await emailInput.fill('test@example.com');
  149 |     await passwordInput.fill('TestPassword123!');
  150 |     
  151 |     // Try to login
  152 |     const loginButton = page.locator('button:has-text("Login")');
  153 |     await loginButton.click();
  154 |     
  155 |     // Wait for response
  156 |     await page.waitForTimeout(1000);
  157 |     
  158 |     // Verify password is not in URL
  159 |     const url = page.url();
  160 |     expect(url).not.toContain('TestPassword123!');
  161 |     expect(url).not.toContain('password');
  162 |   });
  163 | 
  164 |   test('Special characters in name field are preserved', async ({ page }) => {
  165 |     // Navigate to contact us
  166 |     await page.goto('https://automationexercise.com/contact_us');
  167 |     
  168 |     // Enter name with special characters
  169 |     const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
  170 |     await nameInput.fill("John O'Brien-Smith");
  171 |     
  172 |     // Verify special characters are preserved
  173 |     const value = await nameInput.inputValue();
  174 |     expect(value).toContain("'");
  175 |     expect(value).toContain("-");
  176 |   });
  177 | 
  178 |   test('Email validation prevents form submission with invalid email', async ({ page }) => {
  179 |     // Navigate to contact us
  180 |     await page.goto('https://automationexercise.com/contact_us');
  181 |     
  182 |     // Enter invalid email
  183 |     const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
  184 |     const emailInput = page.locator('input[name="email"], input[placeholder="Email"]');
  185 |     const subjectInput = page.locator('input[name="subject"], input[placeholder="Subject"]');
  186 |     const messageInput = page.locator('textarea[name="message"], textarea[placeholder*="message"]');
  187 |     
  188 |     await nameInput.fill('Test User');
  189 |     await emailInput.fill('invalidemail');
  190 |     await subjectInput.fill('Test');
  191 |     await messageInput.fill('Test message');
  192 |     
  193 |     // Try to submit
  194 |     const submitButton = page.locator('button:has-text("Submit")');
  195 |     
  196 |     // Check if browser native validation prevents submission
> 197 |     const isValid = await submitButton.evaluate((el) => {
      |                                        ^ Error: locator.evaluate: Test timeout of 30000ms exceeded.
  198 |       return el.form ? el.form.checkValidity() : true;
  199 |     });
  200 |     
  201 |     // Should be invalid due to email format
  202 |     if (!isValid) {
  203 |       expect(isValid).toBe(false);
  204 |     }
  205 |   });
  206 | });
  207 | 
```