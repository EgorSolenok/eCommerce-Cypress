const SELECTORS = {
  COUNTRY_LIST: "#BillingNewAddress_CountryId",
  CITY_FORM: "#BillingNewAddress_City",
  ZIP_CODE_FORM: "#BillingNewAddress_ZipPostalCode",
  NUMBER_FORM: "#BillingNewAddress_PhoneNumber",
  ADDRESS_FORM: "#BillingNewAddress_Address1",
  CONFIRM_ADDRESS: "#billing-buttons-container > .new-address-next-step-button",
  NEXT_DAY_SHIPPING_OPTION: "#shippingoption_1",
  CONFIRM_SHIPPING_METHOD: "#shipping-method-buttons-container > .button-1",
  CONFIRM_PAYMENT_METHOD: "#payment-method-buttons-container > .button-1",
  CONFIRM_PAYMENT_INFO: "#payment-info-buttons-container > .button-1",
  CONFIRM_ORDER: "#confirm-order-buttons-container > .button-1",
  ORDER_NUMBER: ".order-number > strong",
};

export const checkoutPage = {
  selectCountry: (addresses) => {
    cy.allure()
      .step("Select country of shipping", false)
      .parameter("Country of shipping", addresses.SHIPPING_COUNTRY);
    cy.get(SELECTORS.COUNTRY_LIST).select(addresses.SHIPPING_COUNTRY);

    return checkoutPage;
  },

  enterCity: (addresses) => {
    cy.allure()
      .step("Enter city of shipping", false)
      .parameter("City of shipping", addresses.SHIPPING_CITY);
    cy.get(SELECTORS.CITY_FORM).type(addresses.SHIPPING_CITY);

    return checkoutPage;
  },

  enterAddress: (addresses) => {
    cy.allure()
      .step("Enter address of shipping", false)
      .parameter("Address of shipping", addresses.SHIPPING_ADDRESS);
    cy.get(SELECTORS.ADDRESS_FORM).type(addresses.SHIPPING_ADDRESS);

    return checkoutPage;
  },

  enterZipCode: (addresses) => {
    cy.allure()
      .step("Enter zip code of shipping", false)
      .parameter("Zip code of shipping", addresses.SHIPPING_CODE);
    cy.get(SELECTORS.ZIP_CODE_FORM).type(addresses.SHIPPING_CODE);

    return checkoutPage;
  },

  enterPhoneNumber: (addresses) => {
    cy.allure()
      .step("Enter addressee phone number", false)
      .parameter("Addressee phone number", addresses.PHONE_NUMBER);
    cy.get(SELECTORS.NUMBER_FORM).type(addresses.PHONE_NUMBER);

    return checkoutPage;
  },

  goToShippingMethod: () => {
    cy.allure().step(
      "Proceed order after specifying the address of shipping",
      false
    );
    cy.get(SELECTORS.CONFIRM_ADDRESS).click();

    return checkoutPage;
  },
  selectNextDayShipping: () => {
    cy.allure().step("Select next day shipping option", false);
    cy.get(SELECTORS.NEXT_DAY_SHIPPING_OPTION).click();

    return checkoutPage;
  },
  goToPaymentMethod: () => {
    cy.allure().step("Proceed order after shipping option", false);
    cy.get(SELECTORS.CONFIRM_SHIPPING_METHOD).click();

    return checkoutPage;
  },

  goToPaymentInfo: () => {
    cy.allure().step("Proceed order after payment option", false);
    cy.get(SELECTORS.CONFIRM_PAYMENT_METHOD).click();

    return checkoutPage;
  },

  goToOrderConfirmation: () => {
    cy.allure().step("Proceed order after payment info", false);
    cy.get(SELECTORS.CONFIRM_PAYMENT_INFO).click();

    return checkoutPage;
  },

  confirmOrder: () => {
    cy.allure().step("Confirm order", false);
    cy.get(SELECTORS.CONFIRM_ORDER).click();

    return checkoutPage;
  },

  placeProductOrder: (addresses) => {
    cy.allure().step(
      "Execute full operations on  checkout page for ordering the product",
      false
    );

    checkoutPage
      .selectCountry(addresses)
      .enterCity(addresses)
      .enterAddress(addresses)
      .enterZipCode(addresses)
      .enterPhoneNumber(addresses)
      .goToShippingMethod()
      .selectNextDayShipping()
      .goToPaymentMethod()
      .goToPaymentInfo()
      .goToOrderConfirmation();
  },

  writeOrderNumber: () => {
    cy.allure().step("Write order number to file", false);
    cy.get(SELECTORS.ORDER_NUMBER)
      .invoke("text")
      .then((text) => {
        cy.writeFile("cypress/e2e/productOrder/testData/orderNumber.json", {
          orderNumber: JSON.stringify(text.slice(14)),
        });
      });
  },
};
