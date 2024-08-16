import { Link, Outlet } from 'react-router-dom';
import Appbar from '../nav/Appbar';
import { Box } from '@mui/material';

import Sidebar from '../nav/Sidebar';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Appbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Sidebar />
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
