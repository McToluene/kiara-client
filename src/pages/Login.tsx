import { Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LoginBackground from '../Images/login-placeholder.png';
import LoginForm from '../organism/LoginForm';

const ImageBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${LoginBackground})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '70%',
  width: '0%',
}));

export default function Login() {
  return (
    <Grid container spacing={{ xs: 0, md: 2 }} height={'100%'}>
      <Grid
        item
        display={{ xs: 'none', md: 'flex' }}
        md={5}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ImageBox />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <LoginForm />
      </Grid>
    </Grid>
  );
}
