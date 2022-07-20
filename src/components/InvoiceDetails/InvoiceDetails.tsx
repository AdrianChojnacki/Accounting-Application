import { IInvoiceDataProps } from "./InvoiceDetails.types";

const InvoiceDetails = ({
  invoiceData,
}: {
  invoiceData: IInvoiceDataProps;
}) => {
  return (
    <div>
      <div>{invoiceData.id}</div>
      <div>{invoiceData.created}</div>
      <div>{invoiceData.until}</div>
      <div>{invoiceData.amount}</div>
    </div>
  );
};

export { InvoiceDetails };
