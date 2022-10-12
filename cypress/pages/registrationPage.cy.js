const SELECTORS = {
  MALE_CHECKBOX: `#gender-male`,
  FIRST_NAME_FORM: "#FirstName",
  LAST_NAME_FORM: "#LastName",
  DAY_BD: '[name="DateOfBirthDay"]',
  MONTH_BD: '[name="DateOfBirthMonth"]',
  YEAR_BD: '[name="DateOfBirthYear"]',
  EMAIL_FORM: "#Email",
  COMPANY_FORM: "#Company",
  PASSWORD_FORM: "#Password",
  CONFIRM_PASSWORD: "#ConfirmPassword",
  REGISTRATION_BUTTON: "#register-button",
  RESULT_MESSAGE: ".result",
};

export const registrationPage = {
  selectMale: () => {
    cy.allure().step("Click male checkbox", false);
    cy.get(SELECTORS.MALE_CHECKBOX).click();
    return registrationPage;
  },

  enterFirstName: (fieldsData) => {
    cy.allure()
      .step("Input first name", false)
      .parameter("First name", fieldsData.firstName);
    cy.get(SELECTORS.FIRST_NAME_FORM).type(fieldsData.firstName);
    return registrationPage;
  },

  enterLastName: (fieldsData) => {
    cy.allure()
      .step("Input last name", false)
      .parameter("Last name", fieldsData.lastName);
    cy.get(SELECTORS.LAST_NAME_FORM).type(fieldsData.lastName);
    return registrationPage;
  },

  enterBirthDay: (fieldsData) => {
    cy.allure()
      .step("Select b-day", false)
      .parameter("B-day", fieldsData.birthDay);
    cy.get(SELECTORS.DAY_BD).select(fieldsData.birthDay);
    return registrationPage;
  },

  enterBirthMonth: (fieldsData) => {
    cy.allure()
      .step("Select b-month", false)
      .parameter("B-month", fieldsData.birthMonth);
    cy.get(SELECTORS.MONTH_BD).select(fieldsData.birthMonth);
    return registrationPage;
  },

  enterBirthYear: (fieldsData) => {
    cy.allure()
      .step("Select year of birth", false)
      .parameter("Birth year", fieldsData.birthYear);
    cy.get(SELECTORS.YEAR_BD).select(fieldsData.birthYear);
    return registrationPage;
  },

  enterEMail: (fieldsData) => {
    cy.allure().step("Input email", false).parameter("Email", fieldsData.eMail);
    cy.get(SELECTORS.EMAIL_FORM).type(fieldsData.eMail);
    return registrationPage;
  },

  enterCompany: (fieldsData) => {
    cy.allure()
      .step("Input company name", false)
      .parameter("Company name", fieldsData.company);
    cy.get(SELECTORS.COMPANY_FORM).type(fieldsData.company);
    return registrationPage;
  },

  enterPassword: (fieldsData) => {
    cy.allure()
      .step("Input  password", false)
      .parameter("Password", fieldsData.password);
    cy.get(SELECTORS.PASSWORD_FORM).type(fieldsData.password);
    return registrationPage;
  },

  enterConfirmPassword: (fieldsData) => {
    cy.allure()
      .step("Input  confirmation of password", false)
      .parameter("Password", fieldsData.password);
    cy.get(SELECTORS.CONFIRM_PASSWORD).type(fieldsData.password);
    return registrationPage;
  },

  confirmRegistration: () => {
    cy.allure().step("Proceed registration", false);
    cy.get(SELECTORS.REGISTRATION_BUTTON).click();
    return registrationPage;
  },

  loginUser: (fieldsData) => {
    registrationPage
      .selectMale()
      .enterFirstName(fieldsData)
      .enterLastName(fieldsData)
      .enterBirthDay(fieldsData)
      .enterBirthMonth(fieldsData)
      .enterBirthYear(fieldsData)
      .enterEMail(fieldsData)
      .enterCompany(fieldsData)
      .enterPassword(fieldsData)
      .enterConfirmPassword(fieldsData)
      .confirmRegistration(fieldsData);
  },
};
