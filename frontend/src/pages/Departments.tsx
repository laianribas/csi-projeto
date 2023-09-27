import {
  Box,
  Container,
} from "@mui/material";
import React, { useContext, useEffect, useMemo, useState } from 'react';
import CreateButton from "../components/CreateButton";
import CustomModal from "../components/CustomModal";
import CustomSnackbar from "../components/CustomSnackbar";
import CustomTableContainer from "../components/CustomTableContainer";
import DepartmentForm from "../components/Forms/DepartmentForm"; // Create this component
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import { ModalContext } from '../context/ModalProvider';
import { SearchContext } from '../context/SearchProvider';
import {
  DepartmentData,
  Order,
  calculateEmptyRows,
  departmentHeadCells,
  filterRows,
  getVisibleRows
} from "../helpers";
import { Department } from "../helpers/Interfaces"; // Create this interface
import { makeRequest } from "../helpers/api";

export default function Departments() {
  const [order, setOrder] = useState<Order>("desc");
  const [orderBy, setOrderBy] = useState<string>("id");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openModal } = useContext(ModalContext);
  const { searchText, handleSearch } = useContext(SearchContext);

  const [departments, setDepartments] = useState<DepartmentData[]>([]); // Define DepartmentData based on your data structure
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    'error' | 'success' | 'info' | 'warning'
  >('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: any
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

  const filteredData = useMemo(() => {
    return filterRows(departments, searchText);
  }, [departments, searchText]);

  const visibleRows = useMemo(() => {
    return getVisibleRows(
      filteredData as readonly DepartmentData[], // Define DepartmentData based on your data structure
      order,
      orderBy as "id" | "name" | "extension" | "active" | "employeeCount" | "callCount", // Define DepartmentData keys based on your data structure
      page,
      rowsPerPage
    );
  }, [filteredData, order, orderBy, page, rowsPerPage]);

  const emptyRows = useMemo(() => {
    return calculateEmptyRows(page, rowsPerPage, filteredData);
  }, [page, rowsPerPage, filteredData]);

  const handleCreate = () => {
    openModal();
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleUpdateDepartments = (newDepartment: DepartmentData) => {
    setDepartments(prevDepartments => [newDepartment, ...prevDepartments] as DepartmentData[]);
    setSnackbarSeverity('success');
    setSnackbarMessage('Setor criado com sucesso');
    setShowSnackbar(true);
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await makeRequest('get', 'departments', null);

        const transformedData = response.map((department: Department) => ({
          // Define the structure of 'data' and 'details' based on your data
          data: {
            id: department.id,
            name: department.name,
            extension: department.extension,
            active: department.active,
            employeeCount: department.employees.length,
            callCount: department.calls.length

          },
          details: {
            // Define details properties based on your data
            // For example: name, description, etc.
          },
        }));

        setDepartments(transformedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDepartments();
  }, []);


  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb: 4, overflow: 'auto' }}>
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
        form={DepartmentForm}
      />
      <CustomSnackbar
        open={showSnackbar}
        onClose={handleCloseSnackbar}
        severity={snackbarSeverity}
        message={snackbarMessage}
      />
    </Container>
  );
}
