import { TableCell, TableRow } from "@mui/material";
import { SkeletonText } from "..";

const SkeletonHome = ({ rowsNumber }: { rowsNumber: number }) => {
  const rows: JSX.Element[] = [];

  for (let i = 0; i < rowsNumber; i++) {
    rows.push(
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell>
          <SkeletonText />
        </TableCell>
        <TableCell align="right">
          <SkeletonText />
        </TableCell>
        <TableCell align="right">
          <SkeletonText />
        </TableCell>
        <TableCell align="right">
          <SkeletonText />
        </TableCell>
        <TableCell align="right">
          <SkeletonText />
        </TableCell>
      </TableRow>,
    );
  }

  return <>{rows}</>;
};

export { SkeletonHome };
