import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Loading } from '../common/atoms/index';
import { TitleBlock, ToggleBtnBlock, CardContainer } from './atoms';
import useLaundryOrders from './hooks/useLaundryOrders';
import { OrderListWidget } from './sections';
import { StyledLaundryContainer } from './styled';

import { ORDER_STATUS } from '@/utils/orderStatus';

const Laundry = () => {
  const [renderingStatus, setRenderingStatus] = useState(ORDER_STATUS.CONNECT);
  const navigate = useNavigate();
  const token = sessionStorage.getItem('Authorization');
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  const { laundryOrdersQuery } = useLaundryOrders();
  const { status, data: orders } = laundryOrdersQuery;
  if (status !== 'success') {
    return (
      <StyledLaundryContainer>
        <Loading />
      </StyledLaundryContainer>
    );
  }

  return (
    <StyledLaundryContainer>
      <TitleBlock
        title="새물파트너님 안녕하세요."
        strongTitle="새물파트너"
        subTitle="오늘도 꼼꼼한 세탁 부탁드려요."
        strongSubTitle="꼼꼼한 세탁"
      />
      <ToggleBtnBlock {...{ renderingStatus }} {...{ setRenderingStatus }} {...{ orders }} />
      <CardContainer>
        {orders
          .filter((order) => {
            if (renderingStatus === ORDER_STATUS.COMPLETE) {
              return order.status === renderingStatus || order.status === ORDER_STATUS.ARRIVAL;
            }
            return order.status === renderingStatus;
          })
          .map((order) => (
            <OrderListWidget key={order.id} order={order} {...{ renderingStatus }} />
          ))}
      </CardContainer>
    </StyledLaundryContainer>
  );
};

export default Laundry;
