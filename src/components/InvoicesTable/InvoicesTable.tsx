import { IInvoicesTableProps } from "./InvoicesTable.types";
import { InvoicesTableRow } from "../InvoicesTableRow";

const InvoicesTable = ({ invoices }: IInvoicesTableProps) => {
  const invoicesList = invoices.map((invoice) => (
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
