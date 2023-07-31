import Cookies from 'js-cookie';

export type IData = {
  token?: string;
};

export const success = (data: IData) => {
  if (data?.token) {
    Cookies.set('Authenticated', data?.token, { expires: 30 });
  }

  return data;
};
