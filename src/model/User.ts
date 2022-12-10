import { userDataInt } from "../types/models";

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

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get birthday() {
    return this._birthday;
  }
  get startDay() {
    return this._startDay;
  }
  get departement() {
    return this._departement;
  }
  get street() {
    return this._street;
  }
  get city() {
    return this._city;
  }
  get state() {
    return this._state;
  }
  get zipCode() {
    return this._zipCode;
  }
  get id() {
    return this._id;
  }
}
