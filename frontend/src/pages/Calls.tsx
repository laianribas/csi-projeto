import {
  Box,
  Container
} from "@mui/material";
import * as React from "react";
import CreateButton from "../components/CreateButton";
import CustomModal from "../components/CustomModal";
import CustomTableContainer from "../components/CustomTableContainer";
import CallForm from "../components/Forms/CallForm";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import { ModalContext } from '../context/ModalProvider';
import { SearchContext } from '../context/SearchProvider';
import {
  CallData,
  Order,
  calculateEmptyRows,
  callsHeadCells,
  callsRows,
  filterRows,
  getAuthToken,
  getVisibleRows
} from "../helpers";
import api from "../helpers/api";

export default function Calls() {
  const [order, setOrder] = React.useState<Order>("desc");
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

  const token = getAuthToken();

  React.useEffect(() => {
    api.get('calls', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      const data = response.data
      console.log(data)
    })
  }, [])

  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb: 4 }}>
      <PageTitle text="Chamados" />
      <SearchBar value={searchText} onChange={handleSearch} />
      <Box sx={{ width: "100%", marginTop: '16px', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <CreateButton onClick={handleCreate} buttonName={'Novo chamado'} />
      </Box>
      <CustomModal title="Cadastro Chamado" onClose={handleCloseModal} open={isModalOpen}>
        <CallForm />
      </CustomModal>
      <CustomTableContainer
        headCells={callsHeadCells}
        order={order}
        orderBy={orderBy}
        onRequestSort={handleRequestSort}
        visibleRows={visibleRows}
        emptyRows={emptyRows}
        filteredData={filteredData}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Container>
  );
}
