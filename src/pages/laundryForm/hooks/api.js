import { axiosAuthApi } from '@/utils/apiInstance';
const BASE_URL = import.meta.env.VITE_BASE;

export const laundryFormApi = async (formObj) => {
  try {
    const { name, phoneNumber, bizNo, roadAddr, detailAddr, jibun } = formObj;
    const postData = {
      name,
      phoneNumber,
      bizNo,
      address: {
        roadAddr,
        detailAddr,
        jibun,
      },
    };
    const token = sessionStorage.getItem('Authorization');
    const instance = axiosAuthApi(BASE_URL, token);
    const { data } = await instance.post('/partners', postData);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
