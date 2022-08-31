import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { SkeletonText } from "..";

const SkeletonInvoice = () => {
  return (
    <>
      <TableContainer component={Paper} data-testid="skeleton-invoice">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>
                <SkeletonText />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <SkeletonText />
              </TableCell>
              <TableCell>
                <SkeletonText />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="right">
                <SkeletonText />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export { SkeletonInvoice };
