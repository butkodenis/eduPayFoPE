import { Box, Button, Grid, TextField } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormStudents = ({ studentData = {}, isEditMode = false }) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      studentFirstName: studentData.studentFirstName || '',
      studentLastName: studentData.studentLastName || '',
      studentMiddleName: studentData.studentMiddleName || '',
      studentPhone: studentData.studentPhone || '',
      passportSeries: studentData.passportSeries || '',
      passportNumber: studentData.passportNumber || '',
      passportDate: studentData.passportDate || null,
      passportLocation: studentData.studentPassportLocation || '',
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
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
  );
};

export default FormStudents;
