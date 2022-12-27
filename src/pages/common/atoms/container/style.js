import styled, { css } from 'styled-components';

const shadow = (option) => {
  if (option.shadow === 'default')
    return css`
      box-shadow: ${option.theme.containers.shadow};
    `;
  if (option)
    return css`
      box-shadow: ${option.shadow};
    `;
  return css`
    box-shadow: none;
  `;
};

export const StyledContainer = styled.div`
  display: ${(props) => props.display || 'block'};
  position: ${(props) => props.position};
  background-color: ${(props) => props.backGroundColor || props.theme.colors.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height || 'auto'};
  align-items: ${(props) => props.alignItems || 'center'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  border-radius: ${(props) => props.radius || props.theme.containers.borderRadius};
  ${(props) => shadow(props)};
`;
