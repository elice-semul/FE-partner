import FlexedSpan from '../atoms/flexedSpan/flexedSpan';

const UserRequest = ({ requestObj }) => {
  return (
    <div>
      <FlexedSpan title="이름" content="홍길동" />
      <FlexedSpan title="전화번호" content="010-1111-2222" />
      <FlexedSpan title="신청날짜" content="2022-12-12" />
      <FlexedSpan title="픽업날짜" content="2022-12-12" />
      <FlexedSpan title="희망완료" content="2022-12-12" />
      <FlexedSpan title="실제완료" content="2022-12-12" />
      <FlexedSpan
        flexDirection="column"
        margin="0.5rem 0"
        title="주소"
        content="동해물과 백두산이"
      />
    </div>
  );
};

export default UserRequest;
