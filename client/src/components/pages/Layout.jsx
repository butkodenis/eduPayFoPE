import { Link, Outlet } from 'react-router-dom';

import { Box, Grid } from '@mui/material';

import Sidebar from '../nav/Sidebar';
import TableTest from '../tables/TableTest';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <Box
        sx={{
          flexGrow: 1, // добавляем растягивание основного контента
          marginLeft: '250px', // добавляем отступ для основного контента
          padding: 2, // добавляем внутренний отступ для основного контента
          overflow: 'auto', // добавляем прокрутку для основного контента
        }}
      >
        {/* Содержимое основного контента */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
