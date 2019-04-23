import React from "react";
import ReactDOM from "react-dom";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import { Provider } from "mobx-react";
import { MobxRouter, startRouter } from "mobx-router";

import * as serviceWorker from "./serviceWorker";
import { store } from "./stores";
import { routes } from "./routes";

import "./index.css";

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

startRouter(routes, store);

ReactDOM.render(
  <Provider store={store}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MobxRouter />
    </JssProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
