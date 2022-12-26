import styled from 'styled-components';

import LaundryTable from './laundryTable';
import UserRequest from './userRequest';
const DetailContainer = () => {
  return (
    <TestContainer>
      <UserRequest />
      <LaundryTable />
    </TestContainer>
  );
};

const TestContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 3%;
`;

export default DetailContainer;
