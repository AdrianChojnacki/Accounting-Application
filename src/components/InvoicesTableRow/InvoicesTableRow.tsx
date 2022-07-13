import { IInvoicesTableRowProps } from "./InvoicesTableRow.types";

const InvoicesTableRow = ({ id, date, amount }: IInvoicesTableRowProps) => {
  return <div>{`${id}, ${date}, ${amount}`}</div>;
};

export { InvoicesTableRow };
