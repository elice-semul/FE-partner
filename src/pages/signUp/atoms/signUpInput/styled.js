import styled from 'styled-components';

import { theme } from '@/styles/theme'

export const StyledSignUpInput = styled.input`
  background-color: ${ theme.colors.gray100 };
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 1.5rem;
  font-size: 1.6rem;
  padding: 0 1.6rem;
  margin-bottom: 2rem;
`;

export const StyledSignUpLabel = styled.label`
  margin: 1rem 2rem;
  padding: ${({ padding })=> padding};
  display:block;
  font-size: 1.6rem;
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
`;
