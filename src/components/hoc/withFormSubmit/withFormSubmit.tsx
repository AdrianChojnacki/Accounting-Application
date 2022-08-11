import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { SuccessPopupShowContext } from "../../../providers";
import { Spinner } from "../..";
import { IFormErrors, IFormInputs, IFormValidation } from ".";

const withFormSubmit =
  (Component: any) =>
  ({ ...passThroughProps }) => {
    const [errors, setErrors] = useState<IFormErrors>({
      noCreationDate: false,
      noPaymentDate: false,
      paymentDateBeforeCreationDate: false,
      noAmount: false,
    });
    const [submitReload, setSubmitReload] = useState<boolean>(false);
    const { control, handleSubmit } = useForm<IFormInputs>();
    const showSuccessPopup = useContext(SuccessPopupShowContext);

    const formValidation: IFormValidation = (created, until, amount) => {
      let noCreationDate = false;
      let noPaymentDate = false;
      let paymentDateBeforeCreationDate = false;
      let noAmount = false;

      if (!created) {
        noCreationDate = true;
      }
      if (!until) {
        noPaymentDate = true;
      }
      if (created && until && created > until) {
        paymentDateBeforeCreationDate = true;
      }
      if (amount == 0) {
        noAmount = true;
      }

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
      setSubmitReload(true);

      let { created, until, amount } = data;

      const isFormValid = formValidation(created, until, amount);

      if (!isFormValid) {
        setSubmitReload(false);
        return;
      }

      const createdRaw = created.getTime();
      const untilRaw = until.getTime();

      let creationDay = created.getDate();
      if (creationDay < 10) {
        creationDay = `0${creationDay}`;
      }
      let creationMonth = created.getMonth() + 1;
      if (creationMonth < 10) {
        creationMonth = `0${creationMonth}`;
      }
      const creationYear = created.getFullYear();
      created = `${creationDay}/${creationMonth}/${creationYear}`;

      let paymentDay = until.getDate();
      if (paymentDay < 10) {
        paymentDay = `0${paymentDay}`;
      }
      let paymentMonth = until.getMonth() + 1;
      if (paymentMonth < 10) {
        paymentMonth = `0${paymentMonth}`;
      }
      const paymentYear = until.getFullYear();
      until = `${paymentDay}/${paymentMonth}/${paymentYear}`;

      amount = +amount;

      const url = `${process.env.REACT_APP_API_URL}`;

      if (passThroughProps.invoiceData) {
        axios
          .patch(`${url}/${passThroughProps.invoiceData.id}`, {
            created,
            createdRaw,
            until,
            untilRaw,
            amount,
          })
          .then(() => {
            setSubmitReload(false);
            showSuccessPopup();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios
          .post(url, {
            created,
            createdRaw,
            until,
            untilRaw,
            amount,
          })
          .then(() => {
            setSubmitReload(false);
            showSuccessPopup();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    return (
      <>
        {submitReload && <Spinner />}
        <form action="/" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Component
              errors={errors}
              control={control}
              {...passThroughProps}
            />
          </LocalizationProvider>
        </form>
      </>
    );
  };

export { withFormSubmit };
