import { useQueryClient, useMutation } from '@tanstack/react-query';

import { axiosAuthApi } from '@/utils/apiInstance';
const BASE_URL = import.meta.env.VITE_BASE;

const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();
  const updateOrderStatusMutate = useMutation(
    ['updateOrder'],
    async ({ orderId, status }) => {
      const token = sessionStorage.getItem('Authorization');
      const authInstance = axiosAuthApi(BASE_URL, token);
      return authInstance.patch(`/orders/${orderId}`, { status });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['laundryOrders']),
    }
  );
  return { updateOrderStatusMutate };
};

export default useUpdateOrderStatus;
