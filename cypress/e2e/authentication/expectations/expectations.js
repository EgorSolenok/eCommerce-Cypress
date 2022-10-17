import { ACCOUNT_BUTTON_NAME } from "../constants/constants";

const SELECTORS = {
  ACCOUNT_BUTTON: ".ico-account",
};

export const authenticationExpectation = {
  shouldBeAccountButton: () => {
    cy.allure()
      .step("Verification of account button is visible and clickable")
      .parameter("Button value", ACCOUNT_BUTTON_NAME);

    cy.get(SELECTORS.ACCOUNT_BUTTON)
      .should("be.visible")
      .and("contain.text", ACCOUNT_BUTTON_NAME);
  },
};
