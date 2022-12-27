import axios from 'axios';

export const axiosApi = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
  return instance;
};

export const axiosAuthApi = (url, token, options) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    ...options,
  });
  return instance;
};
