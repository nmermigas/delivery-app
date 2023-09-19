const express = require("express");

const { httpGetAllOrders, httpAddNewOrder } = require("./orders.controller");

const ordersRouter = express.Router();

ordersRouter.get("/", httpGetAllOrders);

module.exports = ordersRouter;
