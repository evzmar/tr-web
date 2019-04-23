import { observable } from "mobx";

export class User {
  email;
  firstName;
  lastName;
  constructor(email, firstName, lastName) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
