import { useState } from 'react';
import { Box, Typography, Button, Modal, Grid } from '@mui/material';

import FormCreateStudents from '../forms/FormCreateStudents';
import TableStudents from '../tables/TableStudents';

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
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h4" gutterBottom>
            Студенти
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            size="small"
          >
            Додати студента
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <TableStudents />
      </Grid>

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
