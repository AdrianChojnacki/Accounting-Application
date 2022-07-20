import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { Box, Button, Grid, TextField } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ErrorMessage, SuccessMessage } from "..";
import CreateFormCSS from "./CreateForm.module.css";

interface IFormErrors {
  noCreationDate: boolean;
  noPaymentDate: boolean;
  paymentDateBeforeCreationDate: boolean;
  noAmount: boolean;
}

interface IFormInputs {
  created: Date | null;
  until: Date | null;
  amount: string | null;
}

interface IFormValidation {
  (created: object, until: object, amount: string): boolean;
}

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
              <Controller
                name="created"
                control={control}
                defaultValue={new Date()}
                render={({ field }) => (
                  <DesktopDatePicker
                    {...field}
                    label="Creation date"
                    inputFormat="dd/MM/yyyy"
                    disablePast
                    renderInput={(params) => (
                      <TextField {...params} className={CreateFormCSS.input} />
                    )}
                  />
                )}
              />
              {errors.noCreationDate && <ErrorMessage text="Pick a date" />}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Controller
                name="until"
                control={control}
                defaultValue={new Date()}
                render={({ field }) => (
                  <DesktopDatePicker
                    {...field}
                    label="Payment date"
                    inputFormat="dd/MM/yyyy"
                    disablePast
                    renderInput={(params) => (
                      <TextField {...params} className={CreateFormCSS.input} />
                    )}
                  />
                )}
              />
              {errors.noPaymentDate && <ErrorMessage text="Pick a date" />}
              {errors.paymentDateBeforeCreationDate && (
                <ErrorMessage text="Payment date cannot be before creation date" />
              )}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Controller
                name="amount"
                control={control}
                defaultValue="0"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Amount"
                    type="number"
                    variant="outlined"
                    InputProps={{ inputProps: { min: 0, step: 0.01 } }}
                    className={CreateFormCSS.input}
                  />
                )}
              />
              {errors.noAmount && <ErrorMessage text="Amount cannot be 0" />}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                variant="contained"
                className={CreateFormCSS.btn}
              >
                Submit
              </Button>
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
