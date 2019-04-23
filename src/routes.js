import React from "react";
import { Route } from "mobx-router";

import { Login, Profile } from "./components";

export const routes = {
  login: new Route({
    path: "/",
    component: <Login />
  }),
  profile: new Route({
    path: "/profile",
    component: <Profile />
  })
};
