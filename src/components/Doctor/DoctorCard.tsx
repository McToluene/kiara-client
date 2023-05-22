import { Avatar, Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import image from '../../Images/felicia.png';
import StyledButton from '../Button/OutlineButton';

type DoctorCardProps = {
  name: string;
  description: string;
};

export default function DoctorCard(props: DoctorCardProps) {
  return (
    <Card
      elevation={0}
      style={{ margin: '1em', borderRadius: '0.6em', border: '0.01em solid grey' }}
    >
      <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Avatar alt='Remy Sharp' src={image} sx={{ width: 56, height: 56 }} />
        <Box width={{ xs: '80%', md: '70%' }}>
          <Typography gutterBottom variant='body1'>
            Mrs Adeniyi Felicia
          </Typography>
          <Typography variant='body2'>
            Practise nurse, B.SC Nursing, Cert Mangt OND, HND Agric Mech
          </Typography>
        </Box>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'end' }}>
        <StyledButton size='small'>Schedule appointment</StyledButton>
      </CardActions>
    </Card>
  );
}
