import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Slide, TextField, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/system';
import { Department, Employee } from 'helpers/Interfaces';
import React, { useEffect, useState } from 'react';
import CustomSnackbar from '../../components/CustomSnackbar';
import { makeRequest } from '../../helpers/api';

interface EditCallFormProps {
  rowDetails?: {
    description: string;
    evaluation: string;
    id: string;
    responsible: string;
    area: string;
    assetTag: string;
    department: string;
  };
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditCallForm: React.FC<EditCallFormProps> = ({ rowDetails }) => {
  const { description, evaluation, id, area, assetTag, department } = rowDetails!;

  const [supportEmployees, setSupportEmployees] = useState<Employee[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<string>(rowDetails?.responsible || '');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);
  const [showSnackbar, setShowSnackbar] = React.useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<
    'error' | 'success' | 'info' | 'warning'
  >('success');
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const employeesData = await makeRequest('get', '/employees/support', null);
        setSupportEmployees(employeesData);

        const departmentsData = await makeRequest('get', '/departments', null);
        setDepartments(departmentsData);

        const departmentId = findDepartmentIdByName(departmentsData, department);
        setSelectedDepartment(departmentId as string);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (showSnackbar) {
      // Atualiza a página quando o Snackbar for exibido após a exclusão ou edição
      setTimeout(() => {
        window.location.reload();
      }, 3000); // Espera 3 segundos antes de recarregar a página
    }
  }, [showSnackbar]);

  const findDepartmentIdByName = (departments: Department[], departmentName: string) => {
    const foundDepartment = departments.find((dep) => dep.name === departmentName);
    return foundDepartment?.id || '';
  };

  const handleResponsibleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setSelectedEmployee(value);
  };

  const handleDepartmentChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setSelectedDepartment(value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };


  const handleConfirmClick = async () => {
    setIsEditing(false);
    try {
      const updatedData = {
        description,
        evaluation,
        id,
        responsibleId: selectedEmployee,
        area,
        assetTag,
        departmentId: selectedDepartment,
        statusId: selectedEmployee ? 2 : undefined
      };

      const response = await makeRequest('patch', `/calls/${id}`, updatedData);
      console.log('Dados atualizados:', response);
      setSnackbarSeverity('success');
      setSnackbarMessage('Chamado alterado com sucesso!');
      setShowSnackbar(true);
    } catch (error) {
      console.error('Erro ao atualizar os dados:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage('Ocorreu um erro ao alterar chamado!');
      setShowSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };
  const handleDeleteClick = () => {
    setShowDeleteDialog(true); // Abre o diálogo de exclusão
  };

  const handleDeleteConfirm = () => {
    // Lógica para excluir o chamado aqui
    console.log('Excluir chamado');
    setShowDeleteDialog(false); // Fecha o diálogo de exclusão
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false); // Fecha o diálogo de exclusão
  };

  return (
    <Box sx={{ width: '100%', p: 4 }}>
      <Grid container spacing={2}>
        <Typography variant="h6">
          Editar Chamado - <Typography component="span" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>{id}</Typography>
        </Typography>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="responsible-label">Funcionário Responsável</InputLabel>
            <Select
              labelId="responsible-label"
              label="Funcionário Responsável"
              value={selectedEmployee}
              fullWidth
              variant="outlined"
              onChange={handleResponsibleChange}
              disabled={!isEditing}
            >
              {supportEmployees.map((employee) => (
                <MenuItem key={employee.id} value={employee.id}>
                  {employee.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="area-label">Área do Chamado</InputLabel>
            <Select
              labelId="area-label"
              label="Área do Chamado"
              value={area}
              fullWidth
              variant="outlined"
              disabled={!isEditing}
            >
              <MenuItem value="manutencao">Manutenção</MenuItem>
              <MenuItem value="redes">Redes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Descrição"
            value={description}
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Número de Tombo"
            value={assetTag}
            fullWidth
            variant="outlined"
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="department-label">Departamento</InputLabel>
            <Select
              labelId="department-label"
              label="Departamento"
              value={selectedDepartment}
              fullWidth
              variant="outlined"
              onChange={handleDepartmentChange}
              disabled={!isEditing}
            >
              {departments.map((department) => (
                <MenuItem key={department.id} value={department.id}>
                  {department.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Avaliação"
            value={evaluation}
            fullWidth
            variant="outlined"
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {isEditing ? (
            <>
              <Button variant="contained" color="success" onClick={handleConfirmClick}>
                Confirmar
              </Button>
              <Button variant="contained" color="error" onClick={handleCancelClick} sx={{ ml: 2 }}>
                Cancelar
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" color="warning" onClick={handleEditClick}>
                Editar
              </Button>
              <Button variant="contained" color="error" onClick={handleDeleteClick} sx={{ ml: 2 }}>
                Excluir
              </Button>
            </>
          )}
        </Grid>
        <CustomSnackbar
          open={showSnackbar}
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          message={snackbarMessage}
        />
      </Grid>
      <Dialog open={showDeleteDialog} onClose={handleDeleteCancel} TransitionComponent={Transition}
        keepMounted>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          Tem certeza de que deseja excluir este chamado?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteConfirm} color="error">
            Excluir
          </Button>
          <Button onClick={handleDeleteCancel} color="warning">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditCallForm;
