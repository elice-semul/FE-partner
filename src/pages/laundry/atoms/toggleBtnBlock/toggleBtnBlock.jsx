import { StyledToggleBtnContainer, StyledToggleBtn, StyledActiveToggleBtn } from './styled';

const btnContent = [
  {
    id: 1,
    text: '승인',
    quantity: 0,
    isActive: false,
  },
  {
    id: 2,
    text: '검수',
    quantity: 0,
    isActive: false,
  },
  {
    id: 3,
    text: '세탁',
    quantity: 0,
    isActive: false,
  },
  {
    id: 4,
    text: '완료',
    quantity: 0,
    isActive: false,
  },
];

const ToggleBtnBlock = () => {
  return (
    <StyledToggleBtnContainer>
      {btnContent.map((btn) =>
        btn.isActive ? (
          <StyledActiveToggleBtn key={btn.id}>
            {btn.text}({btn.quantity})
          </StyledActiveToggleBtn>
        ) : (
          <StyledToggleBtn key={btn.id}>
            {btn.text}({btn.quantity})
          </StyledToggleBtn>
        )
      )}
    </StyledToggleBtnContainer>
  );
};

export default ToggleBtnBlock;
