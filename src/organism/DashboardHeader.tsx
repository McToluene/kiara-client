import AppointmentCard from '../components/Doctor/AppointmentCard';
import { useQuery } from 'react-query';
import { getAllDoctors } from '../server/doctor';
import { useState } from 'react';

export default function DashboardHeader() {
  const [limit] = useState<number>(20);
  const { data:doctors , isLoading, error } = useQuery('get-Doctors', () => getAllDoctors({ page: 1, limit: limit.toString() }));
  // const { data: doctors } = useQuery('get-All-Doctors', () => getAllDoctors());
  return (
    <>
      <div className="">
        <h1 className="md:ml-2 text-lg font-medium">Upcoming appointments</h1>
        <div className="md:flex">
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
