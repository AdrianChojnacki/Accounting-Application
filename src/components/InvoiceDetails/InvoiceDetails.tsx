import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { IInvoiceDetailsProps } from "./InvoiceDetails.types";

const InvoiceDetails = ({
  invoiceData,
}: {
  invoiceData: IInvoiceDetailsProps;
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell colSpan={2}>
              <Box fontWeight="bold" display="inline">
                ID:
              </Box>
              {` ${invoiceData.id}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Box fontWeight="bold" display="inline">
                Created:
              </Box>
              {` ${invoiceData.created}`}
            </TableCell>
            <TableCell>
              <Box fontWeight="bold" display="inline">
                Payment until:
              </Box>
              {` ${invoiceData.until}`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} align="right">
              <Box fontWeight="bold" display="inline">
                Amount:
              </Box>
              {` ${invoiceData.amount}`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { InvoiceDetails };
