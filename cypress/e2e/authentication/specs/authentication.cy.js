import { loginPage } from "../../../pages/loginPage";
import { mainPage } from "../../../pages/mainPage.cy";
import { authenticationExpectation } from "../expectations/expectations";

describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Last created user", () => {
    mainPage.goToLogin();
    loginPage.loginLastValidUser();
    authenticationExpectation.shouldBeAccountButton();
  });
});
