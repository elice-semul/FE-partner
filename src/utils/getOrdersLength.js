export const getOrdersLength = (orders, status) => {
  return orders.filter((order) => order.status === status).length;
};
