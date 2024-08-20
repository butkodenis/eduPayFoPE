import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import {
  Box,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ApartmentIcon from '@mui/icons-material/Apartment';

import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const clearCookies = () => {
    // Удаление всех куков
    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
  };

  const handleLogout = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_BASE_URL}/api/auth/logout`); // Отправка POST запроса на сервер для выхода
      clearCookies(); // Удаление куков

      navigate('/login'); // Перенаправление на страницу входа
    } catch (error) {
      console.error('Error during logout:', error);
      // Обработка ошибок, например, показать уведомление
    }
  };

  return (
    <Toolbar>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="body1">
            {' '}
            Запорізький державний медико-фармацевтичний університет
          </Typography>
        </Box>

        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/students">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Студенти" />
          </ListItem>
          <ListItem button component={Link} to="/courses">
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Курси" />
          </ListItem>
          <ListItem button component={Link} to="/company">
            <ListItemIcon>
              <ApartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Юр. лица" />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/balance">
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Баланс" />
          </ListItem>
          <ListItem button component={Link} to="/payments">
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Плетежи" />
          </ListItem>
        </List>
        <Box sx={{ mt: 'auto', mb: 2, textAlign: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Выйти
          </Button>
        </Box>
      </Drawer>
    </Toolbar>
  );
};

export default Sidebar;
