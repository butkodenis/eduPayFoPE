import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

export default function FormCreateCourses({ handleClose }) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      age: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <Box
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 600,
        padding: 4,
        backgroundColor: 'white',
      }}
    >
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
      <Controller
        name="courseType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="courseType">Course Type</InputLabel>
            <Select {...field} labelId="courseType" label="Course Type">
              <MenuItem value="Undergraduate">Undergraduate</MenuItem>
              <MenuItem value="Postgraduate">Postgraduate</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Add Course
      </Button>
      <ToastContainer />
    </Box>
  );
}
