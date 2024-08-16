import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Institute from './components/pages/Institute';
import Login from './components/pages/Login';
import PrivateRoute from './components/pages/PrivateRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PrivateRoute element={<Home />} />} />
            <Route path="/institute" element={<Institute />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
