import { StyledCardContainer, StyledListHeaderContainer, StyledListHeaderText } from './styled';

const headerContent = [
  {
    id: 1,
    text: '이름',
  },
  {
    id: 2,
    text: '주문일',
  },
  {
    id: 3,
    text: '금액',
  },
];

const CardContainer = ({ children }) => {
  return (
    <StyledCardContainer>
      <StyledListHeaderContainer>
        {headerContent.map(({ id, text }) => (
          <StyledListHeaderText key={id}>{text}</StyledListHeaderText>
        ))}
      </StyledListHeaderContainer>
      {children}
    </StyledCardContainer>
  );
};

export default CardContainer;
