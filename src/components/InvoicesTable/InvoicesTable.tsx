import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  DetailsButton,
  EditButton,
  DeleteButton,
  SkeletonHome,
  Spinner,
} from "..";
import { IInvoicesTableProps } from ".";
import InvoicesTableCSS from "./InvoicesTable.module.css";

const InvoicesTable = ({ renderCopyright }: IInvoicesTableProps) => {
  const [invoices, setInvoices] = useState<Array<object> | null>(null);
  const [tableReload, setTableReload] = useState<boolean>(true);
  let invoicesList;

  const url = `${process.env.REACT_APP_API_URL}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setInvoices(res.data);
        setTableReload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tableReload]);

  if (invoices) {
    invoicesList = invoices.map((invoice: any) => {
      const invoiceUrl = `${url}/${invoice.id}`;

      const deleteClick = () => {
        setTableReload(true);

        axios.delete(invoiceUrl).catch((err) => {
          console.log(err);
        });
      };

      return (
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
            <DeleteButton onClick={deleteClick} />
          </TableCell>
        </TableRow>
      );
    });
  } else {
    invoicesList = <SkeletonHome rowsNumber={4} />;
  }

  return (
    <>
      {tableReload && <Spinner />}
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
