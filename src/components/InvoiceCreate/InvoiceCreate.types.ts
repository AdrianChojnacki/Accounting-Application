export interface IInvoiceCreateProps {
  errors: {
    noCreationDate: boolean;
    noPaymentDate: boolean;
    paymentDateBeforeCreationDate: boolean;
    noAmount: boolean;
  };
  success: boolean;
  control: any;
}
