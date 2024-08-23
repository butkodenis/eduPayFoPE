import { useState } from 'react';
import { Typography, Box, Button, Modal, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Courses = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 600,
            padding: 4,
            backgroundColor: 'white',
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="courseCode"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Course Code"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="courseDescription"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Course Description"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Button type="submit" variant="contained" color="primary">
              Add Course
            </Button>
          </form>
          <ToastContainer />
        </Box>
      </Modal>
    </div>
  );
};

export default Courses;
