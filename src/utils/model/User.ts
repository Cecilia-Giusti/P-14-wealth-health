import { userDataInt } from "../../types/models";

export class User {
  _firstName: string;
  _lastName: string;
  _birthday: string | Date;
  _startDay: string | Date;
  _departement: string;
  _street: string;
  _city: string;
  _state: string;
  _zipCode: string;
  _id: number;

  constructor(data: userDataInt) {
    this._firstName = data.firstName;
    this._lastName = data.lastName;
    this._birthday = data.birthday;
    this._startDay = data.startDay;
    this._departement = data.departement;
    this._street = data.street;
    this._city = data.city;
    this._state = data.state;
    this._zipCode = data.zipCode;
    this._id = data.id;
  }

  updateUser() {
    const newUser = {
      firstName: this._firstName,
      lastName: this._lastName,
      birthday: this._birthday,
      startDay: this._startDay,
      departement: this._departement,
      street: this._street,
      city: this._city,
      state: this._state,
      zipCode: this._zipCode,
      id: this._id,
    };

    return newUser;
  }
}
