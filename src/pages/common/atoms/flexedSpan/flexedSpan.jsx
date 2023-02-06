import * as S from './style';

const FlexedSpan = ({ flexDirection, title, content, ...props }) => {
  return (
    <S.StyledFlexContainer flexDirection={flexDirection}>
      <S.StyledSpan width="30%" {...props}>
        {title}
      </S.StyledSpan>
      <S.StyledSpan width="70%" {...props}>
        {content}
      </S.StyledSpan>
    </S.StyledFlexContainer>
  );
};

export default FlexedSpan;
