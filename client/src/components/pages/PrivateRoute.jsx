import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const isAuthenticated = () => {
  // Получение токена из куков
  const token = Cookies.get('token');
  return !!token;
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
