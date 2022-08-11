import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  let invoice;

  if (invoiceData) {
    invoice = (
      <>
        <Grid container spacing={2} rowSpacing={4}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={2}>
                      <Box fontWeight="bold" display="inline">
                        {t("id")}:
                      </Box>
                      {` ${invoiceData.id}`}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <DatePicker
                        name="created"
                        control={control}
                        label={t("dateAdded")}
                        defaultDate={new Date(invoiceData.createdRaw)}
                      />
                      {errors.noCreationDate && (
                        <ErrorMessage text={t("pickADate")} />
                      )}
                    </TableCell>
                    <TableCell>
                      <DatePicker
                        name="until"
                        control={control}
                        label={t("paymentDate")}
                        defaultDate={new Date(invoiceData.untilRaw)}
                      />
                      {errors.noPaymentDate && (
                        <ErrorMessage text={t("pickADate")} />
                      )}
                      {errors.paymentDateBeforeCreationDate && (
                        <ErrorMessage
                          text={t("paymentDateCannotBeBeforeAddedDate")}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2} align="right">
                      <InputField
                        name="amount"
                        control={control}
                        label={t("amount")}
                        defaultValue={invoiceData.amount}
                      />
                      {errors.noAmount && (
                        <ErrorMessage text={t("amountCannotBe0")} />
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="flex-end">
              <SubmitButton text={t("save")} />
            </Grid>
          </Grid>
        </Grid>
        <SuccessPopup text={t("changesSaved")} />
      </>
    );
  } else {
    invoice = <SkeletonEdit />;
  }

  return <>{invoice}</>;
};

export { InvoiceEdit };
