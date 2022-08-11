import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  DeletePopup,
} from "..";
import { IInvoicesTableProps } from ".";
import InvoicesTableCSS from "./InvoicesTable.module.css";

const InvoicesTable = ({ renderCopyright }: IInvoicesTableProps) => {
  const [invoices, setInvoices] = useState<Array<object> | null>(null);
  const [tableReload, setTableReload] = useState<boolean>(true);
  const [popupState, setPopupState] = useState<boolean>(false);
  const { t } = useTranslation();

  const showPopup = () => setPopupState(true);
  const hidePopup = () => setPopupState(false);

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
      const { id, created, until, amount } = invoice;

      const invoiceUrl = `${url}/${invoice.id}`;

      const deleteClick = () => {
        axios.delete(invoiceUrl).catch((err) => {
          console.log(err);
        });

        setTableReload(true);
        hidePopup();
      };

      return (
        <TableRow
          key={id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell>{invoice.id}</TableCell>
          <TableCell align="right">{created}</TableCell>
          <TableCell align="right">{until}</TableCell>
          <TableCell align="right">{amount}</TableCell>
          <TableCell align="right">
            <DetailsButton id={id} />
            <EditButton id={id} />
            <DeleteButton onClick={showPopup} />
            <DeletePopup
              text={t("doYouWantToDelete", { id })}
              popupState={popupState}
              hidePopup={hidePopup}
              deleteClick={deleteClick}
            />
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
              <TableCell>{t("ID")}</TableCell>
              <TableCell align="right">{t("added")}</TableCell>
              <TableCell align="right">{t("paymentUntil")}</TableCell>
              <TableCell align="right">{t("amount")}</TableCell>
              <TableCell align="right">{t("actions")}</TableCell>
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
