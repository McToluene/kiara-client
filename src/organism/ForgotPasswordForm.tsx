import { Stack, TextField, Typography } from '@mui/material';
import StyledButton from '../components/Button/CustomButton';

export default function ForgotPasswordForm() {
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
        Forgot password
      </Typography>
      <Typography
        variant='subtitle2'
        gutterBottom
        sx={{
          fontFamily: 'Raleway',
          color: 'black',
        }}
      >
        Provide your email to recover your account
      </Typography>
      <TextField id='username' label='Username' variant='outlined' size='small' margin='normal' />
      <StyledButton variant='contained'>Reset Passworx</StyledButton>
    </Stack>
  );
}
