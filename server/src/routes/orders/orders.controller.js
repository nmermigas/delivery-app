const { getAllOrders, submitNewOrder } = require("../../models/orders.model");

async function httpGetAllOrders(req, res) {
  return res.status(200).json(await getAllOrders());
}

async function httpSubmitNewOrder(req, res) {
  const order = req.body;
  console.log(order);

  if (!order.items) {
    return res.status(400).json({
      error: "Order cannot be empty!",
    });
  }

  await submitNewOrder(order);
  return res.status(200).json(order);
}

module.exports = {
  httpGetAllOrders,
  httpSubmitNewOrder,
};
