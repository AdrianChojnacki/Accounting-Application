export interface IInvoiceDetailsProps {
  invoiceData: {
    id: number;
    created: string;
    until: string;
    amount: number;
  } | null;
}
