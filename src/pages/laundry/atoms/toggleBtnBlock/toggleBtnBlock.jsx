import { StyledToggleBtnContainer, StyledToggleBtn, StyledActiveToggleBtn } from './styled';

import { ORDER_STATUS } from '@/utils/orderStatus';

const btnContent = [
  {
    id: 1,
    status: ORDER_STATUS.CONNECT,
    text: '승인',
    quantity: 0,
  },
  {
    id: 2,
    status: ORDER_STATUS.INSPECT,
    text: '검수',
    quantity: 0,
  },
  {
    id: 3,
    status: ORDER_STATUS.LAUNDRY,
    text: '세탁',
    quantity: 0,
  },
  {
    id: 4,
    status: ORDER_STATUS.COMPLETE,
    text: '완료',
    quantity: 0,
  },
];

const ToggleBtnBlock = ({ renderingStatus, setRenderingStatus }) => {
  const handleBtnClick = (status) => {
    setRenderingStatus(status);
  };
  return (
    <StyledToggleBtnContainer>
      {btnContent.map((btn) =>
        btn.status === renderingStatus ? (
          <StyledActiveToggleBtn key={btn.id}>
            {btn.text}({btn.quantity})
          </StyledActiveToggleBtn>
        ) : (
          <StyledToggleBtn
            key={btn.id}
            onClick={() => {
              handleBtnClick(btn.status);
            }}
          >
            {btn.text}({btn.quantity})
          </StyledToggleBtn>
        )
      )}
    </StyledToggleBtnContainer>
  );
};

export default ToggleBtnBlock;
