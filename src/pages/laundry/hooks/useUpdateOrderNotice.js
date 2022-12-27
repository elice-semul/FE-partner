import { useMutation } from '@tanstack/react-query';

import { axiosAuthApi } from '@/utils/apiInstance';
const BASE_URL = import.meta.env.VITE_BASE;

const useUpdateOrderNotice = () => {
  const updateOrderNoticeMutate = useMutation(['updateOrder'], async ({ orderId, notice }) => {
    const token = sessionStorage.getItem('Authorization');
    const authInstance = axiosAuthApi(BASE_URL, token);
    return authInstance.put(`/orders/${orderId}`, { notice });
  });
  return { updateOrderNoticeMutate };
};

export default useUpdateOrderNotice;
