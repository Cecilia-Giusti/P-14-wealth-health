import { faker } from "@faker-js/faker/locale/en";
import { SexType } from "@faker-js/faker";
import { departements } from "../assets/data/departments";

export const USERS: UserMock[] = [];

class UserMock {
  sex!: SexType;
  firstName!: string;
  lastName!: string;
  birthday!: string;
  startDay!: string;
  departement!: string;
  street!: string;
  city!: string;
  state!: string;
  zipCode!: string;
}

export const createRandomUser = (): UserMock => {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const state = faker.address.state();
  const zipCode = faker.address.zipCodeByState(state);

  const changeDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return {
    sex: faker.name.sexType(),
    firstName,
    lastName: faker.name.lastName(),
    birthday: changeDate(faker.date.birthdate({ min: 1900, max: 2000 })),
    startDay: changeDate(faker.date.recent()),
    departement: faker.helpers.arrayElement(departements),
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state,
    zipCode,
  };
};

export const usersMock = () => {
  Array.from({ length: 30 }).forEach(() => {
    USERS.push(createRandomUser());
  });

  return USERS;
};
