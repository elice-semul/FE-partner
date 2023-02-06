import styled from 'styled-components';

export const StyledTitleBlockContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const StyledTitleText = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
`;
export const StyledSubTitleText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 40px;
`;

export const StyledTitleStrongText = styled.strong`
  color: ${(props) => props.theme.colors.primary};
`;
