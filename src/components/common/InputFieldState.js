import React from "react";
import { observer } from "mobx-react";
import { Input } from "./Input";

export const InputFieldState = observer(
  ({ fieldState, helperText, ...props }) => (
    <Input
      helperText={fieldState.error || helperText}
      error={fieldState.hasError}
      value={fieldState.value}
      onChange={(e: any) => fieldState.onChange(e.target.value)}
      {...props}
    />
  )
);
