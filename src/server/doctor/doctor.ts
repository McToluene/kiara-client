import { instance, next } from '../base';

interface IDoctor {
  name?: string;
  specialization?: string;
  appointments?: string[];
  availability?: string[]
}

type Doctor = {
  next?: string
  page: number
  limit?: string
}

export const createAppointment = async (value: Partial<IDoctor>) => {
  const { data } = await instance(false)
    .post(`doctors`, value)
    .catch((e) => next(e));

  return data;
};

export const getDoctor = async (doctorId: string) => {
  const { data } = await instance(false)
    .get(`doctors/${doctorId}`)
    .catch((e) => next(e));

  return data;
};

// export const getAllDoctors = async (value: Doctor) => {
export const getAllDoctors = async () => {
  const { data } = await instance(false)
    .get(`doctors?page=${1}&limit=${10}`)
    .catch((e) => next(e));

  return data;
};
