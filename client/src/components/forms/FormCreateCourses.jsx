import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

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
      component="form"
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              {...field}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          )}
        />
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Name" />}
        />
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Description" />}
        />
      </FormControl>

      <Button variant="contained" color="primary" type="submit">
        Add Course
      </Button>
    </Box>
  );
}
