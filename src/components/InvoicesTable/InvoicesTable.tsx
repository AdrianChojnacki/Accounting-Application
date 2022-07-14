import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { IInvoicesTableProps } from "./InvoicesTable.types";

const InvoicesTable = ({ invoices }: IInvoicesTableProps) => {
  const invoicesList = invoices.map((invoice) => (
    <TableRow
      key={invoice.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>{invoice.id}</TableCell>
      <TableCell align="right">{invoice.created}</TableCell>
      <TableCell align="right">{invoice.until}</TableCell>
      <TableCell align="right">{invoice.amount}</TableCell>
    </TableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Created</TableCell>
            <TableCell align="right">Valid until</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{invoicesList}</TableBody>
      </Table>
    </TableContainer>
  );
};

export { InvoicesTable };
