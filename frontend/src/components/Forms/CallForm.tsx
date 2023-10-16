import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';
import { ModalContext } from '../../context/ModalProvider';
import { CallData } from '../../helpers';
import { Department } from '../../helpers/Interfaces';
import { makeRequest } from '../../helpers/api';

interface CallFormProps {
  updateCalls: (newCall: CallData) => void;
}

const CallForm: React.FC<CallFormProps> = ({ updateCalls }) => {
  const [responsible, setResponsible] = useState('');
  const [area, setArea] = useState('');
  const [description, setDescription] = useState('');
  const [assetNumber, setAssetNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [departments, setDepartments] = useState<Department[]>([]);
  const { closeModal } = React.useContext(ModalContext);

  React.useEffect(() => {
    const fetchDepartments = async () => {
      const response = await makeRequest('get', 'departments', null)
      setDepartments(response);
    }

    fetchDepartments();
  }, []);


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

    const newCallData = {
      area,
      description,
      assetTag: assetNumber,
      departmentId: department,
    };

    const createCall = async () => {
      try {
        const response = await makeRequest('post', 'calls', JSON.stringify(newCallData))
        const createdCall = {
          data: {
            id: response.id.substring(0, 5).concat('...'),
            created_at: response.created_at,
            requester: response.employee.name,
            department: response.department.name,
            area: response.area,
            status: response.status && response.status.length > 0 ? response.status[0].description : '',
          },
          details: {
            id: response.id,
            responsible: response.responsible ? response.responsible.name : '',
            description: response.description,
            evaluation: response.evaluation,
            department: response.department.name,
            area: response.area,
            status: response.status && response.status.length > 0 ? response.status[0].description : ''
          }
        }
        setResponsible('');
        setArea('');
        setDescription('');
        setAssetNumber('');
        setDepartment('');

        closeModal()
        updateCalls(createdCall);
      } catch (error) {
        console.error(error);
      }
    };
    createCall();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: '100%', maxWidth: 500, p: 2 }}>
        <Grid container spacing={2}>
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
                {departments.map(department => (
                  <MenuItem key={department.id} value={department.id}>
                    {department.name}
                  </MenuItem>
                ))}
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