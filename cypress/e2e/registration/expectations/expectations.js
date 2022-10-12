import { VALID_MESSAGE } from "../constants/messages";
import { VALID_COLOR } from "../constants/attributes";

const SELECTORS = {
  RESULT_MESSAGE: ".result",
};

export const registrationExpectation = {
  shouldBeValidMessage: () => {
    cy.allure()
      .step("Verification of valid message is visible and has valid color")
      .parameter("Expected color", VALID_COLOR)
      .parameter("Message value", VALID_MESSAGE);

    cy.get(SELECTORS.RESULT_MESSAGE)
      .should("be.visible")
      .and("contain.text", VALID_MESSAGE)
      .and("have.css", "color", VALID_COLOR);
  },
};
