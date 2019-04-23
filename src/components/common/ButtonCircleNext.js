import React from "react";
import classNames from "classnames";
import { observer } from "mobx-react";
import { Fab, CircularProgress } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";

export const ButtonCircleNext = observer(({ isLoading = false, ...props }) => (
  <div className={classNames("justify-center", "mb-8", "flex")}>
    <div className={classNames("relative")}>
      <Fab
        color="primary"
        className={classNames("shadow-none")}
        type="submit"
        disabled={isLoading}
        {...props}
      >
        <ArrowForward className={classNames("text-white")} />
      </Fab>
      {isLoading && (
        <CircularProgress size={64} className={classNames("fab-progress")} />
      )}
    </div>
  </div>
));
