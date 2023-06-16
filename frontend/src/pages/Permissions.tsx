import { Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

interface Permission {
  id: number;
  description: string;
}

const permissions: Permission[] = [
  { id: 1, description: 'Cadastrar chamado' },
  { id: 2, description: 'Chamado por campus' },
  { id: 3, description: 'Chamado por funcionário' },
  { id: 4, description: 'Chamado por setor' },
  { id: 5, description: 'Editar chamado' },
  { id: 6, description: 'Editar status chamado' },
  { id: 7, description: 'Resgatar chamado' },
  { id: 8, description: 'Resgatar todos chamados' },
  { id: 9, description: 'Cadastrar funcionário' },
  { id: 10, description: 'Editar funcionário' },
  { id: 11, description: 'Inativar funcionário' },
  { id: 12, description: 'Resgatar funcionário' },
  { id: 13, description: 'Resgatar todos funcionários' },
  { id: 14, description: 'Cadastrar setor' },
  { id: 15, description: 'Editar setor' },
  { id: 16, description: 'Resgatar setor' },
  { id: 17, description: 'Inativar setor' },
  { id: 18, description: 'Resgatar todos setores' },
];

const PermissionsPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState<number[]>([]);

  const theme = useTheme();
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

  const getGridColumns = () => {
    if (isExtraLargeScreen) {
      return 3;
    } else if (isLargeScreen) {
      return 6;
    } else if (isMediumScreen) {
      return 9;
    } else {
      return 12;
    }
  };

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setSelectedRole(event.target.value as string);
    setSelectedPermissions([]);
  };

  const handlePermissionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const permissionId = parseInt(event.target.name);
    const isChecked = event.target.checked;

    setSelectedPermissions((prevPermissions) => {
      if (isChecked) {
        return [...prevPermissions, permissionId];
      } else {
        return prevPermissions.filter((id) => id !== permissionId);
      }
    });
  };

  const isPermissionSelected = (permissionId: number) => {
    return selectedPermissions.includes(permissionId);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="role-label">Tipo de Cargo</InputLabel>
            <Select
              labelId="role-label"
              value={selectedRole}
              label="Tipo de Cargo"
              onChange={handleRoleChange}
              required
              variant="filled"
            >
              <MenuItem value="cargo1">Cargo 1</MenuItem>
              <MenuItem value="cargo2">Cargo 2</MenuItem>
              {/* Adicione outros tipos de cargo aqui */}
            </Select>
          </FormControl>
        </Grid>
        {selectedRole && (
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <Typography variant="h6" component="div">
                Permissões
              </Typography>
              <Grid container spacing={2}>
                {permissions.map((permission) => (
                  <Grid item xs={getGridColumns()} key={permission.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isPermissionSelected(permission.id)}
                          onChange={handlePermissionChange}
                          name={permission.id.toString()}
                        />
                      }
                      label={permission.description}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormControl>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default PermissionsPage;
