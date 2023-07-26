import { instance, next } from '../base';

interface IReset {
  token?: string | number;
  password?: string;
  newPassword?: string;
  email?: string;
}
interface IUser {
  dob?: string;
  email?: string;
  gender?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  medicareNumber?: number | string;
  medicareLineNumber?: number | string;
  address?: string;
  city?: string;
  passcode?: string;
  homePhone?: string;
  workPhone?: string;
  mobilePhone?: string;
}

export const createAccount = async (value: Partial<IUser>) => {
    const { data } = await instance(false)
        .post(`users/register`, value)
        .catch((e) => next(e));

    return data?.data;
}

export const login = async (value: Partial<IUser>) => {
  const { data } = await instance(false)
    .post(`users/login`, value)
    .catch((e) => next(e));
  return data?.data
};

export const getProfile = async (userId: string) => {
  const { data } = await instance(false)
    .get(`users/profile/${userId}`)
    .catch((e) => next(e));
  return data?.data
};

export const forgetPassword = async (value: IReset) => {
  const { data } = await instance()
    .post(`users/forgot-password`, value)
    .catch((e) => next(e));
  return data?.data;
};

export const resetPassword = async (payload: IReset) => {
  const { data } = await instance()
    .put(`users/reset-password/${payload.email}`, {
      token: payload.token,
      password: payload.password,
      newPassword: payload.newPassword
    })
    .catch((e) => next(e));
  return data?.data;
};
