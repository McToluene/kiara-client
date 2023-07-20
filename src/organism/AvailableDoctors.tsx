import { SearchOutlined } from '@mui/icons-material';
import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import DoctorCard from '../components/Doctor/DoctorCard';

const doctors = [
  {
    name: 'Dr. Genny Wealth',
    specialization: 'Ophthalmology',
  },
  {
    name: 'Dr. Genny Wealth',
    specialization: 'General',
  },
  {
    name: 'Dr. Genny Wealth',
    specialization: 'Ophthalmology',
  },
  {
    name: 'Dr. Genny Wealth',
    specialization: 'General',
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
          <DoctorCard key={doctor.name} name={doctor.name} description={doctor.specialization} />
        ))}
      </Box>
    </Grid>
  );
}
