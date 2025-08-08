# Playwright + Cucumber BDD (JavaScript)

## 🔧 Prerequisites
- Node.js >= 14
- npm

## 🚀 Setup
```bash
npm install
```

## 🧪 Run Tests + Report
```bash
npm test
npm run report
open reports/cucumber-report.html
```

## 🌐 Features Covered
- ✅ Login
- 🛒 Add to Cart
- 🚪 Logout

## 📂 Folder Structure
```
features/
  login_and_cart.feature
  support/
    report-hooks.js
  step_definitions/
    steps.js
pages/
  loginPage.js
  inventoryPage.js
  cartPage.js
.github/
  workflows/
    ci.yml
cucumber.js
package.json
.gitignore
README.md
reports/
```

## 🏷️ Tags
- `@login`
- `@smoke`
- `@cart`
- `@logout`

Run only smoke tests:
```bash
cucumber-js --tags @smoke
```

## 📈 Reporting
- JSON → `reports/cucumber-report.json`
- HTML → `reports/cucumber-report.html`

## 🤖 CI Integration
GitHub Actions defined in `.github/workflows/ci.yml`  
Uploads HTML report as build artifact.

## 📌 Assumptions
- First inventory item always present.
- SauceDemo site is reachable in headless mode.
