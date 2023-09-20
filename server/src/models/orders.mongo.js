const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const orderSchema = new mongoose.Schema({
  items: [menuItemSchema],
  totalCost: {
    type: Number,
    required: true,
  },
  orderTime: {
    type: Date,
    default: Date.now,
  },
  orderId: {
    type: Number,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
