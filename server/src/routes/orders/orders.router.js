const express = require("express");

const { httpGetAllOrders, httpSubmitNewOrder } = require("./orders.controller");

const ordersRouter = express.Router();

ordersRouter.get("/", httpGetAllOrders);
ordersRouter.post("/", httpSubmitNewOrder);

module.exports = ordersRouter;
