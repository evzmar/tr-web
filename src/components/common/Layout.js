import React from "react";
import { observer } from "mobx-react";
import classNames from "classnames";

export const Layout = observer(({ children, ...props }) => (
  <div className={classNames("flex", "min-h-screen", "flex-no-wrap")}>
    <div className={classNames("flex", "flex-col", "flex-1", "flex-no-wrap")}>
      <header className={classNames("lg:pt-9", "pt-6", "pb-9", "text-center")}>
        Here goes logo
      </header>
      <main
        className={classNames(
          "w-full",
          "flex-1",
          "mx-auto",
          "text-center max-w-md"
        )}
      >
        {children}
      </main>
    </div>
  </div>
));
