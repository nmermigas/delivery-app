const express = require("express");

const { httpGetMenu } = require("./menu.controller");

const menuRouter = express.Router();

menuRouter.get("/", httpGetMenu);

module.exports = menuRouter;
