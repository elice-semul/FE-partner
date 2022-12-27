import { useQuery } from '@tanstack/react-query';

import { getAllLaundryOrdersApi } from './api';

const useLaundryOrders = () => {
  const laundryOrdersQuery = useQuery(['laundryOrders'], getAllLaundryOrdersApi);

  return { laundryOrdersQuery };
};

export default useLaundryOrders;
