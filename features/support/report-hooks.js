const reporter = require('cucumber-html-reporter');
const path     = require('path');
const fs       = require('fs');

const options = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, '../../reports/cucumber-report.json'),
  output:   path.join(__dirname, '../../reports/cucumber-report.html'),
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "Test Environment": "SauceDemo",
    "Browser": "Chromium",
    "Platform": "Any"
  }
};

// Генерируем отчет только после завершения всех тестов
const { AfterAll } = require('@cucumber/cucumber');

AfterAll(function () {
  try {
    const jsonFile = path.join(__dirname, '../../reports/cucumber-report.json');
    if (fs.existsSync(jsonFile)) {
      reporter.generate(options);
      console.log('✔ HTML report generated at reports/cucumber-report.html');
    } else {
      console.log('⚠ No JSON report file found, skipping HTML generation');
    }
  } catch (error) {
    console.log('⚠ Could not generate HTML report:', error.message);
  }
});