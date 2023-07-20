import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import Tick from '../../Images/tick-circle.svg';
import GreyTick from '../../Images/grey-tick-circle.svg';

import Practice from './Practice';
import BookingReview from './BookingReview';
import PersonalDetails from './PersonalDetails';
import AppointmentType from './AppointmentType';
import ScheduleAppointment from './ScheduleAppointment';
import StyledButton from '../../components/Button/CustomButton';

const BookAppointment = () => {
  const [active, setActive] = useState<number>(0);

  const navigate = useNavigate();

  const handleNext = () => {
    setActive((prevStep) => prevStep + 1);
  };

  return (
    <Container>
      <div className="grid grid-cols-12 mt-20">
        <div className="col-span-4 min-h-[calc(100vh-71px)]">
          <div className="grid gap-4 pt-10 gap-y-10">
            <div className={`grid gap-4 ${active >= 0 ? `font-medium` : ``}`}>
              <div className="flex gap-3">
                {active >= 0 ? (
                  <img src={Tick} alt="tick" />
                ) : (
                  <img src={GreyTick} alt="tick" />
                )}
                <h1 className='text-sm'>Date & Time</h1>
              </div>
              <p className="ml-9">...</p>
            </div>
            <div className={`grid gap-2 ${active >= 1 ? `font-medium` : ``}`}>
              <div className="flex gap-3">
                {active >= 1 ? (
                  <img src={Tick} alt="tick" />
                ) : (
                  <img src={GreyTick} alt="tick" />
                )}
                <h1 className='text-sm'>About this practice </h1>
              </div>
              <p className="ml-9">...</p>
            </div>
            <div className={`grid gap-2 ${active >= 2 ? `font-medium` : ``}`}>
              <div className="flex gap-3">
                {active >= 2 ? (
                  <img src={Tick} alt="tick" />
                ) : (
                  <img src={GreyTick} alt="tick" />
                )}
                <h1 className='text-sm'>Appointment type</h1>
              </div>
              <p className="ml-9">...</p>
            </div>
            <div className={`grid gap-2 ${active >= 3 ? `font-medium` : ``}`}>
              <div className="flex gap-3">
                {active >= 3 ? (
                  <img src={Tick} alt="tick" />
                ) : (
                  <img src={GreyTick} alt="tick" />
                )}
                <h1 className='text-sm'>Personal details</h1>
              </div>
              <p className="ml-9">...</p>
            </div>
          </div>
        </div>
        <div className="col-span-8 pl-20">
          {active === 0 && (
            <>
              <Stack
                component="form"
                sx={{
                  width: '30ch',
                }}
                noValidate
                autoComplete="off"
                spacing={3}
              >
                <ScheduleAppointment />
                <StyledButton onClick={handleNext} className="w-[358px]">
                  continue
                </StyledButton>
              </Stack>
            </>
          )}
          {active === 1 && (
            <>
              <Stack
                component="form"
                sx={{
                  width: '30ch',
                }}
                noValidate
                autoComplete="off"
                spacing={3}
              >
                <Practice />
                <StyledButton onClick={handleNext} className="w-[358px]">
                  continue
                </StyledButton>
              </Stack>
            </>
          )}
          {active === 2 && (
            <>
              <Stack
                component="form"
                sx={{
                  width: '30ch',
                }}
                noValidate
                autoComplete="off"
                spacing={3}
              >
                <AppointmentType/>
                <StyledButton onClick={handleNext} className="w-[358px]">
                  continue
                </StyledButton>
              </Stack>
            </>
          )}
          {active === 3 && (
            <>
              <Stack
                component="form"
                sx={{
                  width: '30ch',
                }}
                noValidate
                autoComplete="off"
                spacing={3}
              >
                <PersonalDetails/>
                <StyledButton onClick={handleNext} className="w-[358px]">
                  continue
                </StyledButton>
              </Stack>
            </>
          )}
          {active === 4 && (
            <>
              <Stack
                component="form"
                sx={{
                  width: '30ch',
                }}
                noValidate
                autoComplete="off"
                spacing={3}
              >
                <BookingReview/>
                <StyledButton onClick={handleNext} className="w-[358px]">
                Confirm booking
                </StyledButton>
              </Stack>
            </>
          )}
          {active === 5 && (
            <>
              <Stack
                component="form"
                sx={{
                  width: '30ch',
                }}
                noValidate
                autoComplete="off"
                spacing={3}
              >
                <h1 className='text-3xl font-semibold'>Congratulation</h1>
                <p className="mt-5 text-[#696D72] text-base">Your booking is confirmed</p>
                <StyledButton onClick={() => navigate('/dashboard')} className="w-[358px] mt-10">
                Go to dashboard
                </StyledButton>
              </Stack>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default BookAppointment;
