import Image from '../Images/felicia.png';
import Profile from '../Images/Avatar-others.svg';
import { SearchOutlined } from '@mui/icons-material';
import DoctorCard from '../components/Doctor/DoctorCard';
import { Avatar, Box, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { getAllDoctors } from '../server/doctor';
import { useQuery } from 'react-query';
import { useState } from 'react';

export default function AvailableDoctors() {
  const [limit] = useState<number>(10);
  // const { data } = useQuery('get-All-Doctors', () => getAllDoctors({page: 1, limit:limit}));
  const { data } = useQuery('get-Doctors', () => getAllDoctors());

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
      {/* <Typography
        variant='h6'
        gutterBottom
        sx={{
          fontWeight: 500,
        }}
      >
        Available Doctors
      </Typography> */}
      <h1 className="md:ml-2 text-lg font-medium"> Available Doctors </h1>
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
        {data?.data?.map((doctor: { _id: string, name: string, specialization: string}) => (
          <DoctorCard key={doctor._id} name={doctor.name} description={doctor.specialization} doctor={doctor} />
        ))}
      </Box>
    </Grid>
  );
}
