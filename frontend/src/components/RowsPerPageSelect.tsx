import { Box, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import React from 'react';

interface RowsPerPageSelectProps {
  value: number;
  onChange: (value: number) => void;
}

const RowsPerPageSelect: React.FC<RowsPerPageSelectProps> = ({ value, onChange }) => {
  const handleRowsPerPageChange = (event: SelectChangeEvent<number>) => {
    onChange(Number(event.target.value));
  };

  return (
    <Box>
      <Typography variant="h6" component="span" sx={{ marginRight: '16px' }}>
        Linhas por página:
      </Typography>
      <Select value={value} onChange={handleRowsPerPageChange}>
        {[5, 10, 20, 50, 100].map((rowsPerPage) => (
          <MenuItem value={rowsPerPage} key={rowsPerPage}>
            {rowsPerPage}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default RowsPerPageSelect;
