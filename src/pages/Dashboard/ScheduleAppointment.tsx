import { Stack, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

const ScheduleAppointment: React.FC = () => {
  // Create state variables to hold the values of the date and time inputs
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');

  // Function to handle changes in the date input and update the state
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  // Function to handle changes in the time input and update the state
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  // useEffect hook to save the date and time values to localStorage when they change
  useEffect(() => {
    localStorage.setItem('appointmentDate', date);
    localStorage.setItem('appointmentTime', time);
  }, [date, time]);

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
          value={date}
          onChange={handleDateChange}
        />
        <TextField
          id="time"
          variant="outlined"
          size="small"
          margin="normal"
          type="time"
          className="w-[358px]"
          value={time}
          onChange={handleTimeChange}
        />
      </Stack>
    </div>
  );
};

export default ScheduleAppointment;
