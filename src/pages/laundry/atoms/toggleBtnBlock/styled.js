import styled from 'styled-components';

export const StyledToggleBtnContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  margin-bottom: 10px;
`;

export const StyledToggleBtn = styled.button`
  flex: 1;
  height: 50px;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 20px;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
  }
`;

export const StyledActiveToggleBtn = styled.button`
  flex: 1;
  height: 50px;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  border-radius: 20px;
`;
