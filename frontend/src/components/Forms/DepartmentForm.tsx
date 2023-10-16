import { Box, Button, Grid, TextField } from '@mui/material';
import { DepartmentData } from 'helpers';
import React, { useState } from 'react';
import { ModalContext } from '../../context/ModalProvider';
import { makeRequest } from '../../helpers/api';

interface DeparmentFormProps {
  updateDepartments: (newDeparment: DepartmentData) => void;
}

const DepartmentForm: React.FC<DeparmentFormProps> = ({ updateDepartments }) => {
  const [name, setName] = useState('');
  const [extension, setExtension] = useState('');
  const [description, setDescription] = useState('');
  const { closeModal } = React.useContext(ModalContext);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleExtensionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtension(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newDepartmentData = {
      name,
      extension,
      description
    }

    const createDepartment = async () => {
      try {
        const response = await makeRequest('post', 'departments', JSON.stringify(newDepartmentData));
        const createdDepartment: DepartmentData = {
          data: {
            id: response.id,
            name: response.name,
            extension: response.extension,
            active: response.extension,
            employees: 0,
            calls: 0
          },
          details: {
            id: response.id,
            name: response.name,
            extension: response.extension,
            description: response.description
          }
        };
        closeModal();
        updateDepartments(createdDepartment);
      } catch (error) {
        console.error(error);
      }
    };
    createDepartment()
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: '100%', maxWidth: 500, p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              value={name}
              onChange={handleNameChange}
              required
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Ramal"
              value={extension}
              onChange={handleExtensionChange}
              required
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descrição"
              value={description}
              onChange={handleDescriptionChange}
              required
              multiline
              rows={4}
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" type="submit">
                Cadastrar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default DepartmentForm;
