import React from "react";
import { observer, inject } from "mobx-react";
import classNames from "classnames";
import { Layout } from "./common";

class Profile_ extends React.Component {
  render() {
    const { authStore } = this.props.store;
    if (!authStore.isLoggedIn) {
      return "Protected";
    }
    const { currentUser } = authStore;
    return (
      <Layout>
        <div className={classNames("pt-5", "px-10", "max-w-sm", "mx-auto")}>
          Are you logged in? {authStore.isLoggedIn} <br />
          Current user email {currentUser.email}
        </div>
      </Layout>
    );
  }
}

export const Profile = inject("store")(observer(Profile_));
