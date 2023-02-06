import styled from 'styled-components';

export const StyledLogo = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  margin: 2rem auto;
  color: ${({ theme: { colors }, color }) => colors[color] || colors.primary};
`;

export const StyledLoginContainer = styled.div`
  margin: auto 4rem;
  display: grid;
  align-content: center;
  min-height: 80vh;
`;

export const StyledLoginSpan = styled.span`
  text-align: center;
  margin-left: 1rem;
  margin-bottom: 1rem;
  color: red;
  font-size: 1.3rem;
  display: inline-block;
`;
