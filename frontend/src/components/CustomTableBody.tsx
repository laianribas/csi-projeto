import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import {
  Collapse,
  Grid,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  useTheme
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalProvider';
import CallStatusChip from './CallStatusChip';

interface CustomTableBodyProps {
  visibleRows: { data: any; details: any }[];
  emptyRows: number;
  form: React.ElementType;
}

const CustomTableBody: React.FC<CustomTableBodyProps> = ({ visibleRows, emptyRows, form: FormComponent }) => {
  const theme = useTheme();
  const { openModal } = useContext(ModalContext);
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [editingRows, setEditingRows] = useState<number[]>([]);
  const [editedDetails, setEditedDetails] = useState<any>({});

  const handleShowDetailsClick = (index: number) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((rowIndex) => rowIndex !== index));
      setEditingRows(editingRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  const handleEditDetails = (index: number) => {
    if (editingRows.includes(index)) {
      // Lógica para confirmar a edição
      console.log('Confirmar edição:', editedDetails);
    } else {
      // Lógica para iniciar a edição
      setEditingRows([...editingRows, index]);
    }
  };

  const handleCancelEdit = (index: number) => {
    setEditingRows(editingRows.filter((rowIndex) => rowIndex !== index));
    setExpandedRows(expandedRows.filter((rowIndex) => rowIndex !== index));
    setEditedDetails((prevState: any) => {
      const updatedDetails = { ...prevState };
      delete updatedDetails[index];
      return updatedDetails;
    });
  };

  const handleDeleteDetails = (index: number) => {
    // Lógica para excluir os detalhes da linha aqui
    console.log('Excluir detalhes:', visibleRows[index]);
  };

  const handleChange = (index: number, key: string, value: string) => {
    setEditedDetails({
      ...editedDetails,
      [index]: {
        ...editedDetails[index],
        [key]: value
      }
    });
  };
  return (
    <TableBody>
      {visibleRows.map((row, index) => {
        const isExpanded = expandedRows.includes(index);
        const isEditing = editingRows.includes(index);
        const editedRowDetails = editedDetails[index] || {};

        return (
          <React.Fragment key={index}>
            <TableRow
              key={index}
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                  transition: 'background-color 0.3s ease',
                },
              }}
            >
              {Object.entries(row.data).map(([key, value], columnIndex) => (
                <TableCell key={key} align="center" style={{ paddingRight: '42px' }} variant="body">
                  {key === 'status' ? (
                    <CallStatusChip status={value as string} />
                  ) : key === 'active' ? (
                    <CallStatusChip status={value ? 'Ativo' : 'Inativo'} />
                  ) : (
                    value as string
                  )}
                </TableCell>
              ))}
              <TableCell sx={{ textAlign: 'center' }}>
                <IconButton onClick={() => handleShowDetailsClick(index)}>
                  {isExpanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={Object.keys(row.data).length + 1}>
                <Collapse in={isExpanded} timeout="auto" unmountOnExit >
                  <Grid container sx={{ margin: '0 auto' }}>
                    <FormComponent rowDetails={row.details} handleChange={handleChange} />
                  </Grid>
                </Collapse>
              </TableCell>
            </TableRow>
          </React.Fragment>
        );
      })}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={Object.keys(visibleRows[0].data).length + 1} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default CustomTableBody;
