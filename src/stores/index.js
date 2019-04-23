import { RouterStore } from "mobx-router";

import { AuthStore } from "./AuthStore";

class Store {
  authStore;
  router;

  constructor() {
    this.authStore = new AuthStore(this);
    this.router = new RouterStore();
  }
}

export const store = new Store();
