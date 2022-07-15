export interface IInvoicesTableProps {
  invoices: Array<any>;
  render: Function;
}

export interface IInvoicesTableRender {
  (company: string, year: string): string;
}
