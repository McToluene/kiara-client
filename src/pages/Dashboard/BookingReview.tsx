import * as yup from 'yup';
import moment from 'moment';
import { Stack } from '@mui/material';
import { toast } from 'react-toastify';
import Date from '../../Images/Date.svg';
import { useMutation } from 'react-query';
import Clock from '../../Images/clock.svg';
import { FormEvent, useState } from 'react';
import Avater from '../../Images/Avatar-others.svg';
import { useNavigate } from 'react-router-dom';
import AnotherUser from '../../Images/other-user.svg';
import NonEmergency from '../../Images/nonEmergency.svg';
import { createAppointment } from '../../server/appointment';
import StyledButton from '../../components/Button/CustomButton';

interface BookingReviewProps {
  onClick?: () => void;
  onFinish?: () => void;
}

export const schema = yup.object().shape({
  doctorId: yup.string().nullable(),
  appointmentTime: yup.string().nullable(),
  appointmentDate: yup.string().nullable(),
  appointmentType: yup.string().nullable(),
  forPerson: yup.string().nullable(),
});

const BookingReview: React.FC<BookingReviewProps> = (
  props: BookingReviewProps
) => {
  const type = localStorage.getItem('appointmentType');
  const patient = localStorage.getItem('patientDetails');
  const recipientType = localStorage.getItem('recipient');
  const getDoctorObject = localStorage.getItem('singleObject');
  const appointmentTime = localStorage.getItem('appointmentTime');
  const appointmentDate = localStorage.getItem('appointmentDate');

  const appointment = type && JSON.parse(type);
  const patientValue = patient && JSON.parse(patient);
  const recipient = recipientType && JSON.parse(recipientType);
  const doctor = getDoctorObject && JSON.parse(getDoctorObject);

  const [isLoading, setIsLoading] = useState(false);
  const createAppointmentMutation = useMutation(createAppointment);
  const patientFullName = `${patientValue?.firstName}${patientValue?.lastName}`;
  const navigate = useNavigate();

  const onFinish = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const values: {
      doctorId: string;
      doctorName: string;
      appointmentTime: any;
      appointmentDate: any;
      appointmentType: string;
      forPerson: string;
      patientName: string;
      patientEmail: string;
    } = {
      doctorId: doctor?._id,
      doctorName: doctor?.name,
      appointmentTime,
      appointmentDate,
      appointmentType: appointment?.type,
      forPerson: recipient?.recipientType,
      patientName: patientFullName,
      patientEmail: patientValue?.email,
    };

    schema
      .validate(values)
      .then(() => {
        console.log('values', values);
        createAppointmentMutation.mutate(values, {
          onSuccess: (data) => {
            toast.success('Congratulation!!!, Your booking is confirmed');
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
      .catch((e: any) => {
        toast.error(e.message);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1 className="text-lg font-bold md:mt-5">Booking review</h1>
      <section className="mt-5">
        <Stack
          component="form"
          sx={{
            width: '30ch',
          }}
          noValidate
          autoComplete="off"
        >
          <section className="md:w-[358px] border-gray-400 border rounded-2xl p-3 mt-5">
            <div className="flex gap-5">
              <img src={Avater} alt="avtar" />
              <div>
                <h1 className="text-black text-sm font-medium">
                  {doctor?.name}
                </h1>
                <p className="text-[#696D72] text-xs">
                  {doctor?.specialization}
                </p>
              </div>
            </div>
          </section>
          <section className="md:w-[358px] mt-5 md:h-[60px] border-gray-400 border rounded-xl p-3">
            <div className="flex gap-5">
              <img src={Date} alt="icon" />
              <div>
                <p className="text-[#696D72] text-xs">Date</p>
                <h1 className="text-black text-sm font-medium">
                  {moment(appointmentDate).format('D MMMM YYYY') || 'N/A'}
                </h1>
              </div>
            </div>
          </section>
          <section className="md:w-[358px] mt-5 md:h-[60px] border-gray-400 border rounded-xl p-3">
            <div className="flex gap-5">
              <img src={Clock} alt="icon" />
              <div>
                <p className="text-[#696D72] text-xs">Time</p>
                <h1 className="text-black text-sm font-medium">
                  {appointmentTime}
                </h1>
              </div>
            </div>
          </section>
          <section className="md:w-[358px] mt-5 md:h-[60px] border-gray-400 border rounded-xl p-3">
            <div className="flex gap-5">
              <img src={NonEmergency} alt="icon" />
              <div>
                <h1 className="text-black text-sm font-medium">
                  Non-emergency
                </h1>
                <p className="text-[#696D72] text-xs">{appointment?.type}</p>
              </div>
            </div>
          </section>
          <section className="md:w-[358px] md:h-[60px] border-gray-400 border rounded-xl p-3 mt-5">
            <div className="flex gap-5">
              <img src={AnotherUser} alt="icon" />
              <div>
                <h1 className="text-black text-sm font-medium">
                  {recipient?.recipientType}
                </h1>
                <p className="text-[#696D72] text-xs">
                  You’re booking for someone else
                </p>
              </div>
            </div>
          </section>
          <section className="md:w-[358px] md:h-[60px] border-gray-400 border rounded-xl p-3 mt-5">
            <div className="flex gap-5">
              <img src={AnotherUser} alt="icon" />
              <div>
                <h1 className="text-black text-sm font-medium">
                  {patientValue?.firstName} {patientValue?.lastName}
                </h1>
                <p className="text-[#696D72] text-xs">{patientValue?.email}</p>
              </div>
            </div>
          </section>
          <div className="mt-5"></div>
          <StyledButton
            className="w-full md:w-[358px]"
            onClick={onFinish}
            isLoading={isLoading}
          >
            {isLoading ? 'Confirming...' : 'Confirm bookings'}
          </StyledButton>
        </Stack>
      </section>
    </div>
  );
};

export default BookingReview;
