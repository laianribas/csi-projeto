import { Box, Container, Paper, Table, TableContainer, TablePagination } from "@mui/material";
import * as React from "react";
import CreateButton from "../components/CreateButton";
import CustomModal from "../components/CustomModal";
import CustomTableBody from "../components/CustomTableBody";
import CallForm from "../components/Forms/CallForm";
import SearchBar from "../components/SearchBar";
import TableHeadComponent from "../components/TableHeadComponent";
import { ModalContext } from '../context/ModalContext';
import { Data, Order, callsHeadCells, callsRows, getComparator, stableSort } from "../helpers";

export default function Calls() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("id");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchText, setSearchText] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { openModal } = React.useContext(ModalContext)

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

  const filteredData = React.useMemo(() => {
    if (searchText === '') {
      return callsRows;
    }
    const lowercasedValue = searchText.toLowerCase();
    return callsRows.filter((row) => {
      return Object.values(row).some((value) =>
        String(value).toLowerCase().includes(lowercasedValue)
      );
    });
  }, [searchText]);

  const visibleRows = React.useMemo(() => {
    return stableSort(filteredData, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [order, orderBy, page, rowsPerPage, filteredData]);

  const emptyRows = React.useMemo(() => {
    return page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredData.length) : 0;
  }, [page, rowsPerPage, filteredData]);

  const handleCreate = () => {
    openModal();
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb: 4 }}>
      <SearchBar value={searchText} onChange={handleSearch} />
      <Box sx={{ width: "100%", marginTop: '16px', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <CreateButton onClick={handleCreate} buttonName={'Novo chamado'} />
      </Box>
      <CustomModal onClose={handleCloseModal} open={isModalOpen}>
        <CallForm />
      </CustomModal>
      <Box sx={{ width: "100%", marginTop: '16px', overflowX: 'auto' }}>
        <Paper sx={{ minWidth: 1000 }}>
          <TableContainer sx={{ width: '100%' }}>
            <Table size="medium">
              <TableHeadComponent
                headCells={callsHeadCells}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <CustomTableBody
                visibleRows={visibleRows}
                emptyRows={emptyRows}
              />
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
    </Container>
  );
}
