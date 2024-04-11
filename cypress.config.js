const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000, pageLoadTimeout:100000,
  e2e: {
    reporter:"mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": true,
      "html": true,
      "json":true,
      "reportDir": "cypress/report",
 },
 baseUrl : "https://automationexercise.com",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      pageLoadTimeout = 100000
    },
  },
});
