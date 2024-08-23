import { Box, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormCourses = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
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
  );
};

export default FormCourses;
