import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, Stack, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface PatientDetails {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  email: string;
  dob: string;
  street: string;
  city: string;
  postCode: string;
}

const AboutPatientForm = () => {
  const [patientDetails, setPatientDetails] = useState<PatientDetails>(() => {
    const storedDetails = localStorage.getItem('patientDetails');
    return storedDetails
      ? JSON.parse(storedDetails)
      : {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          gender: '',
          email: '',
          dob: '',
          street: '',
          city: '',
          postCode: '',
        };
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    setPatientDetails((prevState) => ({
      ...prevState,
      [name as string]: value as string,
    }));
  };

  // useEffect hook to save the form values to localStorage when they change
  useEffect(() => {
    localStorage.setItem('patientDetails', JSON.stringify(patientDetails));
  }, [patientDetails]);

  return (
    <div>
      <Stack
        component="form"
        sx={{
          width: '30ch',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          margin="normal"
          className="md:w-[358px]"
          name="firstName"
          value={patientDetails.firstName}
          onChange={handleChange}
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          margin="normal"
          className="md:w-[358px]"
          name="lastName"
          value={patientDetails.lastName}
          onChange={handleChange}
        />
        <TextField
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          margin="normal"
          className="md:w-[358px]"
          name="phoneNumber"
          value={patientDetails.phoneNumber}
          onChange={handleChange}
        />
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={patientDetails.gender}
          label="Gender"
          onChange={handleChange as (event: SelectChangeEvent<string>) => void}
          className="md:w-[358px]"
          name="gender"
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>

        <TextField
          id="email"
          label="Email"
          variant="outlined"
          margin="normal"
          className="md:w-[358px]"
          name="email"
          value={patientDetails.email}
          onChange={handleChange}
        />
        <TextField
          id="dob"
          label="Date of birth"
          variant="outlined"
          margin="normal"
          type="date"
          className="md:w-[358px]"
          name="dob"
          value={patientDetails.dob}
          onChange={handleChange}
        />
        <TextField
          id="street"
          label="Street address"
          variant="outlined"
          margin="normal"
          className="md:w-[358px]"
          name="street"
          value={patientDetails.street}
          onChange={handleChange}
        />
        <TextField
          id="city"
          label="City"
          variant="outlined"
          margin="normal"
          className="md:w-[358px]"
          name="city"
          value={patientDetails.city}
          onChange={handleChange}
        />
        <TextField
          id="postCode"
          label="Post code"
          variant="outlined"
          margin="normal"
          className="md:w-[358px]"
          name="postCode"
          value={patientDetails.postCode}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default AboutPatientForm;
