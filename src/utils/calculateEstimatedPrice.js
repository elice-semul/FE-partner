export const calculateEstimatedPrice = (products) => {
  const totalPrice = products.reduce((sum, { price, qty }) => {
    return sum + price * qty;
  }, 0);
  return totalPrice.toLocaleString('ko-KR');
};

export const sumTotalQuantity = (products) => {
  const totalQuantity = products.reduce((sum, { qty }) => {
    return sum + qty;
  }, 0);
  return totalQuantity.toLocaleString('ko-KR');
};
