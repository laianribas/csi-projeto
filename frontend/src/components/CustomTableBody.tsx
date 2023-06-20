import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import {
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  useTheme
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalProvider';
import CallStatusChip from './CallStatusChip';

interface CustomTableBodyProps {
  visibleRows: { data: any; details: any }[];
  emptyRows: number;
}

const CustomTableBody: React.FC<CustomTableBodyProps> = ({ visibleRows, emptyRows }) => {
  const theme = useTheme();
  const { openModal } = useContext(ModalContext);
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const handleShowDetailsClick = (index: number) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  const handleEditDetails = (index: number) => {
    // Lógica para editar os detalhes da linha aqui
    console.log('Editar detalhes:', visibleRows[index]);
  };

  const handleDeleteDetails = (index: number) => {
    // Lógica para excluir os detalhes da linha aqui
    console.log('Excluir detalhes:', visibleRows[index]);
  };

  return (
    <TableBody>
      {visibleRows.map((row, index) => (
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
            <TableCell>
              <IconButton onClick={() => handleShowDetailsClick(index)}>
                {expandedRows.includes(index) ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={Object.keys(row.data).length + 1}>
              <Collapse in={expandedRows.includes(index)} timeout="auto" unmountOnExit>

                <Grid container spacing={2}>
                  {Object.entries(row.details).map(([key, value]) => (
                    <Grid item xs={4} key={key}>
                      <TextField
                        label={key}
                        value={value}
                        disabled
                        multiline
                        rows={key === 'description' ? 4 : 1}
                        fullWidth
                        variant="filled"
                        sx={{ my: 2 }}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Box sx={{ textAlign: 'right', my: 2 }}>
                  <Button variant="contained" color="warning" onClick={() => handleEditDetails(index)}>
                    Editar
                  </Button>
                  <Button variant="contained" color="error" onClick={() => handleDeleteDetails(index)} sx={{ ml: 2 }}>
                    Excluir
                  </Button>
                </Box>

              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      ))}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={Object.keys(visibleRows[0].data).length + 1} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default CustomTableBody;
