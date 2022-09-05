import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { SkeletonText } from "..";

const SkeletonEdit = () => {
  return (
    <>
      <TableContainer component={Paper} data-testid="skeleton-edit">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>
                <SkeletonText />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <SkeletonText w100 />
              </TableCell>
              <TableCell>
                <SkeletonText w100 />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="right">
                <SkeletonText w100 />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export { SkeletonEdit };
