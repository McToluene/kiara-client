import { TextField } from '@mui/material';

export default function PersonalDetailForm() {
  return (
    <>
      <TextField
        id='firstName'
        label='First name'
        variant='outlined'
        size='small'
        margin='normal'
      />
      <TextField id='lastName' label='Last name' variant='outlined' size='small' margin='normal' />
      <TextField id='gender' label='Gender' variant='outlined' size='small' margin='normal' />
      <TextField id='email' label='Email' variant='outlined' size='small' margin='normal' />
    </>
  );
}
