import {
  IInvoiceTableProps,
  IInvoiceTableMapProps,
} from "./InvoicesTable.types";
import { InvoicesTableRow } from "../InvoicesTableRow";

const InvoicesTable = ({ invoices }: IInvoiceTableProps) => {
  const invoicesList = invoices.map((invoice: IInvoiceTableMapProps) => (
    <InvoicesTableRow
      id={invoice.id}
      date={invoice.date}
      amount={invoice.amount}
      key={invoice.id}
    />
  ));

  return <div>{invoicesList}</div>;
};

export { InvoicesTable };
