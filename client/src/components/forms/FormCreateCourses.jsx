import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  FormHelperText,
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
          rules={{
            required: 'Выберите тип курса',
            validate: (value) => value !== '' || 'Выберите значение',
          }}
          render={({ field, fieldState: { error } }) => (
            <FormControl
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!error}
            >
              <InputLabel id="courseType">Тип курса</InputLabel>
              <Select {...field} labelId="courseType" label="Course Type">
                <MenuItem value="Тематичне удосконалення">
                  Тематичне удосконалення
                </MenuItem>
                <MenuItem value="Спеціалізація">Спеціалізація</MenuItem>
              </Select>
              {error && <FormHelperText>{error.message}</FormHelperText>}
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
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel id="courseDepartment">Кафедра</InputLabel>
              <Select {...field} labelId="courseDepartment" label="Department">
                <MenuItem value="кафедра лабораторної медицини">
                  кафедра лабораторної медицини
                </MenuItem>
                <MenuItem value="кафедра дитячих хвороб">
                  кафедра дитячих хвороб
                </MenuItem>
                <MenuItem value="кафедра анестезіології та інтенсивної терапії">
                  кафедра анестезіології та інтенсивної терапії
                </MenuItem>
                <MenuItem value="кафедра акушерства та гінекології">
                  кафедра акушерства та гінекології
                </MenuItem>
                <MenuItem value="кафедра загальної  практики-сімейної медицини та неврології ">
                  кафедра загальної практики-сімейної медицини та неврології
                </MenuItem>
              </Select>
            </FormControl>
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
