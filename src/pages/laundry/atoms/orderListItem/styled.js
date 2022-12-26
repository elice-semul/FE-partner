import { IoChevronDownOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const StyledListItemContainer = styled.button`
  display: flex;
  flex-flow: row nowrap;
  border: 1px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  cursor: pointer;
  align-items: center;
  text-align: left;
`;

export const StyledListItemText = styled.div`
  width: 30%;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
`;

export const StyledListItemIconBtn = styled(IoChevronDownOutline)`
  width: 10%;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
`;
