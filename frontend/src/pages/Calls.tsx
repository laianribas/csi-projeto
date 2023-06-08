import {
  Box,
  Container,
  Paper, Table,
  TableContainer,
  TablePagination
} from "@mui/material";
import * as React from "react";
import CreateButton from "../components/CreateButton";
import CustomModal from "../components/CustomModal";
import CustomTableBody from "../components/CustomTableBody";
import CallForm from "../components/Forms/CallForm";
import SearchBar from "../components/SearchBar";
import TableHeadComponent from "../components/TableHeadComponent";
import { ModalContext } from '../context/ModalProvider';
import { SearchContext } from '../context/SearchProvider';
import {
  CallData,
  Order,
  calculateEmptyRows,
  callsHeadCells,
  callsRows,
  filterRows,
  getVisibleRows
} from "../helpers";

export default function Calls() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<string>("id");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { openModal } = React.useContext(ModalContext);
  const { searchText, handleSearch } = React.useContext(SearchContext);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof CallData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property as string);
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
    return filterRows(callsRows, searchText);
  }, [searchText]);


  const visibleRows = React.useMemo(() => {
    return getVisibleRows(filteredData as readonly { [x: string]: string | number;[x: number]: string | number; }[], order, orderBy, page, rowsPerPage);
  }, [filteredData, order, orderBy, page, rowsPerPage]);

  const emptyRows = React.useMemo(() => {
    return calculateEmptyRows(page, rowsPerPage, filteredData);
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
