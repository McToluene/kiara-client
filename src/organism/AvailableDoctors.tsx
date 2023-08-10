import React, { useState } from 'react';
import { SearchOutlined } from '@mui/icons-material';
import DoctorCard from '../components/Doctor/DoctorCard';
import { Box, Grid, InputAdornment, TextField } from '@mui/material';
import { getAllDoctors } from '../server/doctor';
import { useQuery } from 'react-query';

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
}

export default function AvailableDoctors(): JSX.Element {
  const [limit] = useState<number>(20);
  const { data, isLoading, error } = useQuery('get-Doctors', () => getAllDoctors({ page: 1, limit: limit.toString() }));

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredDoctors = data?.data?.filter(
    (doctor: Doctor) => doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      className="doctor-container"
    >
      <h1 className="md:ml-2 text-lg font-medium">Available Doctors</h1>
      <TextField
        placeholder='Search for a doctor....'
        sx={{ m: 1, width: '28ch' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>} */}

      <Box>
        {filteredDoctors?.map((doctor: Doctor) => (
          <DoctorCard key={doctor._id} name={doctor.name} description={doctor.specialization} doctor={doctor} />
        ))}
      </Box>
    </Grid>
  );
}
