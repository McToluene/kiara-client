import moment from 'moment';
import Image from '../Images/Avatar-female.svg';
import Profile from '../Images/Avatar-female.svg';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import AppointmentCard from '../components/Doctor/AppointmentCard';
import { useQuery } from 'react-query';
import { getAllDoctors } from '../server/doctor';

export default function DashboardHeader() {
  const { data: doctors } = useQuery('get-All-Doctors', () => getAllDoctors());
  return (
    <Box width={'100%'}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: 500,
        }}
      >
        <h1 className="md:ml-2">Upcoming appointments</h1>
      </Typography>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        spacing={{ xs: 0, md: 2 }}
        height={'100%'}
      >
        {doctors?.data.slice(0, 2)?.map((doctor: { _id: string, name: string, specialization: string}) => (
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
              // date={moment(doctor.date).format('D MMMM YYYY')}
              name={doctor.name}
              // time={moment(doctor.date).format('h:mm A')}
              // image={doctor.avatar}
              specialty={doctor.specialization}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
