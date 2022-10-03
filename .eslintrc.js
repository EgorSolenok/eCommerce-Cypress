module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    mocha: true,
    "cypress/globals": true,
  },
  extends: ["eslint:recommended", "plugin:cypress/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
  plugins: ["cypress"],
};
