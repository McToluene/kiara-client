import { TextField } from '@mui/material';

export default function MedicalDetailForm() {
  return (
    <>
      <TextField
        id='firstName'
        label='Date of birth'
        variant='outlined'
        size='small'
        margin='normal'
      />
      <TextField
        id='lastName'
        label='Medicare number'
        variant='outlined'
        size='small'
        margin='normal'
      />
      <TextField
        id='gender'
        label='Medicare line number'
        variant='outlined'
        size='small'
        margin='normal'
      />
    </>
  );
}
