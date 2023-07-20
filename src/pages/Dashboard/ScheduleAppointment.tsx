import { Stack, TextField } from '@mui/material';

const ScheduleAppointment = () => {
  return (
    <div>
      <h1 className='font-bold text-lg mt-5'>Schedule Appointment</h1>
      <p className='text-sm w-[310px] mt-5'>Choose a day and time you will be available to see the doctor</p>

      <Stack
      component='form'
      sx={{
        width: '30ch',
      }}
      noValidate
      autoComplete='off'
    >
      <TextField id='date' variant='outlined' size='small' margin='normal' type='date' className='w-[358px]'/>
      <TextField id='time' variant='outlined' size='small' margin='normal' type='time' className='w-[358px]'/>
      </Stack>
    </div>
  )
}

export default ScheduleAppointment