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
import {
  DatePicker,
  ErrorMessage,
  InputField,
  SubmitButton,
  SkeletonEdit,
  SuccessPopup,
} from "..";
import { IInvoiceEditProps } from ".";

const InvoiceEdit = ({ errors, control, invoiceData }: IInvoiceEditProps) => {
  let invoice;

  if (invoiceData) {
    invoice = (
      <Grid container spacing={2} rowSpacing={4}>
        <Grid item xs={12}>
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
                    {errors.noCreationDate && (
                      <ErrorMessage text="Pick a date" />
                    )}
                  </TableCell>
                  <TableCell>
                    <DatePicker
                      name="until"
                      control={control}
                      label="Payment date"
                      defaultDate={new Date(invoiceData.untilRaw)}
                    />
                    {errors.noPaymentDate && (
                      <ErrorMessage text="Pick a date" />
                    )}
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
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="flex-end">
            <SubmitButton text="Save" />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <SuccessPopup text="Invoice updated" />
        </Grid>
      </Grid>
    );
  } else {
    invoice = <SkeletonEdit />;
  }

  return <>{invoice}</>;
};

export { InvoiceEdit };
