import { Link, Outlet } from 'react-router-dom';
import Appbar from '../nav/Appbar';
import { Box } from '@mui/material';

import Sidebar from '../nav/Sidebar';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <Outlet />
    </Box>
  );
};

export default Layout;
