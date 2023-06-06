import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { Container } from "@mui/system";
import * as React from "react";
import CreateButton from "../components/CreateButton";
import CustomTableBody from "../components/CustomTableBody";
import SearchBar from "../components/SearchBar";
import TableHeadComponent from "../components/TableHeadComponent";
import { Data, Order, callsHeadCells, callsRows, getComparator, stableSort } from "../helpers";

export default function Calls() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("id");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchText, setSearchText] = React.useState('');

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredCalls = React.useMemo(() => {
    return callsRows.filter((row) =>
      row.number.toLowerCase().includes(searchText.toLowerCase()) ||
      row.openingDate.includes(searchText.toLowerCase()) ||
      row.status.toLowerCase().includes(searchText.toLowerCase()) ||
      row.responsible.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, callsRows]);

  const visibleRows = React.useMemo(() => {
    return stableSort(filteredCalls, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [order, orderBy, page, rowsPerPage, filteredCalls]);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredCalls.length) : 0;

  const handleCreate = () => {

  }

  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb: 4 }}>
      <SearchBar value={searchText} onChange={handleSearch} />
      <Box sx={{ width: "100%", marginTop: '16px', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <CreateButton onClick={handleCreate} buttonName={'Novo chamado'} />
      </Box>
      <Box sx={{ width: "100%", marginTop: '16px' }} >
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer >
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <TableHeadComponent
                headCells={callsHeadCells}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <CustomTableBody visibleRows={visibleRows} emptyRows={emptyRows} />
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 50, 100]}
            component="div"
            count={filteredCalls.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Container>
  );
}
