import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import CallStatusChip from './CallStatusChip';

interface Ticket {
  id: number;
  numero: string;
  dataAbertura: string;
  status: string;
  responsavel: string;
}

interface RecentCallsTableProps {
  tickets: Ticket[];
}

const RecentCallsTable: React.FC<RecentCallsTableProps> = ({ tickets }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Número do Chamado</TableCell>
            <TableCell>Data de Abertura</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Responsável</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.numero}</TableCell>
              <TableCell>{ticket.dataAbertura}</TableCell>
              <TableCell>
                <CallStatusChip status={ticket.status} />
              </TableCell>
              <TableCell>{ticket.responsavel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentCallsTable;
