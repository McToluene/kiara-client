import { instance, next } from '../base';

interface IAppointment {
  doctorId?: string;
  appointmentTime?: string;
  appointmentDate?: string;
  appointmentType?: string;
  forPerson?: string;
}

type Appointment = {
  next?: string
  page: number
  limit?: string
}

export const createAppointment = async (value: Partial<IAppointment>) => {
  const { data } = await instance(false)
    .post(`doctors/appointments`, value)
    .catch((e) => next(e));

  return data;
};

export const getAppointment = async () => {
  const { data } = await instance(false)
    .get(`appointment`)
    .catch((e) => next(e));

  return data;
};

export const getAllAppointment = async (value: Appointment) => {
// export const getAllAppointment = async () => {
  const { data } = await instance(false)
    .get(`doctors/all/appointments?page=${value.page}&limit=${value.limit}`)
    // .get(`doctors/all/appointments?page=${1}&limit=${10}`)
    .catch((e) => next(e));

  return data;
};

export const getAllFutureAppointment = async (value: Appointment) => {
  const { data } = await instance(false)
    .get(`doctors/all/future/appointments?page=${value.page}&limit=${value.limit}`)
    .catch((e) => next(e));
  return data;
};

export const cancelAppointment = async (doctorId: string) => {
  const { data } = await instance(false)
    .delete(`doctors/${doctorId}/appointments`)
    .catch((e) => next(e));

  return data;
};
