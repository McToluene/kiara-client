import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import Tick from '../../Images/tick-circle.svg';
import GreyTick from '../../Images/grey-tick-circle.svg';

import Practice from './Practice';
import PersonalDetails from './PersonalDetails';
import AppointmentType from './AppointmentType';
import ScheduleAppointment from './ScheduleAppointment';
import BookingReview, { schema } from './BookingReview';
import { createAppointment } from '../../server/appointment';
import StyledButton from '../../components/Button/CustomButton';

const BookAppointment = () => {
  const [active, setActive] = useState<number>(0);

  const handleNext = () => {
    setActive((prevStep) => prevStep + 1);
  };

  const appointmentDate = localStorage.getItem('appointmentDate');
  const appointmentTime = localStorage.getItem('appointmentTime');
  const type = localStorage.getItem('appointmentType');
  const patient = localStorage.getItem('patientDetails');
  const recipientType = localStorage.getItem('recipient');
  const getDoctorObject = localStorage.getItem('singleObject');

  const appointment = type && JSON.parse(type);
  const patientValue = patient && JSON.parse(patient);
  const recipient = recipientType && JSON.parse(recipientType);
  const doctor = getDoctorObject && JSON.parse(getDoctorObject);

  const mutation = useMutation(createAppointment, {
    onSuccess: () => {},
    onError: (e: unknown) => {
      if (e instanceof Error) {
        toast.error(e.message);
      }
    },
  });

  const onFinish = (e?: FormEvent | FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    // setIsLoading(true);

    // const form = e?.target as HTMLFormElement;
    // const emailInput = form.querySelector<HTMLInputElement>('#username');
    // const passwordInput = form.querySelector<HTMLInputElement>('#password');

    // if (emailInput && passwordInput) {
      const values: {
        doctorId: string;
        appointmentTime: any;
        appointmentDate: any;
        appointmentType: string;
        forPerson: string;
      } = {
        doctorId: doctor?._id,
        appointmentTime,
        appointmentDate,
        appointmentType: appointment?.type,
        forPerson: recipient?.recipientType,
      };

      schema
        .validate(values)
        .then(() => {
          mutation.mutate(values);
          console.log('values', values);

          handleNext();
        })
        .catch((e: any) => {
          toast.error(e.message);
        });
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 50000);
    // }
  };

  return (
    <Container>
      <div className="grid grid-cols-12 mt-20 md:pl-20">
        <div className="col-span-4 min-h-[calc(100vh-71px)]">
          <div className="grid gap-4 pt-10 gap-y-10">
            <div className={`grid gap-4 ${active >= 0 ? `font-medium` : ``}`}>
              <div className="flex gap-3">
                {active >= 0 ? (
                  <img src={Tick} alt="tick" />
                ) : (
                  <img src={GreyTick} alt="tick" />
                )}
                <h1 className="text-sm">Date & Time</h1>
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
                <h1 className="text-sm">About this practice </h1>
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
                <h1 className="text-sm">Appointment type</h1>
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
                <h1 className="text-sm">Personal details</h1>
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
                <AppointmentType />
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
                <PersonalDetails />
                <StyledButton onClick={handleNext} className="w-[358px]">
                  continue
                </StyledButton>
              </Stack>
            </>
          )}
          {active === 4 && (
            <>
              <Stack
                onSubmit={onFinish}
                component="form"
                sx={{
                  width: '30ch',
                }}
                noValidate
                autoComplete="off"
                spacing={3}
              >
                <BookingReview />
                {/* <StyledButton onClick={handleNext} className="w-[358px]">
                  Confirm booking
                </StyledButton> */}
                {/* <h1 className="text-3xl font-semibold">Congratulation</h1>
                <p className="mt-5 text-[#696D72] text-base">
                  Your booking is confirmed
                </p>
                <StyledButton
                  onClick={() => navigate('/dashboard')}
                  className="w-[358px] mt-10"
                >
                  Go to dashboard
                </StyledButton> */}
              </Stack>
            </>
          )}
          {/* {active === 5 && (
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
                <h1 className="text-3xl font-semibold">Congratulation</h1>
                <p className="mt-5 text-[#696D72] text-base">
                  Your booking is confirmed
                </p>
                <StyledButton
                  onClick={() => navigate('/dashboard')}
                  className="w-[358px] mt-10"
                >
                  Go to dashboard
                </StyledButton>
              </Stack>
            </>
          )} */}
        </div>
      </div>
    </Container>
  );
};

export default BookAppointment;
