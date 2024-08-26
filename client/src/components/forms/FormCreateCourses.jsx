import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from '@mui/material';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
dayjs.locale('uk'); // use Ukrainian locale for dayjs
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm, Controller } from 'react-hook-form';

export default function FormCreateCourses({ handleClose }) {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} locale="uk">
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
          name="courseType"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel id="courseType">Тип курса</InputLabel>
              <Select {...field} labelId="courseType" label="Course Type">
                <MenuItem value="Тематичне удосконалення">
                  Тематичне удосконалення
                </MenuItem>
                <MenuItem value="Спеціалізація">Спеціалізація</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <Controller
          name="courseName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Назва курсу"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="coursePrice"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Вартість курсу"
              variant="outlined"
              type="number"
              fullWidth
              margin="normal"
              inputProps={{ min: 0, step: 100 }}
            />
          )}
        />
        <Controller
          name="coursePoints"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Бали"
              variant="outlined"
              type="number"
              fullWidth
              margin="normal"
              inputProps={{ min: 0, step: 1 }}
            />
          )}
        />
        <Controller
          name="courseDepartment"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Кафедра"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          )}
        />
        <Box sx={{ display: 'flex', gap: 2, width: '100%', marginY: 2 }}>
          <Controller
            name="courseDateStart"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="Дата початку"
                inputFormat="YYYY-MM-DD"
                clearable
                fullWidth
              />
            )}
          />
          <Controller
            name="courseDateEnd"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="Дата закінчення"
                inputFormat="YYYY-MM-DD"
                clearable
                fullWidth
              />
            )}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Зберегти
        </Button>
        <ToastContainer />
      </Box>
    </LocalizationProvider>
  );
}
