import { useState } from 'react';

import { TitleBlock, ToggleBtnBlock, CardContainer } from './atoms';
import { OrderListWidget } from './sections';
import { StyledLaundryContainer } from './styled';

import { ORDER_STATUS } from '@/utils/orderStatus';

const tempOrderData = [
  {
    id: 'd2ebe826-4e32-41b3-8672-bc10996e4ce8',
    createdAt: '2022-12-26T00:39:43.052Z',
    updatedAt: '2022-12-27T00:33:52.000Z',
    deletedAt: null,
    status: 'CONNECT',
    pickUpMethod: '직접 수거',
    pickUpDateTime: '2022-12-23T15:00:00.000Z',
    address: {
      roadAddr: '제주특별자치도 서귀포시 검은여로 2-87',
      detailAddr: '돌담짐',
      jibun: '제주특별자치도 서귀포시 검은여로 2-87',
    },
    wishLaundryDateTime: null,
    notice: '12345',
    deniedReason: null,
    completedDateTime: null,
    cancelledDateTime: '2022-12-27T09:33:53.000Z',
    orderNum: 1,
    user: {
      id: '2a678c49-bdbb-4d25-80ce-f45cca5b2306',
      createdAt: '2022-12-25T18:15:53.955Z',
      updatedAt: '2022-12-25T18:15:53.955Z',
      deletedAt: null,
      email: 'kyb5493@gmail.com',
      password: '$2b$10$BYFeoyfvo9HXMlNSmoKUDuZIKD1SMJHcwvVR35yC5.UGzUQeBNEJW',
      name: '김영범',
      phoneNumber: '01000000000',
      bizType: 'user',
    },
    laundry: {
      id: 'd1a39388-7c04-4338-86f2-3dcb42e90f40',
      createdAt: '2022-12-26T00:34:22.726Z',
      updatedAt: '2022-12-26T00:34:22.726Z',
      deletedAt: null,
      name: '브레드 세탁소',
      bizNo: '12321312',
      phoneNumber: '010-1111-1111',
    },
    orderProducts: [
      {
        id: 'ef5af7e9-32a8-4afc-9526-0ce130429870',
        createdAt: '2022-12-26T00:39:43.063Z',
        updatedAt: '2022-12-26T00:39:43.063Z',
        deletedAt: null,
        productName: '36~40벌',
        price: 36900,
        qty: 1,
        orderId: 'd2ebe826-4e32-41b3-8672-bc10996e4ce8',
        images: ['default.jpg'],
      },
      {
        id: 'f05115cf-7060-48d1-a7dd-ec59216b9651',
        createdAt: '2022-12-26T00:39:43.073Z',
        updatedAt: '2022-12-26T00:39:43.073Z',
        deletedAt: null,
        productName: '대형러그',
        price: 30000,
        qty: 1,
        orderId: 'd2ebe826-4e32-41b3-8672-bc10996e4ce8',
        images: ['default.jpg'],
      },
    ],
  },
  {
    id: 'd2ebe826-4e32-41b3-8672-bc10996e4ce8',
    createdAt: '2022-12-26T00:39:43.052Z',
    updatedAt: '2022-12-27T00:33:52.000Z',
    deletedAt: null,
    status: 'INSPECT',
    pickUpMethod: '직접 수거',
    pickUpDateTime: '2022-12-23T15:00:00.000Z',
    address: {
      roadAddr: '제주특별자치도 서귀포시 검은여로 2-87',
      detailAddr: '돌담짐',
      jibun: '제주특별자치도 서귀포시 검은여로 2-87',
    },
    wishLaundryDateTime: null,
    notice: '12345',
    deniedReason: null,
    completedDateTime: null,
    cancelledDateTime: '2022-12-27T09:33:53.000Z',
    orderNum: 1,
    user: {
      id: '2a678c49-bdbb-4d25-80ce-f45cca5b2306',
      createdAt: '2022-12-25T18:15:53.955Z',
      updatedAt: '2022-12-25T18:15:53.955Z',
      deletedAt: null,
      email: 'kyb5493@gmail.com',
      password: '$2b$10$BYFeoyfvo9HXMlNSmoKUDuZIKD1SMJHcwvVR35yC5.UGzUQeBNEJW',
      name: '김영범',
      phoneNumber: '01000000000',
      bizType: 'user',
    },
    laundry: {
      id: 'd1a39388-7c04-4338-86f2-3dcb42e90f40',
      createdAt: '2022-12-26T00:34:22.726Z',
      updatedAt: '2022-12-26T00:34:22.726Z',
      deletedAt: null,
      name: '브레드 세탁소',
      bizNo: '12321312',
      phoneNumber: '010-1111-1111',
    },
    orderProducts: [
      {
        id: 'ef5af7e9-32a8-4afc-9526-0ce130429870',
        createdAt: '2022-12-26T00:39:43.063Z',
        updatedAt: '2022-12-26T00:39:43.063Z',
        deletedAt: null,
        productName: '36~40벌',
        price: 36900,
        qty: 1,
        orderId: 'd2ebe826-4e32-41b3-8672-bc10996e4ce8',
        images: ['default.jpg'],
      },
      {
        id: 'f05115cf-7060-48d1-a7dd-ec59216b9651',
        createdAt: '2022-12-26T00:39:43.073Z',
        updatedAt: '2022-12-26T00:39:43.073Z',
        deletedAt: null,
        productName: '대형러그',
        price: 30000,
        qty: 1,
        orderId: 'd2ebe826-4e32-41b3-8672-bc10996e4ce8',
        images: ['default.jpg'],
      },
    ],
  },
  {
    id: 'd2ebe826-4e32-41b3-8672-bc10996e4ce8',
    createdAt: '2022-12-26T00:39:43.052Z',
    updatedAt: '2022-12-27T00:33:52.000Z',
    deletedAt: null,
    status: 'LAUNDRY',
    pickUpMethod: '직접 수거',
    pickUpDateTime: '2022-12-23T15:00:00.000Z',
    address: {
      roadAddr: '제주특별자치도 서귀포시 검은여로 2-87',
      detailAddr: '돌담짐',
      jibun: '제주특별자치도 서귀포시 검은여로 2-87',
    },
    wishLaundryDateTime: null,
    notice: '12345',
    deniedReason: null,
    completedDateTime: null,
    cancelledDateTime: '2022-12-27T09:33:53.000Z',
    orderNum: 1,
    user: {
      id: '2a678c49-bdbb-4d25-80ce-f45cca5b2306',
      createdAt: '2022-12-25T18:15:53.955Z',
      updatedAt: '2022-12-25T18:15:53.955Z',
      deletedAt: null,
      email: 'kyb5493@gmail.com',
      password: '$2b$10$BYFeoyfvo9HXMlNSmoKUDuZIKD1SMJHcwvVR35yC5.UGzUQeBNEJW',
      name: '김영범',
      phoneNumber: '01000000000',
      bizType: 'user',
    },
    laundry: {
      id: 'd1a39388-7c04-4338-86f2-3dcb42e90f40',
      createdAt: '2022-12-26T00:34:22.726Z',
      updatedAt: '2022-12-26T00:34:22.726Z',
      deletedAt: null,
      name: '브레드 세탁소',
      bizNo: '12321312',
      phoneNumber: '010-1111-1111',
    },
    orderProducts: [
      {
        id: 'ef5af7e9-32a8-4afc-9526-0ce130429870',
        createdAt: '2022-12-26T00:39:43.063Z',
        updatedAt: '2022-12-26T00:39:43.063Z',
        deletedAt: null,
        productName: '36~40벌',
        price: 36900,
        qty: 1,
        orderId: 'd2ebe826-4e32-41b3-8672-bc10996e4ce8',
        images: ['default.jpg'],
      },
      {
        id: 'f05115cf-7060-48d1-a7dd-ec59216b9651',
        createdAt: '2022-12-26T00:39:43.073Z',
        updatedAt: '2022-12-26T00:39:43.073Z',
        deletedAt: null,
        productName: '대형러그',
        price: 30000,
        qty: 1,
        orderId: 'd2ebe826-4e32-41b3-8672-bc10996e4ce8',
        images: ['default.jpg'],
      },
    ],
  },
];

const Laundry = () => {
  const [renderingStatus, setRenderingStatus] = useState(ORDER_STATUS.CONNECT);
  return (
    <StyledLaundryContainer>
      <TitleBlock
        title="새물파트너님 안녕하세요."
        strongTitle="새물파트너"
        subTitle="오늘도 꼼꼼한 세탁 부탁드려요."
        strongSubTitle="꼼꼼한 세탁"
      />
      <ToggleBtnBlock {...{ renderingStatus }} {...{ setRenderingStatus }} />
      <CardContainer>
        {tempOrderData
          .filter((order) => order.status === renderingStatus)
          .map((order) => (
            <OrderListWidget key={order.id} order={order} {...{ renderingStatus }} />
          ))}
      </CardContainer>
    </StyledLaundryContainer>
  );
};

export default Laundry;
