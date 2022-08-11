import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { IInputFieldProps } from ".";
import InputFieldCSS from "./InputField.module.css";

const InputField = ({
  name,
  control,
  label,
  defaultValue,
}: IInputFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type="number"
          variant="outlined"
          InputProps={{ inputProps: { min: 0, step: 0.01 } }}
          className={InputFieldCSS.input}
        />
      )}
    />
  );
};

export { InputField };
