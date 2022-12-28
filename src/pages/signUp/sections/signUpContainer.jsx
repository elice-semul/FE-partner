import { useState } from 'react';
import { useForm } from 'react-hook-form';

import DaumApi from '../../common/sections/daumApi';
import { StyledSignUpInput, StyledSignUpLabel } from '../atoms/signUpInput/styled';
import SignUpSpan from '../atoms/signUpSpan/signUpSpan';
import * as S from './styled';

import { Flex, Container, Form } from '@/pages/common/atoms/index';
import { signError } from '@/utils/signupError';
const SignUpContainer = ({ onSubmit }) => {
  const [daumApi, setDaumApi] = useState(false);

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    getValues,
  } = useForm();

  const handleDaumApiClick = () => {
    setDaumApi(!daumApi);
  };

  return (
    <S.StyledSignUpContainer>
      <S.StyledSignUpTitle>회원가입</S.StyledSignUpTitle>
      <Form onFormSubmit={handleSubmit(onSubmit)}>
        <StyledSignUpLabel htmlFor="name">이름</StyledSignUpLabel>
        <StyledSignUpInput id="name" {...register('name', signError.name)} />
        <SignUpSpan text={errors.name?.message} />
        <StyledSignUpLabel>전화번호</StyledSignUpLabel>
        <StyledSignUpInput {...register('phoneNumber', signError.phoneNumber)} />
        <SignUpSpan text={errors.phoneNumber?.message} />
        <S.StyledSignUpDiv>
          <S.StyledSignUpButton type="button" value="주소찾기" onClick={handleDaumApiClick} />
          <StyledSignUpLabel>주소</StyledSignUpLabel>
          <StyledSignUpInput readOnly {...register('roadAddr', signError.address)} />
          <SignUpSpan text={errors.roadAddr?.message} />
        </S.StyledSignUpDiv>
        <Flex>
          <Container width="80%" margin="0 10px 0 0">
            <StyledSignUpLabel>상세주소</StyledSignUpLabel>
            <StyledSignUpInput {...register('detailAddr', signError.address)} />
            <SignUpSpan text={errors.detailAddr?.message} />
          </Container>
          <Container>
            <StyledSignUpLabel>지번</StyledSignUpLabel>
            <StyledSignUpInput readOnly {...register('jibun', signError.address)} />
            <SignUpSpan text={errors.jibun?.message} />
          </Container>
        </Flex>
        <StyledSignUpLabel>이메일</StyledSignUpLabel>
        <StyledSignUpInput {...register('email', signError.email)} />
        <SignUpSpan text={errors.email?.message} />
        <StyledSignUpLabel>비밀번호</StyledSignUpLabel>
        <StyledSignUpInput type="password" {...register('password', signError.password)} />
        <SignUpSpan text={errors.password?.message} />
        <StyledSignUpLabel>비밀번호 확인</StyledSignUpLabel>
        <StyledSignUpInput
          type="password"
          {...register('passwordCofirm', {
            required: '필수 정보입니다.',
            validate: (value) => {
              const checkPassword = getValues('password');
              return checkPassword === value || '비밀번호가 일치하지 않습니다.';
            },
          })}
        />
        <SignUpSpan text={errors.passwordCofirm?.message} />
        <S.StyledSignUpSubmit>가입하기</S.StyledSignUpSubmit>
      </Form>
      {daumApi && (
        <div>
          <DaumApi setValue={setValue} setDaumApi={setDaumApi} />
        </div>
      )}
    </S.StyledSignUpContainer>
  );
};

export default SignUpContainer;
