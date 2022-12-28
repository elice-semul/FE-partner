import { StyledLoadingContainer } from './styled';

import ladingSpinner from '@/assets/images/loadingSpinner.gif';
const Loading = () => {
  return (
    <StyledLoadingContainer>
      <img src={ladingSpinner} alt="로딩중" width="15%" />
    </StyledLoadingContainer>
  );
};

export default Loading;
