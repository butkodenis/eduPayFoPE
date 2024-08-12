import { Box, Container, TextField, Button, Avatar } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Здесь можно будет обрабатывать данные
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
            borderRadius: 2,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3>Увійти</h3>
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
