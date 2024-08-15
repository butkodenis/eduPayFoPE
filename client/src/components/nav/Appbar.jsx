import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Appbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          EduPay
        </Typography>

        <Link to="/" underline="none">
          <Button variant="contained">Home</Button>
        </Link>

        <Link to="/login" underline="none">
          <Button variant="contained">Login</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
