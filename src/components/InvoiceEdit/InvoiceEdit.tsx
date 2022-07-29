import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  DatePicker,
  ErrorMessage,
  InputField,
  SubmitButton,
  SuccessMessage,
} from "..";
import {
  IInvoiceEditProps,
  IFormErrors2,
  IFormInputs2,
  IFormValidation2,
} from "./InvoiceEdit.types";

const InvoiceEdit = ({ invoiceData }: { invoiceData: IInvoiceEditProps }) => {
  const [errors, setErrors] = useState<IFormErrors2>({
    noCreationDate: false,
    noPaymentDate: false,
    paymentDateBeforeCreationDate: false,
    noAmount: false,
  });
  const [success, setSuccess] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<IFormInputs2>();

  const formValidation: IFormValidation2 = (created, until, amount) => {
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell colSpan={2}>
                  <Box fontWeight="bold" display="inline">
                    ID:
                  </Box>
                  {` ${invoiceData.id}`}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <DatePicker
                    name="created"
                    control={control}
                    label="Creation date"
                    defaultDate={new Date(invoiceData.createdRaw)}
                  />
                  {errors.noCreationDate && <ErrorMessage text="Pick a date" />}
                </TableCell>
                <TableCell>
                  <DatePicker
                    name="until"
                    control={control}
                    label="Payment date"
                    defaultDate={new Date(invoiceData.untilRaw)}
                  />
                  {errors.noPaymentDate && <ErrorMessage text="Pick a date" />}
                  {errors.paymentDateBeforeCreationDate && (
                    <ErrorMessage text="Payment date cannot be before creation date" />
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2} align="right">
                  <InputField
                    name="amount"
                    control={control}
                    label="Amount"
                    defaultValue={invoiceData.amount}
                  />
                  {errors.noAmount && (
                    <ErrorMessage text="Amount cannot be 0" />
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container justifyContent="flex-end">
          <SubmitButton text="Save" />
        </Grid>
        {success && <SuccessMessage text="Invoice created" />}
      </LocalizationProvider>
    </form>
  );
};

export { InvoiceEdit };
