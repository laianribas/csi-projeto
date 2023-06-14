import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

interface DepartmentFormData {
  name: string;
  extension: string;
  description: string;
}

const DepartmentForm: React.FC = () => {
  const [name, setName] = useState('');
  const [extension, setExtension] = useState('');
  const [description, setDescription] = useState('');

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
    setName('');
    setExtension('');
    setDescription('');
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
