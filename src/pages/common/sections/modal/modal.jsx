import { useState } from 'react';

import {
  StyledLayout,
  StyledContainer,
  StyledContentContainer,
  StyledButtonContainer,
  StyledTitle,
  StyledFormContainer,
  StyledInputLabel,
  StyledInput,
} from './styled';

import { Button } from '@/pages/common/atoms';
import { HandleBtnType } from '@/pages/laundry/atoms/handleBtnBlock/styled';
import useUpdateOrderNotice from '@/pages/laundry/hooks/useUpdateOrderNotice';
import { theme } from '@/styles/theme';

const Modal = ({ text, successText, onShow, onConfirm, onSuccess, onCancel, order, btnType }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [notice, setNotice] = useState(order.notice);
  const { updateOrderNoticeMutate } = useUpdateOrderNotice();

  const handleModalLayoutClick = () => {
    onShow(false);
  };

  const handleModalContentContainerClick = (event) => {
    event.stopPropagation();
  };

  const handleSuccessButtonClick = (event) => {
    event.stopPropagation();
    onSuccess();
  };

  const handleConfirmButtonClick = (event) => {
    event.stopPropagation();
    onConfirm();
    if (btnType === HandleBtnType.UPDATE) {
      updateOrderNoticeMutate.mutate({ notice, orderId: order.id });
    }
    setIsSuccess(true);
  };

  const handleCancelButtonClick = (event) => {
    event.stopPropagation();
    onCancel();
  };
  const handleNoticeChange = (e) => {
    setNotice(e.target.value);
  };
  return (
    <StyledLayout onClick={handleModalLayoutClick}>
      <StyledContainer>
        <StyledContentContainer onClick={handleModalContentContainerClick}>
          <StyledTitle>{isSuccess ? successText : text}</StyledTitle>
          {btnType === HandleBtnType.UPDATE && (
            <StyledFormContainer onSubmit={handleConfirmButtonClick}>
              <StyledInputLabel htmlFor="notice">유의 사항</StyledInputLabel>
              <StyledInput type="text" id="notice" value={notice} onChange={handleNoticeChange} />
            </StyledFormContainer>
          )}
          <StyledButtonContainer>
            <Button
              width="8rem"
              height="4rem"
              onBtnClick={isSuccess ? handleSuccessButtonClick : handleConfirmButtonClick}
              backGroundColor={theme.colors.primary}
              color="white"
              radius="10px"
            >
              확인
            </Button>
            {!isSuccess && (
              <Button
                width="8rem"
                height="4rem"
                onBtnClick={handleCancelButtonClick}
                backGroundColor={theme.colors.primary}
                color="white"
                radius="10px"
              >
                취소
              </Button>
            )}
          </StyledButtonContainer>
        </StyledContentContainer>
      </StyledContainer>
    </StyledLayout>
  );
};

export default Modal;
