import { useTheme } from '@emotion/react';
import { Close } from '@mui/icons-material';
import { Box, IconButton, Modal, Typography, useMediaQuery } from '@mui/material';
import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalProvider';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ title, children }) => {
  const { isModalOpen, closeModal } = useContext(ModalContext);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(min-width: 600px)');

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      sx={{
        width: isSmallScreen ? '100vw' : 'auto',
        height: isSmallScreen ? '100vh' : 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          position: 'relative', // Adicionando posicionamento relativo para alinhar o título
        }}
      >
        <Box display="flex" justifyContent="flex-end" sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton onClick={closeModal} sx={{ position: 'absolute', top: '8px', right: '8px' }}>
            <Close />
          </IconButton>
        </Box>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
