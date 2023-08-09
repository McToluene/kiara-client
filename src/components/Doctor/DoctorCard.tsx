import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import StyledButton from '../Button/OutlineButton';
import Profile from '../../Images/Avatar-others.svg';
import { ComponentProps, SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type DoctorCardProps = ComponentProps<'button'> & {
  name: string;
  description: string;
  avatar?: React.ReactNode;
  doctor?: any;
};

export default function DoctorCard(props: DoctorCardProps) {
  const navigate = useNavigate();
  const [singleObject, setSingleObject] = useState({});

  localStorage.setItem('singleObject', JSON.stringify(singleObject));

  const grapSingleObject = (data: any) => setSingleObject(data);

  const navigateTo = () => {
    navigate('/book-appointment');
  };

  const interval = () => {
    setInterval(() => {
      navigateTo();
    }, 1500);
  };

  return (
    <>
      <Card
        elevation={0}
        style={{
          margin: '1em',
          borderRadius: '0.6em',
          border: '0.01em solid grey',
        }}
      >
        <CardContent
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {/* {props.avatar} */}
          <Avatar
            alt="Remy Sharp"
            src={Profile}
            sx={{ width: 56, height: 56 }}
          />
          <Box width={{ xs: '80%', md: '70%' }}>
            <Typography gutterBottom variant="body1">
              {props.name}
            </Typography>
            <Typography variant="body2">{props.description}</Typography>
          </Box>
        </CardContent>
        {/* {...{ onClick }} */}
        <CardActions style={{ display: 'flex', justifyContent: 'end' }}>
          <StyledButton
            size="small"
            onClick={() => {
              grapSingleObject(props.doctor);
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              interval();
            }}
          >
            Schedule appointment
          </StyledButton>
        </CardActions>
      </Card>
    </>
  );
}
