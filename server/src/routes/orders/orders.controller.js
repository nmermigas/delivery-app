const { getAllOrders, submitNewOrder } = require("../../models/orders.model");

async function httpGetAllOrders(req, res) {
  // return res.status(200).json(await getAllOrders());
  return await getAllOrders();
}

function isQuantityValid(order) {
  return order.items.every((item) => item.quantity >= 1);
}

async function httpSubmitNewOrder(req, res) {
  const order = req.body;
  console.log(order);

  if (!order.items || !isQuantityValid(order)) {
    return res.status(400).json({
      error: "Please place a valid order!",
    });
  }

  await submitNewOrder(order);
  return res.status(200).json(order);
}

module.exports = {
  httpGetAllOrders,
  httpSubmitNewOrder,
};
