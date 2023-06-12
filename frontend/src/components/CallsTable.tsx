import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
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
}

const CallsTable: React.FC<CallsTableProps> = ({ columns, calls }) => {
  const limitedCalls = calls.slice(0, 5);

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} align="center">
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {limitedCalls.map((call) => (
            <TableRow key={call.id}>
              {columns.map((column) => (
                <TableCell key={column.id} align="center">
                  {column.id === 'status' ? (
                    <CallStatusChip status={call[column.id]} />
                  ) : (
                    call[column.id]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CallsTable;
