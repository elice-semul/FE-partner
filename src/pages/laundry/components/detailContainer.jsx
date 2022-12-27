import styled from 'styled-components';

import { HandleBtnBlock, LaundryTable, UserRequest } from '../atoms';
const DetailContainer = () => {
  return (
    <TestContainer>
      <UserRequest />
      <LaundryTable />
      <HandleBtnBlock confirm cancel update />
    </TestContainer>
  );
};

const TestContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 3%;
`;

export default DetailContainer;
