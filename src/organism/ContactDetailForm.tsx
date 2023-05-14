import { TextField } from '@mui/material';

export default function ContactDetailForm() {
  return (
    <>
      <TextField
        id='username'
        label='Mobile Phone number'
        variant='outlined'
        size='small'
        margin='normal'
      />
      <TextField
        id='password'
        label='Home Phone number'
        variant='outlined'
        size='small'
        margin='normal'
      />
      <TextField
        id='password'
        label='Work Phone number'
        variant='outlined'
        size='small'
        margin='normal'
      />
      <TextField
        id='streetAddress'
        label='Street address'
        variant='outlined'
        size='small'
        margin='normal'
      />
      <TextField id='city' label='City' variant='outlined' size='small' margin='normal' />
      <TextField
        id='postalCode'
        label='Post code'
        variant='outlined'
        size='small'
        margin='normal'
      />
    </>
  );
}
