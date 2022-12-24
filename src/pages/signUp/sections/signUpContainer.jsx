/* eslint-disable */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SignUpInput from '../atoms/SignUpInput/signUpInput';
import DaumApi from '../page/daumApi';
import {
  StyledSignUpButton,
  StyledSignUpDiv,
  StyledSignUpContainer,
  StyledSignUpTitle,
  StyledSignUpSubmit,
} from './styled';

import { Form } from '@/pages/common/atoms';
import axios from 'axios';

const SignUpContainer = () => {
  const [values, setValues] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    detailAddress: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const navigate = useNavigate();

  const [address, setAddress] = useState('');
  const [daumApi, setDaumApi] = useState(false);

  useEffect(() => {
    setValues({
      ...values,
      address,
    });
  }, [address]);

  const signUpSubmit = (e) => {
    e.preventDefault();
    let check = false;
    // eslint-disable-next-line no-restricted-syntax
    for (const i in Object.values(values)) {
      if (Object.values(values)[i]) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    if (check) {
      const body = {
        name: values.name,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        bizType: 'user',
        address: {
          roadAddr: address,
          detailAddr: values.detailAddress,
          jibun: address,
        },
      };
      axios.post('http://34.64.61.59:3000/users/signup', body).then((data) => {
        if (data.status === 201) {
          alert('회원가입이 완료되었습니다.');
          navigate('/');
        } else {
          alert('회원가입 실패');
        }
      });
    } else {
      alert('모든 정보를 입력해 주세요');
    }
  };

  return (
    <StyledSignUpContainer>
      <StyledSignUpTitle>회원가입</StyledSignUpTitle>
      <Form onSubmit={signUpSubmit}>
        <SignUpInput
          labelText="이름"
          htmlFor="name"
          id="name"
          values={values}
          value={values.name}
          setValues={setValues}
          type="text"
        />
        <SignUpInput
          labelText="전화번호"
          htmlFor="phoneNumber"
          id="phoneNumber"
          values={values}
          value={values.phoneNumber}
          setValues={setValues}
          type="number"
        />
        <StyledSignUpDiv>
          <StyledSignUpButton type="button" value="주소찾기" onClick={() => setDaumApi(!daumApi)} />
          <SignUpInput
            labelText="주소"
            readonly="readonly"
            htmlFor="address"
            id="address"
            values={values}
            value={address}
            setValues={setValues}
            type="text"
          />
        </StyledSignUpDiv>
        <SignUpInput
          labelText="상세주소"
          htmlFor="detailAddress"
          values={values}
          value={values.detailAddress}
          id="detailAddress"
          setValues={setValues}
          className="detailAddress"
          type="text"
        />
        <SignUpInput
          labelText="이메일"
          htmlFor="email"
          id="email"
          values={values}
          value={values.email}
          type="text"
          setValues={setValues}
        />
        <SignUpInput
          labelText="비밀번호"
          htmlFor="password"
          id="password"
          values={values}
          value={values.password}
          type="password"
          setValues={setValues}
        />
        <SignUpInput
          labelText="비밀번호 확인"
          htmlFor="passwordCheck"
          id="passwordCheck"
          values={values}
          value={values.passwordCheck}
          type="password"
          setValues={setValues}
        />
        <StyledSignUpSubmit>가입하기</StyledSignUpSubmit>
      </Form>
      {daumApi && (
        <div>
          <DaumApi setAddress={setAddress} setDaumApi={setDaumApi} />
        </div>
      )}
    </StyledSignUpContainer>
  );
};

export default SignUpContainer;
