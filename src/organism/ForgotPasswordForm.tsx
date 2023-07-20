import { Stack, TextField } from '@mui/material';
import StyledButton from '../components/Button/CustomButton';

export default function ForgotPasswordForm() {
  return (
    <Stack
      component="form"
      sx={{
        width: '35ch',
      }}
      noValidate
      autoComplete="off"
    >
      <h1 className="text-3xl font-bold">Forgot password</h1>
      <h5>Provide your email to recover your account</h5>
      <div className="mt-10"></div>
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        size="small"
        margin="normal"
      />
      <div className="mt-5"></div>
      <StyledButton variant="contained">Reset Password</StyledButton>
    </Stack>
  );
}
