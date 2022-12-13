import styled from 'styled-components';

export const Hello = styled.div`
  color: ${({ theme: { colors } }) => colors.primary};
  background-color: ${({ theme: { colors } }) => colors.warning};
`;
