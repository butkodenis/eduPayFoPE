import { Box, Container } from '@mui/material';

const Login = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'lightblue',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Sign in</h1>

      <p>Welcome to the login page!</p>
    </Box>
  );
};

export default Login;
