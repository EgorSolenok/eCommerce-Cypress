const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.nopcommerce.com",
    watchForFileChanges: false,
    viewportHeight: 768,
    viewportWidth: 1024,
    responseTimeout: 50000,
  },
});
