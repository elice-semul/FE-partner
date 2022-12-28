import { useQuery } from '@tanstack/react-query';

import { getAllLaundryOrdersApi, getCurrentLaundryApi } from './api';

const useLaundryOrders = () => {
  const currentLaundryQuery = useQuery(['currentUser'], getCurrentLaundryApi);
  const laundryId = currentLaundryQuery?.data?.id;
  const laundryOrdersQuery = useQuery(['laundryOrders', laundryId], getAllLaundryOrdersApi, {
    enabled: !!laundryId,
  });
  return { laundryOrdersQuery, currentLaundryQuery };
};

export default useLaundryOrders;
