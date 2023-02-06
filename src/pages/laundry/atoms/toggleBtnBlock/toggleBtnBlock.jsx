import { useState, useEffect } from 'react';

import { StyledToggleBtnContainer, StyledToggleBtn, StyledActiveToggleBtn } from './styled';

import { getOrdersLength } from '@/utils/getOrdersLength';
import { ORDER_STATUS } from '@/utils/orderStatus';
const ToggleBtnBlock = ({ renderingStatus, setRenderingStatus, orders }) => {
  const [btnContent, setBtnContent] = useState([
    {
      id: 1,
      status: ORDER_STATUS.CONNECT,
      text: '승인',
      qty: 0,
    },
    {
      id: 2,
      status: ORDER_STATUS.INSPECT,
      text: '검수',
      qty: 0,
    },
    {
      id: 3,
      status: ORDER_STATUS.LAUNDRY,
      text: '세탁',
      qty: 0,
    },
    {
      id: 4,
      status: ORDER_STATUS.COMPLETE,
      text: '완료',
      qty: 0,
    },
  ]);
  useEffect(() => {
    const connectQty = getOrdersLength(orders, ORDER_STATUS.CONNECT);
    const inspectQty = getOrdersLength(orders, ORDER_STATUS.INSPECT);
    const laundryQty = getOrdersLength(orders, ORDER_STATUS.LAUNDRY);
    const completeQty =
      getOrdersLength(orders, ORDER_STATUS.COMPLETE) +
      getOrdersLength(orders, ORDER_STATUS.ARRIVAL);
    const currentQtyArray = [connectQty, inspectQty, laundryQty, completeQty];
    setBtnContent((prev) => {
      const prevContent = [...prev];
      return prevContent.map((content, index) => {
        return { ...content, qty: currentQtyArray[index] };
      });
    });
  }, [orders]);
  const handleBtnClick = (status) => {
    setRenderingStatus(status);
  };
  return (
    <StyledToggleBtnContainer>
      {btnContent.map((btn) => {
        return btn.status === renderingStatus ? (
          <StyledActiveToggleBtn key={btn.id} id={btn.id}>
            {btn.text}({btn.qty})
          </StyledActiveToggleBtn>
        ) : (
          <StyledToggleBtn
            key={btn.id}
            id={btn.id}
            onClick={() => {
              handleBtnClick(btn.status);
            }}
          >
            {btn.text}({btn.qty})
          </StyledToggleBtn>
        );
      })}
    </StyledToggleBtnContainer>
  );
};

export default ToggleBtnBlock;
