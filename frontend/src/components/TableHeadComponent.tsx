import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import { CallData, CallsHeadCell, Order } from "helpers";
import { CallInterface } from "helpers/Interfaces";

import * as React from "react";

interface TableHeadProps {
  order: Order;
  orderBy: string;
  headCells: CallsHeadCell[];
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof CallInterface
  ) => void;
  showActions?: boolean;
}

export default function TableHeadComponent(props: TableHeadProps) {
  const { order, orderBy, onRequestSort, headCells, showActions = true } = props;
  const createSortHandler =
    (property: keyof CallData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='center'
            padding='normal'
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc"
                    ? "sorted descending"
                    : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        {showActions && <TableCell align="center">Ações</TableCell>}
      </TableRow>
    </TableHead>
  );
}
