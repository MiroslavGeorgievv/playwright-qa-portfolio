# Playwright Automation Project with AI Assistance

## 📌 Project Overview
This is a personal QA Automation project built with Playwright and JavaScript.
The goal of the project is to demonstrate real-world end-to-end (E2E) test automation combined with AI-assisted workflows for test generation and failure analysis.

The project follows industry best practices such as Page Object Model (POM), clean test structure, and clear QA documentation.

---

## 🛠 Tech Stack
- Playwright
- JavaScript
- Node.js
- AI-assisted test design and analysis
- Markdown documentation

---

## 📂 Project Structure

playwright-project/
├── tests/
│   ├── add.to.cart.spec.js
│   └── login.spec.js
├── pages/
│   ├── InventoryPage.js
│   └── LoginPage.js
├── ai/
│   ├── generate-test-cases.md
│   ├── generate-playwright-tests.md
│   └── failure-analysis.md
├── playwright.config.js
└── README.md

---

## ▶️ How to Run the Tests

### Install dependencies
~~~bash
npm install
~~~

### Run all tests
~~~bash
npx playwright test
~~~

### Run tests with Playwright UI
~~~bash
npx playwright test --ui
~~~

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
