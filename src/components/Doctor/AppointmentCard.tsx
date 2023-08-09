import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import image from '../../Images/Avatar-others.svg';

type AppointmentCardProps = {
  name: string;
  date?: string;
  time?: string;
  // image:React.ReactNode;
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
        {/* {props.image} */}
        <Avatar alt="Remy Sharp" src={image} sx={{ width: 56, height: 56 }} />
        {/* <Box width={'403px'}> */}
        <div className='w-[200px]'>
          <Typography gutterBottom variant="h6">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.specialty}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: '#212B36' }}
            >
              {props.date || 'Not provided'}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: '#212B36' }}
            >
              {props.time || 'Not provided'}
            </Typography>
          </Box>
        </div>
        {/* </Box> */}
      </CardContent>
    </Card>
  );
}
