<img width="620" height="172" alt="image" src="https://github.com/user-attachments/assets/1cdf9b93-e1d7-408b-946c-953814c2dd04" />﻿# 🎭 Playwright MCP E2E Testing Framework

<div align="center">

[![Playwright](https://img.shields.io/badge/Playwright-1.61.1-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![Allure Report](https://img.shields.io/badge/Allure%20Report-2.43.0-orange?style=for-the-badge&logo=allure&logoColor=white)](https://allurereport.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)


**A comprehensive End-to-End testing framework for [AutomationExercise.com](https://automationexercise.com/) built with Playwright, featuring cross-browser testing, Allure reporting, and CI/CD integration.**

[🚀 Features](#-features) • [📊 Test Results](#-test-results) • [🧪 Test Suites](#-test-suites) • [⚙️ Setup](#️-setup) • [📈 Reports](#-reports) • [📁 Structure](#-project-structure)

</div>

---

## 🚀 Features

- **✅ 324 Automated Tests** covering 14 comprehensive test suites
- **🌐 Cross-Browser Testing** — Chromium, Firefox, and WebKit
- **📊 Allure Reporting** — Rich, interactive test reports with history
- **📸 Automatic Screenshots & Video** — Captured on every test for visual evidence
- **🔍 Trace Viewer** — Debug failures with full trace logs on retries
- **⚡ Parallel Execution** — Fully parallel test execution for speed
- **🛡️ Comprehensive Coverage** — UI, functional, security, performance, and error-handling tests
- **📋 CI/CD Ready** — Configured for seamless integration with CI pipelines

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **[Playwright](https://playwright.dev/)** v1.61.1 | Core E2E testing framework |
| **[Allure Playwright](https://www.npmjs.com/package/allure-playwright)** v3.10.2 | Allure reporter integration |
| **[Allure Commandline](https://www.npmjs.com/package/allure-commandline)** v2.43.0 | Allure report generation |
| **JavaScript (ES6+)** | Test scripting language |
| **Node.js 18+** | Runtime environment |

---

## 📊 Test Results

### Overall Statistics

| Metric | Count |
|---|---|
| **Total Tests** | **324** |
| ✅ **Passed** | **195** (60.2%) |
| ❌ **Failed** | **7** (2.2%) |
| 💥 **Broken** | **17** (5.2%) |
| ⏭️ **Skipped** | **105** (32.4%) |
| **Total Duration** | ~5.9 minutes |

### Browser Breakdown

| Browser | ✅ Passed | ❌ Failed | 💥 Broken | ⏭️ Skipped | Total |
|---|---|---|---|---|---|
| **Chromium** | 70 | 2 | 1 | 35 | 108 |
| **Firefox** | 64 | 3 | 6 | 35 | 108 |
| **WebKit** | 61 | 2 | 10 | 35 | 108 |

### Defect Categories

| Category | Count | Description |
|---|---|---|
| 🐛 **Product Defects** | 7 | Actual bugs found in the application |
| 🔧 **Test Defects** | 17 | Issues with test environment/configuration |

> **Note:** The Allure report provides detailed insights including trends, history, and per-test breakdowns. See the [Reports](#-reports) section for how to generate and view it.

---

## 🧪 Test Suites

The framework covers **14 comprehensive test suites** targeting all critical user flows:

| # | Suite | File | Coverage |
|---|---|---|---|
| 1 | **User Authentication** | `tests/user-auth/` | Registration, login validation, error messages |
| 2 | **Product Browsing** | `tests/products/` | Product listing, search, filtering, categories |
| 3 | **Shopping Cart** | `tests/cart/` | Add/remove items, cart persistence, quantity updates |
| 4 | **Checkout Flow** | `tests/checkout/` | Complete purchase flow, address verification, payment |
| 5 | **Contact Form** | `tests/contact/` | Form submission, field validation, file upload |
| 6 | **Product Reviews** | `tests/reviews/` | Submit reviews, rating system, review validation |
| 7 | **Email Subscription** | `tests/subscription/` | Newsletter signup, subscription validation |
| 8 | **Navigation UI** | `tests/navigation/` | Menu navigation, routing, UI element visibility |
| 9 | **Page Performance** | `tests/performance/` | Load times, response metrics, performance benchmarks |
| 10 | **Error Handling** | `tests/error-handling/` | 404 pages, error states, graceful degradation |
| 11 | **Security** | `tests/security/` | Data validation, XSS prevention, input sanitization |
| 12 | **Integration Workflows** | `tests/workflows/` | End-to-end user journeys, multi-step scenarios |
| 13 | **Form Validation** | `tests/validation/` | Email format, required fields, boundary testing |
| 14 | **Advanced Features** | `tests/advanced-features/` | Complex interactions, edge cases, stress testing |

---

## ⚙️ Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher
- [Java](https://www.java.com/) (required for Allure report generation)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Playwright_MCP

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# (Optional) Install Allure commandline globally
npm install -g allure-commandline
```

---

## 🎯 Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests in a Specific Browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a Specific Test Suite

```bash
npx playwright test tests/user-auth/
npx playwright test tests/products/
npx playwright test tests/cart/
```

### Run Tests with UI Mode

```bash
npx playwright test --ui
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

---

## 📈 Reports

### HTML Report (Playwright)

The built-in Playwright HTML report provides a detailed view of test results:

```bash
npx playwright show-report
```

### Allure Report

Generate and view the interactive Allure report with rich visualizations:

```bash
# Generate the Allure report
npx allure generate allure-results --clean -o allure-report

# Open the Allure report
npx allure open allure-report
```

The Allure report includes:
- 📊 **Dashboard** — Overview with status charts and duration metrics
- 🧪 **Suites** — Tests grouped by browser and test suite
- 📈 **Timeline** — Execution timeline visualization
- 🏷️ **Behaviors** — Tests grouped by epic/feature/story
- 📉 **Trends** — Historical test results tracking
- 🐛 **Categories** — Defect categorization (product vs. test defects)
- 📎 **Attachments** — Screenshots, videos, and logs for each test

### Test Evidence

The framework automatically captures:
- **📸 Screenshots** — Taken on every test (`screenshot: "on"`)
- **🎥 Videos** — Recorded for every test (`video: "on"`)
- **🔍 Traces** — Collected on first retry (`trace: "on-first-retry"`)

All evidence is stored in:
- `test-results/` — Individual test folders with screenshots and videos
- `playwright-report/data/` — Consolidated report data with screenshots and videos
- `allure-results/` — Allure-compatible results with embedded attachments

<img width="975" height="518" alt="image" src="https://github.com/user-attachments/assets/c8d1f3d3-3eee-40ff-b718-342db6031f7c" />
<img width="975" height="475" alt="image" src="https://github.com/user-attachments/assets/12a48c13-2504-4d4c-a2c7-29ea159f8423" />
<img width="975" height="452" alt="image" src="https://github.com/user-attachments/assets/5013a11d-cd6a-42be-aa3d-57dd2e828c32" />
<img width="975" height="475" alt="image" src="https://github.com/user-attachments/assets/9344517d-a69c-4d44-beff-be6b2ccc7ac4" />




---

## 📁 Project Structure

```
Playwright_MCP/
├── 📂 tests/                    # Test files organized by feature
│   ├── 📂 user-auth/           # Registration & login tests
│   ├── 📂 products/            # Product browsing & search tests
│   ├── 📂 cart/                # Shopping cart tests
│   ├── 📂 checkout/            # Checkout flow tests
│   ├── 📂 contact/             # Contact form tests
│   ├── 📂 reviews/             # Product review tests
│   ├── 📂 subscription/        # Email subscription tests
│   ├── 📂 navigation/          # Navigation UI tests
│   ├── 📂 performance/         # Performance benchmark tests
│   ├── 📂 error-handling/      # Error & edge case tests
│   ├── 📂 security/            # Security & validation tests
│   ├── 📂 workflows/           # Integration workflow tests
│   ├── 📂 validation/          # Form validation tests
│   ├── 📂 advanced-features/   # Advanced scenario tests
│   ├── 📄 test-config.js       # Shared test configuration
│   └── 📄 seed.spec.ts         # Test data seeding
├── 📂 specs/                   # Test plans & documentation
│   └── 📄 AutomationExercise_TestPlan.md
├── 📂 allure-report/           # Generated Allure report
├── 📂 allure-results/          # Allure test results data
├── 📂 playwright-report/       # Playwright HTML report
├── 📂 test-results/            # Test artifacts (screenshots, videos)
├── 📄 playwright.config.js     # Playwright configuration
├── 📄 package.json             # Project dependencies
└── 📄 README.md                # This file
```

---

## 🔧 Configuration

Key configuration in `playwright.config.js`:

| Setting | Value | Description |
|---|---|---|
| `testDir` | `./tests` | Test file directory |
| `fullyParallel` | `true` | Run tests in parallel |
| `retries` | `0` (local) / `2` (CI) | Test retry count |
| `screenshot` | `"on"` | Capture screenshots on every test |
| `video` | `"on"` | Record video for every test |
| `trace` | `"on-first-retry"` | Trace on first retry |
| `baseURL` | `http://localhost:3000` | Application base URL |
| **Reporters** | `html` + `allure-playwright` | Dual reporting |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Test Writing Guidelines

- Follow the existing test structure in `tests/` directory
- Use the shared configuration from `test-config.js`
- Ensure tests are independent and can run in parallel
- Add proper test descriptions and assertions
- Verify tests pass across all three browsers

---


## 🙏 Acknowledgments

- **[AutomationExercise.com](https://automationexercise.com/)** — For providing an excellent practice platform for QA automation
- **[Playwright](https://playwright.dev/)** — For the powerful and reliable testing framework
- **[Allure Framework](https://allurereport.org/)** — For the beautiful and informative test reports

---

<div align="center">
  <p>Built with ❤️ using Playwright & Allure</p>
  <p>
    <a href="https://playwright.dev/">Playwright Docs</a> •
    <a href="https://allurereport.org/">Allure Docs</a> •
    <a href="https://automationexercise.com/">AutomationExercise</a>
  </p>
</details>
