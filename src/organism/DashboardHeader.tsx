import moment from 'moment';
import Image from '../Images/Avatar-female.svg';
import Profile from '../Images/Avatar-female.svg';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import AppointmentCard from '../components/Doctor/AppointmentCard';

const doctors = [
  {
    _id: 1,
    name: 'Dr. Wealth',
    specialty: 'Practise nurse, B.SC Nursing, Cert Mangt OND, HND Agric Mech',
    time: '01:15:23 PM',
    date: '2023-04-19T20:11:00.486+00:00',
    avatar: (
      <Avatar alt="Remy Sharp" src={Image} sx={{ width: 56, height: 56 }} />
    ),
  },
  {
    _id: 1,
    name: 'Dr. Genny Wealth',
    specialty: 'Practise nurse, B.SC Nursing, Cert Mangt OND, HND Agric Mech',
    time: '01:15 PM',
    date: '2023-04-17T22:14:00.486+00:00',
    avatar: (
      <Avatar alt="Remy Sharp" src={Profile} sx={{ width: 56, height: 56 }} />
    ),
  },
];

export default function DashboardHeader() {
  return (
    <Box width={'100%'}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: 500,
        }}
      >
        <h1 className="ml-2">Upcoming appointments</h1>
      </Typography>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
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
            <AppointmentCard
              date={moment(doctor.date).format('D MMMM YYYY')}
              name={doctor.name}
              time={moment(doctor.date).format('h:mm A')}
              image={doctor.avatar}
              specialty={doctor.specialty}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
