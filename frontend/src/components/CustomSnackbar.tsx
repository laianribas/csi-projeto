import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';

interface CustomSnackbarProps {
  open: boolean;
  onClose: () => void;
  severity: 'error' | 'success' | 'info' | 'warning';
  message: string;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  onClose,
  severity,
  message,
}) => {
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  ));

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={onClose} severity={severity} style={{ fontSize: '16px' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
