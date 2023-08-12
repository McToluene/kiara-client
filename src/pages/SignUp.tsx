import * as React from 'react';
import styled from '@emotion/styled';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import {
  Box,
  Grid,
  Stack,
  StepLabel,
  Theme,
  useMediaQuery,
} from '@mui/material';

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

export default function SignUp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

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

  const navigate = useNavigate();

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const moveToDashboard = () => {
    // setActiveStep(0);
    // setCompleted({});
    navigate('/dashboard');
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
            {/* {activeStep !== steps.length &&
              (completed[activeStep] ? (
                <StyledButton variant="contained">
                  Step {activeStep + 1} already completed
                </StyledButton>
              ) : (
                <StyledButton
                  sx={{ marginTop: '2em' }}
                  variant="contained"
                  onClick={handleComplete}
                >
                  {completedSteps() === totalSteps() - 1
                    ? 'Submit'
                    : 'Continue'}
                </StyledButton>
              ))} */}
            {activeStep !== steps.length - 1 && (
              <StyledButton
                sx={{ marginTop: '2em' }}
                variant="contained"
                onClick={handleComplete}
              >
                {completedSteps() === totalSteps() - 1 ? 'Submit' : 'Continue'}
              </StyledButton>
            )}
          </Stack>
        )}
      </Grid>
    </StyledGrid>
  );
}
