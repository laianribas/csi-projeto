import { Chip } from '@mui/material';
import React from 'react';

const CallStatusChip: React.FC<{ status: string }> = ({ status }) => {
  let color: 'default' | 'primary' | 'success' | 'error' = 'default';

  switch (status) {
    case 'Em Aberto':
      color = 'default';
      break;
    case 'Em Andamento':
      color = 'primary';
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

  return <Chip label={status} color={color} />;
};

export default CallStatusChip;
