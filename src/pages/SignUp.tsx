import * as yup from 'yup';
import * as React from 'react';
import styled from '@emotion/styled';
import Step from '@mui/material/Step';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import Stepper from '@mui/material/Stepper';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { FormEvent, useState } from 'react';
import {
  Box,
  Grid,
  Stack,
  StepLabel,
  Theme,
  useMediaQuery,
} from '@mui/material';

import { createAccount } from '../server/auth';
import PersonalDetailForm from '../organism/PersonalDetailForm';
import ContactDetailForm from '../organism/ContactDetailForm';
import MedicalDetailForm from '../organism/MedicalDetailForm';
import RegisterDetailForm from '../organism/RegisterDetailForm';
import StyledButton from '../components/Button/CustomButton';

const steps = [
  { title: 'Your details', content: 'Provide your personal details' },
  { title: 'Contact details', content: 'Provide your contact information' },
  {
    title: 'Medical Information',
    content: 'Provide your medicare information',
  },
  { title: 'Create sign in', content: 'Create your username and password' },
];

const schema = yup.object().shape({
  dob: yup.string().nullable(),
  email: yup.string().nullable(),
  gender: yup.string().nullable(),
  username: yup.string().nullable(),
  password: yup.string().required('Enter a valid password').min(6).nullable(),
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

export default function SignUp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const personalDetail = localStorage.getItem('personalDetails');
  const contactDetail = localStorage.getItem('personalDetails');
  const medicalDetail = localStorage.getItem('medicalDetails');
  const registerDetail = localStorage.getItem('registerDetails');

  const personalData = personalDetail && JSON.parse(personalDetail); 
  const contactData = contactDetail && JSON.parse(contactDetail); 
  const medicalData = medicalDetail && JSON.parse(medicalDetail); 
  const registerData = registerDetail && JSON.parse(registerDetail); 


  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const mutation = useMutation(createAccount);

  const onFinish = (e?: FormEvent) => {
    e?.preventDefault();
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
        email: personalData.email,
        gender: personalData.gender,
        firstName:personalData.firstName,
        lastName: personalData.lastName,
        city: contactData.city,
        homePhone: contactData.homePhoneNumber,
        passcode: contactData.postalCode,
        address: contactData.streetAddress,
        workPhone: contactData.workPhoneNumber,
        dob: medicalData.dateOfBirth,
        medicareNumber: medicalData.medicareLineNumber,
        medicareLineNumber: medicalData.medicareNumber,
        mobilePhone: medicalData,
        username: registerData.username,
        password: registerData.password,
      };

      schema
        .validate(values)
        .then(() => {
          mutation.mutate(values, {
            onSuccess: (data) => {
              toast.success('Congratulation!!!, You have successfully signed up.');
              navigate('/dashboard')
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
        });
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 50000);
  };

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );
  const orientation = isSmallScreen ? 'horizontal' : 'vertical';

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    onFinish()
  };

  const moveToDashboard = () => {
    // setActiveStep(0);
    // setCompleted({});
    navigate('/dashboard')
  };

  const StyledGrid = styled(Grid)({
    boxShadow: 'none',
  });

  const components = [
    PersonalDetailForm,
    ContactDetailForm,
    MedicalDetailForm,
    RegisterDetailForm,
  ];
  const StepComponent = components[activeStep];

  return (
    <StyledGrid container spacing={2} height={'100%'}>
      <Grid
        item
        xs={12}
        md={5}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: '#F9FBFC',
          marginTop: '3rem',
        }}
      >
        <Stepper nonLinear activeStep={activeStep} orientation={orientation}>
          {steps.map((step, index) => (
            <Step key={step.title} completed={completed[index]}>
              <StepLabel
                onClick={handleStep(index)}
                StepIconProps={{
                  sx: {
                    '&.Mui-active': {
                      color: '#2D699D',
                    },
                    '&.Mui-completed': {
                      color: '#2D619D',
                    },
                  },
                }}
              >
                <Box display={{ xs: 'none', md: 'block' }}>
                  <Typography variant="body1">{step.title}</Typography>
                  <Typography variant="body2">{step.content}</Typography>
                </Box>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '3rem',
        }}
      >
        {allStepsCompleted() ? (
          <Stack
            onSubmit={onFinish}
            component="form"
            sx={{
              width: '40ch',
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
              Congratulation
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                fontFamily: 'Raleway',
                color: 'black',
              }}
            >
              You have successfully signed up.
            </Typography>
            <StyledButton sx={{ marginTop: '4em' }} onClick={moveToDashboard}>
              Go to dashboard
            </StyledButton>
          </Stack>
        ) : (
          <Stack
          // onSubmit={onFinish}
            component="form"
            sx={{
              width: '40ch',
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
              Sign Up
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                fontFamily: 'Raleway',
                color: 'black',
              }}
            >
              Sign up for free
            </Typography>
            <StepComponent />
            {activeStep !== steps.length &&
              (completed[activeStep] ? (
                <StyledButton variant="contained">
                  Step {activeStep + 1} already completed
                </StyledButton>
              ) : (
                <StyledButton
                  sx={{ marginTop: '2em' }}
                  variant="contained"
                  onClick={handleComplete}
                  isLoading={isLoading}
                  // type='submit'
                >
                  {completedSteps() === totalSteps() - 1
                    ? 'Submit'
                    : 'Continue'}
                </StyledButton>
              ))}
          </Stack>
        )}
      </Grid>
    </StyledGrid>
  );
}
