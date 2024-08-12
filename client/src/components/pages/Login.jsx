import axios from 'axios';
import { Box, Container, TextField, Button, Avatar } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/auth/login`,
        data
      );
      console.log(response.data); // Обработка ответа от сервера
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
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
    </Box>
  );
};

export default Login;
