import styled, { css } from 'styled-components';

import { theme } from '@/styles/theme';

const radius = (option) => {
  if (option === 'default')
    return css`
      border-radius: ${theme.buttons.borderRadius};
    `;
  if (option)
    return css`
      border-radius: ${option};
    `;
  return css`
    border-radius: none;
  `;
};

export const StyledButton = styled.button`
  background-color: ${(props) => props.backGroundColor || theme.colors.background};
  color: ${(props) => props.color || theme.colors.black};
  padding: ${(props) => props.padding || theme.buttons.padding};
  margin: ${(props) => props.margin || theme.buttons.margin};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  box-shadow: ${(props) => (!props.shadow ? 'none' : theme.buttons.shadow)};
  border: ${theme.buttons.border};
  text-align: center;
  ${(props) => radius(props.radius)};
`;
