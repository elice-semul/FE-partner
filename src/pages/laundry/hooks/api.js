import { axiosAuthApi } from '@/utils/apiInstance';
const BASE_URL = import.meta.env.VITE_BASE;

export const getAllLaundryOrdersApi = async ({ laundryId }) => {
  try {
    const token = sessionStorage.getItem('Authorization');
    const authInstance = axiosAuthApi(BASE_URL, token);
    const { data } = await authInstance.get(`/orders?laundryId=${laundryId}`, { laundryId });
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getCurrentLaundryApi = async () => {
  try {
    const token = sessionStorage.getItem('Authorization');
    const authInstance = axiosAuthApi(BASE_URL, token);
    const { data } = await authInstance.get('/partners');
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
