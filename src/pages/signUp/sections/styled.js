import styled from 'styled-components';

import { theme } from '@/styles/theme' 

export const StyledSignUpDiv = styled.div`
  position: relative;
`;

export const StyledSignUpButton = styled.input`
  margin: 0;
  position: absolute;
  top: 2.5rem;
  right: 0;
  border: 0;
  background: #000;
  color: #fff;
  padding: 0 1.5rem;
  height: 40px;
  border-radius: 10px;
`;

export const StyledSignUpTitle = styled.h3`
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
  margin : 4rem auto 3rem;
  color: #000;
`;

export const StyledSignUpContainer = styled.div`
  margin : 2rem;
  display: grid;
  align-content: center;
`;

export const StyledSignUpSubmit = styled.button`
  display:block;
  background-color: ${theme.colors.primary};
  font-size:1.6rem;
  border:none; 
  color:#fff;
  margin:2rem auto;
  padding:1.1rem 4.6rem;
  fontSize:1.6rem;
  border-radius:10px;
`;