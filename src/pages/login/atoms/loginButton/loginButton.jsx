import { StyleLoginButton } from './styled';

const LoginButton = ({ onBtnClick: handleBtnClick, ...props }) => {
  return (
    <StyleLoginButton
      onClick={handleBtnClick}
      {...props}
    />
  );
};

export default LoginButton;
