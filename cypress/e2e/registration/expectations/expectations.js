import { VALID_MESSAGE } from "../constants/messages";
import { VALID_COLOR } from "../constants/attributes";

const SELECTORS = {
  RESULT_MESSAGE: ".result",
};

export const registrationExpectation = {
  shouldBeValidMessage: () => {
    cy.get(SELECTORS.RESULT_MESSAGE)
      .should("be.visible")
      .and("contain.text", VALID_MESSAGE)
      .and("have.css", "color", VALID_COLOR);
  },
};
