import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  DatePicker,
  ErrorMessage,
  InputField,
  SubmitButton,
  SuccessMessage,
} from "..";
import { IFormErrors, IFormInputs, IFormValidation } from "./CreateForm.types";

const CreateForm = () => {
  const [errors, setErrors] = useState<IFormErrors>({
    noCreationDate: false,
    noPaymentDate: false,
    paymentDateBeforeCreationDate: false,
    noAmount: false,
  });
  const [success, setSuccess] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<IFormInputs>();

  const formValidation: IFormValidation = (created, until, amount) => {
    let noCreationDate = false;
    let noPaymentDate = false;
    let paymentDateBeforeCreationDate = false;
    let noAmount = false;

    if (!created) noCreationDate = true;
    if (!until) noPaymentDate = true;
    if (created && until && created > until)
      paymentDateBeforeCreationDate = true;
    if (amount === "0") noAmount = true;

    setErrors({
      noCreationDate,
      noPaymentDate,
      paymentDateBeforeCreationDate,
      noAmount,
    });

    if (
      !noCreationDate &&
      !noPaymentDate &&
      !paymentDateBeforeCreationDate &&
      !noAmount
    ) {
      return true;
    }

    return false;
  };

  const onSubmit = (data: any) => {
    let { created, until, amount } = data;

    const isFormValid = formValidation(created, until, amount);

    if (!isFormValid) return;

    let creationDay = created.getDate();
    if (creationDay < 10) creationDay = `0${creationDay}`;
    let creationMonth = created.getMonth() + 1;
    if (creationMonth < 10) creationMonth = `0${creationMonth}`;
    const creationYear = created.getFullYear();

    let paymentDay = until.getDate();
    if (paymentDay < 10) paymentDay = `0${paymentDay}`;
    let paymentMonth = until.getMonth() + 1;
    if (paymentMonth < 10) paymentMonth = `0${paymentMonth}`;
    const paymentYear = until.getFullYear();

    created = `${creationDay}/${creationMonth}/${creationYear}`;
    until = `${paymentDay}/${paymentMonth}/${paymentYear}`;
    amount = +amount;

    axios
      .post("http://localhost:3001/posts", {
        created,
        until,
        amount,
      })
      .catch((err) => {
        console.log(err);
      });

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form action="/" method="POST" onSubmit={handleSubmit(onSubmit)}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} rowSpacing={4}>
            <Grid item xs={12} sm={4}>
              <DatePicker
                name="created"
                control={control}
                label="Creation date"
                defaultDate={new Date()}
                disabledPast
              />
              {errors.noCreationDate && <ErrorMessage text="Pick a date" />}
            </Grid>
            <Grid item xs={12} sm={4}>
              <DatePicker
                name="until"
                control={control}
                label="Payment date"
                defaultDate={new Date()}
                disabledPast
              />
              {errors.noPaymentDate && <ErrorMessage text="Pick a date" />}
              {errors.paymentDateBeforeCreationDate && (
                <ErrorMessage text="Payment date cannot be before creation date" />
              )}
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField
                name="amount"
                control={control}
                label="Amount"
                defaultValue={0}
              />
              {errors.noAmount && <ErrorMessage text="Amount cannot be 0" />}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Grid container justifyContent="flex-end">
                <SubmitButton text="Submit" />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              {success && <SuccessMessage text="Invoice created" />}
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </form>
  );
};

export { CreateForm };
