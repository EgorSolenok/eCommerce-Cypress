const SELECTORS = {
  REGISTRATION_BUTTON: ".ico-register",
  LOGIN_BUTTON: ".ico-login",
  LOGOUT_BUTTON: ".ico-logout",
  SEARCH_FORM: "#small-searchterms",
  CART_BUTTON: ".cart-label",
};

export const mainPage = {
  goToRegistration: () => {
    cy.allure().step("Go to registration page", false);
    cy.get(SELECTORS.REGISTRATION_BUTTON).click();
  },

  goToLogin: () => {
    cy.allure().step("Go to authentication page", false);
    cy.get(SELECTORS.LOGIN_BUTTON).click();
  },

  logOut: () => {
    cy.allure().step("Log out of the service", false);
    cy.get(SELECTORS.LOGOUT_BUTTON).click();
  },

  searchProduct: (productName) => {
    cy.allure()
      .step("Search given product in the search form", false)
      .parameter("Product name", productName);
    cy.get(SELECTORS.SEARCH_FORM).type(`${productName}{enter}`);
  },

  chooseProductFromSearchResults: (productName) => {
    cy.allure()
      .step("Go to specific product detail page", false)
      .parameter("Product name", productName);
    cy.xpath(`//a[contains(text(), '${productName}')]`).click();
  },

  goToCart: () => {
    cy.allure().step("Go to shopping cart", false);
    cy.get(SELECTORS.CART_BUTTON).click();
  },
};
