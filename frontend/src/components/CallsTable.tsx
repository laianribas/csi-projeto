import { Delete, Edit } from '@mui/icons-material';
import { IconButton, TableContainer as MuiTableContainer, Paper, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import React, { useState } from 'react';
import CallStatusChip from './CallStatusChip';

export interface TableColumn {
  id: string;
  label: string;
}

export interface CallType {
  id: number;
  number: string;
  openingDate: string;
  status: string;
  responsible: string;
  [key: string]: any;
}

interface CallsTableProps {
  columns: TableColumn[];
  calls: CallType[];
  showActions?: boolean;
  rowLimit?: number;
}

const CallsTable: React.FC<CallsTableProps> = ({ columns, calls, showActions = true, rowLimit }) => {
  const [orderBy, setOrderBy] = useState<string>('');
  const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (columnId: string) => {
    if (orderBy === columnId) {
      setOrderDirection(orderDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setOrderBy(columnId);
      setOrderDirection('asc');
    }
  };

  const sortedCalls = calls.sort((a, b) => {
    if (orderBy === '') {
      return 0;
    }
    const valueA = a[orderBy];
    const valueB = b[orderBy];
    if (valueA < valueB) {
      return orderDirection === 'asc' ? -1 : 1;
    }
    if (valueA > valueB) {
      return orderDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const limitedCalls = rowLimit ? sortedCalls.slice(0, rowLimit) : sortedCalls;

  return (
    <MuiTableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} onClick={() => handleSort(column.id)} style={{ cursor: 'pointer' }}>
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={orderBy === column.id ? orderDirection : 'asc'}
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
            ))}
            {showActions && <TableCell>Ações</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {limitedCalls.map((call) => (
            <TableRow key={call.id}>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {column.id === 'status' ? (
                    <CallStatusChip status={call[column.id]} />
                  ) : (
                    call[column.id]
                  )}
                </TableCell>
              ))}
              {showActions && (
                <TableCell>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </MuiTableContainer>
  );
};

export default CallsTable;
