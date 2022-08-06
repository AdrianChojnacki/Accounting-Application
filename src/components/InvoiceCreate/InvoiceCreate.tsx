import { Box, Grid } from "@mui/material";
import { DatePicker, ErrorMessage, InputField, SubmitButton, Popup } from "..";
import { IInvoiceCreateProps } from ".";

const InvoiceCreate = ({ errors, control }: IInvoiceCreateProps) => {
  return (
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
        <Grid item xs={12}>
          <Grid container justifyContent="flex-end">
            <SubmitButton text="Create" />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Popup text="Invoice created" />
        </Grid>
      </Grid>
    </Box>
  );
};

export { InvoiceCreate };
