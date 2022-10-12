const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.nopcommerce.com",
    watchForFileChanges: false,
    viewportHeight: 768,
    viewportWidth: 1024,
    responseTimeout: 50000,
    setupNodeEvents(on, config) {
      require("cypress-failed-log/on")(on);
      require("cypress-log-to-output").install(on);
      allureWriter(on, config);
      return config;
    },
  },
  env: {},
});
