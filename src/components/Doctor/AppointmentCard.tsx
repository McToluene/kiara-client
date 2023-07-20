import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import image from '../../Images/felicia.png';

type AppointmentCardProps = {
  name: string;
  date: string;
  time: string;
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
        <Avatar alt='Remy Sharp' src={image} sx={{ width: 56, height: 56 }} />
        <Box width='80%'>
          <Typography gutterBottom variant='h6'>
            Mrs Adeniyi Felicia
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Practise nurse, B.SC Nursing, Cert Mangt OND, HND Agric Mech
          </Typography>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='body2' color='text.secondary' style={{color: '#212B36',}}>
              5 February 2022
            </Typography>
            <Typography variant='body2' color='text.secondary' style={{color: '#212B36',}}>
              12:00PM -1:00PM
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
