const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  menuItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuItem",
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
