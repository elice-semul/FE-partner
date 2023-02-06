import styled from 'styled-components';

import { FlexedSpan } from '@/pages/common/atoms';
import { calculateEstimatedPrice, sumTotalQuantity } from '@/utils/calculateEstimatedPrice';

const LaundryTable = ({ order }) => {
  const list = order.orderProducts.map((product) => (
    <tr key={product.id}>
      <td>{product.productName}</td>
      <td>{product.qty}</td>
      <td>{product.price}</td>
      <td>{product.price * product.qty}</td>
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
        <FlexedSpan title="총 수량" content={sumTotalQuantity(order.orderProducts)} />
        <FlexedSpan title="총 금액" content={calculateEstimatedPrice(order.orderProducts)} />
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
