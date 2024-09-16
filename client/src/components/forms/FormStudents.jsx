import { Box, Button, Grid, TextField } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';

dayjs.locale('uk'); // use Ukrainian locale for dayjs

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const FormStudents = ({
  studentData = {},
  isEditMode = false,
  handleCloseModal,
}) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      studentFirstName: studentData.studentFirstName || '',
      studentLastName: studentData.studentLastName || '',
      studentMiddleName: studentData.studentMiddleName || '',
      studentPhone: studentData.studentPhone || '',
      passportSeries: studentData.studentPassportSeries || '',
      passportNumber: studentData.studentPassportNumber || '',
      passportDate: studentData.studentPassportDate || null,
      passportLocation: studentData.studentPassportLocation || '',
    },
  });

  const onSubmit = async (data) => {
    console.log(data);

    try {
      if (isEditMode) {
        const response = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/api/student/update/${studentData.id}`,
          data,
          {
            withCredentials: true,
          }
        );
        toast.success(response.data.message);
        handleCloseModal();
      } else {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/student/create`,
          data,
          {
            withCredentials: true,
          }
        );
        toast.success(response.data.message);

        handleCloseModal();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Помилка при відправці даних на сервер'
      );
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} locale="ukr">
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: 800,
          padding: 2,
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Controller
              name="studentFirstName"
              control={control}
              defaultValue=""
              rules={{ required: "Це поле є обов'язковим" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Ім'я"
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Controller
              name="studentLastName"
              control={control}
              defaultValue=""
              rules={{ required: "Це поле є обов'язковим" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Прізвище"
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Controller
              name="studentMiddleName"
              control={control}
              defaultValue=""
              rules={{ required: "Це поле є обов'язковим" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="По-батькові"
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="studentPhone"
              control={control}
              defaultValue=""
              rules={{ required: "Це поле є обов'язковим" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Телефон"
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Controller
              name="passportSeries"
              control={control}
              defaultValue=""
              rules={{ required: "Це поле є обов'язковим" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Серія паспорту"
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Controller
              name="passportNumber"
              control={control}
              defaultValue=""
              rules={{ required: "Це поле є обов'язковим" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Номер паспорту"
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Controller
              name="passportDate"
              control={control}
              defaultValue={null}
              rules={{ required: "Це поле є обов'язковим" }}
              render={({ field, fieldState: { error } }) => (
                <DatePicker
                  {...field}
                  label="Дата видачі паспорту"
                  format="DD.MM.YYYY" // Set the desired format
                  variant="outlined"
                  fullWidth
                  value={field.value ? dayjs(field.value) : null}
                  onChange={(date) =>
                    field.onChange(
                      date ? dayjs(date).format('YYYY-MM-DD') : null
                    )
                  }
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="passportLocation"
              control={control}
              defaultValue=""
              rules={{ required: "Це поле є обов'язковим" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Ким виданий паспорт"
                  variant="outlined"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          {isEditMode ? 'Редагувати студента' : 'Додати студента'}
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default FormStudents;
