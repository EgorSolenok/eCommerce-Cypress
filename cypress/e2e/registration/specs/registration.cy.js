import { mainPage } from "../../../pages/mainPage.cy.js";
import { registrationPage } from "../../../pages/registrationPage.cy.js";
import { getFakeData } from "../testData/fakeUserData";
import { registrationExpectation } from "../expectations/expectations";

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
    mainPage.goToRegistration();

    registrationPage
      .selectMale()
      .enterFirstName(validFieldsData)
      .enterLastName(validFieldsData)
      .enterBirthDay(validFieldsData)
      .enterBirthMonth(validFieldsData)
      .enterBirthYear(validFieldsData)
      .enterCompany(validFieldsData)
      .enterEMail(validFieldsData)
      .enterPassword(validFieldsData)
      .enterConfirmPassword(validFieldsData)
      .confirmRegistration();

    registrationExpectation.shouldBeValidMessage();
  });
});
