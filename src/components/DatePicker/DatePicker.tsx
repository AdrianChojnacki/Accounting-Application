import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import DatePickerCSS from "./DatePicker.module.css";
import { IDatePickerProps } from "./DatePicker.types";

const DatePicker = ({ name, control, label }: IDatePickerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={new Date()}
      render={({ field }) => (
        <DesktopDatePicker
          {...field}
          label={label}
          inputFormat="dd/MM/yyyy"
          disablePast
          renderInput={(params) => (
            <TextField {...params} className={DatePickerCSS.input} />
          )}
        />
      )}
    />
  );
};

export { DatePicker };
