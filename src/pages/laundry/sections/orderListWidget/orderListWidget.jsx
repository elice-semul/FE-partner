import { useState } from 'react';

import { OrderListItem } from '../../atoms';
import { DetailContainer } from '../../components';
import { StyledOrderListWidgetContainer } from './styled';
const OrderListWidget = () => {
  const [isClick, setIsClick] = useState(false);
  const handleItemClick = () => {
    setIsClick((prev) => !prev);
  };
  return (
    <StyledOrderListWidgetContainer>
      <OrderListItem onItemClick={handleItemClick} name="엘리스" date="2022-12-26" price="10,000" />
      {isClick && <DetailContainer />}
    </StyledOrderListWidgetContainer>
  );
};

export default OrderListWidget;
