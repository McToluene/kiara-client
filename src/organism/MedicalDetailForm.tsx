import { TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface MedicalDetails {
  dateOfBirth: string;
  medicareNumber: number;
  medicareLineNumber: number;
}

export default function MedicalDetailForm() {
  // Create state variables to hold the values of the text fields
  const [medicalDetails, setMedicalDetails] = useState<MedicalDetails>(() => {
    // Retrieve data from localStorage if it exists, or return default initial values
    const storedDetails = localStorage.getItem('medicalDetails');
    return storedDetails
      ? JSON.parse(storedDetails)
      : { dateOfBirth: '', medicareNumber: 0, medicareLineNumber: 0 };
  });

  // Function to handle changes in the text fields and update the state variables
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setMedicalDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // useEffect hook to save the values to localStorage when they change
  useEffect(() => {
    localStorage.setItem('medicalDetails', JSON.stringify(medicalDetails));
  }, [medicalDetails]);

  return (
    <>
      <TextField
        id="dateOfBirth"
        label="Date of birth"
        variant="outlined"
        margin="normal"
        type="date"
        name="dateOfBirth"
        value={medicalDetails?.dateOfBirth}
        onChange={handleInputChange}
      />
      <TextField
        id="medicareNumber"
        label="Medicare number"
        variant="outlined"
        size="small"
        margin="normal"
        name='medicareNumber'
        type="number"
        value={medicalDetails?.medicareNumber}
        onChange={handleInputChange}
      />
      <TextField
        id="medicareLineNumber"
        label="Medicare line number"
        variant="outlined"
        size="small"
        margin="normal"
        name='medicareLineNumber'
        type="number"
        value={medicalDetails?.medicareLineNumber}
        onChange={handleInputChange}
      />
    </>
  );
}
