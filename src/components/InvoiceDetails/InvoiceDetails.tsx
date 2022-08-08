import { useTranslation } from "react-i18next";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { SkeletonInvoice } from "..";
import { IInvoiceDetailsProps } from ".";

const InvoiceDetails = ({ invoiceData }: IInvoiceDetailsProps) => {
  const { t } = useTranslation();

  let invoice;

  if (invoiceData) {
    invoice = (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>
                <Box fontWeight="bold" display="inline">
                  {t("id")}:
                </Box>
                {` ${invoiceData.id}`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box fontWeight="bold" display="inline">
                  {t("added")}:
                </Box>
                {` ${invoiceData.created}`}
              </TableCell>
              <TableCell>
                <Box fontWeight="bold" display="inline">
                  {t("paymentUntil")}:
                </Box>
                {` ${invoiceData.until}`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="right">
                <Box fontWeight="bold" display="inline">
                  {t("amount")}:
                </Box>
                {` ${invoiceData.amount}`}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    invoice = <SkeletonInvoice />;
  }

  return <>{invoice}</>;
};

export { InvoiceDetails };
