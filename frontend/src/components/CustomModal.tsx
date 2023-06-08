import { Close } from '@mui/icons-material';
import { Box, IconButton, Modal } from '@mui/material';
import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalProvider';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode
}

const CustomModal: React.FC<CustomModalProps> = ({ children }) => {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box display="flex" justifyContent="flex-end" sx={{ mb: 3 }}>
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
