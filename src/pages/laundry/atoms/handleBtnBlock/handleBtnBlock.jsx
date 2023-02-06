import { useState } from 'react';

import useUpdateOrderStatus from '../../hooks/useUpdateOrderStatus';
import { StyledHandleBtnContainer, HandleBtnType, StyledHandleBtn } from './styled';

import { PortalModal } from '@/pages/common/pages';
import { ORDER_STATUS } from '@/utils/orderStatus';

const getNextStatus = (status) => {
  switch (status) {
    case ORDER_STATUS.CONNECT:
      return ORDER_STATUS.INSPECT;
    case ORDER_STATUS.INSPECT:
      return ORDER_STATUS.LAUNDRY;
    case ORDER_STATUS.LAUNDRY:
      return ORDER_STATUS.ARRIVAL;
    case ORDER_STATUS.CANCEL:
      return ORDER_STATUS.CANCEL;
    default:
      throw new Error('전달된 status 값이 올바르지 않습니다.');
  }
};
const btnListByStatus = (status) => {
  switch (true) {
    case status === ORDER_STATUS.CONNECT:
      return { update: false, cancel: true, confirm: true, complete: false };
    case status === ORDER_STATUS.INSPECT:
      return { update: true, cancel: true, confirm: false, complete: true };
    case status === ORDER_STATUS.LAUNDRY:
      return { update: true, cancel: true, confirm: false, complete: true };
    default:
      return { update: false, cancel: false, confirm: false, complete: false };
  }
};

const HandleBtnBlock = ({ order, renderingStatus }) => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [modalText, setModalText] = useState('');
  const [btnType, setBtnType] = useState('');
  const { updateOrderStatusMutate } = useUpdateOrderStatus();
  const { confirm, cancel, update, complete } = btnListByStatus(renderingStatus);

  const handleBtnClick = (text, clickBtnType) => {
    setIsModalShow(true);
    setModalText(text);
    setBtnType(clickBtnType);
  };
  const handleConfirmClick = () => {
    if (btnType === HandleBtnType.CONFIRM) {
      updateOrderStatusMutate.mutate({ status: getNextStatus(renderingStatus), orderId: order.id });
    } else if (btnType === HandleBtnType.CANCEL) {
      updateOrderStatusMutate.mutate({ status: ORDER_STATUS.CANCEL, orderId: order.id });
    }
  };

  const handleCancelClick = () => {
    setIsModalShow(false);
  };

  const handleSuccessClick = () => {
    setIsModalShow(false);
  };
  return (
    <>
      <StyledHandleBtnContainer>
        {update && (
          <StyledHandleBtn
            onClick={() => handleBtnClick('유의사항을 수정', HandleBtnType.UPDATE)}
            btnType={HandleBtnType.UPDATE}
          >
            유의사항 수정
          </StyledHandleBtn>
        )}
        {cancel && (
          <StyledHandleBtn
            onClick={() => handleBtnClick('취소', HandleBtnType.CANCEL)}
            btnType={HandleBtnType.CANCEL}
          >
            취소
          </StyledHandleBtn>
        )}
        {confirm && (
          <StyledHandleBtn
            onClick={() => handleBtnClick('승인', HandleBtnType.CONFIRM)}
            btnType={HandleBtnType.CONFIRM}
          >
            승인
          </StyledHandleBtn>
        )}
        {complete && (
          <StyledHandleBtn
            onClick={() => handleBtnClick('완료', HandleBtnType.CONFIRM)}
            btnType={HandleBtnType.CONFIRM}
          >
            완료
          </StyledHandleBtn>
        )}
      </StyledHandleBtnContainer>
      {isModalShow && (
        <PortalModal
          text={`${modalText}하시겠습니까?`}
          successText={`${modalText} 완료`}
          onShow={setIsModalShow}
          onConfirm={handleConfirmClick}
          onCancel={handleCancelClick}
          onSuccess={handleSuccessClick}
          order={order}
          {...{ renderingStatus }}
          {...{ btnType }}
        />
      )}
    </>
  );
};

export default HandleBtnBlock;
