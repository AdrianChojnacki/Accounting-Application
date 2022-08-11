export interface IInvoiceEditProps {
  errors: {
    noCreationDate: boolean;
    noPaymentDate: boolean;
    paymentDateBeforeCreationDate: boolean;
    noAmount: boolean;
  };
  control: any;
  invoiceData: {
    id: number;
    created: string;
    createdRaw: number;
    until: string;
    untilRaw: number;
    amount: number;
  };
}
