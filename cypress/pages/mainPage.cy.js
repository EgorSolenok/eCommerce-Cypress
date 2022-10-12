const SELECTORS = {
  REGISTRATION_BUTTON: ".ico-register",
  LOGIN_BUTTON: ".ico-login",
  LOGOUT_BUTTON: ".ico-logout",
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
};
