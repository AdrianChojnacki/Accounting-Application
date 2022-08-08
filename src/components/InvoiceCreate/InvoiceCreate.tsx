import { useTranslation } from "react-i18next";
import { Box, Grid } from "@mui/material";
import {
  DatePicker,
  ErrorMessage,
  InputField,
  SubmitButton,
  SuccessPopup,
} from "..";
import { IInvoiceCreateProps } from ".";

const InvoiceCreate = ({ errors, control }: IInvoiceCreateProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} rowSpacing={4}>
        <Grid item xs={12} sm={4}>
          <DatePicker
            name="created"
            control={control}
            label={t("dateAdded")}
            defaultDate={new Date()}
            disabledPast
          />
          {errors.noCreationDate && <ErrorMessage text={t("pickADate")} />}
        </Grid>
        <Grid item xs={12} sm={4}>
          <DatePicker
            name="until"
            control={control}
            label={t("paymentDate")}
            defaultDate={new Date()}
            disabledPast
          />
          {errors.noPaymentDate && <ErrorMessage text={t("pickADate")} />}
          {errors.paymentDateBeforeCreationDate && (
            <ErrorMessage text={t("paymentDateCannotBeBeforeAddedDate")} />
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputField
            name="amount"
            control={control}
            label={t("amount")}
            defaultValue={0}
          />
          {errors.noAmount && <ErrorMessage text={t("amountCannotBe0")} />}
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="flex-end">
            <SubmitButton text={t("add")} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <SuccessPopup text={t("invoiceAdded")} />
        </Grid>
      </Grid>
    </Box>
  );
};

export { InvoiceCreate };
