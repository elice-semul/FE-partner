import styled, { css } from 'styled-components';

export const HandleBtnType = {
  CONFIRM: 'CONFIRM',
  CANCEL: 'CANCEL',
  UPDATE: 'UPDATE',
};

export const StyledHandleBtnContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
`;

export const StyledHandleBtn = styled.button`
  flex: 1;
  height: 50px;
  border-radius: 10px;
  border: 0;
  color: ${(props) => props.theme.colors.background};
  ${({ btnType }) =>
    btnType === HandleBtnType.CONFIRM &&
    css`
      background-color: ${(props) => props.theme.colors.primary};
    `}
  ${({ btnType }) =>
    btnType === HandleBtnType.CANCEL &&
    css`
      background-color: ${(props) => props.theme.colors.warning};
    `}
    ${({ btnType }) =>
    btnType === HandleBtnType.UPDATE &&
    css`
      background-color: ${(props) => props.theme.colors.headline};
    `}
`;
