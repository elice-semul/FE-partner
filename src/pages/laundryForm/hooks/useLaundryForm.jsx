import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import * as API from './api';
const useLaundryForm = () => {
  const navigate = useNavigate();

  const mutation = useMutation(['laundryForm'], API.laundryFormApi, {
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      // eslint-disable-next-line no-alert
      alert(error);
    },
  });

  return mutation;
};

export default useLaundryForm;
