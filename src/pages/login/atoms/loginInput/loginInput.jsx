import { StyledLoginInput } from './styled';

const LoginInput = ({ onInputChange: handleInputChange, ...props }) => {
  return <StyledLoginInput onChange={handleInputChange} {...props} />;
};

export default LoginInput;
