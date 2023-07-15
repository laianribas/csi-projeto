import {
  Box,
  Container
} from "@mui/material";
import * as React from "react";
import CreateButton from "../components/CreateButton";
import CustomModal from "../components/CustomModal";
import CustomSnackbar from "../components/CustomSnackbar";
import CustomTableContainer from "../components/CustomTableContainer";
import CallForm from "../components/Forms/CallForm";
import EditCallForm from "../components/Forms/EditCallForm";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import { ModalContext } from '../context/ModalProvider';
import { SearchContext } from '../context/SearchProvider';
import {
  CallData,
  Order,
  calculateEmptyRows,
  callsHeadCells,
  filterRows,
  getAuthToken,
  getVisibleRows
} from "../helpers";
import { CallInterface } from "../helpers/Interfaces";
import api from "../helpers/api";

export default function Calls() {
  const [order, setOrder] = React.useState<Order>("desc");
  const [orderBy, setOrderBy] = React.useState<string>("created_at");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { openModal } = React.useContext(ModalContext);
  const { searchText, handleSearch } = React.useContext(SearchContext);

  const [calls, setCalls] = React.useState<CallData[]>([]);
  const [showSnackbar, setShowSnackbar] = React.useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<
    'error' | 'success' | 'info' | 'warning'
  >('success');
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

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

  const filteredData = React.useMemo(() => {
    return filterRows(calls, searchText);
  }, [calls, searchText]);


  const visibleRows = React.useMemo(() => {
    return getVisibleRows(filteredData as readonly CallData[], order, orderBy as "created_at" | "id" | "requester" | "department" | "area" | "status", page, rowsPerPage);
  }, [filteredData, order, orderBy, page, rowsPerPage]);

  const emptyRows = React.useMemo(() => {
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

  const handleUpdateCalls = (newCall: CallData) => {
    setCalls(prevCalls => [newCall, ...prevCalls] as CallData[]);
    setSnackbarSeverity('success');
    setSnackbarMessage('Chamado criado com sucesso');
    setShowSnackbar(true);
  };


  React.useEffect(() => {
    const token = getAuthToken();
    const fetchCalls = async () => {
      try {
        const response = await api.get('calls', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = response.data;

        const transformedData = data.map((call: CallInterface) => ({
          data: {
            id: call.id.substring(0, 5).concat('...'),
            created_at: call.created_at,
            requester: call.employee.name,
            department: call.department.name,
            area: call.area,
            status: call.status && call.status.length > 0 ? call.status[0].description : '',
          },
          details: {
            id: call.id,
            responsible: call.responsible ? call.responsible.name : '',
            description: call.description,
            evaluation: call.evaluation,
            department: call.department.name,
            assetTag: call.asset_tag,
            area: call.area,
            status: call.status && call.status.length > 0 ? call.status[0].description : ''
          },
        }));

        setCalls(transformedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCalls();
  }, []);
  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb: 4, overflow: 'auto' }}>
      <PageTitle text="Chamados" />
      <SearchBar value={searchText} onChange={handleSearch} />
      <Box sx={{ width: "100%", marginTop: '16px', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <CreateButton onClick={handleCreate} buttonName={'Novo chamado'} />
      </Box>
      <CustomModal title="Cadastro Chamado" onClose={handleCloseModal} open={isModalOpen}>
        <CallForm updateCalls={handleUpdateCalls} />
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
        form={EditCallForm}
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