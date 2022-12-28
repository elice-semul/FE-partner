import { FlexedSpan } from '@/pages/common/atoms';
import { dateFormatCommon } from '@/utils/dateFormating';
const UserRequest = ({ order }) => {
  return (
    <div>
      <FlexedSpan title="이름" content={order.user.name} />
      <FlexedSpan title="전화번호" content={order.user.phoneNumber} />
      <FlexedSpan title="신청날짜" content={dateFormatCommon(order.createdAt)} />
      {order.pickUpDateTime && (
        <FlexedSpan title="픽업날짜" content={dateFormatCommon(order.pickUpDateTime)} />
      )}
      {order.wishLaundryDateTime && (
        <FlexedSpan title="희망완료" content={dateFormatCommon(order.wishLaundryDateTime)} />
      )}
      {order.completedDateTime && (
        <FlexedSpan title="실제완료" content={dateFormatCommon(order.completedDateTime)} />
      )}
      <FlexedSpan
        flexDirection="column"
        margin="0.5rem 0"
        title="주소"
        content={`${order.address.roadAddr} ${order.address.detailAddr}`}
      />
    </div>
  );
};

export default UserRequest;
