const orders = require("./orders.mongo");
const { getMenuItemByName } = require("./menu.model");

async function getAllOrders() {
  return await orders.find(
    {},
    {
      // to exclude the following fields from the response, something like a filter.
      _id: 0,
      __v: 0,
    }
  );
}

async function calculateTotalCost(order) {
  let totalCost = 0;

  for (const item of order.items) {
    const menuItem = await getMenuItemByName(item.itemName);

    if (menuItem) {
      const costOfItem = menuItem.price;
      totalCost += costOfItem * item.quantity;
    }
  }

  return totalCost;
}

async function submitNewOrder(order) {
  order["totalCost"] = await calculateTotalCost(order);
  await orders.findOneAndUpdate({ _id: order._id }, order, {
    upsert: true,
  });
}

module.exports = {
  getAllOrders,
  submitNewOrder,
};
