/* eslint-disable */
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledLogo, StyledLoginContainer, StyledLoginSpan } from './styled';

import { Form } from '@/pages/common/atoms';
import { LoginInput, LoginButton } from '@/pages/login/atoms';

const LoginContainer = () => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const [loginAlert, setLoginAlert] = useState(['', '']);

  const loginCheck = async () => {
    const newLoginAlert = [...loginAlert];
    if (!account.email) {
      newLoginAlert[0] = '이메일을 입력해주세요';
    }
    if (!account.password) {
      newLoginAlert[1] = '비밀번호를 입력해주세요';
    }
    setLoginAlert(newLoginAlert);
    if (account.password && account.email) {
      await axios
        .post('http://34.64.61.59:3000/users/login', {
          email: account.email,
          password: account.password,
        })
        .then((response) => {
          if (response.data.access_token && response.data.user.bizType === 'partner') {
            sessionStorage.setItem('Authorization', response.data.access_token);
            navigate('/');
          } else if (response.data.user.bizType !== 'partner') {
            alert('파트너 승인을 위해 관리자에게 문의해주세요.');
          } else {
            alert('아이디 혹은 비밀번호를 확인해 주세요');
          }
        })
        .catch((error) => {
          alert('아이디 혹은 비밀번호를 확인해 주세요');
        });
    }
  };

  const handleLoginContainerChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSignUpBtnClick = () => {
    navigate('/signup');
  };

  return (
    <StyledLoginContainer>
      <StyledLogo>
        새물
        <br />
        파트너
        <br />
        서비스
      </StyledLogo>
      <Form onFormSubmit={loginCheck}>
        <LoginInput
          name="email"
          type="email"
          onInputChange={handleLoginContainerChange}
          placeholder="이메일"
        />
        <StyledLoginSpan>{account.email === '' && loginAlert[0]}</StyledLoginSpan>
        <LoginInput
          name="password"
          type="password"
          onInputChange={handleLoginContainerChange}
          placeholder="비밀번호"
        />
        <StyledLoginSpan>{account.password === '' && loginAlert[1]}</StyledLoginSpan>
        <LoginButton>로그인</LoginButton>
      </Form>
      <LoginButton onBtnClick={handleSignUpBtnClick}>회원가입</LoginButton>
    </StyledLoginContainer>
  );
};

export default LoginContainer;
