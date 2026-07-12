# AutomationExercise Comprehensive Test Plan

## Application Overview

AutomationExercise (https://automationexercise.com/) is a full-fledged e-commerce website designed for QA engineers to practice test automation. It includes user registration/login, product browsing, shopping cart management, checkout, contact forms, product reviews, subscription, and API testing. This comprehensive test plan covers all major functionality including happy paths, edge cases, error handling, validation, and UI/UX aspects.

## Test Scenarios

### 1. User Registration and Login

**Seed:** `tests/seed.spec.ts`

#### 1.1. Register new user successfully

**File:** `tests/user-auth/register-new-user.spec.ts`

**Steps:**
  1. Navigate to the Signup/Login page
    - expect: Page title shows 'Automation Exercise - Signup / Login'
    - expect: Both 'Login' and 'New User Signup!' sections are visible
  2. Enter a valid name in the Name field (e.g., 'John Doe')
    - expect: Text is entered successfully in the Name field
  3. Enter a valid email address in the Email field (e.g., 'testuser' + current timestamp + '@test.com')
    - expect: Email is entered successfully in the Email field
  4. Click the Signup button
    - expect: User is redirected to the registration details page
    - expect: Page displays fields for entering account information (password, first name, last name, address, etc.)
  5. Fill in all required registration fields with valid data
    - expect: All fields are filled without errors
  6. Submit the registration form
    - expect: Account is created successfully
    - expect: Success message is displayed
    - expect: User is logged in and redirected to the home page or account page

#### 1.2. Register with existing email should show error

**File:** `tests/user-auth/register-existing-email.spec.ts`

**Steps:**
  1. Navigate to the Signup/Login page
    - expect: Page loads successfully
  2. Enter a valid name and an email that already exists in the system
    - expect: Fields are filled with the existing email
  3. Click the Signup button
    - expect: Error message is displayed: 'Email Address already exist!'
    - expect: User remains on the signup page
    - expect: Form is not submitted

#### 1.3. Login with valid credentials

**File:** `tests/user-auth/login-valid-credentials.spec.ts`

**Steps:**
  1. Navigate to the Signup/Login page
    - expect: Page loads successfully with Login and Signup sections
  2. Enter a valid registered email address
    - expect: Email is entered in the Email field
  3. Enter the correct password for that email
    - expect: Password is entered (masked) in the Password field
  4. Click the Login button
    - expect: User is logged in successfully
    - expect: User is redirected to the home page
    - expect: Logout option appears in the navigation menu

#### 1.4. Login with invalid email should show error

**File:** `tests/user-auth/login-invalid-email.spec.ts`

**Steps:**
  1. Navigate to the Signup/Login page
    - expect: Page loads successfully
  2. Enter an invalid/non-existent email address
    - expect: Email is entered in the Email field
  3. Enter any password
    - expect: Password is entered in the Password field
  4. Click the Login button
    - expect: Error message is displayed: 'Your email or password is incorrect!'
    - expect: User remains on the login page
    - expect: User is not logged in

#### 1.5. Login with incorrect password should show error

**File:** `tests/user-auth/login-incorrect-password.spec.ts`

**Steps:**
  1. Navigate to the Signup/Login page
    - expect: Page loads successfully
  2. Enter a valid registered email address
    - expect: Email is entered successfully
  3. Enter an incorrect password
    - expect: Password field is filled
  4. Click the Login button
    - expect: Error message is displayed: 'Your email or password is incorrect!'
    - expect: User is not logged in and remains on login page

#### 1.6. Logout user successfully

**File:** `tests/user-auth/logout-user.spec.ts`

**Steps:**
  1. Login with valid credentials
    - expect: User is logged in successfully
  2. Look for the Logout link in the navigation menu
    - expect: Logout link is visible in the top navigation
  3. Click the Logout link
    - expect: User is logged out successfully
    - expect: User is redirected to the home page
    - expect: Login link reappears in the navigation

#### 1.7. Email field validation on signup

**File:** `tests/user-auth/email-validation-signup.spec.ts`

**Steps:**
  1. Navigate to the Signup/Login page
    - expect: Page loads successfully
  2. Try entering invalid email formats (e.g., 'notanemail', 'user@', '@domain.com')
    - expect: Email field shows validation error or rejects invalid format
  3. Enter a valid email format
    - expect: Email is accepted by the field

#### 1.8. Password field requirements on registration

**File:** `tests/user-auth/password-requirements.spec.ts`

**Steps:**
  1. Navigate to signup and reach the registration details page
    - expect: Registration form is displayed
  2. Check password field for any visible requirements (length, special characters, etc.)
    - expect: Password requirements are visible or documented
  3. Try entering passwords that don't meet requirements
    - expect: Error message indicates what requirements are not met

### 2. Product Browsing and Navigation

**Seed:** `tests/seed.spec.ts`

#### 2.1. View all products on Products page

**File:** `tests/products/view-all-products.spec.ts`

**Steps:**
  1. Navigate to the Products page
    - expect: Products page loads successfully
    - expect: Page title shows 'Automation Exercise - All Products'
    - expect: List of products is displayed with images, names, and prices
  2. Scroll through the product list
    - expect: Multiple products are visible with prices in Rs.
    - expect: Products include various categories and brands
  3. Verify each product has 'View Product' link
    - expect: Each product has a clickable 'View Product' link

#### 2.2. Filter products by Women category

**File:** `tests/products/filter-women-category.spec.ts`

**Steps:**
  1. Navigate to the Products page
    - expect: Products page loads with all products visible
  2. Click on the 'Women' category link in the left sidebar
    - expect: Page filters to show only Women's products
    - expect: URL changes to include Women category filter
  3. Verify all displayed products are from Women category
    - expect: Only women's clothing and accessories are shown

#### 2.3. Filter products by Men category

**File:** `tests/products/filter-men-category.spec.ts`

**Steps:**
  1. Navigate to the Products page
    - expect: Products page loads successfully
  2. Click on the 'Men' category link in the left sidebar
    - expect: Page filters to show only Men's products
  3. Verify all displayed products are from Men category
    - expect: Only men's clothing and accessories are shown

#### 2.4. Filter products by Kids category

**File:** `tests/products/filter-kids-category.spec.ts`

**Steps:**
  1. Navigate to the Products page
    - expect: Products page loads successfully
  2. Click on the 'Kids' category link in the left sidebar
    - expect: Page filters to show only Kids' products
  3. Verify all displayed products are from Kids category
    - expect: Only kids' clothing and accessories are shown

#### 2.5. Filter products by brand - Polo

**File:** `tests/products/filter-brand-polo.spec.ts`

**Steps:**
  1. Navigate to the Products page
    - expect: Products page loads with sidebar showing brands
  2. Click on 'Polo' brand link (6 products)
    - expect: Page filters to show only Polo brand products
    - expect: Exactly 6 Polo products are displayed
  3. Verify all products have Polo brand
    - expect: All displayed products are from Polo brand

#### 2.6. Filter products by brand - H&M

**File:** `tests/products/filter-brand-hm.spec.ts`

**Steps:**
  1. Navigate to the Products page
    - expect: Products page loads successfully
  2. Click on 'H&M' brand link (5 products)
    - expect: Page filters to show only H&M products
    - expect: Exactly 5 H&M products are displayed
  3. Verify all products are H&M brand
    - expect: All displayed products are from H&M brand

#### 2.7. View product details page

**File:** `tests/products/view-product-details.spec.ts`

**Steps:**
  1. Navigate to the Products page
    - expect: Products page loads with product list
  2. Click on 'View Product' link for any product
    - expect: Product details page loads
    - expect: Product name, price, category, and description are displayed
    - expect: Product image is visible
    - expect: Availability, Condition, and Brand information are shown
  3. Verify Add to Cart button is present
    - expect: 'Add to cart' button is visible and clickable
  4. Verify Quantity selector is present
    - expect: Quantity spinbutton with default value 1 is visible

#### 2.8. Search for product

**File:** `tests/products/search-product.spec.ts`

**Steps:**
  1. Navigate to the Products page
    - expect: Products page loads with search box visible
  2. Enter a product name in the search box (e.g., 'Top')
    - expect: Text is entered in the search field
  3. Click the search button
    - expect: Products page filters to show only matching products
    - expect: Search results are displayed
  4. Verify search results contain the searched keyword
    - expect: All displayed products match the search query

#### 2.9. Search for non-existent product

**File:** `tests/products/search-nonexistent-product.spec.ts`

**Steps:**
  1. Navigate to the Products page
    - expect: Products page loads successfully
  2. Enter a product name that doesn't exist (e.g., 'XYZABC123')
    - expect: Text is entered in the search field
  3. Click the search button
    - expect: No products are displayed
    - expect: Message indicates no products found or empty search results

#### 2.10. Verify featured items on homepage

**File:** `tests/products/verify-featured-items.spec.ts`

**Steps:**
  1. Navigate to the Home page
    - expect: Home page loads successfully
    - expect: Featured Items section is visible
  2. Verify featured products are displayed with images and prices
    - expect: Multiple featured products are shown
    - expect: Each product has image, price, and 'Add to cart' button
    - expect: 'View Product' link is available for each

### 3. Shopping Cart Management

**Seed:** `tests/seed.spec.ts`

#### 3.1. Add product to cart

**File:** `tests/cart/add-product-to-cart.spec.ts`

**Steps:**
  1. Navigate to the Products page
    - expect: Products page loads successfully
  2. Click 'Add to cart' button on any product
    - expect: Product is added to cart
    - expect: Success notification or modal appears
  3. Navigate to the Cart page
    - expect: Cart page loads
    - expect: Added product is displayed in the cart with price and quantity

#### 3.2. Add product to cart from product details page

**File:** `tests/cart/add-from-details-page.spec.ts`

**Steps:**
  1. Navigate to a product details page
    - expect: Product details page loads successfully
  2. Change the quantity using the quantity spinbutton (e.g., increase to 3)
    - expect: Quantity value changes to 3
  3. Click the 'Add to cart' button
    - expect: Product is added to cart with the specified quantity
    - expect: Success message appears
  4. Navigate to cart to verify
    - expect: Cart displays the product with quantity 3

#### 3.3. View empty cart

**File:** `tests/cart/view-empty-cart.spec.ts`

**Steps:**
  1. Navigate to the Cart page without adding any products (fresh session)
    - expect: Cart page loads
    - expect: Message displays: 'Cart is empty! Click here to buy products.'
  2. Verify 'here' link navigates to Products page
    - expect: Clicking the link redirects to the Products page

#### 3.4. Add multiple products to cart

**File:** `tests/cart/add-multiple-products.spec.ts`

**Steps:**
  1. Navigate to the Products page
    - expect: Products page loads successfully
  2. Add 3 different products to cart one by one
    - expect: Each product is added successfully
  3. Navigate to the Cart page
    - expect: All 3 products are displayed in the cart
    - expect: Cart shows total price for all items

#### 3.5. Add same product multiple times

**File:** `tests/cart/add-same-product-multiple-times.spec.ts`

**Steps:**
  1. Navigate to product details page for a product
    - expect: Product details page loads
  2. Click 'Add to cart' button
    - expect: Product is added to cart
  3. Go back and add the same product again
    - expect: Product is added again
  4. View the cart
    - expect: Cart shows the product with increased quantity or as separate line items

#### 3.6. Remove product from cart

**File:** `tests/cart/remove-product-from-cart.spec.ts`

**Steps:**
  1. Add a product to cart and navigate to cart page
    - expect: Product appears in cart
  2. Look for Remove button/icon for the product
    - expect: Remove button is visible for each product
  3. Click the Remove button
    - expect: Product is removed from cart
    - expect: Cart is updated

#### 3.7. Update product quantity in cart

**File:** `tests/cart/update-quantity-in-cart.spec.ts`

**Steps:**
  1. Add a product to cart and navigate to cart page
    - expect: Product appears in cart with initial quantity
  2. Look for quantity adjustment controls
    - expect: Quantity can be modified (+ and - buttons or input field)
  3. Change the quantity to a different value (e.g., 5)
    - expect: Quantity is updated
    - expect: Price is recalculated

#### 3.8. Verify cart total price calculation

**File:** `tests/cart/verify-total-price.spec.ts`

**Steps:**
  1. Add multiple products with different quantities to cart
    - expect: Products are in cart
  2. Check the subtotal and total price displayed
    - expect: Total price is correctly calculated as sum of (price × quantity) for all items

### 4. Checkout and Order Placement

**Seed:** `tests/seed.spec.ts`

#### 4.1. Proceed to checkout from cart

**File:** `tests/checkout/proceed-to-checkout.spec.ts`

**Steps:**
  1. Add products to cart
    - expect: Products are in cart
  2. Navigate to Cart page
    - expect: Cart page loads with products
  3. Look for Checkout button
    - expect: Checkout button is visible
  4. Click Checkout button
    - expect: User is either redirected to checkout page or login page (if not logged in)

#### 4.2. Place order: Register while checkout

**File:** `tests/checkout/register-during-checkout.spec.ts`

**Steps:**
  1. Add products to cart as a guest/non-logged-in user
    - expect: Products are in cart
  2. Proceed to checkout
    - expect: Login/Register page appears or checkout requires authentication
  3. Click 'Create Account' or Signup option
    - expect: Signup form is displayed
  4. Complete signup with new user details
    - expect: Account is created and user is logged in
  5. Continue to checkout
    - expect: Checkout page displays with order summary and delivery address form
  6. Fill in delivery address details
    - expect: All address fields are filled
  7. Proceed to payment/order confirmation
    - expect: Order is placed successfully
    - expect: Order confirmation page or message is displayed

#### 4.3. Place order: Login before checkout

**File:** `tests/checkout/login-before-checkout.spec.ts`

**Steps:**
  1. Login with valid credentials
    - expect: User is logged in successfully
  2. Add products to cart
    - expect: Products are added to cart
  3. Navigate to Cart and click Checkout
    - expect: Checkout page loads directly without login prompt
    - expect: Order summary and delivery address form are shown
  4. Enter delivery address and payment details
    - expect: All required fields are filled
  5. Place order
    - expect: Order is placed successfully
    - expect: Order confirmation is displayed

#### 4.4. Verify order summary on checkout page

**File:** `tests/checkout/verify-order-summary.spec.ts`

**Steps:**
  1. Login and add products to cart
    - expect: Products are in cart
  2. Proceed to checkout
    - expect: Checkout page loads
  3. Verify order summary displays all items
    - expect: All items from cart are shown in order summary
    - expect: Quantities and prices are correct
  4. Verify subtotal and total calculations
    - expect: Subtotal, taxes, and total are displayed and calculated correctly

#### 4.5. Checkout without login should redirect to login

**File:** `tests/checkout/checkout-without-login.spec.ts`

**Steps:**
  1. Add products to cart as a guest
    - expect: Products are in cart
  2. Navigate to Cart page
    - expect: Cart displays products
  3. Click Checkout button
    - expect: User is redirected to Login page
    - expect: Login form is displayed

### 5. Contact Form Testing

**Seed:** `tests/seed.spec.ts`

#### 5.1. Submit contact form with valid data

**File:** `tests/contact/submit-valid-contact-form.spec.ts`

**Steps:**
  1. Navigate to the Contact Us page
    - expect: Contact Us page loads
    - expect: Contact form is visible
  2. Enter a valid name in the Name field
    - expect: Name is entered successfully
  3. Enter a valid email in the Email field
    - expect: Email is entered successfully
  4. Enter a subject in the Subject field (e.g., 'Test Subject')
    - expect: Subject is entered successfully
  5. Enter a message in the message textarea
    - expect: Message is entered successfully
  6. Click the Submit button
    - expect: Form is submitted
    - expect: Success message is displayed: 'Success! Your details have been submitted successfully.'

#### 5.2. Contact form with missing name field

**File:** `tests/contact/missing-name-field.spec.ts`

**Steps:**
  1. Navigate to the Contact Us page
    - expect: Contact form is visible
  2. Leave Name field empty
    - expect: Name field is empty
  3. Fill in Email, Subject, and Message
    - expect: Other fields are filled
  4. Click Submit button
    - expect: Form validation error is displayed for Name field
    - expect: Form is not submitted

#### 5.3. Contact form with invalid email

**File:** `tests/contact/invalid-email-contact.spec.ts`

**Steps:**
  1. Navigate to the Contact Us page
    - expect: Contact form is visible
  2. Enter an invalid email format (e.g., 'notanemail')
    - expect: Invalid email is entered
  3. Fill in other fields with valid data
    - expect: Name, Subject, and Message are filled
  4. Click Submit button
    - expect: Email validation error is displayed
    - expect: Form is not submitted

#### 5.4. Contact form with missing message

**File:** `tests/contact/missing-message-field.spec.ts`

**Steps:**
  1. Navigate to the Contact Us page
    - expect: Contact form is visible
  2. Fill in Name, Email, and Subject
    - expect: These fields are filled
  3. Leave Message field empty
    - expect: Message field is empty
  4. Click Submit button
    - expect: Form validation error is displayed for Message field
    - expect: Form is not submitted

#### 5.5. Upload file in contact form

**File:** `tests/contact/upload-file-contact.spec.ts`

**Steps:**
  1. Navigate to the Contact Us page
    - expect: Contact form is visible
    - expect: 'Choose File' button is visible
  2. Click 'Choose File' button and select a file
    - expect: File is selected and displayed
  3. Fill in all other form fields with valid data
    - expect: Name, Email, Subject, and Message are filled
  4. Click Submit button
    - expect: Form is submitted with file attachment
    - expect: Success message is displayed

#### 5.6. Contact form field validation - empty fields

**File:** `tests/contact/empty-fields-validation.spec.ts`

**Steps:**
  1. Navigate to the Contact Us page
    - expect: Contact form is visible
  2. Click Submit button without filling any fields
    - expect: Validation errors are displayed for all required fields

### 6. Product Reviews

**Seed:** `tests/seed.spec.ts`

#### 6.1. Submit product review with valid data

**File:** `tests/reviews/submit-valid-review.spec.ts`

**Steps:**
  1. Navigate to a product details page
    - expect: Product details page loads
    - expect: Review form is visible at the bottom
  2. Enter reviewer's name in 'Your Name' field
    - expect: Name is entered successfully
  3. Enter reviewer's email in 'Email Address' field
    - expect: Email is entered successfully
  4. Enter review text in 'Add Review Here!' textarea
    - expect: Review text is entered successfully
  5. Click 'Submit' button
    - expect: Review is submitted
    - expect: Success message is displayed

#### 6.2. Submit review without name

**File:** `tests/reviews/review-missing-name.spec.ts`

**Steps:**
  1. Navigate to product details page
    - expect: Product details page and review form are visible
  2. Leave Name field empty
    - expect: Name field is empty
  3. Fill in Email and Review text
    - expect: Email and review are filled
  4. Click Submit button
    - expect: Form validation error is shown for Name field
    - expect: Review is not submitted

#### 6.3. Submit review without email

**File:** `tests/reviews/review-missing-email.spec.ts`

**Steps:**
  1. Navigate to product details page
    - expect: Product details page and review form are visible
  2. Leave Email field empty
    - expect: Email field is empty
  3. Fill in Name and Review text
    - expect: Name and review are filled
  4. Click Submit button
    - expect: Form validation error is shown for Email field
    - expect: Review is not submitted

#### 6.4. Submit review without review text

**File:** `tests/reviews/review-missing-text.spec.ts`

**Steps:**
  1. Navigate to product details page
    - expect: Product details page and review form are visible
  2. Leave Review text field empty
    - expect: Review field is empty
  3. Fill in Name and Email
    - expect: Name and Email are filled
  4. Click Submit button
    - expect: Form validation error is shown for Review field
    - expect: Review is not submitted

#### 6.5. Submit review with invalid email format

**File:** `tests/reviews/review-invalid-email.spec.ts`

**Steps:**
  1. Navigate to product details page
    - expect: Product details page and review form are visible
  2. Enter an invalid email format
    - expect: Invalid email is entered
  3. Fill in Name and Review text with valid data
    - expect: Name and review are filled
  4. Click Submit button
    - expect: Email validation error is displayed
    - expect: Review is not submitted

### 7. Email Subscription

**Seed:** `tests/seed.spec.ts`

#### 7.1. Subscribe with valid email on homepage

**File:** `tests/subscription/subscribe-homepage.spec.ts`

**Steps:**
  1. Navigate to the Home page
    - expect: Home page loads
    - expect: Subscription section is visible in the footer
  2. Scroll to the Subscription section
    - expect: Subscription form with email input field is visible
  3. Enter a valid email address in the subscription field
    - expect: Email is entered successfully
  4. Click the Subscribe button
    - expect: Subscription is successful
    - expect: Success message is displayed

#### 7.2. Subscribe with valid email on cart page

**File:** `tests/subscription/subscribe-cart-page.spec.ts`

**Steps:**
  1. Navigate to the Cart page
    - expect: Cart page loads
    - expect: Subscription section is visible in the footer
  2. Enter a valid email address in the subscription field
    - expect: Email is entered successfully
  3. Click the Subscribe button
    - expect: Subscription is successful
    - expect: Success message is displayed

#### 7.3. Subscribe with invalid email format

**File:** `tests/subscription/subscribe-invalid-email.spec.ts`

**Steps:**
  1. Navigate to any page with subscription section
    - expect: Subscription form is visible
  2. Enter an invalid email format (e.g., 'notanemail')
    - expect: Invalid email is entered
  3. Click the Subscribe button
    - expect: Error message is displayed indicating invalid email
    - expect: Subscription is not processed

#### 7.4. Subscribe without email

**File:** `tests/subscription/subscribe-empty-email.spec.ts`

**Steps:**
  1. Navigate to any page with subscription section
    - expect: Subscription form is visible
  2. Leave the email field empty
    - expect: Email field is empty
  3. Click the Subscribe button
    - expect: Error message is displayed
    - expect: Subscription is not processed

#### 7.5. Subscribe with existing email

**File:** `tests/subscription/subscribe-existing-email.spec.ts`

**Steps:**
  1. Subscribe with an email address
    - expect: First subscription is successful
  2. Try subscribing again with the same email
    - expect: Error message indicates email already subscribed or is displayed
    - expect: Duplicate subscription is prevented

### 8. Navigation and UI

**Seed:** `tests/seed.spec.ts`

#### 8.1. Navigation menu links work correctly

**File:** `tests/navigation/menu-links.spec.ts`

**Steps:**
  1. Navigate to any page on the website
    - expect: Top navigation menu is visible with links: Home, Products, Cart, Signup/Login, Test Cases, API Testing, Video Tutorials, Contact us
  2. Click on each navigation link one by one
    - expect: Each link navigates to the correct page
    - expect: Page titles and content match the navigation link

#### 8.2. Logo click navigates to home page

**File:** `tests/navigation/logo-click.spec.ts`

**Steps:**
  1. Navigate to any non-home page (e.g., Products, Contact Us)
    - expect: Page loads with logo visible in header
  2. Click on the website logo
    - expect: User is redirected to the Home page

#### 8.3. Verify responsive design on mobile view

**File:** `tests/navigation/responsive-design.spec.ts`

**Steps:**
  1. Set viewport to mobile size (375x667)
    - expect: Page adjusts to mobile view
  2. Verify all navigation elements are accessible
    - expect: Navigation menu is still accessible (may be in hamburger format)
    - expect: All links are clickable
  3. Click through pages and verify layout adapts
    - expect: All pages render correctly on mobile view
    - expect: Text is readable
    - expect: Images scale appropriately

#### 8.4. Breadcrumb navigation on product details page

**File:** `tests/navigation/breadcrumb-navigation.spec.ts`

**Steps:**
  1. Navigate to a product details page
    - expect: Product details page loads
    - expect: Breadcrumb navigation is visible showing path (e.g., Home > Products > Product Name)
  2. Click on Home in breadcrumb
    - expect: User is redirected to Home page
  3. Navigate back to product and click Products in breadcrumb
    - expect: User is redirected to Products page

#### 8.5. Footer links and information

**File:** `tests/navigation/footer-links.spec.ts`

**Steps:**
  1. Scroll to the bottom of any page
    - expect: Footer is visible
    - expect: Copyright information is displayed
    - expect: Subscription section is present
  2. Verify footer contains feedback email link
    - expect: Email link 'feedback@automationexercise.com' is present and clickable

### 9. Page Load and Performance

**Seed:** `tests/seed.spec.ts`

#### 9.1. Homepage loads within acceptable time

**File:** `tests/performance/homepage-load-time.spec.ts`

**Steps:**
  1. Navigate to the Home page and measure load time
    - expect: Page loads in less than 5 seconds
    - expect: All elements are visible and functional
  2. Check for any broken images or resources
    - expect: All images load correctly
    - expect: No console errors related to missing resources

#### 9.2. Products page loads with all items

**File:** `tests/performance/products-page-load.spec.ts`

**Steps:**
  1. Navigate to the Products page
    - expect: Products page loads successfully
    - expect: Multiple products are visible
  2. Scroll through the product list
    - expect: Page scrolls smoothly
    - expect: All products load without performance issues

#### 9.3. Cart page loads quickly

**File:** `tests/performance/cart-page-load.spec.ts`

**Steps:**
  1. Add products to cart and navigate to Cart page
    - expect: Cart page loads within reasonable time
    - expect: All cart items are displayed
  2. Perform cart operations (update quantity, remove items)
    - expect: Operations respond quickly without delays

### 10. Error Handling and Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 10.1. Access non-existent product ID

**File:** `tests/error-handling/nonexistent-product.spec.ts`

**Steps:**
  1. Navigate to a product details page with non-existent ID (e.g., /product_details/99999)
    - expect: Error page is displayed
    - expect: User is informed that product doesn't exist
    - expect: Option to return to products is provided

#### 10.2. Verify error page displays for 404

**File:** `tests/error-handling/404-error.spec.ts`

**Steps:**
  1. Navigate to a non-existent page URL
    - expect: 404 error page is displayed
    - expect: Error message is clear

#### 10.3. Handle rapid consecutive form submissions

**File:** `tests/error-handling/rapid-submissions.spec.ts`

**Steps:**
  1. Rapidly click Submit button on contact form multiple times
    - expect: Form submission is prevented from being submitted multiple times
    - expect: Only one submission is processed

#### 10.4. Verify session timeout handling

**File:** `tests/error-handling/session-timeout.spec.ts`

**Steps:**
  1. Login and let the session expire (if timeout is set)
    - expect: User is logged out
    - expect: Attempting to access protected page redirects to login

#### 10.5. Add product with zero quantity

**File:** `tests/error-handling/zero-quantity.spec.ts`

**Steps:**
  1. Navigate to product details page
    - expect: Product page loads
  2. Set quantity to 0 and try to add to cart
    - expect: Either quantity cannot be set to 0 or adding fails with error message

#### 10.6. Handle special characters in search

**File:** `tests/error-handling/special-chars-search.spec.ts`

**Steps:**
  1. Navigate to Products page
    - expect: Products page loads
  2. Search with special characters (e.g., '!@#$%^&*()')
    - expect: Search handles special characters gracefully
    - expect: No products found message is displayed

### 11. Data Validation and Security

**Seed:** `tests/seed.spec.ts`

#### 11.1. Password field is masked during entry

**File:** `tests/security/password-masked.spec.ts`

**Steps:**
  1. Navigate to the Signup/Login page
    - expect: Login form is visible
  2. Enter password in the Password field
    - expect: Password characters are masked (shown as dots/asterisks)
    - expect: Actual password is not visible

#### 11.2. XSS vulnerability check on product review

**File:** `tests/security/xss-review-form.spec.ts`

**Steps:**
  1. Navigate to product details page
    - expect: Product details page loads
  2. Enter HTML/JavaScript code in review text field (e.g., '<script>alert('xss')</script>')
    - expect: Review field accepts the input
    - expect: When displayed, the script is not executed (properly sanitized)
  3. Submit the review and view it
    - expect: Review is displayed as plain text
    - expect: No script execution occurs

#### 11.3. SQL injection check on search

**File:** `tests/security/sql-injection-search.spec.ts`

**Steps:**
  1. Navigate to Products page
    - expect: Products page loads with search box
  2. Enter SQL injection payload in search (e.g., "' OR '1'='1")
    - expect: Search field accepts the input
    - expect: No SQL error is displayed
    - expect: Search handles it safely

#### 11.4. Email field accepts valid email formats

**File:** `tests/security/valid-email-formats.spec.ts`

**Steps:**
  1. Navigate to signup page
    - expect: Signup form is visible
  2. Enter various valid email formats (e.g., 'user@domain.com', 'user+tag@domain.co.uk', 'user.name@domain.com')
    - expect: All valid email formats are accepted

#### 11.5. Name field accepts international characters

**File:** `tests/security/international-characters-name.spec.ts`

**Steps:**
  1. Navigate to signup page
    - expect: Signup form is visible
  2. Enter name with international characters (e.g., 'José', 'François', '李明')
    - expect: International characters are accepted and processed correctly

### 12. Integration Workflows

**Seed:** `tests/seed.spec.ts`

#### 12.1. Complete user journey: Register, Browse, Add to Cart, Checkout

**File:** `tests/workflows/complete-user-journey.spec.ts`

**Steps:**
  1. Start on homepage
    - expect: Homepage loads successfully
  2. Navigate to Signup/Login and register new user
    - expect: New account is created
  3. Login with new account
    - expect: User is logged in
  4. Browse products and add items to cart
    - expect: Multiple items are added to cart
  5. Proceed to checkout
    - expect: Checkout page displays
  6. Complete order
    - expect: Order is placed successfully
    - expect: Order confirmation is received

#### 12.2. Search and review workflow

**File:** `tests/workflows/search-and-review.spec.ts`

**Steps:**
  1. Navigate to Products page
    - expect: Products page loads
  2. Search for a specific product (e.g., 'Top')
    - expect: Search results are displayed
  3. Click on a product to view details
    - expect: Product details page loads
  4. Submit a review for the product
    - expect: Review is submitted successfully
  5. Verify review appears on product page
    - expect: Submitted review is visible on the page

#### 12.3. Contact form submission workflow

**File:** `tests/workflows/contact-workflow.spec.ts`

**Steps:**
  1. Navigate to Contact Us page
    - expect: Contact Us page loads
  2. Fill in all contact form fields with valid data
    - expect: All fields are filled
  3. Upload a file if available
    - expect: File is selected
  4. Submit the contact form
    - expect: Form is submitted successfully
    - expect: Confirmation message is displayed
  5. Verify feedback email link in footer
    - expect: Feedback email link is accessible

#### 12.4. Filter, search, and add to cart workflow

**File:** `tests/workflows/filter-search-cart.spec.ts`

**Steps:**
  1. Navigate to Products page
    - expect: Products page loads
  2. Apply category filter (e.g., Women)
    - expect: Products are filtered by category
  3. Further filter by brand (e.g., Polo)
    - expect: Products are filtered by both category and brand
  4. Search within filtered results
    - expect: Search results respect the filters applied
  5. Add multiple filtered products to cart
    - expect: All selected products are added to cart
