import { faker } from "@faker-js/faker";

function getRandomMale() {
  const random_boolean = Math.random() < 0.5;
  return random_boolean ? "male" : "female";
}

const gender = `#gender-${getRandomMale()}`;
const fullName = faker.name.fullName();
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const birthDay = faker.datatype.number({ min: 1, max: 30 });
const birthMonth = faker.datatype.number({ min: 1, max: 12 });
const birthYear = String(faker.datatype.number({ min: 1970, max: 2000 }));
const eMail = faker.internet.email();
const company = faker.company.name();
const password = faker.internet.password();

console.log(faker.datatype.number({ min: 1970, max: 2000 }));

export const getFakeData = () => {
  return {
    gender,
    fullName,
    firstName,
    lastName,
    birthDay,
    birthMonth,
    birthYear,
    eMail,
    company,
    password,
  };
};
