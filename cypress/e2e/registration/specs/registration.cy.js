import { mainPage } from "../../../pages/mainPage.cy.js";
import { getFakeData } from "../testData/fakeUserData";
import { registrationExpectation } from "../expectations/expectations";
import { registrationPage } from "../../../pages/registrationPage.cy";

const validFieldsData = getFakeData();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  afterEach(() => {
    cy.writeFile(
      "cypress/e2e/registration/testData/userRegistry/lastUser.json",
      JSON.stringify(validFieldsData)
    );
  });

  it("New valid user", () => {
    cy.allure()
      .feature("Registration new valid random user")
      .tag("Registration");

    mainPage.goToRegistration();
    registrationPage.signUpUser(validFieldsData);
    registrationExpectation.shouldBeValidMessage();
  });
});
