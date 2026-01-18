# Playwright Automation Project (UI + API)

![Playwright Tests](https://github.com/MiroslavGeorgievv/playwright-qa-portfolio/actions/workflows/playwright.yml/badge.svg)

---

## 📌 Project Overview
This is a personal QA Automation project built with Playwright and JavaScript.

The project demonstrates **real-world test automation practices**, including:
- UI (E2E) tests
- API tests
- Data-driven testing
- CI with GitHub Actions
- Handling unstable external systems

---

## 🧪 Test Coverage

### UI Tests
- SauceDemo login scenarios
- Positive and negative cases
- End-to-end user flow validation

### API Tests
- ReqRes demo API
- Login happy-path and negative scenarios
- Data-driven invalid payload tests

---

## 📂 Project Structure

ai/                 # AI-assisted documentation and test generation prompts
pages/              # Page Object Model (UI abstraction layer)
tests/
├── e2e/             # UI end-to-end tests
│   └── saucedemo/
├── api/             # API tests
│   ├── reqres/      # ReqRes demo API tests
│   └── saucedemo/   # SauceDemo API tests
.github/workflows/   # CI configuration (GitHub Actions)

### Folder responsibilities

- **ai/**  
  Contains AI-assisted documentation and prompts used for test case generation, test analysis, and automation planning.

- **pages/**  
  Implements the Page Object Model (POM) to separate UI locators and actions from test logic.

- **tests/e2e/**  
  End-to-end UI tests validating real user flows in SauceDemo.

- **tests/api/**  
  API tests grouped by target system to keep responsibilities clear and scalable.

- **.github/workflows/**  
  CI pipeline that runs Playwright tests on every push and pull request.

---

## ▶️ How to Run the Tests

### Run all tests
~~~bash
npx playwright test
~~~

### Run tests with Playwright UI
~~~bash
npx playwright test --ui
~~~

### Run UI tests only
~~~bash
npx playwright test tests/e2e
~~~

### Run API tests only
~~~bash
npx playwright test tests/api
~~~

### Run tests in headed mode
~~~bash
npx playwright test --headed
~~~

---

## 🏷 Test Tagging

Tests are tagged for selective execution.

### Run smoke tests
~~~bash
npx playwright test --grep "@smoke"
~~~

### Run regression tests
~~~bash
npx playwright test --grep "@regression"
~~~

---

## 📊 Test Reports

After execution, an HTML report is generated:

~~~bash
npx playwright show-report
~~~

In CI, the report is uploaded as a **GitHub Actions artifact**.

---

## ⚠️ Known Limitations (Important)

### ReqRes API behavior

ReqRes is a **public demo API**, not a production backend.

Because of this:

- Valid login requests may return **403 Forbidden** instead of **200**
- Invalid payloads may return **403** instead of **400**
- This is likely caused by **rate limiting** or **anti-bot protection**

### How this is handled

- Tests allow both **expected and blocked responses**
- Known limitations are documented using **Playwright annotations**
- Assertions are written **defensively** to avoid flaky tests

This reflects **real-world QA decision making** when dealing with external systems.

---

## 🧠 QA Decisions & Best Practices

- ✅ Test stability is prioritized over ideal expectations
- ✅ External system behavior is documented, not hidden
- ✅ API and UI tests are clearly separated
- ✅ Data-driven testing reduces duplication
- ✅ CI validates every push and pull request
- ✅ Failures are intentional and visible

---

## 🔄 CI / GitHub Actions

- CI runs automatically on:
  - `push`
  - `pull_request`
- Tests run in headless mode
- Pipeline fails on any test failure
- HTML report is stored as an artifact

This ensures **continuous quality feedback**.

---

## 🛠 Tech Stack

- Playwright
- JavaScript
- Node.js
- GitHub Actions
- Page Object Model (POM)

---

## 🤖 AI Usage in the Project

AI is used as a **supporting QA tool**, not as a replacement for human decision-making.

AI is applied for:
- Generating draft test scenarios
- Comparing AI-generated tests with manually written tests
- Assisting in test failure analysis by suggesting possible root causes
- Improving test coverage and QA reasoning

All AI prompts, outputs, and QA reviews are documented in the `ai/` folder.

---

## 👤 Author
QA Engineer with 6+ years of experience in manual testing and growing expertise in QA Automation.
Focused on reliable test automation, clean code practices, and modern QA workflows using AI as a productivity tool.