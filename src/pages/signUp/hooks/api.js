import { axiosApi } from '@/utils/apiInstance';
const BASE_URL = import.meta.env.VITE_BASE;

export const postSignUpApi = async (obj) => {
  try {
    // console.log(e);
    const instance = axiosApi(BASE_URL);
    const { data } = await instance.post('/partners/signup', obj);
    if (data.status === 400) {
      const { response } = data;
      const error = {
        message: response.message,
        code: response.statusCode,
      };
      throw error;
    }

    return data;
  } catch (error) {
    return error;
  }
};
