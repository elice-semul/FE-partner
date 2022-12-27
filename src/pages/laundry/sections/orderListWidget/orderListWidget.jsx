import { useState } from 'react';

import { OrderListItem } from '../../atoms';
import { DetailContainer } from '../../components';
import { StyledOrderListWidgetContainer } from './styled';

import { calculateEstimatedPrice } from '@/utils/calculateEstimatedPrice';
import { dateFormatCommon } from '@/utils/dateFormating';

const OrderListWidget = ({ order, renderingStatus }) => {
  const [isClick, setIsClick] = useState(false);
  const handleItemClick = () => {
    setIsClick((prev) => !prev);
  };
  return (
    <StyledOrderListWidgetContainer>
      <OrderListItem
        onItemClick={handleItemClick}
        name={order.user.name}
        date={dateFormatCommon(order.createdAt)}
        price={calculateEstimatedPrice(order.orderProducts)}
      />
      {isClick && <DetailContainer {...{ order }} {...{ renderingStatus }} />}
    </StyledOrderListWidgetContainer>
  );
};

export default OrderListWidget;
