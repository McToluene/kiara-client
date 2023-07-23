import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import image from '../../Images/felicia.png';

type AppointmentCardProps = {
  name: string;
  date: string;
  time: string;
  image:React.ReactNode;
  specialty: string;
};

export default function AppointmentCard(props: AppointmentCardProps) {
  return (
    <Card
      elevation={0}
      style={{
        margin: '1em',
        borderRadius: '0.6em',
        backgroundColor: '#F7F8F9',
        border: '0.003em solid #D3D3D3',
      }}
    >
      <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
        {props.image}
        <Box width='80%'>
          <Typography gutterBottom variant='h6'>
            {props.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.specialty}
          </Typography>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='body2' color='text.secondary' style={{color: '#212B36',}}>
              {props.date}
            </Typography>
            <Typography variant='body2' color='text.secondary' style={{color: '#212B36',}}>
              {props.time}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
