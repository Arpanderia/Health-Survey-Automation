---
# 💻 Health Survey Form Submission | WEB 

[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/) 
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://js.org/index.html) 
[![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Mochawesome Reports](https://img.shields.io/badge/Mochawesome%20Reports-<COLOR>?style=for-the-badge&logo=mochawesome&logoColor=white)](https://www.npmjs.com/package/cypress-mochawesome-reporter)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions) 

## 📑 Table of Contents

- [Introduction](#introduction)
- [Application Name](#application-name)
- [Assessment Overview](#assessment-overview)
- [Assessment Instructions](#assessment-instruction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Test Results](#test-results)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Reporting](#reporting)

## 📖 Introduction
This repository contains a Test Automation Framework built using Cypress and Javascript for automated testing of web applications.

## Application Name
  **Health Survey Form Application**
  **URL:** https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform
  
## Assessment Overview
The goal of this assessment is to ensure that the Health Survey Form application is thoroughly tested using Cypress. The tests covered form submission, validation, and URL redirection after submission. Additionaly, we used the 'faker' library to generate random test data to ensure robust testing.

## Assessment Instructions

##### Steps to Complete the assessment.
1. **Navigate to the Form**:
   - Open the provided form URL: [Health Survey Form](https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform)
2. **Enter Your Name**:
   - In the form, enter your name in the "Your Name" field.
3. **Select Age**:
   - Select the "18 and above" radio button.
4. **Select Exercise Frequency**:
   - Select "Yes" from the "Do you exercise every week?" dropdown.
5. **Submit the Form**:
   - Submit the form.
6. **Verify Submission**:
   - Verify that the form submission is successful by checking for a confirmation message or a change in the URL.

## 🛠️ Prerequisites

- [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) (v20.13.1)
- [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) (v10.5.2)

## ▶️ Getting Started

1. Clone the repository:
   ```bash
   git clone C:\Users\905207\OneDrive - Cognizant\Documents\GitHub\Cypress_UI_Automation.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Cypress_UI_Automation
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
## 🚀 Running Tests

- Open Cypress Test Runner:

  ```bash
  npm run cy:open
  ```
- Run tests in different browsers:

  - [![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.google.com/chrome/)
[![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=firefox&logoColor=white)](https://www.mozilla.org/firefox/)
[![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=microsoft-edge&logoColor=white)](https://www.microsoft.com/edge/)
[![Electron](https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white)](https://www.electronjs.org/)
  ```bash
  npm run cy:tests:CHROME
  ```
  ```bash
  npm run cy:tests:FIREFOX
  ```
  ```bash
  npm run cy:tests:EDGE
  ```
  ```bash
  npm run cy:tests:ELECTRON
  ```

- Run tests in different modes (Headless):
  ```bash
  npm run cy:tests:ELECTRON:HEADLESS
  ```
## Test Results

Cypress generates various artifacts (screenshots and videos) during test runs, which can be useful for debugging and reviewing the test results. This section explains how to access, interpret and manage these test results.

##### Viewing Test Results 

###### Screenshots 
Cypress takes screenshots automatically when a test fails. These screenshots provide a visual representation of the application at the time of failure.
- **Location**: By default screenshots are saved in the `cypress/screenshots` directory.

###### Videos
Cypress can record a video of the entire test run.This can be particularly useful for debugging and for asynchronous review of test runs.
- **Location**: By default videos are saved in the `cypress/videos` directory.

###### Test Results Repository
Maintain a separate repository for the detailed test results, which includes screenshots, videos and test reports. This helps in tracking and reviewing test outcomes over time.
- **Test Results Repository:**
Test Results Repo: https://github.com/Arpanderia/Arpanderia-Health-Survey-Automation-TestResults

## 📁 Project Structure

The tests follow a modular and maintainable structure:

```
|-- cypress
|     |-- e2e
|          |-- FormSubmission
|               |-- form_submission_test.cy.js
|     |-- fixtures
|          |-- testdata.json
|     |-- support
|          |-- pages
|               |-- ConfirmationPage.js
|               |-- FormSubmissionPage.js
|          |-- commands.js
|          |-- e2e.js
|-- node_modeules
|-- cypress.config.js
|-- package-lock.json
|-- package.json
```

- `cypress/e2e`: Contains the actual test files. You can organize your tests into subdirectories as needed. 
- `cypress/fixtures`: Contains external fixtures (e.g., login credentials data) that can be used to mock data during tests.
- `cypress/support`: Contains custom commands and global configuration.
- `cypress/support/pages`: Contains the Page Object Model (POM) classes representing web pages and their elements.
- `cypress/reports`: Contains the report for tests.

## ⚙️ Configuration

- Modify `cypress.config.json` for Cypress configuration settings.
- Customize `commands.js` and other files in `cypress/support` for reusable commands.
- `package.json` contains metadata relevent to the project and manages dependencies, scripts, and other configurations:-
    -  Import cypress-grep plugin to enable test case filtering based on grep    pattern
    -  Import Cypress-xpath plugin for Cypress.io that enhances testing  capabilities by allowing the use of XPath selectors alongside CSS selectors for locating elements in web application during automated testing.
       

## 📊 Reporting

Mochawesome report (Screenshots and Videos are attached by default on test failure) is stored in the `cypress/reports` directory.
