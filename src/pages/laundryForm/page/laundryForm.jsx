import useLaundryForm from '../hooks/useLaundryForm';
import FormContainer from '../sections/formContainer';

import { Header } from '@/pages/common/sections/index';
const LaundryForm = () => {
  const mutation = useLaundryForm();

  const handleSubmit = (data) => {
    mutation.mutate(data);
  };
  return (
    <>
      <Header>세탁소 신청</Header>
      <FormContainer onSubmit={handleSubmit} />
    </>
  );
};

export default LaundryForm;
