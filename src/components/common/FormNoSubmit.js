import React from "react";
import { observer } from "mobx-react";

const sumbmitWrapper = action => e => {
  e.preventDefault();
  if (action) action(e);
};

export const FormNoSubmit = observer(
  ({ children, onSubmit = null, ...props }) => (
    <form
      onSubmit={sumbmitWrapper(onSubmit)}
      noValidate
      autoComplete="off"
      {...props}
    >
      {children}
    </form>
  )
);
