const orders = require("./orders.mongo");
const { getMenuItemByName } = require("./menu.model");

const DEFAULT_ORDER_ID = 0;

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

  return totalCost.toFixed(2);
}

async function getLatestOrderId() {
  const latestOrder = await orders.findOne().sort("-orderId");
  if (!latestOrder) {
    return DEFAULT_ORDER_ID;
  }
  return latestOrder.orderId;
}

async function saveOrder(order) {
  console.log(`At saveOrder ${order}`);
  console.log(`NEW ORDER ${JSON.stringify(order)}`);

  await orders.findOneAndUpdate(
    {
      orderId: order.orderId,
    },
    order,
    {
      upsert: true,
    }
  );
}

async function submitNewOrder(order) {
  console.log(`At submitNewOrder ${order} `);
  console.log(`NEW ORDER ${JSON.stringify(order)}`);

  const newOrderId = (await getLatestOrderId()) + 1;
  const totalCost = await calculateTotalCost(order);
  console.log(`NEW ORDER ${JSON.stringify(order)}`);
  const newOrder = {
    ...order,
    orderId: newOrderId,
    totalCost,
  };

  console.log(`NEW ORDER ${JSON.stringify(newOrder)}`);

  await saveOrder(newOrder);
}

module.exports = {
  getAllOrders,
  submitNewOrder,
};
