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

export const StyledFlex = styled.div`
  display: flex;
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  height: ${(props) => props.height || 'auto'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  border-radius: ${(props) => props.radius || props.theme.containers.borderRadius};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
  gap: ${(props) => props.gap};
  ${(props) => shadow(props)};
`;
