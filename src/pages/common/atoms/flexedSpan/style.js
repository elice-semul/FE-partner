import styled from 'styled-components';

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  width: 100%;
`;

export const StyledSpan = styled.span`
  width: ${(props) => props.width || '100%'};
  margin: ${(props) => props.margin || '1rem 0'};
  font-size: 12px;
  font-weight: normal;
`;
