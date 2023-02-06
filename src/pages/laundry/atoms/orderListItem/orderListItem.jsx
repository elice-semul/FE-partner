import { StyledListItemContainer, StyledListItemText, StyledListItemIconBtn } from './styled';

const OrderListItem = ({ name, date, price, onItemClick: handleItemClick }) => {
  return (
    <StyledListItemContainer onClick={handleItemClick}>
      <StyledListItemText>{name}</StyledListItemText>
      <StyledListItemText>{date}</StyledListItemText>
      <StyledListItemText>{price}</StyledListItemText>
      <StyledListItemIconBtn />
    </StyledListItemContainer>
  );
};

export default OrderListItem;
