import Image from '../Images/felicia.png';
import Profile from '../Images/Avatar-others.svg';
import { SearchOutlined } from '@mui/icons-material';
import DoctorCard from '../components/Doctor/DoctorCard';
import { Avatar, Box, Grid, InputAdornment, TextField, Typography } from '@mui/material';

const doctors = [
  {
    _id: 1,
    name: 'Mrs Adeniyi Felicia',
    specialization: 'Practise nurse, B.SC Nursing, Cert Mangt OND, HND Agric Mech',
    avatar: (
      <Avatar alt="Remy Sharp" src={Image} sx={{ width: 56, height: 56 }} />
    ),
  },
  {
    _id: 1,
    name: 'Dr. Genny Wealth',
    specialization: 'Practise nurse, B.SC Nursing, Cert Mangt OND, HND Agric Mech',
    avatar: (
      <Avatar alt="Remy Sharp" src={Profile} sx={{ width: 56, height: 56 }} />
    ),
  },
];

export default function AvailableDoctors() {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant='h6'
        gutterBottom
        sx={{
          fontWeight: 500,
        }}
      >
        Available Doctors
      </Typography>
      <TextField
        // label='Search for a doctor....'
        placeholder='Search for a doctor....'
        // id='outlined-start-adornment'
        sx={{ m: 1, width: '28ch' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
      />

      <Box>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor._id} name={doctor.name} description={doctor.specialization} avatar={doctor.avatar} />
        ))}
      </Box>
    </Grid>
  );
}
