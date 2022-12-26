import { TitleBlock, ToggleBtnBlock, CardContainer, OrderListItem, HandleBtnBlock } from './atoms';

const Laundry = () => {
  return (
    <div>
      <TitleBlock
        title="새물파트너님 안녕하세요."
        strongTitle="새물파트너"
        subTitle="오늘도 꼼꼼한 세탁 부탁드려요."
        strongSubTitle="꼼꼼한 세탁"
      />
      <ToggleBtnBlock />
      <CardContainer>
        <OrderListItem name="엘리스" date="2022-12-26" price="10,000" />
        <HandleBtnBlock confirm cancel update />
      </CardContainer>
    </div>
  );
};

export default Laundry;
