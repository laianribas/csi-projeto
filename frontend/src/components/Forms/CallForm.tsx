import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';

const CallForm: React.FC = () => {
  const [responsible, setResponsible] = useState('');
  const [area, setArea] = useState('');
  const [description, setDescription] = useState('');
  const [assetNumber, setAssetNumber] = useState('');
  const [department, setDepartment] = useState('');

  const handleResponsibleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResponsible(event.target.value);
  };

  const handleAreaChange = (event: SelectChangeEvent<string>) => {
    setArea(event.target.value as string);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleAssetNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAssetNumber(event.target.value);
  };

  const handleDepartmentChange = (event: SelectChangeEvent<string>) => {
    setDepartment(event.target.value as string);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setResponsible('');
    setArea('');
    setDescription('');
    setAssetNumber('');
    setDepartment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: '100%', maxWidth: 500, p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Responsável"
              value={responsible}
              onChange={handleResponsibleChange}
              required
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="area-label">Área</InputLabel>
              <Select
                labelId="area-label"
                value={area}
                label="Área"
                onChange={handleAreaChange}
                required
                variant="filled"
              >
                <MenuItem value="manutencao">Manutenção</MenuItem>
                <MenuItem value="redes">Redes</MenuItem>
                {/* Adicione outros tipos de chamado aqui */}
              </Select>
            </FormControl>
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
            <TextField
              label="Número de Tombo"
              value={assetNumber}
              onChange={handleAssetNumberChange}
              required
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="department-label">Departamento</InputLabel>
              <Select
                labelId="department-label"
                label='Departamento'
                value={department}
                onChange={handleDepartmentChange}
                required
                variant="filled"
              >
                <MenuItem value="departamentoA">Departamento A</MenuItem>
                <MenuItem value="departamentoB">Departamento B</MenuItem>
                {/* Adicione outros departamentos aqui */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" type="submit">
                Abrir Chamado
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default CallForm;
