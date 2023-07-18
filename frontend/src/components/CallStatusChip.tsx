import { Chip } from '@mui/material';
import React from 'react';

const CallStatusChip: React.FC<{ status: string }> = ({ status }) => {
  let color: 'default' | 'primary' | 'success' | 'error' | 'secondary' | 'warning' = 'default';

  switch (status) {
    case 'Em aberto':
      color = 'primary';
      break;
    case 'Em andamento':
      color = 'warning';
      break;
    case 'Concluído':
    case 'Ativo':
      color = 'success';
      break;
    case 'Cancelado':
    case 'Inativo':
      color = 'error';
      break;
    default:
      color = 'default';
  }

  return <Chip label={status} color={color} variant="filled" size="small" />;
};

export default CallStatusChip;
