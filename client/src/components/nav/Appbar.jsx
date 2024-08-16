import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Appbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
      handleMenuClose(); // Закрытие меню
      navigate('/login'); // Перенаправление на страницу входа
    } catch (error) {
      console.error('Error during logout:', error);
      // Обработка ошибок, например, показать уведомление
    }
  };
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          EduPay
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link
            to="/institute"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button color="inherit">Institute</Button>
          </Link>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Accounting</Button>
          </Link>
        </Box>

        <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
          <AccountCircleIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
