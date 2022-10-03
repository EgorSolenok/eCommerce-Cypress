const SELECTORS = {
  REGISTRATION_BUTTON: ".ico-register",
  LOGIN_BUTTON: ".ico-login",
};

export const mainPage = {
  goToRegistration: () => {
    cy.get(SELECTORS.REGISTRATION_BUTTON).click();
  },
  goToLogin: () => {
    cy.get(SELECTORS.LOGIN_BUTTON).click();
  },
};
