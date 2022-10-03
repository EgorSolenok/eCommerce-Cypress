const SELECTORS = {
  EMAIL_FORM: "#Email",
  PASSWORD_FORM: "#Password",
  LOGIN_BUTTON: "form > .buttons > .button-1",
};

export const loginPage = {
  loginLastValidUser: () => {
    cy.readFile(
      "cypress/e2e/registration/testData/userRegistry/lastUser.json"
    ).then((lastUser) => {
      cy.get(SELECTORS.EMAIL_FORM).type(lastUser.eMail);
      cy.get(SELECTORS.PASSWORD_FORM).type(lastUser.password);
    });

    cy.get(SELECTORS.LOGIN_BUTTON).click();
  },
};
