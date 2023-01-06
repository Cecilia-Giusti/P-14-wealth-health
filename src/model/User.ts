import { userDataInt } from "../types/models";

export class User {
  _firstName: string;
  _lastName: string;
  _birthday: string | Date;
  _startDay: string | Date;
  _department: string;
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
    this._department = data.department;
    this._street = data.street;
    this._city = data.city;
    this._state = data.state;
    this._zipCode = data.zipCode;
    this._id = data.id;
  }

  updateDate = (dateString: string | Date) => {
    return new Date(dateString);
  };

  updateUser() {
    return {
      firstName: this._firstName,
      lastName: this._lastName,
      birthday: this.updateDate(this._birthday).toJSON(),
      startDay: this.updateDate(this._startDay).toJSON(),
      department: this._department,
      street: this._street,
      city: this._city,
      state: this._state,
      zipCode: this._zipCode,
    };
  }
}
