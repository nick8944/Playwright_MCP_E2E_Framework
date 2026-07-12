// Test configuration and utilities for AutomationExercise tests

module.exports = {
  testConfig: {
    baseURL: 'https://automationexercise.com/',
    timeout: 30000,
    retries: 1,
    slowMotion: 0
  },
  
  testData: {
    validUser: {
      email: 'test@example.com',
      password: 'TestPassword123!'
    },
    
    testUser: {
      name: 'Test User',
      email: `testuser${Date.now()}@test.com`,
      password: 'TestPassword123!',
      firstName: 'Test',
      lastName: 'User',
      address: '123 Test Street',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94105',
      country: 'United States',
      mobile: '+1-555-0100'
    },
    
    validProducts: [1, 2, 3, 4, 5],
    
    contactFormData: {
      name: 'Contact Test User',
      subject: 'Product Inquiry',
      message: 'I have a question about your products.'
    },
    
    reviewData: {
      name: 'Test Reviewer',
      review: 'This is an excellent product. Highly recommended!'
    }
  },

  testPaths: {
    home: '/',
    products: '/products',
    productDetails: (id) => `/product_details/${id}`,
    cart: '/view_cart',
    checkout: '/checkout',
    login: '/login',
    contactUs: '/contact_us',
    testCases: '/test_cases',
    apiList: '/api_list'
  },

  selectors: {
    // Common
    logo: 'img[alt*="automation practice"]',
    
    // Navigation
    homeLink: 'a:has-text("Home")',
    productsLink: 'a:has-text("Products")',
    cartLink: 'a:has-text("Cart")',
    loginLink: 'a:has-text("Signup / Login")',
    contactLink: 'a:has-text("Contact us")',
    logoutLink: 'a:has-text("Logout")',
    
    // Forms
    nameInput: 'input[placeholder="Name"]',
    emailInput: 'input[placeholder="Email Address"]',
    passwordInput: 'input[placeholder="Password"]',
    
    // Products
    productImage: 'img[alt="ecommerce website products"]',
    addToCartButton: 'a:has-text("Add to cart")',
    viewProductLink: 'a:has-text("View Product")',
    quantityInput: 'input[type="number"]',
    
    // Cart
    cartTable: 'table',
    cartItems: 'tr[id^="cart_item"]',
    
    // Buttons
    submitButton: 'button:has-text("Submit")',
    loginButton: 'button:has-text("Login")',
    signupButton: 'button:has-text("Signup")',
    
    // Messages
    errorMessage: 'text=/error|failed|incorrect/i',
    successMessage: 'text=/success|successful|submitted/i'
  },

  testSuites: [
    'User Registration and Login',
    'Product Browsing and Navigation',
    'Shopping Cart Management',
    'Checkout and Order Placement',
    'Contact Form Testing',
    'Product Reviews',
    'Email Subscription',
    'Navigation and UI',
    'Page Load and Performance',
    'Error Handling and Edge Cases',
    'Data Validation and Security',
    'Integration Workflows',
    'Email and Form Field Validation'
  ],

  utilities: {
    generateEmail: () => `testuser${Date.now()}@test.com`,
    generateUserData: () => ({
      name: 'Test User',
      email: `testuser${Date.now()}@test.com`,
      password: 'TestPassword123!'
    }),
    
    waitForElement: async (page, selector, timeout = 5000) => {
      await page.waitForSelector(selector, { timeout });
    },
    
    fillForm: async (page, formData) => {
      for (const [selector, value] of Object.entries(formData)) {
        const element = page.locator(selector);
        if (await element.count() > 0) {
          await element.fill(value);
        }
      }
    }
  }
};
