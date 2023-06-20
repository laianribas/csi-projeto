import {
  Box,
  Container
} from "@mui/material";
import * as React from "react";
import CreateButton from "../components/CreateButton";
import CustomModal from "../components/CustomModal";
import CustomTableContainer from "../components/CustomTableContainer";
import DepartmentForm from "../components/Forms/DepartmentForm";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import { ModalContext } from '../context/ModalProvider';
import { SearchContext } from '../context/SearchProvider';
import {
  EmployeeData,
  Order,
  calculateEmptyRows,
  departmentHeadCells,
  departmentRows,
  filterRows,
  getVisibleRows
} from "../helpers";

export default function Departments() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<string>("id");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { openModal } = React.useContext(ModalContext);
  const { searchText, handleSearch } = React.useContext(SearchContext);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof EmployeeData
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
    return filterRows(departmentRows, searchText);
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

  const handleSubmit = () => {
    setIsModalOpen(false)
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb: 4 }}>
      <PageTitle text="Setores" />
      <SearchBar value={searchText} onChange={handleSearch} />
      <Box sx={{ width: "100%", marginTop: '16px', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <CreateButton onClick={handleCreate} buttonName={'Novo Setor'} />
      </Box>
      <CustomModal title="Cadastro Setor" onClose={handleCloseModal} open={isModalOpen}>
        <DepartmentForm />
      </CustomModal>
      <CustomTableContainer
        headCells={departmentHeadCells}
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