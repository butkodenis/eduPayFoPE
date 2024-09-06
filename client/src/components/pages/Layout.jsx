import { Link, Outlet } from 'react-router-dom';

import { Box, Grid } from '@mui/material';

import Sidebar from '../nav/Sidebar';
import TableTest from '../tables/TableTest';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Боковое меню */}
      <Sidebar />

      {/* Основной контент */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: '250px', // добавляем отступ для основного контента
          padding: 2,
          overflow: 'auto',
        }}
      >
        {/* Содержимое основного контента */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
