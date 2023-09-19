const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Appetizers", "Drinks", "Main Dishes", "Desserts"],
  },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
