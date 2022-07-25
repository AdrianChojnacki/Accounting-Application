export interface IInvoicesTableProps {
  invoices: Array<any>;
  renderCopyright: Function;
}

export interface IInvoicesTableRender {
  (company: string, year: string): string;
}
