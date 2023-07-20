import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Header from './components/Header/Header';
import { Box } from '@mui/material';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import BookAppointment from './pages/Dashboard/BookAppointment';

function App() {
  return (
    <div className='App' style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Box style={{ flexGrow: 1 }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/book-appointment' element={<BookAppointment />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
