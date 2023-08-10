import Stack from '@mui/material/Stack';
import Star from '../../Images/stars.svg';

const Practice = () => {
  return (
    <div>
      <Stack>
        <div>
          <h1 className="font-bold text-lg md:mt-5">About this practice</h1>
          <div className="flex gap-1 mt-5">
            <img src={Star} alt="" />
            <h1 className="text-sm font-semibold">Billing policy</h1>
          </div>
          <div className="w-[400px]">
            <p className="text-sm mt-3 text-[#545759]">
              We are mixed billing from 1st march 2023 and offer bulk billing to
              patients under 16, DVA card holders, pensioners, and other
              concession card holders except on Saturdays. There will be an
              out-of-pocket expense for all general consultations. Please visit
              our website for more details.
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <img src={Star} alt="" />
            <h1 className="text-sm font-medium text-[#2C2E30]">
              Cancellation / non-attendance policy
            </h1>
          </div>
          <div className="w-[400px]">
            <p className="text-sm mt-3 text-[#545759]">
              If you can no longer attend the appointment, please cancel or
              reschedule through your confirmation email or Healthengine app.
              Please note a fee of $[amount] may apply if you cancel less than 2
              hours prior to your appointment or fail to attend your appointment
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <img src={Star} alt="" />
            <h1 className="text-sm font-medium text-[#2C2E30]">New patient policy</h1>
          </div>
          <div className="w-[400px]">
            <p className="text-sm mt-3 text-[#545759]">
              New patients are not eligible for Tele-health consultations . If
              you are a new patient please select as a new patient when booking
              the appointment - kindly arrive 10 mins before to register and
              finish paper work. If you Do not Attend your booked appointment
              you will be still charged a DNA fee.
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <img src={Star} alt="" />
            <h1 className="text-sm font-medium text-[#2C2E30]">Drug prescription policy</h1>
          </div>
          <div className="w-[400px]">
            <p className="text-sm mt-3 text-[#545759]">
              Appointments are required to obtain a prescription. We do not
              prescribe any restricted drugs to any new patients.
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <img src={Star} alt="" />
            <h1 className="text-sm font-medium text-[#2C2E30]">COVID-19 policy</h1>
          </div>
          <div className="w-[400px]">
            <p className="text-sm mt-3 text-[#545759]">
              When you arrive at the practice, please remain in your car and
              call the practice to let them know you have arrived. After a short
              triage process, the staff will inform you if you can enter the
              practice. You are required to wear a mask when attending your
              appointment.
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <img src={Star} alt="" />
            <h1 className="text-sm font-medium text-[#2C2E30]">Other practice policy</h1>
          </div>
          <div className="w-[400px]">
            <p className="text-sm mt-3 text-[#545759]">
              We are mixed billing from 1st march 2023 and offer bulk billing to
              patients under the age of 16, DVA card holders, pensioners, and
              other concession card holders except on Saturdays.
            </p>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Practice;
