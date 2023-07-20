import { Container, Grid } from '@mui/material';
import AvailableDoctors from '../organism/AvailableDoctors';
import DashboardHeader from '../organism/DashboardHeader';
import DashboardTable from '../organism/DashboardTable';

export default function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Grid container height={'100%'} paddingTop={'1.5em'}>
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          <div className="mt-10 w-[850px] mr-10">
            <DashboardHeader />
          </div>
          <div className="mt-10 w-[850px] mr-10">
            <DashboardTable />
          </div>
        </Grid>
        <AvailableDoctors />
      </Grid>
    </Container>
  );
}
