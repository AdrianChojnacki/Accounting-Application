import React from "react";

interface IInvoiceDataProps {
  id: number;
  created: string;
  until: string;
  amount: number;
}

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
