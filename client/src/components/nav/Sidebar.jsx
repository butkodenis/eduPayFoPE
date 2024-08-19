import React from 'react';
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

import { Link } from 'react-router-dom';

const Sidebar = () => {
  const handleLogout = () => {
    // Логика выхода
    console.log('Logout');
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
          <Typography variant="body1">Welcome to the sidebar!</Typography>
        </Box>
        <Accordion>
          <AccordionSummary>
            <Typography>Інститут</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem button component={Link} to="/students">
                <ListItemText primary="Студенти" />
              </ListItem>
              <ListItem button component={Link} to="/courses">
                <ListItemText primary="Курси" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
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
