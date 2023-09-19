const express = require("express");

const { httpGetMenu, httpAddNewMenuItem } = require("./menu.controller");

const menuRouter = express.Router();

menuRouter.get("/", httpGetMenu);
menuRouter.post("/", httpAddNewMenuItem);

module.exports = menuRouter;
