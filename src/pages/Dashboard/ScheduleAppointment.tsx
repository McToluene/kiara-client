import { Stack, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

const ScheduleAppointment: React.FC = () => {
  const [appointmentDate, setAppointmentDate] = useState<string>('');
  const [appointmentTime, setAppointmentTime] = useState<string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppointmentDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppointmentTime(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('appointmentDate', appointmentDate);
    localStorage.setItem('appointmentTime', appointmentTime);
  }, [appointmentDate, appointmentTime]);

  return (
    <div>
      <h1 className="font-bold text-lg mt-5">Schedule Appointment</h1>
      <p className="text-sm w-[310px] mt-5">
        Choose a day and time you will be available to see the doctor
      </p>

      <Stack
        component="form"
        sx={{
          width: '30ch',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="date"
          variant="outlined"
          size="small"
          margin="normal"
          type="date"
          className="w-[358px]"
          value={appointmentDate}
          onChange={handleDateChange}
        />
        <TextField
          id="time"
          variant="outlined"
          size="small"
          margin="normal"
          type="time"
          className="w-[358px]"
          value={appointmentTime}
          onChange={handleTimeChange}
        />
      </Stack>
    </div>
  );
};

export default ScheduleAppointment;
