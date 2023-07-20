import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, Stack, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const AboutPatientForm = () => {
  const [gender, setGender] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <Stack
      component='form'
      sx={{
        width: '30ch',
      }}
      noValidate
      autoComplete='off'
    >
      <TextField id='firstName' label='First Name' variant='outlined' margin='normal' className="md:w-[358px]"/>
      <TextField id='lastName' label='Last Name' variant='outlined' margin='normal' className="md:w-[358px]"/>
      <TextField id='phoneNumber' label='Phone Number' variant='outlined' margin='normal' className="md:w-[358px]"/>
      <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={gender}
          label="Gender"
          onChange={handleChange}
          className="md:w-[358px]"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>

      <TextField id='email' label='Email' variant='outlined' margin='normal' className="md:w-[358px]"/>
      <TextField id='dob' label='Date of birth' variant='outlined' margin='normal' type='date' className="md:w-[358px]"/>
      <TextField id='street' label='Street address' variant='outlined' margin='normal' className="md:w-[358px]"/>
      <TextField id='city' label='City' variant='outlined' margin='normal' className="md:w-[358px]"/>
      <TextField id='postCode' label='Post code' variant='outlined' margin='normal' className="md:w-[358px]"/>
    </Stack>
    </div>
  )
}

export default AboutPatientForm