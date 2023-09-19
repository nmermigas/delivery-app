const orders = require("./orders.mongo");

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

module.exports = {
  getAllOrders,
};
