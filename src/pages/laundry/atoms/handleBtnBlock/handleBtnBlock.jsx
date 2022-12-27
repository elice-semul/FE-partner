import { StyledHandleBtnContainer, HandleBtnType, StyledHandleBtn } from './styled';

const HandleBtnBlock = ({ update, cancel, confirm }) => {
  const handleUpdateBtnClick = () => {};
  const handleCancelBtnClick = () => {};
  const handleConfirmBtnClick = () => {};
  return (
    <StyledHandleBtnContainer>
      {update && <StyledHandleBtn btnType={HandleBtnType.UPDATE}>수정</StyledHandleBtn>}
      {cancel && <StyledHandleBtn btnType={HandleBtnType.CANCEL}>거부</StyledHandleBtn>}
      {confirm && <StyledHandleBtn btnType={HandleBtnType.CONFIRM}>승인</StyledHandleBtn>}
    </StyledHandleBtnContainer>
  );
};

export default HandleBtnBlock;
