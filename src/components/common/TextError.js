import React from "react";
import classNames from "classnames";
import { Typography } from "@material-ui/core";

export const TextError = ({ children, ...props }) => (
  <React.Fragment>
    {!!children && (
      <Typography color="error" className={classNames("pb-6")} {...props}>
        {children}
      </Typography>
    )}
  </React.Fragment>
);
