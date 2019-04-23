import React from "react";
import classNames from "classnames";
import { TextField } from "@material-ui/core";
import { observer } from "mobx-react";

export const Input = observer(({ containerProps, ...props }) => (
  <div className={classNames("mb-8")} {...containerProps}>
    <TextField fullWidth {...props} />
  </div>
));
