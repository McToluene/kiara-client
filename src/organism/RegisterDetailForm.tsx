import { TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface RegisterDetails {
  username: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterDetailForm() {
  // Create state variables to hold the values of the text fields
  const [registerDetails, setRegisterDetails] = useState<RegisterDetails>({
    username: '',
    password: '',
    confirmPassword: '',
  });

  // Function to handle changes in the text fields and update the state variables
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setRegisterDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // useEffect hook to save the values to localStorage when they change
  useEffect(() => {
    localStorage.setItem('registerDetails', JSON.stringify(registerDetails));
  }, [registerDetails]);

  return (
    <>
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        size="small"
        margin="normal"
        value={registerDetails.username}
        onChange={handleInputChange}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        size="small"
        margin="normal"
        value={registerDetails.password}
        onChange={handleInputChange}
      />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        variant="outlined"
        size="small"
        margin="normal"
        value={registerDetails.confirmPassword}
        onChange={handleInputChange}
      />
    </>
  );
}
