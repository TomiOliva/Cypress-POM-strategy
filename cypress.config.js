const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.js', // Correctly specify the pattern for test files
    defaultCommandTimeout: 6000,
    env: {
      url: "https://rahulshettyacademy.com",
    },
    reporter: 'cypress-mochawesome-reporter',
    retries: {
      runMode: 1,
    },
    projectId: "nodpcq",
  },
});
