import { StyledButton } from '@/pages/common/atoms/button/style';

const Button = ({
  children,
  onBtnClick: handleBtnClick,
  type,
  backGroundColor,
  color,
  padding,
  margin,
  height,
  width,
  fontSize,
  fontWeight,
  shadow,
  radius,
}) => {
  return (
    <StyledButton
      onClick={handleBtnClick}
      backGroundColor={backGroundColor}
      type={type}
      color={color}
      height={height}
      width={width}
      padding={padding}
      margin={margin}
      fontSize={fontSize}
      fontWeight={fontWeight}
      shadow={shadow}
      radius={radius}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
