import {
  StyledTitleBlockContainer,
  StyledTitleText,
  StyledSubTitleText,
  StyledTitleStrongText,
} from './styled';

const TitleBlock = ({ title, strongTitle, subTitle, strongSubTitle }) => {
  const [titleLeftText, titleRightText] = title.split(strongTitle);
  const [subTitleLeftText, subTitleRightText] = subTitle.split(strongSubTitle);
  return (
    <StyledTitleBlockContainer>
      <StyledTitleText>
        {titleLeftText}
        <StyledTitleStrongText>{strongTitle}</StyledTitleStrongText>
        {titleRightText}
      </StyledTitleText>
      <StyledSubTitleText>
        {subTitleLeftText}
        <StyledTitleStrongText>{strongSubTitle}</StyledTitleStrongText>
        {subTitleRightText}
      </StyledSubTitleText>
    </StyledTitleBlockContainer>
  );
};

export default TitleBlock;
