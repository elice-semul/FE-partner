import { StyledTitleBlockContainer, StyledTitleText, StyledSubTitleText } from 'styled-components';

const TitleBlock = ({ title, subTitle }) => {
  return (
    <StyledTitleBlockContainer>
      <StyledTitleText>{title}</StyledTitleText>
      <StyledSubTitleText>{subTitle}</StyledSubTitleText>
    </StyledTitleBlockContainer>
  );
};

export default TitleBlock;
