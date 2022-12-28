import { useState } from 'react';
import { useForm } from 'react-hook-form';

import DaumApi from '../../common/sections/daumApi';
import { StyledInput, StyledLabel } from '../atoms/signUpInput/styled';
import * as S from './styled';

import { Form, Flex, Container } from '@/pages/common/atoms/index';
import SignUpSpan from '@/pages/signUp/atoms/signUpSpan/signUpSpan';
import { laundryFormError } from '@/utils/laundryFormError';

const FormContainer = ({ onSubmit }) => {
  const [daumApi, setDaumApi] = useState(false);

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();

  const handleDaumApiClick = () => setDaumApi(!daumApi);

  return (
    <S.StyledContainer>
      <S.StyledTitle>세탁소 신청</S.StyledTitle>
      <Form onFormSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="name">세탁소 이름</StyledLabel>
        <StyledInput id="name" {...register('name', laundryFormError.name)} />
        <SignUpSpan text={errors.name?.message} />
        <StyledLabel htmlFor="phoneNumber">전화번호</StyledLabel>
        <StyledInput id="phoneNumber" {...register('phoneNumber', laundryFormError.onlyNumber)} />
        <SignUpSpan text={errors.phoneNumber?.message} />
        <StyledLabel htmlFor="bizNo">사업자 등록번호</StyledLabel>
        <StyledInput id="bizNo" {...register('bizNo', laundryFormError.onlyNumber)} />
        <SignUpSpan text={errors.bizNo?.message} />
        <S.StyledRelativeDiv>
          <S.StyledButton type="button" value="주소찾기" onClick={handleDaumApiClick} />
          <StyledLabel>주소</StyledLabel>
          <StyledInput readOnly {...register('roadAddr', laundryFormError.address)} />
          <SignUpSpan text={errors.roadAddr?.message} />
        </S.StyledRelativeDiv>
        <Flex>
          <Container width="80%" margin="0 10px 0 0">
            <StyledLabel>상세주소</StyledLabel>
            <StyledInput {...register('detailAddr', laundryFormError.address)} />
            <SignUpSpan text={errors.detailAddr?.message} />
          </Container>
          <Container>
            <StyledLabel>지번</StyledLabel>
            <StyledInput readOnly {...register('jibun', laundryFormError.address)} />
            <SignUpSpan text={errors.jibun?.message} />
          </Container>
        </Flex>
        <S.StyledSubmit>신청하기</S.StyledSubmit>
      </Form>
      {daumApi && (
        <div>
          <DaumApi setValue={setValue} setDaumApi={setDaumApi} />
        </div>
      )}
    </S.StyledContainer>
  );
};

export default FormContainer;
