import { Stack } from '@mui/material';
import Clock from '../../Images/clock.svg';
import Date from '../../Images/Date.svg';
import Avater from '../../Images/Avatar.svg';
import AnotherUser from '../../Images/other-user.svg';
import NonEmergency from '../../Images/nonEmergency.svg';

const BookingReview = () => {
  return (
    <div>
      <h1 className="text-lg font-bold mt-5">About this practice</h1>
      <section className="md:w-[358px] border-gray-400 border rounded-2xl p-3 mt-5">
        <div className="flex gap-5">
          <img src={Avater} alt="avtar" />
          <div>
            <h1 className="text-black text-sm font-medium">
              Mrs Adeniyi Felicia
            </h1>
            <p className="text-[#696D72] text-xs">
              Practice nurse B.Sc Nursing,Cert Mangt OND,HND Agric Mech
            </p>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <Stack
          component="form"
          sx={{
            width: '30ch',
          }}
          noValidate
          autoComplete="off"
        >
          <section className="md:w-[358px] mt-5 md:h-[60px] border-gray-400 border rounded-xl p-3">
            <div className="flex gap-5">
              <img src={Date} alt="icon" />
              <div>
                <p className="text-[#696D72] text-xs">Date</p>
                <h1 className="text-black text-sm font-medium">
                  November 7, 2023
                </h1>
              </div>
            </div>
          </section>
          <section className="md:w-[358px] mt-5 md:h-[60px] border-gray-400 border rounded-xl p-3">
            <div className="flex gap-5">
              <img src={Clock} alt="icon" />
              <div>
                <p className="text-[#696D72] text-xs">Time</p>
                <h1 className="text-black text-sm font-medium">12:30 AM</h1>
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
                <p className="text-[#696D72] text-xs">a non urgent situation</p>
              </div>
            </div>
          </section>
          <section className="md:w-[358px] md:h-[60px] border-gray-400 border rounded-xl p-3 mt-5">
            <div className="flex gap-5">
              <img src={AnotherUser} alt="icon" />
              <div>
                <h1 className="text-black text-sm font-medium">Someone else</h1>
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
                <h1 className="text-black text-sm font-medium">Joseph Aduwa</h1>
                <p className="text-[#696D72] text-xs">joonwaeze@gmail.com</p>
              </div>
            </div>
          </section>
        </Stack>
      </section>
    </div>
  );
};

export default BookingReview;
