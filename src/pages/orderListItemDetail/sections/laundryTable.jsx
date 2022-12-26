import styled from 'styled-components';

import FlexedSpan from '../atoms/flexedSpan/flexedSpan';
const mockTable = [
  {
    id: 1,
    productName: '와이셔츠, 셔츠, 교복셔츠',
    qty: 2,
    unitPrice: 1900,
    price: 3800,
  },
  {
    id: 2,
    productName: '대형커튼',
    qty: 1,
    unitPrice: 30000,
    price: 30000,
  },
  {
    id: 3,
    productName: '구두',
    qty: 1,
    unitPrice: 5000,
    price: 5000,
  },
];

const LaundryTable = ({ table }) => {
  const list = mockTable.map((value) => (
    <tr key={value.id}>
      <td>{value.productName}</td>
      <td>{value.qty}</td>
      <td>{value.unitPrice}</td>
      <td>{value.price}</td>
    </tr>
  ));
  return (
    <StyledFlexContainer>
      <StyledSpan>세탁물</StyledSpan>
      <StyledTable>
        <thead>
          <tr>
            <th>품목</th>
            <th>수량</th>
            <th>단가</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </StyledTable>
      <StyledRowFlex>
        <FlexedSpan title="총 수량" content={5} />
        <FlexedSpan title="총 금액" content="50000원" />
      </StyledRowFlex>
    </StyledFlexContainer>
  );
};
const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRowFlex = styled(StyledFlexContainer)`
  flex-direction: row;
  margin-top: 3%;
  font-weight: bold;
`;

const StyledSpan = styled.span`
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  margin-top: 5%;
`;

const StyledTable = styled.table`
  width: 100%;
  font-size: 12px;
  background-color: #dcdcdc;
  font-weight: 500;

  th {
    width: 50%;
    text-align: left;
    padding: 1.5rem 1rem;
    vertical-align: middle;
    font-weight: bold;
    border-bottom: 2px solid black;
  }

  td {
    padding: 1rem;
    vertical-align: middle;
    border-bottom: 1px solid gray;
  }

  td:first-child {
    width: 80%;
    text-align: left;
  }

  td:nth-child(2) {
    width: 1%;
    text-align: center;
  }

  td:nth-child(3) {
    width: 10%;
    text-align: right;
  }

  td:last-child {
    width: 15%;
    text-align: right;
  }
`;

export default LaundryTable;
