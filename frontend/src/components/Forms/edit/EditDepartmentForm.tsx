import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  TextField,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { useState } from 'react';
import { makeRequest } from '../../../helpers/api';
import CustomSnackbar from '../../CustomSnackbar';

interface EditDepartmentFormProps {
  rowDetails?: {
    id: string;
    name: string;
    extension: string;
    description: string;
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

const EditDepartmentForm: React.FC<EditDepartmentFormProps> = ({ rowDetails }) => {
  const { description, id, name, extension } = rowDetails!;
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'error' | 'success' | 'info' | 'warning'>('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Estados para os campos editáveis.
  const [editedName, setEditedName] = useState(name);
  const [editedExtension, setEditedExtension] = useState(extension);
  const [editedDescription, setEditedDescription] = useState(description);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);

    try {
      const updatedData = {
        name: editedName, // Usando os valores editados.
        extension: editedExtension,
        description: editedDescription,
      }
      const response = await makeRequest('patch', `/departments/${id}`, updatedData);
      console.log('Dados atualizados:', response);
      setSnackbarSeverity('success');
      setSnackbarMessage('Departamento atualizado com sucesso!');
      setShowSnackbar(true);

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error('Erro ao atualizar o departamento:', error);

      setSnackbarSeverity('error');
      setSnackbarMessage('Ocorreu um erro ao atualizar o departamento');
      setShowSnackbar(true);
    }
  };

  const handleDeleteConfirm = async () => {
    setShowDeleteDialog(false);
    await makeRequest('delete', `/departments/${id}`, null);
    setSnackbarSeverity('success');
    setSnackbarMessage('Departamento excluído com sucesso!');
    setShowSnackbar(true);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <Box sx={{ width: '100%', p: 4 }}>
      <Grid container spacing={2}>
        <Typography variant="h6">
          Editar Departamento - <Typography component="span">{id}</Typography>
        </Typography>
        <Grid item xs={12}>
          <TextField
            label="Nome"
            value={editedName}
            fullWidth
            variant="outlined"
            disabled={!isEditing}
            onChange={(event) => setEditedName(event.target.value)} // Evento de mudança.
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Ramal"
            value={editedExtension}
            fullWidth
            variant="outlined"
            disabled={!isEditing}
            onChange={(event) => setEditedExtension(event.target.value)} // Evento de mudança.
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Descrição"
            value={editedDescription}
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            disabled={!isEditing}
            onChange={(event) => setEditedDescription(event.target.value)} // Evento de mudança.
          />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {isEditing ? (
            <>
              <Button variant="contained" color="success" onClick={handleSaveClick}>
                Salvar
              </Button>
              <Button variant="contained" color="warning" onClick={handleCancelClick} sx={{ ml: 2 }}>
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
          Tem certeza de que deseja excluir este Departamento?
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

export default EditDepartmentForm;
