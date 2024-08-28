import { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  FormControl,
  Modal,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormCreateCourses from '../forms/FormCreateCourses';
import TableCourses from '../tables/TableCourses';

const Courses = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        width: '100%',
        padding: 2,
      }}
    >
      <h1>Курси</h1>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Додати курс
        </Button>
      </Box>
      <TableCourses />
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 600,
            padding: 4,
            backgroundColor: 'white',
          }}
        >
          <FormCreateCourses handleClose={handleClose} />
          <ToastContainer />
        </Box>
      </Modal>
    </Box>
  );
};

export default Courses;
