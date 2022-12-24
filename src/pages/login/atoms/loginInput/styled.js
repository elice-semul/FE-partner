import styled from 'styled-components';

import { theme } from '@/styles/theme' 

export const StyledLoginInput = styled.input`
  background-color: ${theme.colors.background};
  width: 100%;
  height: 40px;
  border: 0px;
  font-size: 1.8rem;
  padding: 1.8rem 1.6rem;
  border-bottom: 1px solid ${theme.colors.gray300};
  border-radius: 0;
  margin-bottom: 1.8rem;
  &:nth-child(2){
    margin-bottom: 4.8rem;
  }
`