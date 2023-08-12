import * as yup from 'yup';
import { TextField } from '@mui/material';
import React, { useState, useEffect, FormEvent } from 'react';
import StyledButton from '../components/Button/CustomButton';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { createAccount } from '../server/auth';

interface RegisterDetails {
  username: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  dob: yup.string().nullable(),
  email: yup.string().nullable(),
  gender: yup.string().nullable(),
  username: yup.string().nullable(),
  password: yup.string().nullable(),
  firstName: yup.string().nullable(),
  lastName: yup.string().nullable(),
  medicareNumber: yup.number().nullable(),
  medicareLineNumber: yup.number().nullable(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  passcode: yup.string().nullable(),
  homePhone: yup.string().nullable(),
  workPhone: yup.string().nullable(),
  mobilePhone: yup.string().nullable(),
});

export default function RegisterDetailForm() {
  const [registerDetails, setRegisterDetails] = useState<RegisterDetails>({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setRegisterDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    localStorage.setItem('registerDetails', JSON.stringify(registerDetails));
  }, [registerDetails]);

  const personalDetail = localStorage.getItem('personalDetails');
  const contactDetail = localStorage.getItem('contactDetails');
  const medicalDetail = localStorage.getItem('medicalDetails');
  const registerDetail = localStorage.getItem('registerDetails');

  const personalData = personalDetail && JSON.parse(personalDetail);
  const contactData = contactDetail && JSON.parse(contactDetail);
  const medicalData = medicalDetail && JSON.parse(medicalDetail);
  const registerData = registerDetail && JSON.parse(registerDetail);
console.log("contactData", contactData)
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const mutation = useMutation(createAccount);

  const onFinish = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const values: {
      email: string;
      gender: string;
      firstName: string;
      lastName: string;
      city: string;
      homePhone: string;
      passcode: string;
      address: string;
      workPhone: string;
      dob: string;
      medicareNumber: number;
      medicareLineNumber: number;
      mobilePhone: string;
      username: string;
      password: string;
    } = {
      email: personalData?.email,
      gender: personalData?.gender,
      firstName: personalData?.firstName,
      lastName: personalData?.lastName,
      city: contactData?.city,
      homePhone: contactData?.homePhoneNumber,
      passcode: contactData?.postalCode,
      address: contactData?.streetAddress,
      workPhone: contactData?.workPhoneNumber,
      dob: medicalData?.dateOfBirth,
      medicareNumber: medicalData?.medicareLineNumber,
      medicareLineNumber: medicalData?.medicareNumber,
      mobilePhone: contactData?.workPhoneNumber,
      username: registerData?.username,
      password: registerData?.password,
    };
    console.log("values-1st:::" ,values)
    schema
      .validate(values)
      .then(() => {
        console.log("values:::" ,values)
        mutation.mutate(values, {
          onSuccess: (data) => {
            toast.success(
              'Congratulation!!!, You have successfully signed up.'
            );
            navigate('/dashboard');
            setIsLoading(false);
          },
          onError: (e: unknown) => {
            if (e instanceof Error) {
              toast.error(e.message);
              setIsLoading(false);
            }
          },
        });
      })
      .catch((e) => {
        toast.error(e.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        size="small"
        margin="normal"
        name="username"
        type="username"
        value={registerDetails.username}
        onChange={handleInputChange}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        size="small"
        margin="normal"
        name="password"
        type="password"
        value={registerDetails.password}
        onChange={handleInputChange}
      />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        variant="outlined"
        size="small"
        margin="normal"
        name="password"
        type="password"
        value={registerDetails.confirmPassword}
        onChange={handleInputChange}
      />

      <StyledButton
        sx={{ marginTop: '2em' }}
        variant="contained"
        onClick={onFinish}
        isLoading={isLoading}
      >
        {isLoading  ? 'Submitting...' : 'Submit'}
      </StyledButton>
    </>
  );
}
