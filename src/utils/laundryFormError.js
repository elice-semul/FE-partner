export const laundryFormError = {
  name: {
    required: '필수 정보입니다',
  },
  onlyNumber: {
    required: '필수 정보입니다',
    pattern: {
      value: /^[0-9]+$/,
      message: '숫자만 입력 가능합니다.',
    },
  },
  address: {
    required: '필수 정보입니다',
  },
};
