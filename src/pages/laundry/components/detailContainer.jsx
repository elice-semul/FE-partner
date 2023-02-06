import styled from 'styled-components';

import { HandleBtnBlock, LaundryTable, UserRequest } from '../atoms';
const DetailContainer = ({ order, renderingStatus }) => {
  return (
    <TestContainer>
      <UserRequest {...{ order }} />
      <LaundryTable {...{ order }} />
      <HandleBtnBlock {...{ order }} {...{ renderingStatus }} />
    </TestContainer>
  );
};

const TestContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 3%;
`;

export default DetailContainer;
