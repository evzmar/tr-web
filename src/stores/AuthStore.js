import { FormState, FieldState } from "formstate";
import { observable, computed, decorate } from "mobx";
import { User } from "../models";
import { routes } from "../routes";

const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const emailValidator = val => val && !emailRegex.test(val) && "invalid email";
const requiredValidator = val => !val && "value required";

export class AuthStore {
  currentUser;

  email = new FieldState("").validators(requiredValidator, emailValidator);
  password = new FieldState("").validators(requiredValidator);

  error = "";
  store;

  constructor(store) {
    this.store = store;
  }

  loginForm = new FormState({
    email: this.email,
    password: this.password
  });

  get isLoggedIn() {
    return !!this.currentUser;
  }
  async login() {
    this.error = "";
    const res = await this.loginForm.validate();
    // If any errors you would know
    if (res.hasError) {
      this.error = this.form.error;
      return;
    }

    if (this.email.$ !== "hello@i-mastymas.com") {
      this.error = "user does not exist";
      return;
    }
    // Yay .. all good. Do what you want with it
    this.currentUser = new User(this.email.$, this.firstName, this.lastName);
    this.store.router.goTo(routes.profile);
    console.log("success");
  }
}

decorate(AuthStore, {
  email: observable,
  error: observable,
  isLoggedIn: computed
});
