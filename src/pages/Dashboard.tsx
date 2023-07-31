import { Container } from '@mui/material';
import AvailableDoctors from '../organism/AvailableDoctors';
import DashboardHeader from '../organism/DashboardHeader';
import DashboardTable from '../organism/DashboardTable';

export default function Dashboard() {
  return (
    <Container>
      <div
      className='md:flex'>
        <section>
          <div
          >
            <div className="mt-10 md:w-[850px] md:mr-10">
              <DashboardHeader />
            </div>
            <div className="mt-10 md:w-[850px] sm:w-auto md:mr-10">
              <DashboardTable />
            </div>
          </div>
        </section>
        <section className="mt-12">
          <AvailableDoctors />
        </section>
      </div>
    </Container>
  );
}
