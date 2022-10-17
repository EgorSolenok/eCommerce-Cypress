import { mainPage } from "../../../pages/mainPage.cy";
import { registrationPage } from "../../../pages/registrationPage.cy";
import { productDetailPage } from "../../../pages/productDetailPage";
import { cartPage } from "../../../pages/cartPage";
import { getFakeData } from "../../registration/testData/fakeUserData";
import PRODUCT_NAME from "../constants/productNames.json";
import SHIPPING from "../constants/shippingInfo.json";
import EXPECTED_MESSAGES from "../constants/messages.json";
import { checkoutPage } from "../../../pages/checkoutPage";
import { productOrderExpectation } from "../expectations/expectations";

const userData = getFakeData();

describe("Order the specific product", () => {
  beforeEach(() => {
    cy.visit("/");

    mainPage.goToRegistration();
    registrationPage.signUpUser(userData);

    cy.writeFile(
      "cypress/e2e/registration/testData/userRegistry/lastUser.json",
      JSON.stringify(userData)
    );
  });

  it("Order through the search and shopping cart", () => {
    cy.allure()
      .feature("Order through the search and shopping cart")
      .tag("Order");

    mainPage.searchProduct(PRODUCT_NAME.HTC_ONE);
    mainPage.chooseProductFromSearchResults(PRODUCT_NAME.HTC_ONE);
    productDetailPage.addProductToCart();

    mainPage.goToCart();

    cartPage.acceptTerms();
    cartPage.proceedCheckout();

    checkoutPage.placeProductOrder(SHIPPING);

    productOrderExpectation.shouldBeCorrectUser(userData);
    productOrderExpectation.shouldBeCorrectAddress(SHIPPING);

    checkoutPage.confirmOrder();

    checkoutPage.writeOrderNumber();
    productOrderExpectation.shouldBeSuccessMessage(EXPECTED_MESSAGES.SUCCESS);
  });
});
