import { Box, Grid, Typography } from '@mui/material';
import AppointmentCard from '../components/Doctor/AppointmentCard';

const doctors = [
  {
    name: 'Dr. Genny Wealth',
    specialization: 'General',
  },
  {
    name: 'Dr. Genny ealth',
    specialization: 'General',
  },
];

export default function DashboardHeader() {
  return (
    <Box width={'100%'}>
      <Typography
        variant='h6'
        gutterBottom
        sx={{
          fontWeight: 500,
        }}
      >
        Upcoming appointments
      </Typography>
      <Grid
        container
        display='flex'
        justifyContent='space-between'
        spacing={{ xs: 0, md: 2 }}
        height={'100%'}
      >
        {doctors.map((doctor) => (
          <Grid
            key={doctor.name}
            item
            display={{ xs: 'none', md: 'flex' }}
            sm={6}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AppointmentCard date='' name='' time='' />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
