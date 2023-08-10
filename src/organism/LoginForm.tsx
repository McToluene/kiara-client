import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { FormEvent, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import StyledButton from '../components/Button/CustomButton';
import { Stack, TextField, Typography } from '@mui/material';

import { login } from '../server/auth';

const schema = yup.object().shape({
  email: yup.string().nullable(),
  password: yup.string().required('Enter a valid password').min(6).nullable(),
});

export default function LoginForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const formInput = useRef<HTMLInputElement>(null);

  const mutation = useMutation(login, {
    onSuccess: () => {
      navigate('/dashboard');
    },
    onError: (e: unknown) => {
      if (e instanceof Error) {
        toast.error(e.message);
      }
    },
  });

  const onFinish = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const emailInput = form.querySelector<HTMLInputElement>('#username');
    const passwordInput = form.querySelector<HTMLInputElement>('#password');

    if (emailInput && passwordInput) {
      const values: {
        email: string;
        password: string;
      } = {
        email: emailInput.value,
        password: passwordInput.value,
      };

      schema
      .validate(values)
      .then(() => {
        mutation.mutate(values);
      })
      .catch((e) => {
        toast.error(e.message);
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 50000);
    }
  };

  return (
    <Stack
      onSubmit={onFinish}
      component="form"
      sx={{
        width: '30ch',
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
      >
        Log in
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
        sx={{
          fontFamily: 'Raleway',
          color: 'black',
        }}
      >
        Proceed with your patient account
      </Typography>
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        size="small"
        margin="normal"
        name="email"
        ref={formInput}
        type="email"
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        size="small"
        margin="normal"
        name="password"
        ref={formInput}
        type="password"
      />
      <Link to="/forgot-password">
        Forgot Password?
      </Link>
      
      <StyledButton type="submit" isLoading={isLoading} onClick={() => {}}>
        {isLoading ? 'Loading...' : 'Login'}
      </StyledButton>
    </Stack>
  );
}
