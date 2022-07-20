export interface IFormErrors {
  noCreationDate: boolean;
  noPaymentDate: boolean;
  paymentDateBeforeCreationDate: boolean;
  noAmount: boolean;
}

export interface IFormInputs {
  created: Date | null;
  until: Date | null;
  amount: string | null;
}

export interface IFormValidation {
  (created: object, until: object, amount: string): boolean;
}
