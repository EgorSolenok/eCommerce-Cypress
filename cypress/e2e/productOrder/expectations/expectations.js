const SELECTORS = {
  ADDRESSEE_NAME: ".shipping-info > .info-list > .name",
  ADDRESSEE_EMAIL: ".shipping-info > .info-list > .email",
  ADDRESSEE_COMPANY: ".shipping-info > .info-list > .company",
  ADDRESSEE_COUNTRY: ".shipping-info > .info-list > .country",
  ADDRESSEE_CITY: ".shipping-info > .info-list > .city-state-zip",
  ADDRESSEE_ADDRESS: ".shipping-info > .info-list > .address1",
  ADDRESSEE_PHONE: ".shipping-info > .info-list > .phone",
  SUCCESS_MESSAGE: ".section > .title > strong",
};

export const productOrderExpectation = {
  shouldBeCorrectUser: (userInfo) => {
    cy.allure()
      .step("Verification shipping user", false)
      .parameter("Expected first name", userInfo.firstName)
      .parameter("Expected last name", userInfo.lastName)
      .parameter("Expected user email", userInfo.eMail)
      .parameter("Expected user company", userInfo.company);

    cy.get(SELECTORS.ADDRESSEE_NAME)
      .should("be.visible")
      .and("contain.text", userInfo.firstName + " " + userInfo.lastName);

    cy.get(SELECTORS.ADDRESSEE_EMAIL)
      .should("be.visible")
      .and("contain.text", userInfo.eMail);

    cy.get(SELECTORS.ADDRESSEE_COMPANY)
      .should("be.visible")
      .and("contain.text", userInfo.company);
  },

  shouldBeCorrectAddress: (addresses) => {
    cy.allure()
      .step("Verification shipping user", false)
      .parameter("Expected country", addresses.SHIPPING_COUNTRY)
      .parameter("Expected city", addresses.SHIPPING_CITY)
      .parameter("Expected address", addresses.SHIPPING_ADDRESS)
      .parameter("Expected code", addresses.SHIPPING_CODE)
      .parameter("Expected phone", addresses.PHONE_NUMBER);

    cy.get(SELECTORS.ADDRESSEE_COUNTRY)
      .should("be.visible")
      .and("contain.text", addresses.SHIPPING_COUNTRY);

    cy.get(SELECTORS.ADDRESSEE_CITY)
      .should("be.visible")
      .and("contain.text", addresses.SHIPPING_CITY);

    cy.get(SELECTORS.ADDRESSEE_ADDRESS)
      .should("be.visible")
      .and("contain.text", addresses.SHIPPING_ADDRESS);

    cy.get(SELECTORS.ADDRESSEE_CITY)
      .should("be.visible")
      .and("contain.text", addresses.SHIPPING_CODE);

    cy.get(SELECTORS.ADDRESSEE_PHONE)
      .should("be.visible")
      .and("contain.text", addresses.PHONE_NUMBER);
  },

  shouldBeSuccessMessage: (expectedMessage) => {
    cy.allure()
      .step("Verification success order message", false)
      .parameter("Expected message", expectedMessage);

    cy.get(SELECTORS.SUCCESS_MESSAGE)
      .should("be.visible")
      .and("contain.text", expectedMessage);
  },
};
