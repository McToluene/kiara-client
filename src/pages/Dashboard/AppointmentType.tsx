import * as React from 'react';
import Box from '@mui/material/Box';
import User from '../../Images/user-logo.svg';
import AnotherUser from '../../Images/other-user.svg';
import Emergency from '../../Images/emergency.svg';
import NonEmergency from '../../Images/nonEmergency.svg';

const AppointmentType = () => {
  return (
    <Box>
      <h1 className="text-lg font-bold mt-5">About this practice</h1>
      <section className="md:w-[358px] md:h-[66px] border-gray-400 border rounded-xl p-3 mt-5">
        <div className="flex gap-5">
          <img src={Emergency} alt="icon" />
          <div>
            <h1 className="text-black text-sm font-medium">Emergency</h1>
            <p className="text-[#696D72] text-xs">
              You need an urgent attention
            </p>
          </div>
        </div>
      </section>
      <section className="md:w-[358px] mt-5 md:h-[66px] border-gray-400 border rounded-xl p-3">
        <div className="flex gap-5">
          <img src={NonEmergency} alt="icon" />
          <div>
            <h1 className="text-black text-sm font-medium">Non-emergency</h1>
            <p className="text-[#696D72] text-xs">a non urgent situation</p>
          </div>
        </div>
      </section>
      <section className="md:mt-16">
        <h1 className="text-base font-medium mt-5">
          Who is this appointment for?
        </h1>
        <section className="md:w-[358px] md:h-[66px] border-gray-400 border rounded-xl p-3 mt-5">
          <div className="flex gap-5">
            <img src={User} alt="icon" />
            <div>
              <h1 className="text-black text-sm font-medium">Myself</h1>
              <p className="text-[#696D72] text-xs">
              You’re booking for yourself
              </p>
            </div>
          </div>
        </section>
        <section className="md:w-[358px] md:h-[66px] border-gray-400 border rounded-xl p-3 mt-5">
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
      </section>
    </Box>
  );
};

export default AppointmentType;
