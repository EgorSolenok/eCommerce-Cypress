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
    cy.get(SELECTORS.MALE_CHECKBOX).click();
    return registrationPage;
  },

  enterFirstName: (fieldsData) => {
    cy.get(SELECTORS.FIRST_NAME_FORM).type(fieldsData.firstName);
    return registrationPage;
  },

  enterLastName: (fieldsData) => {
    cy.get(SELECTORS.LAST_NAME_FORM).type(fieldsData.lastName);
    return registrationPage;
  },

  enterBirthDay: (fieldsData) => {
    cy.get(SELECTORS.DAY_BD).select(fieldsData.birthDay);
    return registrationPage;
  },

  enterBirthMonth: (fieldsData) => {
    cy.get(SELECTORS.MONTH_BD).select(fieldsData.birthMonth);
    return registrationPage;
  },

  enterBirthYear: (fieldsData) => {
    cy.get(SELECTORS.YEAR_BD).select(fieldsData.birthYear);
    return registrationPage;
  },

  enterEMail: (fieldsData) => {
    cy.get(SELECTORS.EMAIL_FORM).type(fieldsData.eMail);
    return registrationPage;
  },

  enterCompany: (fieldsData) => {
    cy.get(SELECTORS.COMPANY_FORM).type(fieldsData.company);
    return registrationPage;
  },

  enterPassword: (fieldsData) => {
    cy.get(SELECTORS.PASSWORD_FORM).type(fieldsData.password);
    return registrationPage;
  },

  enterConfirmPassword: (fieldsData) => {
    cy.get(SELECTORS.CONFIRM_PASSWORD).type(fieldsData.password);
    return registrationPage;
  },

  confirmRegistration: () => {
    cy.get(SELECTORS.REGISTRATION_BUTTON).click();
    return registrationPage;
  },
};
