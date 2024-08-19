import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Students from './components/pages/Students';
import Courses from './components/pages/Сourses';
import Balance from './components/pages/Balance';
import Payments from './components/pages/Payments';
import Login from './components/pages/Login';
import PrivateRoute from './components/pages/PrivateRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PrivateRoute element={<Home />} />} />
            <Route
              path="/students"
              element={<PrivateRoute element={<Students />} />}
            />
            <Route
              path="/courses"
              element={<PrivateRoute element={<Courses />} />}
            />
            <Route
              path="/balance"
              element={<PrivateRoute element={<Balance />} />}
            />
            <Route
              path="/payments"
              element={<PrivateRoute element={<Payments />} />}
            />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
