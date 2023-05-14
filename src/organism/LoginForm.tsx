import { Link, Stack, TextField, Typography } from '@mui/material';
import StyledButton from '../components/Button/CustomButton';

export default function LoginForm() {
  return (
    <Stack
      component='form'
      sx={{
        width: '30ch',
      }}
      noValidate
      autoComplete='off'
    >
      <Typography
        variant='h3'
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
      >
        Log in
      </Typography>
      <Typography
        variant='subtitle2'
        gutterBottom
        sx={{
          fontFamily: 'Raleway',
          color: 'black',
        }}
      >
        Proceed with your patient account
      </Typography>
      <TextField id='username' label='Username' variant='outlined' size='small' margin='normal' />
      <TextField id='password' label='Password' variant='outlined' size='small' margin='normal' />
      <Link href='#' sx={{ marginBottom: '3em', marginTop: '.5em' }}>
        Forgot Password?
      </Link>
      <StyledButton variant='contained'>Login</StyledButton>
    </Stack>
  );
}
