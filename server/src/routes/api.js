const express = require("express");

const menuRouter = require("./menu/menu.router");
// const orderRouter = require("./orders/order.router");

const api = express.Router();

api.use("/menu", menuRouter);
// api.use("v1/order", orderRouter);

module.exports = api;
