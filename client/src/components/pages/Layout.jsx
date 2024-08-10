import { Link, Outlet } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

import Sidebar from '../Sidebar';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            EduPay
          </Typography>
          <Button variant="contained">
            <Link to="/" underline="none">
              Home
            </Link>
          </Button>

          <Button variant="contained">
            <Link to="/login" underline="none">
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
};

export default Layout;
