export const signError = {
  name: {
    required: '필수 정보입니다',
    pattern: {
      value: /^[ㄱ-ㅎ|가-힣]+$/,
      message: '한글만 입력 가능합니다.',
    },
  },
  phoneNumber: {
    required: '필수 정보입니다',
    pattern: {
      value: /^[0-9]+$/,
      message: '숫자만 입력 가능합니다.',
    },
  },
  address: {
    required: '필수 정보입니다',
  },
  email: {
    required: '필수 정보입니다',
    pattern: {
      value:
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      message: '이메일 형식이 다릅니다.',
    },
  },
  password: {
    required: '필수 정보입니다',
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
      message: '숫자+영문자+특수문자 조합으로 8자리 이상 입력가능합니다.',
    },
  },
};
