import AppointmentCard from '../components/Doctor/AppointmentCard';
import { useQuery } from 'react-query';
import { getAllDoctors } from '../server/doctor';

export default function DashboardHeader() {
  const { data: doctors } = useQuery('get-All-Doctors', () => getAllDoctors());
  return (
    <>
      <div className="">
        <h1 className="md:ml-2">Upcoming appointments</h1>
        <div className="flex w-[850px]">
          {doctors?.data
            .slice(0, 2)
            ?.map(
              (doctor: {
                _id: string;
                name: string;
                specialization: string;
              }) => (
                <div className="flex" key={doctor.name}>
                  <AppointmentCard
                    // date={moment(doctor.date).format('D MMMM YYYY')}
                    name={doctor.name}
                    // time={moment(doctor.date).format('h:mm A')}
                    // image={doctor.avatar}
                    specialty={doctor.specialization}
                  />
                </div>
              )
            )}
        </div>
      </div>
    </>
  );
}
