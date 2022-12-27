import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import * as API from '../hooks/api';
import SignUpContainer from '../sections/signupContainer';
const SignUp = () => {
  const mutation = useMutation(['signUpPartner'], API.postSignUpApi);
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    const { name, email, password, phoneNumber, roadAddr, detailAddr, jibun } = data;
    const postObj = {
      name,
      email,
      password,
      phoneNumber,
      address: {
        roadAddr,
        detailAddr,
        jibun,
      },
    };

    mutation.mutate(postObj, {
      onSuccess: () => {
        navigate('/');
      },
      onError: (error) => {
        // eslint-disable-next-line no-alert
        alert(error);
      },
    });
  };
  return <SignUpContainer onSubmit={handleSubmit} />;
};

export default SignUp;
