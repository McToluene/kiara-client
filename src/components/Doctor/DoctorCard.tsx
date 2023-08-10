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
  const [singleObject, setSingleObject] = useState({
    _id: 0,
    name: '',
    specialty: '',
  });

  // localStorage.setItem('singleObject', JSON.stringify(singleObject));

  const grapSingleObject = (data: any) => setSingleObject(data);

  useEffect(() => {
    localStorage.setItem('singleObject', JSON.stringify(singleObject));
  }, [singleObject]);

  const navigateTo = () => {
    navigate('/book-appointment');
  };

  let intervalId: NodeJS.Timeout;
  const interval = () => {
    intervalId = setInterval(() => {
      navigateTo();
      cancelInterval();
    }, 1500);
  };

  const cancelInterval = () => {
    clearInterval(intervalId);
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

// import React, { useState } from 'react';
// import {
//   Avatar,
//   Box,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from '@mui/material';
// import StyledButton from '../Button/OutlineButton';
// import Profile from '../../Images/Avatar-others.svg';
// import { useNavigate } from 'react-router-dom';

// type DoctorCardProps = {
//   name: string;
//   description: string;
//   avatar?: React.ReactNode;
//   doctor: {
//     // Define a more specific type for the 'doctor' prop
//     id: number;
//     // ... other properties
//   };
// };

// export default function DoctorCard(props: DoctorCardProps) {
//   const navigate = useNavigate();
//   const [singleObject, setSingleObject] = useState(props.doctor);

//   const navigateTo = () => {
//     navigate('/book-appointment');
//   };

//   return (
//     <Card
//       elevation={0}
//       style={{
//         margin: '1em',
//         borderRadius: '0.6em',
//         border: '0.01em solid grey',
//       }}
//     >
//       <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Avatar alt="Remy Sharp" src={Profile} sx={{ width: 56, height: 56 }} />
//         <Box width={{ xs: '80%', md: '70%' }}>
//           <Typography gutterBottom variant="body1">
//             {props.name}
//           </Typography>
//           <Typography variant="body2">{props.description}</Typography>
//         </Box>
//       </CardContent>
//       <CardActions style={{ display: 'flex', justifyContent: 'end' }}>
//         <StyledButton
//           size="small"
//           onClick={() => {
//             navigateTo();
//           }}
//         >
//           Schedule appointment
//         </StyledButton>
//       </CardActions>
//     </Card>
//   );
// }
