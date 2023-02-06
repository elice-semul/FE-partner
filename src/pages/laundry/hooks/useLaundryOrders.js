import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { getAllLaundryOrdersApi, getCurrentLaundryApi } from './api';

const useLaundryOrders = () => {
  try {
    const navigate = useNavigate();
    const currentLaundryQuery = useQuery(['currentUser'], getCurrentLaundryApi);
    const laundryId = currentLaundryQuery?.data?.id;
    if (!laundryId) {
      navigate('/laundry/form');
    }
    const laundryOrdersQuery = useQuery(['laundryOrders', laundryId], getAllLaundryOrdersApi, {
      enabled: !!laundryId,
    });
    return { laundryOrdersQuery, currentLaundryQuery };
  } catch (err) {
    throw new Error(err);
  }
};

export default useLaundryOrders;
