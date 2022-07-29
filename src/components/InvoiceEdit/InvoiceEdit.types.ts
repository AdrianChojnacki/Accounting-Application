export interface IInvoiceEditProps {
  id: number;
  created: string;
  createdRaw: number;
  until: string;
  untilRaw: number;
  amount: number;
}

export interface IFormErrors2 {
  noCreationDate: boolean;
  noPaymentDate: boolean;
  paymentDateBeforeCreationDate: boolean;
  noAmount: boolean;
}

export interface IFormInputs2 {
  created: Date | null;
  until: Date | null;
  amount: string | null;
}

export interface IFormValidation2 {
  (created: object, until: object, amount: string): boolean;
}
