import { ACCOUNT_BUTTON_NAME } from "../constants/buttonNames";

const SELECTORS = {
  ACCOUNT_BUTTON: ".ico-account",
};

export const authenticationExpectation = {
  shouldBeAccountButton: () => {
    cy.get(SELECTORS.ACCOUNT_BUTTON)
      .should("be.visible")
      .and("contain.text", ACCOUNT_BUTTON_NAME);
  },
};
