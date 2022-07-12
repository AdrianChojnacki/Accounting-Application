import {
  IInvoiceTableProps,
  IInvoiceTableMapProps,
} from "./InvoicesTable.types";
import { InvoiceTableRow } from "../InvoiceTableRow";

const InvoicesTable = ({ invoices }: IInvoiceTableProps) => {
  const invoicesList = invoices.map((invoice: IInvoiceTableMapProps) => (
    <InvoiceTableRow
      id={invoice.id}
      date={invoice.date}
      amount={invoice.amount}
      key={invoice.id}
    />
  ));

  return <div>{invoicesList}</div>;
};

export { InvoicesTable };
