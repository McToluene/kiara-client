import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import StyledButton from '../Button/OutlineButton';

type DoctorCardProps = {
  name: string;
  description: string;
  avatar: React.ReactNode;
};

export default function DoctorCard(props: DoctorCardProps) {
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
          {props.avatar}
          <Box width={{ xs: '80%', md: '70%' }}>
            <Typography gutterBottom variant="body1">
              {props.name}
            </Typography>
            <Typography variant="body2">{props.description}</Typography>
          </Box>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'end' }}>
          <StyledButton size="small">Schedule appointment</StyledButton>
        </CardActions>
      </Card>
    </>
  );
}
