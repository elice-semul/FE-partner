import { axiosAuthApi } from '@/utils/apiInstance';
const BASE_URL = import.meta.env.VITE_BASE;

export const getAllLaundryOrdersApi = async () => {
  try {
    const token = sessionStorage.getItem('Authorization');
    const authInstance = axiosAuthApi(BASE_URL, token);
    const { data } = await authInstance.get('/orders');
    return data;
  } catch (err) {
    throw new Error(err);
  }
};