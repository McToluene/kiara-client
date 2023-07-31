import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Header from './components/Header/Header';
import { Box } from '@mui/material';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import BookAppointment from './pages/Dashboard/BookAppointment';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="App"
        // style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <div className=''>
          <Header />
          <Box style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/book-appointment" element={<BookAppointment />} />
            </Routes>
          </Box>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
