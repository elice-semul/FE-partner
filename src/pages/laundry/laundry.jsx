import { TitleBlock, ToggleBtnBlock, CardContainer, OrderListItem } from './atoms';
import { OrderListWidget } from './sections';
import { StyledLaundryContainer } from './styled';

const Laundry = () => {
  return (
    <StyledLaundryContainer>
      <TitleBlock
        title="새물파트너님 안녕하세요."
        strongTitle="새물파트너"
        subTitle="오늘도 꼼꼼한 세탁 부탁드려요."
        strongSubTitle="꼼꼼한 세탁"
      />
      <ToggleBtnBlock />
      <CardContainer>
        <OrderListWidget />
        <OrderListWidget />
      </CardContainer>
    </StyledLaundryContainer>
  );
};

export default Laundry;
