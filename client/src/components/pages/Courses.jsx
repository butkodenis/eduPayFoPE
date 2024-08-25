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

import FormCourses from '../forms/FormCourses';

const Courses = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <div>
      <h1>Courses</h1>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Course
        </Button>
      </Box>

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
          <FormCourses />
          <ToastContainer />
        </Box>
      </Modal>
    </div>
  );
};

export default Courses;
