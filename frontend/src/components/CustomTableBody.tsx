import { TableBody, TableCell, TableRow } from '@mui/material';
import React, { ReactNode } from 'react';

interface CustomTableBodyProps {
  visibleRows: any[];
  emptyRows: number;
}

const CustomTableBody: React.FC<CustomTableBodyProps> = ({ visibleRows, emptyRows }) => {
  return (
    <TableBody>
      {visibleRows.map((row, index) => (
        <TableRow key={index}>
          {Object.values(row).map((value, index) => (
            <TableCell key={index} align="right">
              {value as ReactNode}
            </TableCell>
          ))}
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
