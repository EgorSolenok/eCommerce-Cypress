const SELECTORS = {
  TERMS_BUTTON: "#termsofservice",
  PROCEED_BUTTON: "#checkout",
};

export const cartPage = {
  acceptTerms: () => {
    cy.allure().step("Accept terms of service", false);
    cy.get(SELECTORS.TERMS_BUTTON).click();
  },

  proceedCheckout: () => {
    cy.allure().step("Proceed checkout", false);
    cy.get(SELECTORS.PROCEED_BUTTON).click();
  },
};
