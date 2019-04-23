import React from "react";
import { observer, inject } from "mobx-react";
import classNames from "classnames";
import {
  Layout,
  FormNoSubmit,
  InputFieldState,
  ButtonCircleNext,
  TextError
} from "./common";

class Login_ extends React.Component {
  render() {
    const { authStore } = this.props.store;
    return (
      <Layout>
        <div className={classNames("pt-5", "px-10", "max-w-sm", "mx-auto")}>
          <FormNoSubmit onSubmit={authStore.login.bind(authStore)}>
            <TextError>{authStore.error}</TextError>
            <InputFieldState
              type="email"
              helperText="Email"
              fieldState={authStore.email}
            />
            <InputFieldState
              type="password"
              helperText="Password"
              fieldState={authStore.password}
            />
            <ButtonCircleNext />
          </FormNoSubmit>
        </div>
      </Layout>
    );
  }
}

export const Login = inject("store")(observer(Login_));
