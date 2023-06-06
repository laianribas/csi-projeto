import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

interface CreateButtonProps {
  onClick: () => void;
  buttonName: string;
}

const CreateButton: React.FC<CreateButtonProps> = ({ onClick, buttonName }) => {
  return (
    <Button variant="contained" startIcon={<Add />} onClick={onClick}>
      {buttonName}
    </Button>
  );
};

export default CreateButton;
