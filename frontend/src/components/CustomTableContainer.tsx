import {
  Box,
  Paper,
  Table,
  TableContainer,
  TablePagination,
} from "@mui/material";
import React from "react";
import { CallData, Order } from "../helpers";
import CustomTableBody from "./CustomTableBody";
import TableHeadComponent from "./TableHeadComponent";

interface CustomTableContainerProps {
  headCells: any[];
  order: Order;
  orderBy: string;
  onRequestSort: (event: React.MouseEvent<unknown, MouseEvent>, property: keyof CallData) => void;
  visibleRows: any[];
  emptyRows: number;
  filteredData: any[];
  rowsPerPage: number;
  page: number;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTableContainer: React.FC<CustomTableContainerProps> = ({
  headCells,
  order,
  orderBy,
  onRequestSort,
  visibleRows,
  emptyRows,
  filteredData,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <Box sx={{ width: "100%", marginTop: "16px", overflowX: "auto" }}>
      <Paper sx={{ minWidth: 1050 }}>
        <TableContainer sx={{ width: "100%" }}>
          <Table size="medium">
            <TableHeadComponent
              headCells={headCells}
              order={order}
              orderBy={orderBy}
              onRequestSort={onRequestSort}
            />
            <CustomTableBody visibleRows={visibleRows} emptyRows={emptyRows} />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default CustomTableContainer;
