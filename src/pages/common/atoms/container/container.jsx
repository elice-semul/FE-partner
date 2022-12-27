import { StyledContainer } from '@/pages/common/atoms/container/style';

const Container = ({
  className,
  children,
  display,
  position,
  backGroundColor,
  width,
  height,
  alignItems,
  padding,
  margin,
  shadow,
  radius,
  ...props
}) => {
  return (
    <StyledContainer
      className={className}
      display={display}
      position={position}
      backGroundColor={backGroundColor}
      width={width}
      height={height}
      alignItems={alignItems}
      padding={padding}
      margin={margin}
      shadow={shadow}
      radius={radius}
      {...props}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
