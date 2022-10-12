import { loginPage } from "../../../pages/loginPage";
import { mainPage } from "../../../pages/mainPage.cy";
import { authenticationExpectation } from "../expectations/expectations";
import { getFakeData } from "../../registration/testData/fakeUserData";
import { registrationPage } from "../../../pages/registrationPage.cy";

const validFieldsData = getFakeData();

describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.allure()
      .step("Registration new user for future authentication", false)
      .parameter("Registration data", JSON.stringify(validFieldsData));

    mainPage.goToRegistration();
    registrationPage.loginUser(validFieldsData);
    mainPage.logOut();

    cy.writeFile(
      "cypress/e2e/registration/testData/userRegistry/lastUser.json",
      JSON.stringify(validFieldsData)
    );
  });

  it("Valid random user", () => {
    cy.allure()
      .feature("Authentication validation using new valid random user")
      .tag("Authentication");

    mainPage.goToLogin();
    loginPage.loginValidUser();
    authenticationExpectation.shouldBeAccountButton();
  });
});
