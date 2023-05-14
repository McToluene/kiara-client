import { TextField } from '@mui/material';

export default function RegisterDetailForm() {
  return (
    <>
      <TextField id='firstName' label='Username' variant='outlined' size='small' margin='normal' />
      <TextField id='lastName' label='Passord' variant='outlined' size='small' margin='normal' />
      <TextField id='gender' label='Passord' variant='outlined' size='small' margin='normal' />
    </>
  );
}
