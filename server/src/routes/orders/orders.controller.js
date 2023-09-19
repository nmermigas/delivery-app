const { getAllOrders, submitNewOrder } = require("../../models/orders.model");

async function httpGetAllOrders(req, res) {
  return res.status(200).json(await getAllOrders());
}

module.exports = {
  httpGetAllOrders,
};
