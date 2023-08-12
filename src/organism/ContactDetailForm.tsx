import { TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface ContactDetails {
  homePhoneNumber: string;
  workPhoneNumber: string;
  streetAddress: string;
  city: string;
  postalCode: string;
}

export default function ContactDetailForm() {
  // Create state variables to hold the values of the text fields
  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    homePhoneNumber: '',
    workPhoneNumber: '',
    streetAddress: '',
    city: '',
    postalCode: '',
  });

  // Function to handle changes in the text fields and update the state variables
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setContactDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // useEffect hook to save the values to localStorage when they change
  useEffect(() => {
    localStorage.setItem('contactDetails', JSON.stringify(contactDetails));
  }, [contactDetails]);

  return (
    <>
      <TextField
        id='homePhoneNumber'
        label='Home Phone number'
        variant='outlined'
        size='small'
        margin='normal'
        value={contactDetails.homePhoneNumber}
        onChange={handleInputChange}
      />
      <TextField
        id='workPhoneNumber'
        label='Work Phone number'
        variant='outlined'
        size='small'
        margin='normal'
        value={contactDetails.workPhoneNumber}
        onChange={handleInputChange}
      />
      <TextField
        id='streetAddress'
        label='Street address'
        variant='outlined'
        size='small'
        margin='normal'
        value={contactDetails.streetAddress}
        onChange={handleInputChange}
      />
      <TextField
        id='city'
        label='City'
        variant='outlined'
        size='small'
        margin='normal'
        value={contactDetails.city}
        onChange={handleInputChange}
      />
      <TextField
        id='postalCode'
        label='Post code'
        variant='outlined'
        size='small'
        margin='normal'
        value={contactDetails.postalCode}
        onChange={handleInputChange}
      />
    </>
  );
}
