import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { DetailsButton, EditButton, DeleteButton, SkeletonHome } from "..";
import { IInvoicesTableProps } from ".";
import InvoicesTableCSS from "./InvoicesTable.module.css";

const InvoicesTable = ({ invoices, renderCopyright }: IInvoicesTableProps) => {
  let invoicesList;

  if (invoices) {
    invoicesList = invoices.map((invoice) => (
      <TableRow
        key={invoice.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell>{invoice.id}</TableCell>
        <TableCell align="right">{invoice.created}</TableCell>
        <TableCell align="right">{invoice.until}</TableCell>
        <TableCell align="right">{invoice.amount}</TableCell>
        <TableCell align="right">
          <DetailsButton id={invoice.id} />
          <EditButton id={invoice.id} />
          <DeleteButton id={invoice.id} />
        </TableCell>
      </TableRow>
    ));
  } else {
    invoicesList = <SkeletonHome rowsNumber={4} />;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className={InvoicesTableCSS.head}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Payment until</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{invoicesList}</TableBody>
        </Table>
      </TableContainer>
      <p className={InvoicesTableCSS.footer}>{renderCopyright()}</p>
    </>
  );
};

export { InvoicesTable };
