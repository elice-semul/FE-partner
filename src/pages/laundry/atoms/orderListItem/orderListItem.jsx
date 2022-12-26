import { StyledListItemContainer, StyledListItemText, StyledListItemIconBtn } from './styled';

const OrderListItem = ({ name, date, price }) => {
  return (
    <StyledListItemContainer>
      <StyledListItemText>{name}</StyledListItemText>
      <StyledListItemText>{date}</StyledListItemText>
      <StyledListItemText>{price}</StyledListItemText>
      <StyledListItemIconBtn />
    </StyledListItemContainer>
  );
};

export default OrderListItem;
