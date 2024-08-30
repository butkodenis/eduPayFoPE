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

import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormCreateStudents = ({ handleClose }) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    toast.success('Студент успішно доданий!');
    handleClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} locale="uk">
      <Box
        component={'form'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 800,
          padding: 4,
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box sx={{ display: 'flex', gap: 1, width: '100%', marginY: 1 }}>
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
                margin="normal"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
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
                margin="normal"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
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
                margin="normal"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </Box>
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
              margin="normal"
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Box sx={{ display: 'flex', gap: 1, width: '100%', marginY: 1 }}>
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
                margin="normal"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
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
                margin="normal"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </Box>
        <Controller
          name="passportIssued"
          control={control}
          defaultValue=""
          rules={{ required: "Це поле є обов'язковим" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Ким виданий паспорт"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Додати студента
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default FormCreateStudents;
