import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Container, TextField, Button, Avatar } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
        data,
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message); // Успешное уведомление
      console.log(response.data);
      navigate('/'); // Переход на главную страницу
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Ошибка при отправке данных на сервер'
      ); // Ошибка уведомления
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 4,
            backgroundColor: 'white',
          }}
        >
          <h3>Увійти до системи</h3>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email обов'язковий" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Електронна пошта"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={
                    fieldState.error ? fieldState.error.message : null
                  }
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "Пароль обов'язковий" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Пароль"
                  type="password"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={
                    fieldState.error ? fieldState.error.message : null
                  }
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Увійти
            </Button>
          </form>
        </Box>
      </Container>
      <ToastContainer /> {/* Контейнер для отображения уведомлений */}
    </Box>
  );
};

export default Login;
