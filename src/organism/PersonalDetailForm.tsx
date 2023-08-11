import { 
  // InputLabel, MenuItem, Select, SelectChangeEvent, 
  TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface PersonalDetails {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
}

export default function PersonalDetailForm() {
  // const [gender, setGender] = useState('')
  // Create state variables to hold the values of the text fields
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
  });

  // Function to handle changes in the text fields and update the state variables
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setPersonalDetails((prevState) => ({
      ...prevState,
      // gender,
      [id]: value,
    }));
  };

  // const handleChange = (event: SelectChangeEvent) => {
  //   setGender(event.target.value);
  // };

  // useEffect hook to save the values to localStorage when they change
  useEffect(() => {
    localStorage.setItem('personalDetails', JSON.stringify(personalDetails));
  }, [personalDetails]);

  return (
    <>
      <TextField
        id="firstName"
        label="First name"
        variant="outlined"
        size="small"
        margin="normal"
        value={personalDetails.firstName}
        onChange={handleInputChange}
      />
      <TextField
        id="lastName"
        label="Last name"
        variant="outlined"
        size="small"
        margin="normal"
        value={personalDetails.lastName}
        onChange={handleInputChange}
      />
      <TextField
        id="gender"
        label="Gender"
        variant="outlined"
        size="small"
        margin="normal"
        name='gender'
        value={personalDetails.gender}
        onChange={handleInputChange}
      />
      {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={gender}
          label="Gender"
          onChange={handleChange}
          size="small"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select> */}
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        size="small"
        name='email'
        margin="normal"
        value={personalDetails.email}
        onChange={handleInputChange}
      />
    </>
  );
}
