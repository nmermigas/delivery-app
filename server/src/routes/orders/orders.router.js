const express = require("express");
const path = require("path");

const { httpGetAllOrders, httpSubmitNewOrder } = require("./orders.controller");

const ordersRouter = express.Router();

// ordersRouter.get("/", httpGetAllOrders);
ordersRouter.post("/", httpSubmitNewOrder);

ordersRouter.get("/", async (req, res) => {
  try {
    const orders = await httpGetAllOrders();
    // console.log(orders);
    if (orders) {
      res.status(200).render("viewOrders", { orders });
    } else {
      res.status(404).send("No orders found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = ordersRouter;
