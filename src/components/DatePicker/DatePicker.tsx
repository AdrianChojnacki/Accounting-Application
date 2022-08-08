import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { IDatePickerProps } from ".";
import DatePickerCSS from "./DatePicker.module.css";

const DatePicker = ({
  name,
  control,
  label,
  defaultDate,
  disabledPast,
}: IDatePickerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultDate}
      render={({ field }) => {
        if (disabledPast) {
          return (
            <DesktopDatePicker
              {...field}
              label={label}
              inputFormat="dd/MM/yyyy"
              disablePast
              renderInput={(params) => (
                <TextField {...params} className={DatePickerCSS.input} />
              )}
            />
          );
        } else {
          return (
            <DesktopDatePicker
              {...field}
              label={label}
              inputFormat="dd/MM/yyyy"
              renderInput={(params) => (
                <TextField {...params} className={DatePickerCSS.input} />
              )}
            />
          );
        }
      }}
    />
  );
};

export { DatePicker };
