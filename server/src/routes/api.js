const express = require("express");

const menuRouter = require("./menu/menu.router");
const ordersRouter = require("./orders/orders.router");

const api = express.Router();

api.use("/menu", menuRouter);
api.use("/orders", ordersRouter);

module.exports = api;
