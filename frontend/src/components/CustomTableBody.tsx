import styled from '@emotion/styled';
import { Delete, Edit } from '@mui/icons-material';
import { IconButton, TableBody, TableCell, TableRow, Tooltip, useTheme } from '@mui/material';
import React, { ReactNode, useContext } from 'react';
import { ModalContext } from '../context/ModalProvider';
import CallStatusChip from './CallStatusChip';

interface CustomTableBodyProps {
  visibleRows: any[];
  emptyRows: number;
  showActions?: boolean;
}

const CustomTableBody: React.FC<CustomTableBodyProps> = ({ visibleRows, emptyRows, showActions = true }) => {
  const theme = useTheme();
  const { openModal } = useContext(ModalContext);

  const DeleteButton = styled(IconButton)({
    color: theme.palette.error.main,
  });

  const handleEditClick = () => {
    // Lógica de edição aqui
    openModal();
  };

  const handleDeleteClick = () => {
    // Lógica de exclusão aqui
    openModal();
  };

  return (
    <TableBody>
      {visibleRows.map((row, index) => (
        <TableRow
          key={index}
          sx={{
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
              transition: 'background-color 0.3s ease',
            },
          }}
        >
          {Object.entries(row).map(([key, value]) => (
            <TableCell key={key} align="center" style={{ paddingRight: '42px' }}>
              {key === 'status' ? (
                <CallStatusChip status={value as string} />
              ) : (
                value as ReactNode
              )}
            </TableCell>
          ))}
          {showActions && (
            <TableCell align="center">
              <Tooltip title="Editar" arrow>
                <IconButton onClick={handleEditClick}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip title="Excluir" arrow>
                <DeleteButton onClick={handleDeleteClick}>
                  <Delete />
                </DeleteButton>
              </Tooltip>
            </TableCell>
          )}
        </TableRow>
      ))}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default CustomTableBody;
