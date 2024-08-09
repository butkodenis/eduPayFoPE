import { Link, Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import Sidebar from '../Sidebar';

const Layout = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Sidebar />
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
