import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField
} from '@mui/material';
import { EmployeeData } from 'helpers';
import React, { useState } from 'react';

// interface EmployeeFormProps {
//   onSubmit: (formData: Omit<EmployeeData, 'id'>) => void;
// }

const positions = ['Gerente', 'Analista', 'Desenvolvedor', 'Outro Cargo'];
const departments = ['RH', 'Financeiro', 'Tecnologia', 'Outro Setor'];

const EmployeeForm: React.FC = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePositionChange = (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => {
    setPosition(event.target.value as string);
  };

  const handleDepartmentChange = (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => {
    const selectedDepartments = event.target.value as string[];
    setSelectedDepartments(selectedDepartments);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData: Omit<EmployeeData, 'id'> = {
      name,
      position,
      departments: selectedDepartments,
    };
    setName('');
    setPosition('');
    setSelectedDepartments([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ maxWidth: 500, height: '100%', p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nome completo"
              value={name}
              onChange={handleNameChange}
              fullWidth
              margin="normal"
              required
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="position-label">Cargo</InputLabel>              <Select labelId="position-label" value={position} sx={{ width: '100%' }} variant="filled" onChange={handlePositionChange}>
                {positions.map((position) => (
                  <MenuItem key={position} value={position}>
                    {position}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="department-label">Setor</InputLabel>
              <Select
                labelId="department-label"
                multiple
                value={selectedDepartments}
                onChange={handleDepartmentChange}
                sx={{ width: '100%', height: 140 }}
                // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                variant="filled"
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {(selected as string[]).map((department) => (
                      <Chip key={department} label={department} />
                    ))}
                  </Box>
                )}
              >
                {departments.map((department) => (
                  <MenuItem key={department} value={department}>
                    {department}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="submit" variant="contained">
                Cadastrar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default EmployeeForm;
