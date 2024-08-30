import { useState } from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';

import FormCreateStudents from '../forms/FormCreateStudents';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Students = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <h1>Студенти</h1>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Додати студента
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',

            bgcolor: 'background.paper',
          }}
        >
          <FormCreateStudents handleClose={handleClose} />
        </Box>
      </Modal>
      <ToastContainer />
    </Box>
  );
};

export default Students;
